import type { Five, EventCallback } from '@realsee/five'
import type { FloorplanServerData } from '../typings/floorplanServerData'
import type { FloorplanData, FloorplanRoomItem } from '../typings/floorplanData'

import { pluginStyle } from './style'
import formatData from '../utils/formatData'
import { omit } from '../../../shared-utils/filter'
import getPxmm from '../../../shared-utils/getPxmm'
import Main from '../ModelFloorplanPlugin/Components/Main.svelte'
import changeModelCanvasOpacity from '../../../shared-utils/changeModelCanvasOpacity'

export interface TopviewFloorplanPluginParameterType {
  selector?: string | Element
  scale?: number
  cameraImageUrl?: string
  hoverEnable?: boolean
  compassEnable?: boolean
  autoShowEnable?: boolean
  ruleLabelsEnable?: boolean
  roomLabelsEnable?: boolean
  preventRoomClick?: boolean
  getLabelElement?: (room: FloorplanRoomItem) => Element | null
}
type Configs = Omit<TopviewFloorplanPluginParameterType, 'selector' | 'scale'>
export type TopviewFloorplanPluginReturnType = TopviewFloorplanPluginController

export class TopviewFloorplanPluginController {
  public size = { width: 0, height: 0 }
  public visible = false

  private pxmm = 0
  private app?: Main
  private five: Five
  private panoIndex = 0
  private floorIndex = 0
  private configs: Configs = {}
  private lastPanoramaLongitude = 0
  private selector?: string | Element
  private floorplanData?: FloorplanData
  private wrapper?: Element
  private container = document.createElement('div')

  public constructor(five: Five, params: TopviewFloorplanPluginParameterType) {
    this.five = five
    this.selector = params.selector
    this.configs = omit(params, ['selector'])

    // 设置 container 样式
    this.container.classList.add('floorplan-plugin')
    Object.assign(this.container.style, pluginStyle)

    // 如果初始化的时候模型已经加载完毕了，就不用再等 modelLoaded
    this.five.model.loaded ? this.handleModelLoaded() : five.once('modelLoaded', this.handleModelLoaded)

    this.five.once('dispose', this.dispose)
    this.five.on('modeChange', this.handleModeChange)
    this.five.on('panoArrived', this.handlePanoArrived)
    this.five.on('initAnimationEnded', this.handleInitAnimationEnded)
    this.five.on('modelShownFloorChange', this.onModelShownFloorChange)
  }

  /** 加载户型图数据 */
  public async load(data: FloorplanServerData) {
    const copyData: FloorplanServerData = JSON.parse(JSON.stringify(data))
    this.floorplanData = await formatData(copyData)
    this.render()
  }

  /** 把插件的渲染DOM插入到对应的容器中去 */
  public appendTo(wrapper: Element) {
    this.wrapper = wrapper
    wrapper.appendChild(this.container)
    return this
  }

  public dispose = () => {
    this.hide()
    this.container?.remove()
    this.app?.$destroy()
    this.five.off('modeChange', this.handleModeChange)
    this.five.off('panoArrived', this.handlePanoArrived)
    this.five.off('modelLoaded', this.handleModelLoaded)
    this.five.off('wantsMoveToPano', this.handleWantsMoveToPano)
    this.five.off('wantsPanGesture', this.handleWantsPanGesture)
    this.five.off('initAnimationEnded', this.handleInitAnimationEnded)
    this.five.off('modelShownFloorChange', this.onModelShownFloorChange)
  }

  /** 模型楼层高亮改变时，自动进行楼层切换 */
  private onModelShownFloorChange = (shownFloor: number | null) => {
    if (shownFloor === null) return
    this.floorIndex = shownFloor
    this.render()
  }

  /** panoIndex 改变时，更新 floorIndex */
  private handlePanoArrived: EventCallback['panoArrived'] = (index) => {
    if (!this.five?.work) return
    this.panoIndex = index
    this.floorIndex = this.five.work.observers[index].floorIndex
  }

  /** 配置了 preventRoomClick 后，在户型图展示时阻止 Five 走点 */
  private handleWantsMoveToPano: EventCallback['wantsMoveToPano'] = () => {
    if (!this.visible) return
    if (this.configs.preventRoomClick) return false
    return
  }

  /** 在户型图展示时阻止 Five 滑动行为 */
  private handleWantsPanGesture: EventCallback['wantsPanGesture'] = () => {
    if (!this.visible) return
    return false
  }

  private handleModelLoaded = () => {
    if (this.wrapper) return
    if (!this.selector) return
    const wrapper = this.selector instanceof Element ? this.selector : document.querySelector(this.selector)
    if (!wrapper) throw new Error('不正确的父容器选择器')

    this.wrapper = wrapper
    wrapper.append(this.container)
  }

  /** 非 Topview 态隐藏户型图 */
  private handleModeChange: EventCallback['modeChange'] = (mode) => {
    if (mode !== 'Topview') return this.hide()
  }

  /** 动画结束后是 Topview 态就展示户型图 */
  private handleInitAnimationEnded: EventCallback['initAnimationEnded'] = () => {
    const { mode } = this.five.getCurrentState()
    if (mode === 'Topview') this.show()
  }

  private show() {
    this.visible = true
    this.updateSize()
    this.five.model.show(this.floorIndex)

    const modelOpacity = 0.01
    const renderDuration = 500
    changeModelCanvasOpacity(this.five, modelOpacity, renderDuration)

    this.render(renderDuration)

    this.five.on('wantsMoveToPano', this.handleWantsMoveToPano)
    this.five.on('wantsPanGesture', this.handleWantsPanGesture)
  }

  private hide() {
    const modelOpacity = 1
    const renderDuration = 0
    this.visible = false
    changeModelCanvasOpacity(this.five, modelOpacity, renderDuration)
    this.render()

    this.five.on('wantsMoveToPano', this.handleWantsMoveToPano)
    this.five.on('wantsPanGesture', this.handleWantsPanGesture)
  }

  /** 更新户型图大小 */
  private updateSize = () => {
    if (!this.floorplanData) return
    if (!this.container || !this.wrapper) return
    if (this.five.getCurrentState().mode !== 'Topview') return
    // 计算户型图展示大小
    const { min, max } = this.floorplanData.bounding
    const width = max.x - min.x
    const height = max.y - min.y
    // 每毫米对应的 px 值
    const pxmm = getPxmm(this.five, this.wrapper)
    const _width = Math.ceil(width * pxmm)
    const _height = Math.ceil(height * pxmm)
    this.pxmm = pxmm
    this.size = { width: _width, height: _height }
    this.container.style.width = _width + 'px'
    this.container.style.height = _height + 'px'
  }

  private render(duration?: number) {
    if (!this.container || !this.floorplanData) return
    if (this.size.width === 0) return
    const {
      getLabelElement,
      cameraImageUrl,
      preventRoomClick,
      hoverEnable,
      compassEnable,
      roomLabelsEnable,
      ruleLabelsEnable,
    } = this.configs
    const handleClick = preventRoomClick ? () => false : undefined
    console.log('🚀 ~ TopviewFloorplanPluginController ~ handleClick', handleClick)
    const props = {
      five: this.five,
      pxmm: this.pxmm,
      cameraImageUrl,
      visible: this.visible,
      duration: duration ?? 0,
      panoIndex: this.panoIndex,
      floorIndex: this.floorIndex,
      floorplanData: this.floorplanData,
      hoverEnable: hoverEnable ?? false,
      compassEnable: compassEnable ?? true,
      ruleLabelsEnable: ruleLabelsEnable ?? true,
      roomLabelsEnable: roomLabelsEnable ?? true,
      lastPanoramaLongitude: this.lastPanoramaLongitude,
      getLabelElement,
      onRoomHeightClick: handleClick,
    }
    if (!this.app) {
      this.app = new Main({
        target: this.container,
        intro: true,
        props,
      })
    } else {
      this.app.$set(props)
    }
  }
}

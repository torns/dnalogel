import * as THREE from 'three'
import { Five, FivePlugin, Mode, WorkImage } from '@realsee/five'

import { createBox } from './createBox'
import { createTextures } from './createTextures'
import { compare } from './compare'

export interface PanoMaskObject {
  /* 物体色值 */
  color: { r: number; g: number; b: number }
  /* 物体名称 */
  name?: string
  /* 色值对应的映射 ID */
  id: string
}

export interface PanoMaskSelectorPluginData {
  /* 全景贴图 */
  panoramaImgs: Omit<WorkImage, 'depth' | 'tiles'>[]
  /* 色值 与 物品 映射字典 */
  colorMaps: PanoMaskObject[]

  config?: {
    // 选中物体 Mask 框颜色
    maskColor?: THREE.Color
    // 框的粗细
    thickness?: number
  }
}

export interface PanoMaskSelectorPluginParameterType {
  data?: PanoMaskSelectorPluginData
}

export interface PanoMaskSelectorPluginReturnType {
  /**
   * 加载数据
   */
  load: (data: PanoMaskSelectorPluginData) => Promise<boolean>
  /**
   * @returns 返回值为 选中的 物体信息；如果选中失败 则 返回 false。
   */
  select: (x: number, y: number) => Promise<false | PanoMaskObject>
  /**
   * 擦除选中物体的 Mask（不可还原）。
   */
  erase: () => void
  /**
   * 隐藏 选中物体的 Mask。
   */
  hide: () => void
  /**
   * 展示 选中物体的 Mask。
   */
  show: () => void
  /**
   * 销毁函数。
   */
  dispose: () => void
}

interface PanoMaskSelectorPluginState {
  data?: PanoMaskSelectorPluginData
  textures?: THREE.Texture[]
  box?: THREE.Mesh<THREE.BoxBufferGeometry, THREE.ShaderMaterial[]>
  currentLoadedIndex?: number
}

export const PanoMaskSelectorPlugin: FivePlugin<PanoMaskSelectorPluginParameterType, PanoMaskSelectorPluginReturnType> =
  (five, parameters = {}) => {
    const state: PanoMaskSelectorPluginState = {
      data: parameters.data,
    }

    const dispose = () => {
      if (state.box) {
        five.scene.remove(state.box)
      }

      five.off('panoArrived', wrapper)
      five.off('modeChange', modeChangeListener)
    }

    const wrapper = () => {
      if (five.panoIndex === undefined) {
        return
      }

      if (five.panoIndex === state.currentLoadedIndex) {
        return
      }

      if (!state.data) {
        return
      }

      if (state.box) {
        five.scene.remove(state.box)
        state.box = undefined
      }

      const panoramaImgs = state.data.panoramaImgs[five.panoIndex]

      state.currentLoadedIndex = five.panoIndex

      if (!panoramaImgs) {
        state.textures = undefined
        return false
      }

      state.textures = createTextures(panoramaImgs)
      state.box = createBox(state.textures, five.work.observers[five.panoIndex], {
        opacity: true,
        maskColor: state.data.config?.maskColor || new THREE.Color(1, 0, 0),
        thickness: state.data.config?.thickness || 0.005,
      })
      five.scene.add(state.box)
      five.needsRender = true
      return true
    }

    const load = async (data: PanoMaskSelectorPluginData) => {
      state.data = data

      wrapper()

      return true
    }

    const select = async (_x: number, _y: number) => {
      if (!state.textures) return false
      if (!state.box) return false
      if (five.panoIndex === undefined) return false
      if (five.currentMode !== Five.Mode.Panorama) return false
      if (!five.renderer) return false

      const element = five.getElement()
      if (!element) return false
      const pixel = 1
      const x = _x * five.renderer.getPixelRatio()
      const y = _y * five.renderer.getPixelRatio()

      const renderTarget = new THREE.WebGLRenderTarget(pixel, pixel)
      const pickingBuffer = new Uint8Array(4 * pixel * pixel)

      const camera = five.camera.clone()
      const renderer = five.renderer!
      const newScence = new THREE.Scene()
      const observer = five.work.observers[five.panoIndex]
      const newBox = createBox(state.textures, observer, {
        opacity: false,
      })

      newScence.add(newBox)
      camera.setViewOffset(element.width, element.height, x, y, pixel, pixel)
      renderer.setRenderTarget(renderTarget)
      renderer.render(newScence, camera)
      pickingBuffer.fill(0)
      renderer.readRenderTargetPixels(renderTarget, 0, 0, pixel, pixel, pickingBuffer)
      camera.clearViewOffset()
      renderer.setRenderTarget(null)

      const unit8ArrayGroup: Uint8Array[] = []

      for (let i = 0; i < pickingBuffer.length; i += 4 * pixel) {
        unit8ArrayGroup.push(pickingBuffer.slice(i, i + 4 * pixel))
      }

      const selectedColor = new THREE.Color(pickingBuffer[0] / 255, pickingBuffer[1] / 255, pickingBuffer[2] / 255)

      const colorMaps = state.data?.colorMaps || []
      const object = colorMaps.find((item) => {
        const objectColor = new THREE.Color(item.color.r, item.color.g, item.color.b)
        return compare(objectColor, selectedColor)
      })

      if (!object) {
        return false
      }
      state.box.material.forEach((m) => (m.uniforms.selectedColor.value = selectedColor))
      five.needsRender = true
      return object
    }

    const erase = () => {
      if (!state.box) return

      state.box.material.forEach((m) => (m.uniforms.selectedColor.value = new THREE.Color(0.0, 0.0, 0.0)))
      five.needsRender = true
    }

    const hide = () => {
      state.box?.material?.forEach((material) => {
        material.visible = false
      })
      five.needsRender = true
    }

    const show = () => {
      if (five.currentMode !== Five.Mode.Panorama) {
        return
      }

      state.box?.material?.forEach((material) => {
        material.visible = true
      })
      five.needsRender = true
    }

    const modeChangeListener = (mode: Mode) => {
      if (mode !== Five.Mode.Panorama) {
        hide()
      } else {
        show()
      }
    }
    five.on('panoArrived', wrapper)
    five.on('modeChange', modeChangeListener)

    return { load, select, erase, dispose, hide, show }
  }

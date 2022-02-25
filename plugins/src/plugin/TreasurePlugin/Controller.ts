import * as THREE from 'three'
import { Five, Subscribe } from '@realsee/five'
import { notNil } from '../../shared-utils/isNil'
import { DEFAULT_TREASURE_CONFIGS, DEFAULT_TREASURE_CONFIG, TREASURE_TYPE } from './constants'
import { TreasureObject, TreasureObjectConfig, TreasureObjectParams } from './TreasureObject'
import { getTextureLoader } from '../../shared-utils/three/getTextureLoader'
import { getExtraModelLoader } from '../../shared-utils/three/getExtraModelLoader'
import to from '../../shared-utils/to'

export type TreasureObjectAssetMap = Map<string, Promise<THREE.Group>>

/** 对每个宝箱实例的配置 */
export interface TreasurePluginItemConfigData {
  scale?: number
  /** 宝箱模型地址 */
  object_url?: string
  /** 宝箱盒子使用的贴图
   * @description
   * * 默认使用 object_url 文件中的盒子贴图
   * * 如果传了 box_texture_url 会替换默认贴图
   */
  box_texture_url?: string
  /** 宝箱表情动画使用的贴图列表 */
  face_anime_texture_urls?: string[]
}

/** 宝箱数据 */
export interface TreasurePluginItemData {
  /** 宝箱 ID */
  id: string
  /** 宝箱位置 */
  position: { x: number; y: number; z: number }
  /** 使用预设的宝箱类型 */
  type?: TREASURE_TYPE
  /** 如果不想使用预设的宝箱，可以传入自定义的宝箱配置 */
  config?: TreasurePluginItemConfigData
}

export interface TreasurePluginData {
  treasures: TreasurePluginItemData[]
}

export type TreasurePluginParameterType = undefined

export type TreasurePluginEvents = {
  /** 点击宝箱事件
   * @param params.id: 宝箱 ID
   */
  tap: (params: { id: string }) => void
  /** 宝箱打开的动画执行完毕
   * @param params.id: 宝箱 ID
   */
  openAnimationEnded: (params: { id: string }) => void
}

export class TreasurePluginController {
  public readonly hooks = new Subscribe<TreasurePluginEvents>()
  public readonly treasures: TreasureObject[] = []

  private five: Five
  private selfGroup: THREE.Group
  private textureLoader = getTextureLoader()
  private modelLoader = getExtraModelLoader()

  public constructor(five: Five) {
    this.five = five
    // ========== self group ==========
    this.selfGroup = new THREE.Group()
    this.selfGroup.name = 'treasure-plugin-group'
    this.five.scene.add(this.selfGroup)

    this.five.once('dispose', this.dispose)
  }

  public async load(
    data: TreasurePluginData,
    options?: { appendTreasuresAfterLoaded?: boolean },
  ): Promise<TreasureObject[]> {
    const [error, treasures] = await to(
      Promise.all(
        data.treasures
          .map(this.getTreasureObjectParams)
          .filter(notNil)
          .map((params) => new TreasureObject(params).load()),
      ),
    )
    if (error || !treasures) throw error
    this.treasures.push(...treasures)

    const appendTreasuresAfterLoaded = options?.appendTreasuresAfterLoaded || true
    if (appendTreasuresAfterLoaded) {
      this.selfGroup.add(...treasures)
      this.five.needsRender = true
    }

    return treasures
  }

  public dispose = () => {
    this.modelLoader.dispose()
    this.textureLoader.dispose()
    this.five.scene.remove(this.selfGroup)
    this.treasures.forEach((treasure) => treasure.dispose())
  }

  public appendChild(child: TreasureObject): TreasurePluginController {
    this.selfGroup.add(child)
    this.five.needsRender = true
    return this
  }

  public appendChildByID(childID: string): TreasurePluginController {
    const treasure = this.getTreasureByID(childID)
    if (!treasure) throw new Error('can not find treasure which has ID ' + childID)
    this.appendChild(treasure)
    return this
  }

  public getTreasureByID(id: string): TreasureObject | undefined {
    return this.treasures.find((treasure) => treasure.treasureID === id)
  }

  public removeTreasureByID(id: string): boolean {
    const treasureIndex = this.treasures.findIndex((treasure) => treasure.treasureID === id)
    if (typeof treasureIndex !== 'number') return false
    const treasure = this.treasures[treasureIndex]
    treasure.dispose()
    this.selfGroup.remove(treasure)
    this.treasures.slice(treasureIndex, 1)
    return true
  }

  private onTreasureClick = (id: string) => {
    this.hooks.emit('tap', { id })
  }

  private getTreasureObjectParams = (data: TreasurePluginData['treasures'][0]): TreasureObjectParams | null => {
    const config = this.getConfig(data)
    const position = new THREE.Vector3().fromArray(Object.values(data.position))
    return {
      config,
      position,
      id: data.id,
      five: this.five,
      loadTexture: this.textureLoader.load,
      loadModelGroup: this.modelLoader.load,
      clickCallback: this.onTreasureClick,
      onOpenAnimationEnded: this.onTreasureOpenAnimationEnded,
    }
  }

  private onTreasureOpenAnimationEnded = (id: string) => {
    this.hooks.emit('openAnimationEnded', { id })
  }

  private getConfig(data: TreasurePluginData['treasures'][0]): TreasureObjectConfig {
    const typeConfig: Partial<TreasureObjectConfig> | undefined = DEFAULT_TREASURE_CONFIGS.find(
      ({ type }) => type === data.type,
    )?.config
    const defaultConfig = DEFAULT_TREASURE_CONFIG
    const scale = data?.config?.scale ?? typeConfig?.scale ?? defaultConfig.scale
    const objectUrl = data?.config?.object_url || typeConfig?.objectUrl || defaultConfig.objectUrl
    const boxTextureUrl = data?.config?.box_texture_url || typeConfig?.boxTextureUrl || defaultConfig.boxTextureUrl
    const faceAnimeTextureUrls =
      data?.config?.face_anime_texture_urls || typeConfig?.faceAnimeTextureUrls || defaultConfig.faceAnimeTextureUrls
    return { scale, objectUrl, boxTextureUrl, faceAnimeTextureUrls }
  }
}

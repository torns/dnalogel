import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import { Five } from '@realsee/five'
import { TreasurePluginBasicMesh } from './typings'
import { TreasureFaceAnime } from './TreasureFaceAnime'
import { TreasurePluginOpenAnime } from './TreasureOpenAnime'
import { tweenProgress } from '../../shared-utils/animationFrame/BetterTween'
import to from '../../shared-utils/to'

function copyMaterial(orginMatrial: any) {
  const material = new THREE.MeshBasicMaterial({
    map: orginMatrial.map,
    opacity: orginMatrial.opacity,
    transparent: orginMatrial.transparent,
  })
  return material
}

export interface TreasureObjectConfig {
  scale: number
  objectUrl: string
  boxTextureUrl?: string
  faceAnimeTextureUrls: string[]
}

/** 宝箱实例
 * @description
 * 点击宝箱可以打开宝箱
 * @description
 * 在宝箱未打开时，靠近宝箱或点击宝箱，宝箱会转动到朝向用户的方向
 */
export interface TreasureObjectParams {
  id: string
  five: Five
  position: THREE.Vector3
  config: TreasureObjectConfig
  clickCallback?: (id: string) => unknown
  onOpenAnimationEnded?: (id: string) => unknown
  loadTexture: (url: string) => Promise<THREE.Texture>
  loadModelGroup: (url: string) => Promise<THREE.Group>
}

export class TreasureObject extends THREE.Object3D {
  public readonly treasureID: string
  public readonly name = 'treasureObject'
  protected opened = false

  private five: Five
  private params: TreasureObjectParams
  private faceAnime?: TreasureFaceAnime
  private openAnime?: TreasurePluginOpenAnime
  private modelGroupPromise: Promise<{ modelGroup: THREE.Group; originGroup: THREE.Group }> = Promise.resolve({
    modelGroup: new THREE.Group(),
    originGroup: new THREE.Group(),
  })

  public constructor(params: TreasureObjectParams) {
    super()
    this.params = params
    this.five = params.five
    this.treasureID = params.id
    this.position.copy(params.position)
    const scale = 0.008 * params.config.scale
    this.scale.fromArray([scale, scale, scale])
  }

  public async load(): Promise<TreasureObject> {
    this.modelGroupPromise = this.getModelPromise()
    const { modelGroup, originGroup } = await this.modelGroupPromise
    this.add(modelGroup)
    // ========== openAnime ==========
    this.openAnime = new TreasurePluginOpenAnime({
      five: this.five,
      treasureGroup: modelGroup,
      onComplete: () => this.params.onOpenAnimationEnded?.(this.treasureID),
      animationClip: (originGroup as unknown as any).animations[0] as THREE.AnimationClip,
    })
    // ========== faceAnime ==========
    this.faceAnime = new TreasureFaceAnime({
      five: this.five,
      treasureGroup: modelGroup,
      loadTexture: this.params.loadTexture,
      textureUrls: this.params.config.faceAnimeTextureUrls,
    })
    this.faceAnime.play()
    // ========== addEventListener ==========
    this.five.on('panoArrived', this.onFivePanoArrived)
    this.five.on('wantsTapGesture', this.onFiveWantsTapGesture)

    this.five.needsRender = true
    return this
  }

  public async show(params?: { duration?: number }): Promise<boolean> {
    const { modelGroup } = await this.modelGroupPromise
    tweenProgress()
      .duration(params?.duration ?? 300)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(({ progress }) => {
        modelGroup.children.forEach((child) => {
          const obj = child as TreasurePluginBasicMesh
          obj.material && (obj.material.opacity = progress)
          this.five.needsRender = true
        })
      })
      .play()
    return true
  }

  public async hide(params?: { duration?: number }): Promise<boolean> {
    const { modelGroup } = await this.modelGroupPromise
    tweenProgress()
      .duration(params?.duration ?? 300)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(({ progress }) => {
        modelGroup.children.forEach((child) => {
          const obj = child as TreasurePluginBasicMesh
          obj.material && (obj.material.opacity = 1 - progress)
          this.five.needsRender = true
        })
      })
      .play()
    return true
  }

  /** 销毁当前宝箱实例
   * @description 注意 dispose 并不会销毁所使用的贴图，因为贴图会有共用关系，需要在最外层销毁
   */
  public dispose() {
    this.faceAnime?.dispose()
    this.openAnime?.dispose()
    this.five.off('panoArrived', this.onFivePanoArrived)
    this.five.off('wantsTapGesture', this.onFiveWantsTapGesture)
  }

  /** 旋转宝箱朝向用户 */
  public rotateToCamera() {
    if (this.opened) return
    // 宝箱朝向
    const treasureDirection = this.getWorldDirection(new THREE.Vector3()).setY(0)
    // 宝箱到相机位置的朝向
    const toCameraDirection = this.five.camera.position.clone().sub(this.position).setY(0)
    // 旋转方向「从左到右还是从右到左」
    const rotateDirection = treasureDirection.clone().cross(toCameraDirection).y > 0 ? 1 : -1
    // 宝箱从当前朝向转到「朝向相机」相差的角度，需要考虑方向
    const deltaRadY = treasureDirection.clone().angleTo(toCameraDirection)
    // 1s 旋转的弧度
    const speed = 8
    const duration = Math.ceil((deltaRadY / speed) * 1000)
    const rotationStartY = this.rotation.y
    tweenProgress(duration)
      .onUpdate(({ progress }) => {
        this.rotation.y = rotationStartY + progress * deltaRadY * rotateDirection
      })
      .play()
  }

  /** 打开宝箱 */
  public open(): boolean {
    if (!this.openAnime) return false
    if (this.opened) return false
    this.opened = true
    this.faceAnime?.pause()
    this.faceAnime?.setToInitialState()
    this.openAnime?.play()
    return true
  }

  private async getModelPromise() {
    const originGroup = await this.params.loadModelGroup(this.params.config.objectUrl)
    const modelGroup = originGroup.clone()
    modelGroup.traverse((obj) => {
      if (!(obj instanceof THREE.Mesh)) return
      obj.material = copyMaterial(obj.material)
      if (obj.material.map) obj.material.map.encoding = THREE.sRGBEncoding
      obj.renderOrder = 2
    })
    if (this.params.config.boxTextureUrl) {
      const [boxTextureError, boxTexture] = await to(this.params.loadTexture(this.params.config.boxTextureUrl))
      if (boxTextureError || !boxTexture) throw new Error('加载盒子贴图失败')
      boxTexture.encoding = THREE.sRGBEncoding
      ;(modelGroup.getObjectByName('box') as TreasurePluginBasicMesh).material.map = boxTexture
      ;(modelGroup.getObjectByName('box2') as TreasurePluginBasicMesh).material.map = boxTexture
    }

    return { modelGroup, originGroup }
  }

  private onFiveWantsTapGesture = (raycaster: THREE.Raycaster): void | false => {
    const intersects = raycaster.intersectObject(this, true)
    const isClickTreasure = !!intersects && intersects.length > 0
    if (!isClickTreasure) return
    this.params.clickCallback?.(this.treasureID)
    this.rotateToCamera()
    this.open()
    return false
  }

  private onFivePanoArrived = () => {
    if (this.position.distanceTo(this.five.camera.position) < 3) this.rotateToCamera()
  }
}

import * as THREE from 'three'
import { Five } from '@realsee/five'
import { TreasurePluginBasicMesh } from './typings'
import { tweenProgress } from '../shared-utils/animationFrame/BetterTween'
import { requestAnimationFrameInterval } from '../shared-utils/animationFrame'

export interface TreasureOpenAnimeParams {
  five: Five
  onComplete?: () => unknown
  treasureGroup: THREE.Group
  animationClip: THREE.AnimationClip
}

/** 打开宝箱的动画实例
 * @description
 * 因为宝箱没有关闭的场景，对于一个宝箱来讲，打开后，要么销毁，要么保留当时的状态。所以不做关闭方面的兼容处理
 */
export class TreasurePluginOpenAnime {
  private five: Five
  private hasPlayed = false
  private clock = new THREE.Clock()
  private treasureGroup: THREE.Group
  private params: TreasureOpenAnimeParams
  private animationDispose?: () => void
  private action: THREE.AnimationAction

  public constructor(params: TreasureOpenAnimeParams) {
    this.five = params.five
    this.params = params
    this.treasureGroup = params.treasureGroup

    const mixer = new THREE.AnimationMixer(this.treasureGroup)
    this.action = mixer.clipAction(params.animationClip)
    this.action.setLoop(THREE.LoopOnce, 1)
    this.action.clampWhenFinished = true
  }

  public dispose() {
    this.animationDispose?.()
    this.clock.stop()
  }

  public play() {
    if (this.hasPlayed) return false
    this.hasPlayed = true
    this.action.play()
    const mixer = this.action.getMixer()
    this.animationDispose = requestAnimationFrameInterval(() => {
      const deltaTime = this.clock.getDelta()
      mixer.update(deltaTime)
      this.five.needsRender = true
    })
    // 小人出现的动画完成之后需要隐藏飘带
    mixer.addEventListener('finished', this.onPlayFinished)
    return true
  }

  private onPlayFinished = () => {
    // 销毁打开盒子动画的定时任务
    this.animationDispose?.()
    // 选出模型中的飘带
    const hideObjects = this.treasureGroup.children.filter((obj) => {
      return obj.name.indexOf('Plane') === 0 || obj.name.indexOf('coin') === 0
    }) as TreasurePluginBasicMesh[]
    // 使飘带消失
    tweenProgress(300)
      .onUpdate(({ progress }) => {
        const opacity = 1 - progress
        hideObjects.forEach((obj) => {
          obj.material.opacity = opacity
        })
        this.five.needsRender = true
      })
      .play()
      .onComplete(() => this.params.onComplete?.())
  }
}

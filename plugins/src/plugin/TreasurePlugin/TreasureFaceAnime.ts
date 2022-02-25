import * as THREE from 'three'
import { Five } from '@realsee/five'
import { BufferGeometry, Group, Mesh, MeshBasicMaterial, Texture } from 'three'

export interface TreasureFaceAnimeParams {
  five: Five
  treasureGroup: Group
  textureUrls: string[]
  loadTexture: (url: string) => Promise<THREE.Texture>
}

export class TreasureFaceAnime {
  public paused = true

  private five: Five
  private faceAnimeStep = 0
  private treasureGroup: Group
  private initialFaceTexture: Texture
  private faceAnimeTimer?: NodeJS.Timeout
  private faceTexturesPromise: Promise<Texture[]>
  private faceMesh: Mesh<BufferGeometry, MeshBasicMaterial>

  public constructor(params: TreasureFaceAnimeParams) {
    this.five = params.five
    this.treasureGroup = params.treasureGroup
    this.faceTexturesPromise = Promise.all(params.textureUrls.map(params.loadTexture))
    this.faceMesh = this.treasureGroup.getObjectByName('face') as Mesh<BufferGeometry, MeshBasicMaterial>
    const initialFaceTexture = this.faceMesh.material.map
    if (!initialFaceTexture) throw new Error('初始化失败，不能从模型文件中找到对应的动画贴图')
    this.initialFaceTexture = initialFaceTexture
    this.initialFaceTexture.encoding = THREE.sRGBEncoding
  }

  public play = async () => {
    if (!this.paused) return true
    this.paused = false
    this.clearTimer()
    const faceMaterial = this.faceMesh.material
    const faceTextures = await this.faceTexturesPromise
    if (this.paused) return false
    this.faceAnimeTimer = setInterval(() => {
      this.faceAnimeStep = (this.faceAnimeStep + 1) % faceTextures.length
      const texture = faceTextures[this.faceAnimeStep]
      texture.encoding = THREE.sRGBEncoding
      faceMaterial.map = texture
      this.five.needsRender = true
    }, 300)
    return true
  }

  public pause() {
    this.paused = true
    this.clearTimer()
    return true
  }

  public dispose() {
    this.pause()
  }

  public setToInitialState() {
    this.faceMesh.material.map = this.initialFaceTexture
    this.faceAnimeStep = 0
    this.five.needsRender = true
  }

  private clearTimer() {
    this.faceAnimeTimer && clearInterval(this.faceAnimeTimer)
    this.faceAnimeTimer = void 0
  }
}

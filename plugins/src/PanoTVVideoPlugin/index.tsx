import * as THREE from 'three'
import { Five, FivePlugin } from '@realsee/five'

export type PanoTVVideoPluginPoints = Record<
  string,
  {
    position: {
      y: number
      x: number
      z: number
    }
    name: 'p0' | 'p1' | 'p2' | 'p3'
  }[][]
>

export interface PanoTVVideoPluginData {
  video_src: string
  video_poster_src: string
  points: PanoTVVideoPluginPoints
}

export interface PanoTVVideoPluginParameterType {
  videoElement?: HTMLVideoElement
}
export interface PanoTVVideoPluginExportType {
  enable: () => void
  disable: () => void
  load: (data: PanoTVVideoPluginData, videoElement?: HTMLVideoElement) => void
  getVideoTexture: () => THREE.VideoTexture | undefined
}

type PanoTVVideoPluginState = {
  enabled: boolean
  rectPoints?: PanoTVVideoPluginPoints
  videoTextureEnabled: boolean
  videoSource: string
  videoTexture?: THREE.VideoTexture
  imageTexture?: THREE.Texture
  videoElement?: HTMLVideoElement
}

export const PanoTVVideoPlugin: FivePlugin<PanoTVVideoPluginParameterType, PanoTVVideoPluginExportType> = (
  five,
  parameters,
) => {
  const state: PanoTVVideoPluginState = {
    enabled: true,
    rectPoints: undefined,
    videoTextureEnabled: false,
    videoSource: '',
    videoTexture: undefined,
    imageTexture: undefined,
    videoElement: parameters.videoElement,
  }

  const videoMeshes: (THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial>[] | undefined)[] = []

  const createImageTexture = (source: string) => {
    const texture = new THREE.TextureLoader().load(source)
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter
    texture.format = THREE.RGBFormat
    return texture
  }

  const createVideoTexture = (
    source: string,
    video?: HTMLVideoElement,
  ): Promise<THREE.VideoTexture & { videoSource: string }> => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            const url = window.URL || window.webkitURL
            video = video || document.createElement('video')
            video.crossOrigin = 'anonymous'
            video.autoplay = true
            video.muted = true
            video.loop = true
            video.playsInline = true
            video.src = url.createObjectURL(xhr.response)
            const texture = new THREE.VideoTexture(video)
            texture.minFilter = THREE.LinearFilter
            texture.magFilter = THREE.LinearFilter
            texture.format = THREE.RGBFormat
            resolve(Object.assign(texture, { videoSource: source }))
          } else {
            reject(new Error('Video download Error: ' + xhr.status))
          }
        }
      }
      xhr.onerror = (error) => reject(error)
      xhr.open('GET', source)
      xhr.responseType = 'blob'
      xhr.send()
    })
  }

  const getVideoTexture = () => state.videoTexture

  const getPoints = (panoIndex: number) => {
    if (!state.rectPoints) return []
    const rectPoints_ = state.rectPoints[panoIndex]
    if (!rectPoints_) return []
    return rectPoints_.map((rectPoints) => {
      const quaternion = five.work!.observers[panoIndex].quaternion
      const position = five.work!.observers[panoIndex].position
      const points = [
        new THREE.Vector3(rectPoints[1].position.x, rectPoints[1].position.y, rectPoints[1].position.z),
        new THREE.Vector3(rectPoints[2].position.x, rectPoints[2].position.y, rectPoints[2].position.z),
        new THREE.Vector3(rectPoints[3].position.x, rectPoints[3].position.y, rectPoints[3].position.z),
        new THREE.Vector3(rectPoints[0].position.x, rectPoints[0].position.y, rectPoints[0].position.z),
      ]
      points.forEach((point) => point.applyQuaternion(quaternion).add(position))
      return points
    })
  }

  const createPanoVideoMeshes = (panoIndex: number) => {
    return getPoints(panoIndex).map((points, index) => {
      const geometry = new THREE.BufferGeometry()
      const segments = 128

      const verticesArray = []
      verticesArray.push(points[0].x, points[0].y, points[0].z)
      for (let i = 1; i < segments; i++) {
        verticesArray.push(
          points[0].x + ((points[1].x - points[0].x) * i) / segments,
          points[0].y + ((points[1].y - points[0].y) * i) / segments,
          points[0].z + ((points[1].z - points[0].z) * i) / segments,
        )
      }
      verticesArray.push(points[1].x, points[1].y, points[1].z)
      verticesArray.push(points[2].x, points[2].y, points[2].z)
      for (let i = 1; i < segments; i++) {
        verticesArray.push(
          points[2].x + ((points[3].x - points[2].x) * i) / segments,
          points[2].y + ((points[3].y - points[2].y) * i) / segments,
          points[2].z + ((points[3].z - points[2].z) * i) / segments,
        )
      }
      verticesArray.push(points[3].x, points[3].y, points[3].z)

      const uvArray = []
      uvArray.push(0, 0)
      for (let i = 1; i < segments; i++) {
        uvArray.push(i / segments, 0)
      }
      uvArray.push(1, 0)
      uvArray.push(1, 1)
      for (let i = 1; i < segments; i++) {
        uvArray.push(1 - i / segments, 1)
      }
      uvArray.push(0, 1)

      const indicesArray = []
      for (let i = 0; i < segments; i++) {
        indicesArray.push(i, i + 1, segments * 2 - i, i, segments * 2 - i, segments * 2 + 1 - i)
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(verticesArray), 3))
      geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvArray), 2))
      geometry.setIndex(new THREE.BufferAttribute(new Uint32Array(indicesArray), 1))
      const material = new THREE.MeshBasicMaterial({
        map: state.videoTextureEnabled ? state.videoTexture : state.imageTexture,
        depthTest: false,
        transparent: true,
        side: THREE.DoubleSide,
      })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.renderOrder = 1
      mesh.name = `video-${panoIndex}-${index}`
      return mesh
    })
  }

  const enable = () => {
    if (state.enabled) return
    state.enabled = true
    const panoIndex = five.panoIndex
    if (typeof panoIndex === 'number') {
      const meshes = (videoMeshes[panoIndex] = createPanoVideoMeshes(panoIndex))
      meshes.forEach((mesh) => five.scene.add(mesh))
      if (state.videoTexture && videoMeshes.length) {
        state.videoTexture.image.play()
      }
      five.needsRender = true
    }
  }

  const disable = () => {
    if (!state.enabled) return
    state.enabled = false
    videoMeshes.forEach((meshes, index) => {
      if (meshes) {
        meshes.forEach((mesh) => {
          mesh.geometry.dispose()
          mesh.material.dispose()
          five.scene.remove(mesh)
        })
        videoMeshes[index] = undefined
        if (state.videoTexture) state.videoTexture.image.pause()
      }
    })
    five.needsRender = true
  }

  const load = (data: PanoTVVideoPluginData, videoElement?: HTMLVideoElement) => {
    const { video_src, video_poster_src, points } = data
    state.videoSource = video_src
    state.rectPoints = points
    state.imageTexture = createImageTexture(video_poster_src)

    if (videoElement) state.videoElement = videoElement
    const panoIndex = five.state.panoIndex
    const meshes = (videoMeshes[panoIndex] = createPanoVideoMeshes(panoIndex))
    meshes.forEach((mesh) => five.scene.add(mesh))
    createVideoTexture(state.videoSource, state.videoElement).then((videoTexture_) => {
      if (videoTexture_.videoSource !== state.videoSource) return
      state.videoTexture = videoTexture_
      const timeupdate = () => {
        videoTexture_.image.removeEventListener('timeupdate', timeupdate)
        state.videoTextureEnabled = true
        videoMeshes.forEach((meshes) => {
          if (!meshes) return
          meshes.forEach((mesh) => {
            if (mesh.material.map !== state.videoTexture) {
              mesh.material.map = videoTexture_
            }
          })
        })
      }
      state.videoTexture.image.addEventListener('timeupdate', timeupdate)
      if (state.enabled) state.videoTexture.image.play()
    })
  }

  five.on('renderFrame', () => {
    videoMeshes.forEach((meshes) => {
      if (meshes)
        meshes.forEach((mesh) => {
          //@ts-ignore
          mesh.needsRender = true
        })
    })
  })

  five.on('panoWillArrive', (panoIndex) => {
    if (!state.enabled) return
    if (five.panoIndex === panoIndex) return
    if (!videoMeshes[panoIndex]) {
      const meshes = (videoMeshes[panoIndex] = createPanoVideoMeshes(panoIndex))
      meshes.forEach((mesh) => {
        mesh.material.opacity = 0
        five.scene.add(mesh)
      })
    }
    if (videoMeshes[panoIndex]!.length) {
      if (state.videoTexture) state.videoTexture.image.play()
    } else {
      if (state.videoTexture) state.videoTexture.image.pause()
    }
  })
  five.on('movingToPano', (panoIndex, prevPanoIndex, progress) => {
    if (!state.enabled) return
    if (prevPanoIndex === panoIndex) return
    videoMeshes.forEach((meshes, index) => {
      const _progress = index === panoIndex ? progress : 1 - progress
      const opacity = Math.max(0, _progress * 21 - 20)
      if (videoMeshes[index]) {
        videoMeshes[index]!.forEach((mesh) => (mesh.material.opacity = opacity))
      }
    })
  })
  five.on('panoArrived', (panoIndex) => {
    if (!state.enabled) return
    videoMeshes.forEach((meshes, index) => {
      if (index === panoIndex) {
        if (!videoMeshes[index]) {
          const meshes = (videoMeshes[index] = createPanoVideoMeshes(index))
          meshes.forEach((mesh) => five.scene.add(mesh))
        }
      } else {
        if (videoMeshes[index]) {
          videoMeshes[index]!.forEach((mesh) => {
            mesh.geometry.dispose()
            mesh.material.dispose()
            five.scene.remove(mesh)
          })
          videoMeshes[index] = undefined
        }
      }
    })
  })
  five.on('modeChange', (mode) => {
    if (!state.enabled) return
    if (mode === Five.Mode.Panorama) return
    videoMeshes.forEach((meshes, index) => {
      if (meshes) {
        meshes.forEach((mesh) => {
          mesh.geometry.dispose()
          mesh.material.dispose()
          five.scene.remove(mesh)
        })
        videoMeshes[index] = undefined
        if (state.videoTexture) state.videoTexture.image.pause()
      }
    })
  })

  five.on('wantsTapGesture', (raycaster) => {
    if (!state.enabled) return
    const meshArray: THREE.Mesh[] = []
    videoMeshes.forEach((meshes) => {
      if (meshes) meshArray.push(...meshes)
    })
    if (raycaster.intersectObjects(meshArray).length) {
      if (state.videoTexture) {
        state.videoTexture.image.muted = !state.videoTexture.image.muted
        state.videoTexture.image.play()
      }
      return false
    }
  })
  five.on('dispose', () => {
    videoMeshes.forEach((meshes, index) => {
      if (meshes) {
        meshes.forEach((mesh) => {
          mesh.geometry.dispose()
          mesh.material.dispose()
          five.scene.remove(mesh)
        })
        videoMeshes[index] = undefined
        if (state.videoTexture) state.videoTexture.image.pause()
      }
    })
  })

  five.on('load', (input) => {
    if (input.panoTVVideoData) {
      load(input.panoTVVideoData)
    }
  })

  return { enable, disable, load, getVideoTexture }
}

export default PanoTVVideoPlugin

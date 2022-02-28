import { Five, FivePlugin, Mode } from '@realsee/five'
import * as THREE from 'three'
import { nextFrame } from '../shared-utils/nextFrame'

export interface ExtrudeWallsDataModel {
  height: number
  exterior: Array<[number, number]>
  interior: Array<[number, number]>
}

export interface ModelExtrudeWallsPluginParameterType {
  data?: ExtrudeWallsDataModel
}

export interface ModelExtrudeWallsPluginPluginReturnType {
  enable: () => void
  disable: () => void
  dispose: () => void
  load: (data: ExtrudeWallsDataModel) => void
}

const lineTo: (d: Array<[number, number]>, s: THREE.Shape) => void = (
  d: Array<[number, number]>,
  s: THREE.Shape,
): void => d.forEach((p: number[], i: number) => s[!i ? 'moveTo' : 'lineTo'](p[0], p[1]))

const generateSideWallUV = () => {
  return [new THREE.Vector2(1, 1), new THREE.Vector2(0, 1), new THREE.Vector2(0, 0), new THREE.Vector2(1, 0)]
}

const bezierArcTransition = (t: number) => -0.7 * (2.4 * t * t * t - 3.6 * t * t + 0.2 * t)

interface ModelExtrudeWallsPluginState {
  data?: ExtrudeWallsDataModel
  walls: {
    inside?: THREE.Mesh<THREE.ExtrudeGeometry, THREE.MeshBasicMaterial[]>
    outside?: THREE.Mesh<THREE.ExtrudeGeometry, THREE.MeshBasicMaterial[]>
    lookDown?: THREE.Mesh<THREE.ExtrudeGeometry, THREE.MeshBasicMaterial[]>
  }
  visible: boolean
}

export const ModelExtrudeWallsPlugin: FivePlugin<
  ModelExtrudeWallsPluginParameterType,
  ModelExtrudeWallsPluginPluginReturnType
> = (five, parameters = {}) => {
  const state: ModelExtrudeWallsPluginState = {
    data: parameters.data,
    walls: {},
    visible: true,
  }

  const wrapper = () => {
    if (!state.data) return

    const wallShape = new THREE.Shape()
    const floorplanShape = new THREE.Shape()

    lineTo(state.data.exterior, wallShape)
    lineTo(state.data.exterior, floorplanShape)
    lineTo(state.data.interior, floorplanShape)

    const bb = new THREE.Box2()
    bb.setFromPoints(wallShape.extractPoints(1).shape)

    const generateTopUV = (
      geometry: THREE.ExtrudeBufferGeometry,
      vertices: number[],
      indexA: number,
      indexB: number,
      indexC: number,
    ) => {
      const ax = vertices[indexA * 3]
      const ay = vertices[indexA * 3 + 1]
      const bx = vertices[indexB * 3]
      const by = vertices[indexB * 3 + 1]
      const cx = vertices[indexC * 3]
      const cy = vertices[indexC * 3 + 1]
      const bbx = bb.max.x - bb.min.x
      const bby = bb.max.y - bb.min.y
      return [
        new THREE.Vector2((ax - bb.min.x) / bbx, 1.0 - (ay - bb.min.y) / bby),
        new THREE.Vector2((bx - bb.min.x) / bbx, 1.0 - (by - bb.min.y) / bby),
        new THREE.Vector2((cx - bb.min.x) / bbx, 1.0 - (cy - bb.min.y) / bby),
      ]
    }

    const extrudeSettings = {
      steps: 1,
      depth: Math.abs(state.data.height),
      bevelEnabled: false,
      UVGenerator: { generateTopUV, generateSideWallUV },
    }

    const geometry1 = new THREE.ExtrudeGeometry(wallShape, extrudeSettings)
    const geometry2 = new THREE.ExtrudeGeometry(wallShape, extrudeSettings)
    const geometry3 = new THREE.ExtrudeGeometry(floorplanShape, extrudeSettings)

    geometry1.faces.forEach((face) => {
      const temp = face.a
      face.a = face.c
      face.c = temp
    })
    geometry1.faceVertexUvs.forEach((faceVertexUvs) => {
      faceVertexUvs.forEach((uv) => {
        const temp = uv[0]
        uv[0] = uv[2]
        uv[2] = temp
      })
    })
    geometry1.computeFaceNormals()

    const material0 = new THREE.MeshBasicMaterial({
      color: 0xc8c8c8,
      // color: 0x2bb8aa,
      wireframe: false,
      transparent: true,
      opacity: 0.9,
    })
    const material1 = new THREE.MeshBasicMaterial({
      color: 0xffeedf,
      wireframe: false,
      transparent: true,
      opacity: 0.7,
    })
    const material2 = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: false,
      transparent: true,
      opacity: 0,
      depthTest: false,
    })
    const material3 = new THREE.MeshBasicMaterial({
      color: 0xc8c8c8,
      // color: 0x2bb8aa,
      wireframe: false,
      transparent: true,
      opacity: 0.2,
      depthTest: false,
    })

    let renderOrder = 99
    const initMesh = (m: THREE.Mesh<THREE.ExtrudeGeometry, THREE.MeshBasicMaterial[]>) => {
      m.rotation.x = -Math.PI / 2
      m.rotation.y = 0
      m.rotation.z = 0 // Math.PI / 2
      m.position.y = five.model.bounding.min.y
      m.name = 'extrude-walls' + renderOrder
      m.renderOrder = renderOrder++
      five.needsRender = true
    }

    // 内墙
    const insideWall = new THREE.Mesh(geometry1, [material2, material0])
    // 外墙
    const outsideWall = new THREE.Mesh(geometry2, [material2, material3])
    // 内墙
    const lookDownWall = new THREE.Mesh(geometry3, [material1, material2])

    const append = () => {
      initMesh(insideWall)
      initMesh(lookDownWall)
      initMesh(outsideWall)
      five.scene.add(insideWall)
      five.scene.add(outsideWall)
      five.scene.add(lookDownWall)

      state.walls.inside = insideWall
      state.walls.outside = outsideWall
      state.walls.lookDown = lookDownWall
      state.visible = true

      visible(five.currentMode === Five.Mode.Floorplan)
    }

    if (five.model.loaded) {
      append()
    } else {
      five.once('modelLoaded', () => append())
    }
  }

  const enable = () => {
    state.visible = true
    visible(true)
  }
  const disable = () => {
    state.visible = false
    visible(false)
  }

  const visible = (flag = true) => {
    if (state.walls.inside) state.walls.inside.visible = flag
    if (state.walls.outside) state.walls.outside.visible = flag
    if (state.walls.lookDown) state.walls.lookDown.visible = flag
    five.needsRender = true
  }

  const modeChangeListener = (mode: Mode, prevMode: Mode) => {
    if (!state.visible) return
    if (prevMode === Five.Mode.Floorplan) {
      five.once('initAnimationEnded', () => nextFrame(() => visible(false)))
      return
    }

    return visible(mode === Five.Mode.Floorplan)
  }

  const cameraDirectionUpdateListener = ({ latitude }: { latitude: number }) => {
    if (state.walls.inside) state.walls.inside.material[1].opacity = bezierArcTransition(latitude / (Math.PI / 2))
    if (state.walls.outside) state.walls.outside.material[1].opacity = bezierArcTransition(latitude / (Math.PI / 2))
    if (state.walls.lookDown) state.walls.lookDown.material[0].opacity = bezierArcTransition(latitude / (Math.PI / 2))
  }

  five.on('modeChange', modeChangeListener)
  five.on('cameraDirectionUpdate', cameraDirectionUpdateListener)

  const dispose = () => {
    five.off('modeChange', modeChangeListener)
    five.off('cameraDirectionUpdate', cameraDirectionUpdateListener)
    if (state.walls.inside) five.scene.remove(state.walls.inside)
    if (state.walls.outside) five.scene.remove(state.walls.outside)
    if (state.walls.lookDown) five.scene.remove(state.walls.lookDown)

    state.data = undefined
    state.walls = {}
    state.visible = true
  }

  wrapper()

  const load = (data: ExtrudeWallsDataModel) => {
    state.data = data
    if (state.walls.inside) five.scene.remove(state.walls.inside)
    if (state.walls.outside) five.scene.remove(state.walls.outside)
    if (state.walls.lookDown) five.scene.remove(state.walls.lookDown)

    wrapper()
  }

  return { enable, disable, dispose, load }
}

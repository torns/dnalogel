import * as THREE from 'three'

export const genRotationMatrix = (x: number, y: number, z: number) => {
  const matrix = new THREE.Matrix4()
  const euler = new THREE.Euler(x, y, z, 'YXZ')
  matrix.makeRotationFromEuler(euler)
  return matrix
}

const bject3d2LocalMatrix = (
  mesh: THREE.Object3D,
  {
    scale,
    rotation,
    position,
  }: {
    scale: number
    rotation: number[]
    position: { x: number; y: number; z: number }
  },
) => {
  if (scale) {
    mesh.scale.set(scale, scale, scale)
  }
  if (rotation) {
    const [x, y, z] = rotation
    if (x) {
      mesh.applyMatrix4(genRotationMatrix(x, 0, 0))
    }
    if (y) {
      mesh.applyMatrix4(genRotationMatrix(0, y, 0))
    }
    if (z) {
      mesh.applyMatrix4(genRotationMatrix(0, 0, z))
    }
  }
  if (position) {
    mesh.position.set(position.x, position.y, position.z)
  }
  return mesh
}

export default bject3d2LocalMatrix

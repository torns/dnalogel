import * as THREE from 'three'

import { WorkObserver } from '@realsee/five'
import { vertexShader } from './vertexShader'
import { fragmentShader } from './fragmentShader'

export function createBox(
  textures: THREE.Texture[],
  observer: WorkObserver,
  _config?: {
    opacity?: boolean
    maskColor?: THREE.Color
    thickness?: number
  },
) {
  const config = Object.assign({ opacity: true, thickness: 0.005, maskColor: new THREE.Color(1, 0, 0) }, _config || {})
  const materials = textures.map(
    (texture) =>
      new THREE.ShaderMaterial({
        uniforms: {
          map: {
            value: texture,
          },
          enable: { value: 1 },
          opacity: {
            value: config.opacity ? 0.0 : 1,
          },
          selectedColor: {
            value: new THREE.Color(0, 0, 0),
          },
          maskColor: {
            value: config.maskColor,
          },
          thickness: {
            value: config.thickness,
          },
        },
        vertexShader,
        fragmentShader,
        transparent: true,
        depthTest: false,
        side: THREE.DoubleSide,
      }),
  )

  const boxBufferGeometry = new THREE.BoxBufferGeometry(1, 1, 1)
  const box = new THREE.Mesh(boxBufferGeometry, materials)
  box.geometry.scale(-1, 1, 1)

  box.position.set(observer.position.x, observer.position.y, observer.position.z)
  box.quaternion.multiply(observer.quaternion)
  box.name = 'PanoMaskSelectorPlugin'

  return box
}

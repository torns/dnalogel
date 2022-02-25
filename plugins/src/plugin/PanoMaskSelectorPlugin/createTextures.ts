import * as THREE from 'three'
import { WorkImage } from '@realsee/five'

export function createTextures(imgs: Omit<WorkImage, 'depth' | 'tiles'>) {
  const loader = new THREE.ImageLoader()
  const keys: (keyof Omit<WorkImage, 'depth' | 'tiles'>)[] = ['up', 'down', 'right', 'left', 'front', 'back']

  const textures = keys.map((key) => {
    const url = imgs[key]
    const texture = new THREE.Texture()
    loader.load(url as string, (image) => {
      texture.image = image
      texture.needsUpdate = true
    })
    return texture
  })

  return textures
}

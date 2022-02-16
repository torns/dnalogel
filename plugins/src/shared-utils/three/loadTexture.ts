import * as THREE from 'three'

const textureLoader = new THREE.TextureLoader()

export async function loadTexture(url: string): Promise<THREE.Texture> {
  return new Promise<THREE.Texture>((resolve, reject) => {
    textureLoader.load(url, resolve, undefined, reject)
  }).then((texture) => {
    texture.encoding = THREE.sRGBEncoding
    return texture
  })
}

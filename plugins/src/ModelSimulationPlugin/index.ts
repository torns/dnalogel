import * as THREE from 'three'
import { Five, PBMParameters } from '@realsee/five'
import type { FivePlugin } from '@realsee/five'

import vertexShader from './shaders/vertex'
import fragmentShader from './shaders/fragment'
import tap from '../shared-utils/tap'

type HouseOutLinePath = number[][]
export interface ModelSimulationPluginExportType {
	enable: () => void,
	disable: () => void,
	play: () => void,
	dispose: () => void,
	init: () => void
}

export interface ModelSimulationPluginParameterType {
	simulationWorkData: ModelSimulationPluginWorkDataType
	simulationOptions: ModelSimulationPluginOptionsType
}
export interface ModelSimulationPluginWorkDataType {
	resourceUrl: string,
	colorMapPath: string,
	width: number
	height: number
	depth: number
	origin: number[],
	step: number
	maxT: number
	minT: number
	maxKeyframes: number
	houseHeight: number
}

export interface ModelSimulationPluginOptionsType {
	globalOpacity: number
	boundingOpacity: number
	boundingOffset?: number
	keyFrameRate?: number
}

const houseOutLinePath = [
	[ -3.089, -4.219 ], [ -4.834, -4.219 ],
  [ -8.197, -4.219 ], [ -10.31, -4.219 ],
  [ -10.31, -1.002 ], [ -10.31, 0.835 ],
  [ -10.31, 3.927 ],  [ -11.237, 3.927 ],
  [ -11.237, 5.45 ],  [ -8.104, 5.45 ],
  [ -8.104, 4.557 ],  [ -6.914, 4.557 ],
  [ -6.244, 4.557 ],  [ -6.244, 5.436 ],
  [ -3.78, 5.436 ],   [ -0.356, 5.436 ],
  [ 0.286, 5.436 ],   [ 0.286, 4.073 ],
  [ 0.286, 0.395 ],   [ 2.31, 0.395 ],
  [ 2.31, -1.323 ],   [ 2.31, -4.199 ],
  [ 0.468, -4.199 ],  [ 0.468, -3.547 ],
  [ -2.969, -3.547 ], [ -3.089, -3.547 ]
]

const defaultKeyframes = 50
const defaultBoundingOffset = 0.2
let isTexutreReady = false

const ModelSimulationPlugin: FivePlugin<ModelSimulationPluginParameterType, ModelSimulationPluginExportType> = (five: Five, options: ModelSimulationPluginParameterType) => {
	
	let heatTexutres: THREE.DataTexture3D[] = []
	let geometryTexture: THREE.DataTexture3D= null
	let simulationMaterial: THREE.RawShaderMaterial = null
	let boundingMaterial: THREE.RawShaderMaterial= null
	let boundingMesh: THREE.Mesh<THREE.ExtrudeGeometry, THREE.RawShaderMaterial> = null

	let originMaterial: PBMParameters= null

	const enable = () => {
	}

	const disable = () => {
		five.model.setMaterial(originMaterial)
	}

	const createBounding = (path: HouseOutLinePath, material: THREE.RawShaderMaterial): THREE.Mesh<THREE.ExtrudeGeometry, THREE.RawShaderMaterial> => {

		const shape = tap(new THREE.Shape(), shape => {
			shape.moveTo(path[path.length - 1][0],path[path.length - 1][1])
			path.forEach(xz => shape.lineTo(xz[0],xz[1]))
		})

		const settings = {
			depth: options.simulationWorkData.houseHeight + 2 * options.simulationOptions.boundingOffset ?? defaultBoundingOffset,
			bevelEnabled: false,
		}

		const geometry = new THREE.ExtrudeGeometry(shape, settings)
		boundingMesh = new THREE.Mesh(geometry, material)
		boundingMesh.rotateX(Math.PI / 2)
		boundingMesh.translateZ(- options.simulationWorkData.houseHeight - options.simulationOptions.boundingOffset)
		boundingMesh.updateMatrix()
		boundingMesh.updateMatrixWorld()

		return boundingMesh
	}

	const createSimulationMaterial = (isBounding: boolean): THREE.RawShaderMaterial => {
		const simulationMaterial = new THREE.RawShaderMaterial( {
			uniforms: {
				heatMap: { value: new THREE.Texture()},
				geometryMap: { value: new THREE.Texture() },
				colorMap: { value:new THREE.TextureLoader().load(options.simulationWorkData.colorMapPath) },
				bboxMin: {value: new THREE.Vector3().fromArray(options.simulationWorkData.origin)},
		   	bboxMax: {value: new THREE.Vector3().fromArray(options.simulationWorkData.origin).add(new THREE.Vector3(options.simulationWorkData.width, options.simulationWorkData.height, options.simulationWorkData.depth).multiplyScalar(options.simulationWorkData.step))},
				step: { value: options.simulationWorkData.step },
				maxT: { value: options.simulationWorkData.maxT },
				minT: { value: options.simulationWorkData.minT },
				opacity:{ value: isBounding? options.simulationOptions.boundingOpacity : options.simulationOptions.globalOpacity }
			},
			vertexShader,
			fragmentShader,
		} );
		if (isBounding) simulationMaterial.transparent = true
		return simulationMaterial
	}

	const create3DTextureTask = (url: string): Promise<THREE.DataTexture3D | void> => {

		return fetch(url)
			.then(res =>{
				return res.arrayBuffer()
			})
			.then(res => {
				const texture = new THREE.DataTexture3D( new Float32Array(res), options.simulationWorkData.width, options.simulationWorkData.height, options.simulationWorkData.depth );
				texture.type = THREE.FloatType
				texture.format = THREE.RedFormat;
				texture.minFilter = THREE.LinearMipmapLinearFilter;
				texture.magFilter = THREE.LinearFilter;
				texture.generateMipmaps = true
				texture.unpackAlignment = 1;
				return texture
			})
			.catch(err => console.error("拉取三维纹理数据时发生错误"))
	
	}

	const init = (): void => {
		simulationMaterial = createSimulationMaterial(false)
		boundingMaterial = createSimulationMaterial(true)
		//加载外bounding
		five.scene.add(createBounding(houseOutLinePath, boundingMaterial))
		//缓存原来的材质
		originMaterial = five.model.getMaterial()
		five.model.traverse(obj => {
			if ( !(obj instanceof THREE.Mesh) ) return
			if ( Array.isArray(obj.material) ) {
				obj.material = obj.material.map(_mtl => simulationMaterial)
			} else {
				obj.material = simulationMaterial
			}
		})

		//温度数据
		// const geometryTaskUrl = options.resourceUrl + 'geometry.vti'
		const heatTextureTasks = []

		for(let i = 0 ; i < options.simulationWorkData.maxKeyframes ; i++){
			const fileUrl =  options.simulationWorkData.resourceUrl + i  + '.vti';
			heatTextureTasks.push(create3DTextureTask(fileUrl))
		}

		// //有效值数据
		// create3DTextureTask(geometryTaskUrl)
		// 	.then(texture => {
		// 		simulationMaterial.uniforms.geometryMap.value = texture
		// 		boundingMaterial.uniforms.geometryMap.value = texture
		// 	})
		// 	.catch(err => console.error("geometry texture loading failed"))

		
		//加载首帧进行初始化
		create3DTextureTask(options.simulationWorkData.resourceUrl + '0.vti')
			.then(texture => {
				simulationMaterial.uniforms.heatMap.value = texture
				boundingMaterial.uniforms.heatMap.value = texture
				five.needsRender = true
			})
			.catch(err => console.error("loading textures failed"))
		
		//加载全部
		Promise.all(heatTextureTasks)
			.then(textures => {
				//缓存结果
				isTexutreReady = true
				console.log("ready")
				heatTexutres = textures			
			})
			.catch(err => console.error("loading textures failed"))

	}

	const play = () => {
		if ( !isTexutreReady ) throw new Error("textures are not ready yet,plz try again later")
		let timeCount = 0
		const stop = setInterval(() => {
			if ( timeCount < options.simulationWorkData.maxKeyframes ) {
				simulationMaterial.uniforms.heatMap.value = heatTexutres[timeCount]
				boundingMaterial.uniforms.heatMap.value = heatTexutres[timeCount]
				timeCount++
				five.needsRender = true
			}
		},1000 / options.simulationOptions.keyFrameRate ?? defaultKeyframes)
	}

	const dispose = () => {

		simulationMaterial.dispose()
		boundingMaterial.dispose()
		boundingMesh.geometry.dispose()
		geometryTexture.dispose()
		heatTexutres.forEach(texture => texture.dispose())

	}

	return {
		enable,
		disable,
		play,
		init,
		dispose
	}
}

export default ModelSimulationPlugin
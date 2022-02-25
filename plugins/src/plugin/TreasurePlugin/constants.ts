import { TreasureObjectConfig } from './TreasureObject'

/** CDN 资源 Base URL */
const TREASURE_BASE_URL = '//vrlab-public.ljcdn.com/release/static/image/release/baoxiang_xiaobei/1/'

/** 默认的宝箱对象类型：FBX */
export const DEFAULT_TREASURE_OBJECT_TYPE = 'FBX'
/** 默认的宝箱对象地址 */
export const DEFAULT_TREASURE_OBJECT_URL = TREASURE_BASE_URL + 'baoxiang_xiaobei.fbx'
/** 默认的宝箱对象 */
export const DEFAULT_TREASURE_OBJECT = {
  url: DEFAULT_TREASURE_OBJECT_URL,
  type: DEFAULT_TREASURE_OBJECT_TYPE,
}

/** 默认宝箱脸部动画贴图资源 */
export const DEFAULT_TREASURE_FACE_ANIMATION_URLS = [
  TREASURE_BASE_URL + 'faces/1.png',
  TREASURE_BASE_URL + 'faces/2.png',
  TREASURE_BASE_URL + 'faces/3.png',
  TREASURE_BASE_URL + 'faces/4.png',
  TREASURE_BASE_URL + 'faces/5.png',
]

/** 黄色宝箱盒子贴图地址 */
export const TREASURE_BOX_TEXTURE_YELLOW_URL = TREASURE_BASE_URL + 'box_Base_Color.png'
/** 红色宝箱盒子贴图地址 */
export const TREASURE_BOX_TEXTURE_RED_URL = TREASURE_BASE_URL + 'box_Base_Color_red.png'

export enum TREASURE_TYPE {
  YELLOW = 0,
  RED = 1,
}

export const DEFAULT_TREASURE_CONFIG: TreasureObjectConfig = {
  scale: 1,
  boxTextureUrl: undefined,
  objectUrl: DEFAULT_TREASURE_OBJECT_URL,
  faceAnimeTextureUrls: DEFAULT_TREASURE_FACE_ANIMATION_URLS,
}

/** 内置宝箱类型于宝箱资源的映射关系 */
export const DEFAULT_TREASURE_CONFIGS = [
  {
    type: TREASURE_TYPE.YELLOW,
    config: DEFAULT_TREASURE_CONFIG,
  },
  {
    type: TREASURE_TYPE.RED,
    config: {
      objectUrl: DEFAULT_TREASURE_OBJECT_URL,
      boxTextureUrl: TREASURE_BOX_TEXTURE_RED_URL,
      faceAnimeTextureUrls: DEFAULT_TREASURE_FACE_ANIMATION_URLS,
    },
  },
]

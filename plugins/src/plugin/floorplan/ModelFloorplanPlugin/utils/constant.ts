export const enum FloorplanErrorType {
  UnknownError = 'UnknowError',
  DataNotLoaded = 'DataNotLoaded',
  BreakOffByHide = 'BreakOffByHide',
  ModelNotLoaded = 'ModelNotLoaded',
  ChangeModeError = 'ChangeModeError',
  UpdateCameraError = 'UpdateCameraError',
  DifferentShowParams = 'DifferentShowParams',
}

/** 户型图展示 & 模型消失的默认时间 */
export const SHOW_ANIME_DURATION = 500
/** Five camera 默认 fov */
export const FIVE_CAMERA_DEFAULT_FOV = 80
/** 展示户型图时，默认模型的透明度 */
export const DEFAULT_SHOW_MODEL_OPACITY = 0.01

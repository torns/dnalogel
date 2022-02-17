import * as Controller from './Controller'
import type { FivePlugin } from '@realsee/five'

export const ModelRoomLabelPlugin: FivePlugin<
  Controller.ModelRoomLabelPluginParameters,
  ModelRoomLabelPluginReturnType
> = (five) => {
  return new Controller.ModelRoomLabelController(five)
}

export default ModelRoomLabelPlugin
export const modelRoomLabelPluginServerParams = {
  name: 'ModelRoomLabelPlugin',
  version: 0,
}
export type { ModelRoomLabelController } from './Controller'
export type { ModelRoomLabelPluginData, RoomLabel } from './typings'
export type ModelRoomLabelPluginReturnType = Controller.ModelRoomLabelController
export type { ModelRoomLabelPluginParameters } from './Controller'

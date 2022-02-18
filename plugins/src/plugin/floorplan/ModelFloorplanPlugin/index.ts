import type { FivePlugin } from '@realsee/five'
import FloorplanPluginController, { ModelFloorplanParameterType } from './Controller'

export const ModelFloorplanPlugin: FivePlugin<ModelFloorplanParameterType, ModelFloorplanPluginReturnType> = (
  five,
  params,
) => {
  return new FloorplanPluginController(five, params)
}

export default ModelFloorplanPlugin
export type ModelFloorplanPluginReturnType = FloorplanPluginController
export type { ModelFloorplanViewEvent } from './typings/events.type'
export type { FloorplanErrorType as ModelFloorplanErrorType } from './utils/constant'
export type { ModelFloorplanPluginsConfigs, ModelFloorplanParameterType } from './Controller'
export type { FloorplanEventHandlers as ModelFloorplanEventHandlers } from './typings/events.type'

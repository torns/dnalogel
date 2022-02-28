import type { FivePlugin } from '@realsee/five'
import PanoFloorplanRadarPluginController from './Controller'

export const PanoFloorplanRadarPlugin: FivePlugin<
  PanoFloorplanRadarPluginParameterType,
  PanoFloorplanRadarPluginReturnType
> = (five, params) => {
  return new PanoFloorplanRadarPluginController(five, params)
}

export default PanoFloorplanRadarPlugin
export type { PanoFloorplanRadarPluginController }
export type { PanoFloorplanRadarPluginControllerParameter } from './Controller'
export type PanoFloorplanRadarPluginReturnType = PanoFloorplanRadarPluginController
export type PanoFloorplanRadarPluginParameterType = ConstructorParameters<typeof PanoFloorplanRadarPluginController>[1]

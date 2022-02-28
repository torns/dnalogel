import { FivePlugin } from '@realsee/five'
import MeasureController, { MeasurePluginParameter } from './Controller'

const MeasurePlugin: FivePlugin<MeasurePluginParameter, PluginReturns> = function MeasurePlugin(five, params) {
  return new MeasureController(five, params)
}

export default MeasurePlugin

// 类型导出
export type PluginReturns = MeasureController
export type { PluginEvent } from './typings/event.type'
export type { LineJson, PointJson } from './typings/data'

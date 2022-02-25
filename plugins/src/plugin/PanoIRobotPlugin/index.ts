import type { FivePlugin } from '@realsee/five'

export interface PanoIRobotPluginParameterType {
  // northRad?: number
  // fbxUrl?: string
}

interface PanoIRobotPluginState {
  // yBase?: number
  // object?: THREE.Object3D
}

export interface PanoIRobotPluginExportType {
  // enable: () => void
  // disable: () => void
  // load: (northRad?: number, fbxUrl?: string) => Promise<boolean>
}

/**
 * 全景扫地机器人插件
 */
const PanoIRobotPlugin: FivePlugin<PanoIRobotPluginParameterType, PanoIRobotPluginExportType> = () => {
  return {}
}

export default PanoIRobotPlugin

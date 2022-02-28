import { FivePlugin } from '@realsee/five'
import { TreasurePluginController, TreasurePluginParameterType } from './Controller'

export const TreasurePlugin: FivePlugin<TreasurePluginParameterType, TreasurePluginReturnType> = (five) => {
  return new TreasurePluginController(five)
}

export default TreasurePlugin
export { TREASURE_TYPE } from './constants'
export type TreasurePluginReturnType = TreasurePluginController
export type { TreasurePluginItemData, TreasurePluginData, TreasurePluginItemConfigData } from './Controller'
export type { TreasurePluginController, TreasurePluginParameterType, TreasurePluginEvents } from './Controller'
export type { TreasureObject, TreasureObjectConfig, TreasureObjectParams } from './TreasureObject'
export type { TreasureFaceAnime, TreasureFaceAnimeParams } from './TreasureFaceAnime'
export type { TreasurePluginOpenAnime, TreasureOpenAnimeParams } from './TreasureOpenAnime'

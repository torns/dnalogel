import type { Five, EventCallback } from '@realsee/five'

import to from '../to'

export default async function changeMode(five: Five, ...changeModeParams: Parameters<Five['changeMode']>) {
  const [changeModeError] = await to(five.changeMode(...changeModeParams))
  if (changeModeError) throw changeModeError
  await new Promise((reslove, reject) => {
    five.once('initAnimationEnded', reslove)
    const handleModeChange: EventCallback['modeChange'] = (mode) => {
      if (mode !== changeModeParams[0]) reject('changeMode 被中断')
      five.off('modeChange', handleModeChange)
    }
    five.on('modeChange', handleModeChange)
  })
}

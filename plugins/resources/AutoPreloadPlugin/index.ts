import { FivePlugin } from '@realsee/five'
import { nextFrame } from '../../shared-utils/nextFrame'

export type AutoPreloadPluginParameterType = {
  /** 预加载使用的图片质量 */
  preloadImageSize?: number
  /** 走点时，预加载的点位个数 */
  preloadPanoIndexNumber?: number
  /** 走点时，是否使用预加载功能 */
  shouldPreloadAroundPanoImage?: (panoIndex: number) => boolean | void
}
export interface AutoPreloadPluginReturnType {
  dispose: () => void
}

/** 优化首点位加载的逻辑
 *
 * 1.进入 VR 时，如果 Five 默认的配置图片像素超过了 1024，先用 1024 加载
 * 第一个点位加载完成之后，再使用业务上配置的图片像素重复加载一遍当前点位
 *
 * 2.在走点时，会预载距离当前点位最近的 preloadPanoIndexNumber 个数的点
 * @description
 * 预载周围的点时，不会一次性全部预载。而是每隔1s，预载其中的一个点
 */
const AutoPreloadPlugin: FivePlugin<AutoPreloadPluginParameterType, AutoPreloadPluginReturnType> = (
  five,
  parameters,
) => {
  const preloadImageSize = parameters?.preloadImageSize ?? 1024
  const preloadPanoIndexNumber = parameters?.preloadPanoIndexNumber ?? 4
  const lastSize: undefined | number = five.imageOptions.size
  let timer: NodeJS.Timer | void = void 0

  const doPreload = (quene: number[]) => {
    if (quene.length === 0) return

    five.preloadPano(quene[0])
    if (quene.length === 1) return
    timer = setTimeout(() => doPreload(quene.splice(1)), 1000)
  }

  const onPanoArrived = function (panoIndex: number) {
    if (parameters?.shouldPreloadAroundPanoImage) {
      const shouldPreload = parameters.shouldPreloadAroundPanoImage(panoIndex)
      if (!shouldPreload) return
    }
    if (timer) clearTimeout(timer)
    const currentIndex = panoIndex
    const currentObserver = five.work.observers[currentIndex]

    const preloadIndexArray = Array.from(
      new Set<number>(
        five.work.observers
          .filter((observer) => observer.floorIndex === currentObserver.floorIndex)
          .map((observer) => {
            const distance = observer.standingPosition.clone().distanceTo(currentObserver.standingPosition)
            return { observer, distance }
          })
          .sort((a, b) => a.distance - b.distance)
          .slice(0, preloadPanoIndexNumber)
          .map(({ observer }) => observer.panoIndex),
      ),
    )

    doPreload(preloadIndexArray)
  }

  const onFirstPanoArrived = (panoIndex: number) => {
    // 在第一次点位加载之后再做周围点位的预载，防止第一个点位周围的点预载两次
    // 同时也防止阻塞第一个点的低分辨率图快速加载
    five.on('panoArrived', onPanoArrived)
    const shouldPreloadFirstPanoImage = five.imageOptions.size !== lastSize
    if (!shouldPreloadFirstPanoImage) return
    nextFrame(() => {
      five.imageOptions.size = lastSize
      five.moveToPano(panoIndex)
    }, 5)
  }

  five.imageOptions.size = lastSize && lastSize > preloadImageSize ? preloadImageSize : lastSize
  if (five.imageOptions.size !== lastSize) five.once('panoArrived', onFirstPanoArrived)

  return {
    dispose() {
      five.off('panoArrived', onFirstPanoArrived)
      five.off('panoArrived', onPanoArrived)
    },
  }
}

export default AutoPreloadPlugin

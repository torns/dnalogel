import type { Five } from '@realsee/five'

export default function changeModelCanvasOpacity(five: Five, opacity: number, duration = 300) {
  const fiveEle = five.getElement()
  if (!fiveEle) return
  fiveEle.style.opacity = opacity + ''
  fiveEle.style.transition = duration === 0 ? 'none' : `opacity ${duration}ms linear`
  if (duration === 0) return
  Promise.race([
    new Promise((res) => fiveEle.addEventListener('transitionend', res, { once: true })),
    new Promise((res) => setTimeout(res, duration)),
  ]).then(() => {
    fiveEle.style.transition = 'none'
  })
}

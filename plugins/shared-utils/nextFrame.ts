export function nextFrame(fn: () => void, delay = 0) {
  if (delay <= 0) requestAnimationFrame(fn)
  else requestAnimationFrame(() => nextFrame(fn, delay - 1))
}

import { useRef, useEffect, useCallback } from 'react'

/**
 * 函数节流：控制频率，限制在 `n` 秒时间。
 * @param callback 回调函数
 * @param waitFor 等待时间
 * @returns
 */
export const useThrottle = <F extends (...args: any) => any>(
  callback: F,
  waitFor: number,
): ((...args: Parameters<F>) => ReturnType<F>) => {
  const timer = useRef<NodeJS.Timer | null>()
  const savedFunc = useRef<F | null>(callback)

  useEffect(() => {
    savedFunc.current = callback
  }, [waitFor])

  return useCallback((...args: any) => {
    if (timer.current) return

    savedFunc.current?.(...args)

    timer.current = setTimeout(() => {
      if (timer.current) clearTimeout(timer.current)
      timer.current = null
    }, waitFor)
  }, []) as (...args: Parameters<F>) => ReturnType<F>
}

export default useThrottle

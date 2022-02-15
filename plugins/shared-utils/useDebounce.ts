import { useRef, useEffect, useCallback } from 'react'

/**
 * 函数防抖：指触发事件后，在 `n` 秒内函数只能执行一次，如果触发事件后在 `n` 秒内又触发了事件，则会重新计算函数延执行时间。
 * @param callback 回调函数
 * @param waitFor 等待时间
 * @returns
 */
export const useDebounce = <F extends (...args: any) => any>(
  callback: F,
  waitFor = 200,
): ((...args: Parameters<F>) => ReturnType<F>) => {
  const timer = useRef<NodeJS.Timer | null>()
  const savedFunc = useRef<F | null>(callback)

  useEffect(() => {
    savedFunc.current = callback
  }, [waitFor])

  return useCallback((...args: any) => {
    if (timer.current) {
      clearTimeout(timer.current)
      timer.current = null
    }

    timer.current = setTimeout(() => savedFunc.current?.(...args), waitFor)
  }, []) as (...args: Parameters<F>) => ReturnType<F>
}

export default useDebounce

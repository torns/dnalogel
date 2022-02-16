/**
 * 创建一个防抖动函数，该函数在高频调用时会每隔 wait 毫秒后调用 func 方法
 * `throttle` 会在第一次调用时立刻调用一次
 * @param func - 要防抖动的函数
 * @param wait - 需要延迟的毫秒数
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait = 200,
): (...args: Parameters<T>) => void {
  let last: NodeJS.Timeout | null
  return function (...args: Parameters<T>) {
    if (last) return
    func(...args)
    last = setTimeout(function () {
      last = null
    }, wait)
  }
}

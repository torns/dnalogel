/**
 * 创建一个防抖动函数，该函数会在 wait 毫秒后调用 func 方法
 * @param func - 要防抖动的函数
 * @param [wait=0] - 需要延迟的毫秒数
 */
export default function debounce<T extends (...args: any) => any>(
  func: T,
  wait = 200,
): (...args: Parameters<T>) => void {
  let last: NodeJS.Timeout
  return function (...args: Parameters<T>): void {
    clearTimeout(last)
    last = setTimeout(() => {
      func(...args)
    }, wait)
  }
}

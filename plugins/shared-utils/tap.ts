/**
 * 把第一个参数传入第二个参数（函数）中并执行
 * 一般用于执行函数后返回变量。
 * @param {any} something
 * @param {function} callback
 * @return {any}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function tap<T>(something: T, callback: (p: T) => any): T {
  callback(something)
  return something
}

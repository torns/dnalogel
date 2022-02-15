/**
 * 判断对象是否为`null`或`undefined`。
 * @param
 * @return
 */
export function isNil<T>(value: T): value is Extract<T, undefined | null> {
  return !notNil(value)
}

/**
 * 判断对象不为`null`或`undefined`。
 */
export function notNil<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

import tap from './tap'

/**
 * 对象属性筛选函数。
 * 基于已有对象生成一个满足条件(属性)新的对象。
 * @param {object} object
 * @param {Function} check
 */

export function filter<T, K extends keyof T>(object: T, check: (key: K, value: T[K]) => boolean) {
  return tap({} as Record<K, T[K]>, (result) => {
    Object.keys(object).forEach((key) => {
      const _key = key as K
      if (check(_key, object[_key])) {
        result[_key] = object[_key]
      }
    })
  })
}

/**
 * 对象镜子函数。
 * 生成一个"镜子"对象：对象的属性名与其值相同。
 * @param  {string[]} strings 对象属性
 */
export function mirror(strings: string[]) {
  return tap({} as Record<string, string>, (result) => {
    for (const string of strings) result[string] = string
  })
}

/**
 * 过滤掉不需要的对象字段函数：实现从一个对象中排除某些指定属性后生成的新对象。
 * @param object
 * @param props 排除的属性
 * @return
 */
export function omit<T, K extends keyof T>(object: T, props: Extract<K[], string[]>): Omit<T, K> {
  return tap({} as typeof object, (result) => {
    for (const name in object) {
      if (props.indexOf(name) !== -1) continue
      result[name] = object[name]
    }
  })
}

/**
 * 筛选需要的对象字段：实现从一个对象中选择某些指定属性生成新的对象（与`omit()`功能相反）。
 * @param  {object}    object
 * @param  {string[]} props
 * @return {object}
 */
export function pick<T, K extends keyof T>(object: T, props: K[]): Pick<T, K> {
  // eslint-disable-next-line no-return-assign
  return tap({} as typeof object, (result) => props.forEach((prop) => (result[prop] = object[prop])))
}

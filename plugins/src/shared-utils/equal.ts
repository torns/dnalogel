/* eslint-disable @typescript-eslint/no-use-before-define */
import isTruelyObject from './isTruelyObject'

function baseIsEqual(value: any, other: any): boolean {
  if (value === other) return true
  if (typeof value !== typeof other) return false
  if (Number.isNaN(value) && Number.isNaN(other)) return true
  return false
}

function objEqualShallow(value: any, other: any): boolean {
  const valueProps = Object.getOwnPropertyNames(value)
  const otherProps = Object.getOwnPropertyNames(other)
  if (valueProps.length !== otherProps.length) return false

  for (let i = 0, len = valueProps.length; i < len; i++) {
    const propName = valueProps[i]
    if (!baseIsEqual(value[propName], other[propName])) return false
  }

  return true
}

function arrayEqualShallow(value: any, other: any): boolean {
  if (value.length !== other.length) return false
  for (let i = 0, len = value.length; i < len; i++) {
    if (!baseIsEqual(value[i], other[i])) return false
  }
  return true
}

function isShallowEqual(value: any, other: any): boolean {
  if (baseIsEqual(value, other)) return true
  if (isTruelyObject(value) && isTruelyObject(other)) return objEqualShallow(value, other)
  if (Array.isArray(value) && Array.isArray(other)) return arrayEqualShallow(value, other)
  return false
}

function isDeepEqual(value: any, other: any): boolean {
  if (baseIsEqual(value, other)) return true
  if (isTruelyObject(value) && isTruelyObject(other)) return objEqualDeep(value, other)
  if (Array.isArray(value) && Array.isArray(other)) return arrayEqualDeep(value, other)
  return false
}

function arrayEqualDeep(value: any, other: any): boolean {
  if (value.length !== other.length) return false
  for (let i = 0, len = value.length; i < len; i++) {
    if (!isDeepEqual(value[i], other[i])) return false
  }
  return true
}

function objEqualDeep(value: any, other: any): boolean {
  const valueProps = Object.getOwnPropertyNames(value)
  const otherProps = Object.getOwnPropertyNames(other)
  if (valueProps.length !== otherProps.length) return false

  for (let i = 0, len = valueProps.length; i < len; i++) {
    const propName = valueProps[i]
    if (!isDeepEqual(value[propName], other[propName])) return false
  }

  return true
}

/**
 * 对象比较
 * @param {*} value 第一个比较的值
 * @param {*} other 第二个比较的值
 * @param {Object} options 可选参数，可选项包括：<br />
 *    deep {Boolean} 是否深比较<br />
 * @returns {boolean} 是否相等
 */
export default function equal(value: any, other: any, opt = { deep: false }): boolean {
  if (!opt.deep) return isShallowEqual(value, other)
  return isDeepEqual(value, other)
}

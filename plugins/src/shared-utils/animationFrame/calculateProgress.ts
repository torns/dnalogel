import { formatRad } from './formatRad'

const PI = Math.PI
const PI_2 = PI * 2

/**
 * 线性过程插值
 */
export function progressNumber(from: number, to: number, pst: number) {
  return from + (to - from) * pst
}

/**
 * 弧度过程插值值,会取锐角进行插值
 */
export function progressRad(from: number, to: number, pst: number) {
  from = formatRad(from)
  to = formatRad(to)

  if (to - from > PI) {
    return formatRad(progressNumber(from + PI_2, to, pst))
  }
  if (from - to > PI) {
    return formatRad(progressNumber(from - PI_2, to, pst))
  }
  return progressNumber(from, to, pst)
}

const PI_2 = Math.PI * 2

/**
 * 将弧度转成 0 - 2PI 中的值
 * @param rad - 任意弧度值
 * @return 0 - 2PI 的数值
 */
function formatRad(rad: number) {
  return ((rad % PI_2) + PI_2) % PI_2
}

export { formatRad }

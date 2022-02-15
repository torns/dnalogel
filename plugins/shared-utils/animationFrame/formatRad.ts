const PI_2 = Math.PI * 2

/**
 * 把一个任意角度的弧度值转换为一个 [0, 2PI] 的弧度值
 * @param rad 弧度值
 */
export function formatLongitude(rad: number) {
  return ((rad % PI_2) + PI_2) % PI_2
}

/**
 * 把一个任意角度的弧度值转换为一个 [-2PI, 2PI] 的弧度值
 * @param rad 弧度值
 */
export function formatLatitude(rad: number) {
  return rad % PI_2
}

/**
 * 把一个任意角度的弧度值转换为一个 [0, 2PI] 的弧度值
 * @param rad 弧度值
 */
export const formatRad = formatLongitude

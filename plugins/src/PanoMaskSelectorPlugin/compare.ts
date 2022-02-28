// 判断两个颜色是否相似
export function compare(c1: THREE.Color, c2: THREE.Color, threshold = 0.025) {
  const r = Math.abs(c1.r - c2.r)
  const g = Math.abs(c1.g - c2.g)
  const b = Math.abs(c1.b - c2.b)

  return r < threshold && g < threshold && b < threshold
}

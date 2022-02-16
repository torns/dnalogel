/**
 * 比较两个数字近似相等
 * @param num1 数字1
 * @param num2 数字2
 * @param accuracy 精度：精确到小数点后几位，默认精确到 小数点后四位
 */
export default function nearlyEqual(num1: number, num2: number, accuracy = 4) {
  return Math.floor(num1 * Math.pow(10, accuracy)) === Math.floor(num2 * Math.pow(10, accuracy))
}

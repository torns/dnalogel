/**
 * 从数组中删除
 * @param   item
 * @param   array
 * @return  如果删除返回 item
 */
export default function removeArrayItem<T>(item: T, array: T[]) {
  for (let index = 0, len = array.length; index < len; index++) {
    if (item === array[index]) return array.splice(index, 1)[0]
  }
}

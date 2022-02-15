export default function getRandomColor() {
  const color =
    '#' +
    '0123456789abcdef'
      .split('')
      .map((_v, i, a) => {
        return i > 5 ? null : a[Math.floor(Math.random() * 16)]
      })
      .join('')
  return color
}

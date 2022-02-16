export default function px2rem(_px: number | string, precision = 16) {
  const px = Number(typeof _px === 'string' ? _px.replace(/px/g, '') : _px)
  return (px / precision).toFixed(5) + 'rem'
}

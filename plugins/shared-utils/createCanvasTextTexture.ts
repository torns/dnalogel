import { CanvasTexture } from 'three'

export default function createCanvasTextTexture(
  text: string,
  config?: {
    size?: number
    fontSize?: number
    backgroundColor?: string
    fontColor?: string
    textAlign?: CanvasTextAlign
  },
) {
  const size = config?.size ?? 512
  const fontSize = config?.fontSize ?? size * (35 / 256) * 1.2
  const backgroundColor = config?.backgroundColor ?? 'rgba(0,0,0,0)'
  const fontColor = config?.fontColor ?? '#fff'
  const textAlign = config?.textAlign ?? 'center'

  const canvas = document.createElement('canvas')
  canvas.setAttribute('width', size + '')
  canvas.setAttribute('height', size + '')
  const context = canvas.getContext('2d')!
  context.fillStyle = backgroundColor
  context.fillRect(0, 0, size, size)
  context.font = `${fontSize}px "微软雅黑"`
  context.textAlign = textAlign
  context.fillStyle = fontColor
  context.fillText(text, size / 2, size * 0.7)
  return new CanvasTexture(canvas)
}

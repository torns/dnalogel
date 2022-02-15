import type { Five } from '@realsee/five'

import * as THREE from 'three'

/**
 * 获取「在俯视图」状态下，模型 mm 与屏幕像素 px 的对应关系，即每 mm 对应多少 px
 * @param five five
 */
export default function getPxmm(five: Five, container: Element) {
  const boundingCenter = new THREE.Vector3(0, 0, 0)
  five.model.bounding.getCenter(boundingCenter)
  const { y: boundingCenterY } = boundingCenter
  const { longitude } = five.getCurrentState()
  // 因为模型可能经过旋转，所以屏幕水平方向上的 1m 对应 X 轴距离需要转换
  const X = 1 / Math.abs(Math.cos(longitude))
  // 模型绕 (boundingCenterX, boundingCenterY, boundingCenterZ) 旋转
  const originPosition = new THREE.Vector3(0, boundingCenterY, 0)
  const originPositionXUnit = new THREE.Vector3(X, boundingCenterY, 0)
  const mouse = originPosition.project(five.camera)
  const xUnitMouse = originPositionXUnit.project(five.camera)
  const pxmm = Math.abs((xUnitMouse.x - mouse.x) / 1000) * (container.getBoundingClientRect().width / 2)
  return pxmm
}

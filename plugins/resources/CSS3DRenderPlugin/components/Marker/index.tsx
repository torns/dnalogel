import { useFiveEventCallback, useFiveProject2d, useFiveSceneEffect } from '@realsee/five/react'
import * as React from 'react'
import * as THREE from 'three'
import './index.css'

import { Vector3 } from 'three'
import getRandomColor from '../../../../shared-utils/getRandomColor'

type MarkerProps = {
  color?: string
  point: Vector3
  face?: {
    normal: Vector3
  } | null
}

export default function Marker(props: MarkerProps) {
  const color = React.useRef<string>(props.color || getRandomColor())

  const intersectMeshRef = React.useRef(
    new THREE.Mesh(
      new THREE.RingGeometry(0.04, 0.08, 32),
      new THREE.MeshBasicMaterial({ color: 0x12fffb, opacity: 0, side: THREE.DoubleSide, transparent: true }),
    ),
  )

  useFiveSceneEffect((scene) => {
    scene.add(intersectMeshRef.current)
    return () => scene.remove(intersectMeshRef.current)
  }, [])

  const preject2d = useFiveProject2d()
  const [state, setState] = React.useState<{ left: number; top: number; matrix?: string }>({
    left: 0,
    top: 0,
    matrix: '[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]',
  })

  const fresh = React.useCallback(() => {
    const { x, y, z } = props.point
    const vector2 = preject2d(new Vector3(x, y, z), false)
    if (!vector2) return
    const { x: left, y: top } = vector2
    let matrix
    if (props.face) {
      const normal = props.face.normal.clone()
      const positionVector = normal.clone().multiplyScalar(0.05)
      const position = props.point.clone().add(positionVector)
      intersectMeshRef.current.position.copy(position)
      const lookAtVector = position.clone().add(positionVector)
      intersectMeshRef.current.lookAt(lookAtVector)
      matrix = intersectMeshRef.current.modelViewMatrix.clone().toArray().toString()
    }
    setState({ left, top, matrix })
  }, [props.point])

  React.useEffect(() => fresh(), [props])

  useFiveEventCallback('stateChange', () => fresh())
  useFiveEventCallback('initAnimationEnded', () => fresh())

  return (
    <div
      className="Marker"
      style={{
        position: 'absolute',
        left: state.left + 'px',
        top: state.top + 'px',
        borderColor: color.current,
      }}
    >
      <div className="Marker-inner" style={{ backgroundColor: color.current }}></div>
    </div>
  )
}

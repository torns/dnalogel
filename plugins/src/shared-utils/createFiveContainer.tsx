import * as React from 'react'
import { Five, FiveInitArgs, parseWork } from '@realsee/five'
import { createFiveProvider, FiveCanvas, FiveProviderPropTypes, useFiveState } from '@realsee/five/react'
import * as THREE from 'three'
import classNames from 'classnames'

/**
 * 创建一个Five App 容器：附带 Five 相关的 React Context & Hooks。
 *
 * @param workJson
 * @returns
 */
export default function createFiveContainer(
  workJson: Record<string, any>,
  fiveInitArgs: FiveInitArgs = {},
  withOpt = false,
  initialState?: FiveProviderPropTypes['initialState'],
) {
  const work = parseWork(workJson)
  const defaultInitArgs: FiveInitArgs = {
    imageOptions: { size: 2048 },
    textureOptions: { size: 512 },
    onlyRenderIfNeeds: true,
  }
  const FiveProvider = createFiveProvider(Object.assign(defaultInitArgs, fiveInitArgs))

  const FiveContainer: React.FC = (props) => {
    const [wh, setWH] = React.useState({ width: 200, height: 540 })

    const ref = React.useRef<HTMLDivElement>(null)
    const fixedHeightRef = React.useRef<boolean>(false)

    const resizeObserverRef = React.useRef<ResizeObserver>(
      new ResizeObserver((entries) => {
        const entry = entries[0]
        const width = entry.contentRect.width
        const height = fixedHeightRef.current ? wh.height : entry.contentRect.height
        if (!ref.current) return
        if (!resizeObserverRef.current) return
        setWH({ width, height })
      }),
    )

    React.useEffect(() => {
      if (!ref.current) return
      if (!resizeObserverRef.current) return
      const rootNd = document.querySelector('#root')
      if (rootNd && rootNd.getAttribute('hidden') === 'true') {
        fixedHeightRef.current = true
      }
      resizeObserverRef.current.observe(ref.current)
    }, [])

    return (
      <>
        <FiveProvider
          initialState={initialState}
          initialWork={work}
          ref={(ref) => Object.assign(window, { $five: ref?.five, $Five: Five, $THREE: THREE })}
        >
          <div ref={ref} style={{ width: '100%', height: '100%', position: 'relative' }}>
            <FiveCanvas width={wh.width} height={wh.height} />
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                overflow: 'hidden',
              }}
            >
              {props.children}
            </div>
            {withOpt && <FiveOpt />}
          </div>
        </FiveProvider>
      </>
    )
  }

  return FiveContainer
}

function FiveOpt() {
  const [fiveState, setFiveState] = useFiveState()

  return (
    <div
      className="five-opt"
      style={{
        position: 'absolute',
        bottom: '36px',
        right: '24px',
        display: 'flex',
        flexDirection: 'column',
        pointerEvents: 'all',
        overflow: 'hidden',
      }}
    >
      <button
        className={classNames('pure-button pure-button-primary', {
          'pure-button-disabled': fiveState.mode === Five.Mode.Panorama,
        })}
        onClick={() => setFiveState({ mode: Five.Mode.Panorama })}
      >
        全景模式
      </button>
      <br />
      <button
        className={classNames('pure-button pure-button-primary', {
          'pure-button-disabled': fiveState.mode === Five.Mode.Floorplan,
        })}
        onClick={() => setFiveState({ mode: Five.Mode.Floorplan })}
      >
        三维模式
      </button>
    </div>
  )
}

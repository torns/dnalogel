// /**
//  * Usage 用途
//  */
// import { Mode, Five } from '@realsee/five'
// import { unsafe__useFiveInstance, useFiveEventCallback, useFiveState } from '@realsee/five/react'
// import classNames from 'classnames'
// import React, { useState, useRef, useEffect } from 'react'
// import ModelViewPlugin from '.'
//
// export interface ModelViewPluginUsagePropTypes {
//   width?: number
//   height?: number
// }
//
// /**
//  * `ModelViewPlugin` 独立渲染了一个 VR 3D 模型，你可以将该模型以 "**小窗**" 的形式进行展示。
//  * 这个是以 `Five Plugins` 的方式实现的，所以你可以在任何前端环境中使用。
//  * 如果你的前端技术栈是基于`React`的，组件 [ModelView](?path=/story/components-modelview--model-view-tpl) 可能更适合你。
//  *
//  * ### Usage
//  *
//  * 在初始化 `Five` 实例的时候，将 `ModelViewPlugin` 配置在初始化插件参数即可。
//  * 此时，你可以通过`five.plugins.ModelView`方式获取 `ModelViewPlugin` 实例的引用。该插件实例提供两个方法：
//  *
//  * - `appendTo(element: HTMLElement, size?: { width?: number; height?: number }): void`: 将渲染内容挂载至相关 `DOM` 节点。
//  * - `refresh(size?: { width?: number; height?: number }): void` : 强制刷新，即重新渲染一次。
//  *
//  * ### 源码参考
//  *
//  * ```jsx
//  * import ModelViewPlugin from '@realsee/dnalogel/plugins/ModelViewPlugin'
//  *
//  * const five = new Five({ plugins: [[ModelViewPlugin, 'modelView']] })
//  *
//  * five.plugins.modelView.appendTo(element)
//  * five.plugins.modelView.refresh({ width: 160, height: 180 })
//  * ```
//  *
//  */
// export default function ModelViewPluginUsage(props: ModelViewPluginUsagePropTypes) {
//   const [hidden, setHidden] = useState<boolean>(false)
//   const ref = useRef<HTMLDivElement>(null)
//   const five = unsafe__useFiveInstance()
//
//   useEffect(() => {
//     if (!ref.current) return
//     const modelView = five.plugins.ModelView as ReturnType<typeof ModelViewPlugin>
//     const height = props.height ? props.height : ref.current.clientHeight
//     const width = props.width ? props.width : ref.current.clientWidth
//     console.log({ height, width, props })
//     modelView.appendTo(ref.current, { height, width })
//   }, [])
//
//   useFiveEventCallback('modeChange', (mode: Mode) => {
//     if (mode === Five.Mode.Floorplan) {
//       return setHidden(true)
//     }
//     setHidden(false)
//   })
//
//   const [, setFiveState] = useFiveState()
//   return (
//     <div
//       className={classNames('ModelViewPlugin', {
//         'ModelViewPlugin--hidden': hidden,
//       })}
//     >
//       <div
//         className="ModelViewWrap"
//         ref={ref}
//         onClick={() => {
//           setFiveState({ mode: Five.Mode.Floorplan })
//         }}
//       ></div>
//       <button
//         className="pure-button pure-button-primary ModelViewBack"
//         onClick={() => {
//           setFiveState({ mode: Five.Mode.Panorama })
//         }}
//       >
//         ⬅︎ 返回
//       </button>
//     </div>
//   )
// }

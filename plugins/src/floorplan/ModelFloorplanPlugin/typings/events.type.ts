export interface ModelFloorplanViewEvent {
  /** 是否是用户滑动模型导致的户型图自动展示/消失 */
  auto: boolean
  /** 是否是用户操作 */
  userAction: boolean
}

// 这里用 type 是因为使用 interface Five Subscribe 会报错
export type FloorplanEventHandlers = {
  /**
   * 展示结束的回调
   * * @param event.auto 是否是自动展示
   */
  showAnimationEnded: (event: ModelFloorplanViewEvent) => void

  /**
   * 隐藏的回调
   * @param event.auto 是否是自动隐藏
   */
  hide: (event: ModelFloorplanViewEvent) => void

  /**
   * 点击户型图的回调
   * @return 当返回 false 时，会阻止默认行为
   */
  click: () => boolean | void
}

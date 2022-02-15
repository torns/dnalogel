/* eslint-disable  @typescript-eslint/no-explicit-any */
const __EVENT__ = '__events__'

/**
 * 订阅类。
 * 观察者模式（供前端使用），Node端推荐<a href="https://nodejs.org/api/events.html#events_class_eventemitter">EventEmitter</a>。
 */
export default class Subscribe {
  private [__EVENT__]: { [props: string]: any }
  constructor() {
    this[__EVENT__] = {}
  }

  /**
   * 判断是否注册时事件
   * @param  {string|[string]}  name     事件类型
   */
  hasListener(name: string) {
    const events = this[__EVENT__]
    return events && events[name] && events[name].length
  }

  /**
   * 注册事件
   * @param  {string|[string]}  names    事件类型
   * @param  {function}         callback 事件回调函数
   * @param  {any}              context  事件回调函数调用的上下文
   * @param  {boolean}          once     是否只执行一次
   */
  on(names: string | string[], callback: (...args: any[]) => void, context?: any, once = false) {
    for (const name of ([] as string[]).concat(names)) {
      if (!this[__EVENT__][name]) this[__EVENT__][name] = []
      this[__EVENT__][name].push([callback, context, once])
    }
    return () => this.off(names, callback)
  }

  /**
   * 注册事件(是否只执行一次)
   * @param  {string|[string]}  names    事件类型
   * @param  {function}         callback 事件回调函数
   * @param  {any}              context  事件回调函数调用的上下文
   */
  once(names: string | string[], callback: (...args: any[]) => void, context?: any) {
    return this.on(names, callback, context, true)
  }

  /**
   * 解除事件
   * @param  {string|[string]}  names    事件类型
   * @param  {function}         callback 事件回调函数
   *
   * 如果 name 不传的话解除对应所有事件
   * 如果 name, callback 不传的话解除所有name的所有事件
   */
  off(names?: string | string[], callback?: (...args: any[]) => void) {
    if (arguments.length === 0) {
      this[__EVENT__] = {}
      return
    }
    const hasNames = (names: any): names is string | string[] => names
    if (hasNames(names)) {
      const events = this[__EVENT__]
      for (const name of ([] as string[]).concat(names)) {
        if (events[name] === undefined) continue
        if (callback === undefined) {
          events[name].length = 0
          continue
        }
        events[name] = events[name].filter((one: any) => one[0] !== callback)
      }
    }
    return this
  }

  /**
   * 触发事件
   * @param  {string|[string]}    name      事件类型
   * @param  {...any}             data      触发事件的数据
   */
  emit(name: string, ...data: any[]) {
    let canceled = false
    const event = this[__EVENT__][name] || []
    if (event.length === 0) {
      console.warn(` 💀 "${name}" ⟶ Unregistered event. `)
    }
    for (const one of event) {
      try {
        const [callback, context = this, once = false] = one
        const result = callback.apply(context, data)
        if (once) this.off(name, callback)
        if (result === false) {
          // 如果回调的返回结果是false，则中断后续的调用链
          canceled = true
          return canceled
        }
      } catch (error) {
        console.warn(error)
      }
    }
    return canceled
  }
}

import { App, getCurrentInstance } from 'vue'
import { CLASS_PREFIX_KEY, CLASS_PREFIX_VALUE } from '../constants'

export const setGlobalConfig = (app: App): void => {
  app.config.globalProperties[CLASS_PREFIX_KEY] = CLASS_PREFIX_VALUE
}

export const getPrefixCls = (componentName?: string): string => {
  const instance = getCurrentInstance()
  const prefixCls =
    instance?.appContext.config.globalProperties[CLASS_PREFIX_KEY] ??
    CLASS_PREFIX_VALUE //这里可能会看起来很奇葩，目前以我的这种水平，只能这样写，这样写是为了在测试组件的时候发现找不到prefixCls,因为测试不会走main.ts所以就获取不到全局的prefixCls
  if (componentName) {
    return `${prefixCls}-${componentName}`
  }
  return prefixCls
}

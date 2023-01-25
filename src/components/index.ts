// 入口文件
import type { App, Plugin } from 'vue'
import * as components from './components'
export default {
  install(app: App) {
    Object.keys(components).forEach((key) => {
      app.use((components as any)[key] as Plugin)
    })
  },
}

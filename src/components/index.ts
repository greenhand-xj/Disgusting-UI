// 入口文件
import type { App, Plugin } from 'vue'
import * as components from './components'
export { Button } from './components'
export { Tree } from './components'
export default {
  install(app: App) {
    Object.keys(components).forEach((key) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      app.use((components as any)[key] as Plugin)
    })
  },
}

import type { App } from 'vue'
import Button from './src/Button'

export default {
  install(app: App) {
    app.component(Button.name, Button)
  },
}

declare module 'vue' {
  export interface GlobalComponents {
    DisButton: typeof Button
  }
}

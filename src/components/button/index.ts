import type { App } from 'vue'
import Button from './src/Button'

export * from './src/button-types'
Button.install = (app: App) => {
  app.component(Button.name, Button)
}
export default Button

declare module 'vue' {
  export interface GlobalComponents {
    DisButton: typeof Button
  }
}

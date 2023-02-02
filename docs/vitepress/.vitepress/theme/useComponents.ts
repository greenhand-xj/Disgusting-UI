import type { App } from 'vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import Button from '@components/button'

export function useComponents(app: App) {
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
  app.component(Button.name, Button)
}

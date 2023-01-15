import { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('DemoBlock', DemoBlock)
    ctx.app.component('Demo', Demo)
  },
}

import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import { setGlobalConfig } from './_utils/global-config'

import ui from '../dist'
import '../dist/style.css'

const app = createApp(App)

// 挂载全局变量
setGlobalConfig(app)
app.use(ui).mount('#app')

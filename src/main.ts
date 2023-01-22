import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import Button from './components/button'
import { setGlobalConfig } from './_utils/global-config'

const app = createApp(App)

// 挂载全局变量
setGlobalConfig(app)
app.use(Button).mount('#app')

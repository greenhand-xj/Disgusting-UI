import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import { setGlobalConfig } from './_utils/global-config'
import { Button } from 'disgusting-ui'
import 'disgusting-ui/style'
import './components/index'
const app = createApp(App)

// 挂载全局变量
setGlobalConfig(app)
app.use(Button).mount('#app')

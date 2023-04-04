import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import { setGlobalConfig } from './_utils/global-config'
// import { Button } from 'disgusting-ui'
// import 'disgusting-ui/style'

//本地测试组件的ui
import TestComps from './components/index'
const app = createApp(App)

// 挂载全局变量
setGlobalConfig(app)
app.use(TestComps).mount('#app')

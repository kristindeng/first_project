import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import elementIcon from "@/plugins/icons"
const app = createApp(App)

app.use(ElementPlus).use(elementIcon).mount('#app')

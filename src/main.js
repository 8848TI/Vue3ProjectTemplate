import '@/assets/styles/normalize.scss'

import { createApp } from 'vue'
import pinia from '@/stores'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
// 引入持久化插件
app.use(pinia)
app.mount('#app')

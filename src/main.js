import '@/assets/styles/normalize.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 引入持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// 引入持久化插件
app.use(createPinia().use(piniaPluginPersistedstate))
app.use(router)

app.mount('#app')

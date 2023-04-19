import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'animate.css'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import PiniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
pinia.use(PiniaPluginPersistedstate)

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')

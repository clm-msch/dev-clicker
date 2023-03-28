import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'animate.css'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig'
import  PiniaPluginPersistedstate  from 'pinia-plugin-persistedstate'

initializeApp(firebaseConfig)

const pinia = createPinia()
pinia.use(PiniaPluginPersistedstate)

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')

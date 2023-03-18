import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'animate.css'
import './assets/main.css'

import { createPinia } from 'pinia'
import { useStore } from './stores/store.js'

const app = createApp(App)

app.use(createPinia())

app.use(router)

app.use(createPinia());
app.provide("store", useStore());


app.mount('#app')

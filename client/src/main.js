// import { createApp } from 'vue'
// import App from './App4.vue'
// import router from './router'

// import 'animate.css'
// import './assets/main.css'

// import { createPinia } from 'pinia'

// import { initializeApp } from "firebase/app";
// import firebaseConfig from './firebaseConfig'

// initializeApp(firebaseConfig)
// const app = createApp(App)

// app.use(createPinia())

// app.use(router)

// app.use(createPinia());
// app.provide("store", useStore());


// app.mount('#app')

// other config
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'animate.css'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig'
initializeApp(firebaseConfig)
import  PiniaPluginPersistedstate  from 'pinia-plugin-persistedstate'

const app = createApp(App)

const pinia = createPinia()
pinia.use(PiniaPluginPersistedstate)
app.use(pinia)

app.use(router)

app.mount('#app')

// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import piniaPersist from 'pinia-plugin-persist'
// import 'animate.css'
// import './assets/main.css'
// import App from './App.vue'
// import router from './router'
// import { initializeApp } from "firebase/app"
// import firebaseConfig from './firebaseConfig'
// initializeApp(firebaseConfig)

//   const app = createApp(App)
// app.use (router)
// app.use(createPinia())
// const pinia = createPinia()
// pinia.use(piniaPersist)
// app.mount('#app')
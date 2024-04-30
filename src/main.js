import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Oruga from '@oruga-ui/oruga-next';


const app = createApp(App)

app.use(Oruga)
app.use(createPinia())
app.use(router)

app.mount('#app')

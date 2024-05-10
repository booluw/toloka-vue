import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '../node_modules/flowbite-vue/dist/index.css'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use( VueSplide );
app.mount('#app')

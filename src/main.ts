import { createApp } from 'vue'
import '/@/styles/global.scss'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import { createPinia } from 'pinia'

import('katex/dist/katex.css')

const router = createRouter({
  history: createWebHistory(),
  routes
})
const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')

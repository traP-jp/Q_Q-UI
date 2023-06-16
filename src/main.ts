import { createApp } from 'vue'
import './style.css'
import './styles/global.scss'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

import('katex/dist/katex.css')

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

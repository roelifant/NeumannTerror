import { createApp } from 'vue'
import App from './App.vue'
import Test from './pages/Test.vue'
import MainMenu from './pages/MainMenu.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './index.css'

const routes = [
    { path: '/', component: MainMenu },
    { path: '/test', component: Test }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')

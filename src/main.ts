import { createApp } from 'vue'
import App from './App.vue'
import Test from './pages/Test.vue'
import CreateGame from './pages/CreateGame.vue'
import MainMenu from './pages/MainMenu.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './index.css'

// name of subfolder this app will be deployed in
const urlBase = '/brol/neumann';

/**
 * Routes:
 */
const routes = [
    { path: '/', component: MainMenu },
    { path: '/test', component: Test },
    { path: '/create', component: CreateGame }
]
const router = createRouter({
  history: createWebHistory(urlBase),
  routes,
})

const app = createApp(App)

app.use(router)
app.mount('#app')

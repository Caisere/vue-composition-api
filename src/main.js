import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Products from './pages/Products.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: Home,
            component: Home
        },
        {
            path: '/about',
            name: About,
            component: About
        },
        {
            path: '/products',
            name: Products,
            component: Products
        }
    ]
})


createApp(App).use(router).mount('#app')

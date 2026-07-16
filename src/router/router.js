// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '../components/Portfolio.vue'
import Navbar from '../components/Navbar.vue'

import Vathana_router from './Vathana_router'
import additionalRoutes from './routes'

const routes = [
  ...Vathana_router,
  ...additionalRoutes,
  { path: '/portfolio', component: Portfolio },
  { path: '/navbar', component: Navbar }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

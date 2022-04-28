import Vue from 'vue'
import VueRouter from 'vue-router'
import Destacados from '../views/Destacados'
import Clasificados from '../views/Clasificados'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'destacados',
    component: Destacados
  },
  {
    path: '/clasificados',
    name: 'clasificados',
    component: Clasificados
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

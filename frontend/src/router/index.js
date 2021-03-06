import Vue from 'vue'
import VueRouter from 'vue-router'
import Destacados from '../views/Destacados'
import Clasificados from '../views/Clasificados'
import Servicios from '../views/Servicios'
import Contacto from '../views/ContactosView'

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
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: Servicios
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

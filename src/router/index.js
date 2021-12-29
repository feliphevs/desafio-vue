import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Brigida from '../views/Brigida.vue'
import Feliphe from '../views/Feliphe.vue'
import Juliano from '../views/Juliano.vue'
import Leticia from '../views/Leticia.vue'
import Vinicius from '../views/Vinicius.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/brigida',
    name: 'Brígida',
    component: Brigida
  },
  {
    path: '/feliphe',
    name: 'Feliphe',
    component: Feliphe
  },
  {
    path: '/juliano',
    name: 'Juliano',
    component: Juliano
  },
  {
    path: '/leticia',
    name: 'Letícia',
    component: Leticia
  },
  {
    path: '/vinicius',
    name: 'Vinícius',
    component: Vinicius
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

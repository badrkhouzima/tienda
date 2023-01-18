import { createRouter, createWebHistory } from 'vue-router'
import MuestraProducto from '@/views/MuestraProducto.vue'
import GaleriaView from '@/views/GaleriaView.vue'
const routes = [
  {
    path: '/',
    name: 'GaleriaView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/GaleriaView.vue')
    component: GaleriaView
  },
  {
    path: '/producto/:idProducto',
    name: 'MuestraProducto',
    component: MuestraProducto
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

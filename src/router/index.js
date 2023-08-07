import { createRouter, createWebHistory } from 'vue-router'
import Products from '../components/Products.vue'
import Dinamic from '../views/Dinamic.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/dinamic/:id',
      name: 'dinamic',
      component: Dinamic
    },
   
  ]
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import GuitarListView from '@/views/GuitarListView.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "guitarList",
      component: GuitarListView
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView
    }
  ],
})

export default router
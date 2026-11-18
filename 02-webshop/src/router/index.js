import { createRouter, createWebHistory } from 'vue-router'
import GuitarListView from '@/views/GuitarListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      parth: "/",
      name: "guitarList",
      component: GuitarListView
    }
  ],
})

export default router

// Import des fonctions createRouter et createWebHistory depuis 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

// Import des composants HomeView et ProductView depuis les fichiers correspondants
import HomeView from '../views/HomeView.vue'
import ProductView from "../views/ProductView.vue"

// Création du router en utilisant createRouter
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/products/:id',
      component:  ProductView
    }
  ]
})
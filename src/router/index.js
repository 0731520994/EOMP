
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    
    path: '/about',
    name: 'about',
   
    component: () => import('../views/AboutView.vue')
  },
  {
  
    path: '/products',
    name: 'all',
   
    component: () => import('../views/AllView.vue')
  },
  {
  path: '/categories',
  name: 'categories',
 
  component: () => import('../views/CategoriesView.vue')
},
{
  path: '/checkout',
  name: 'checkout',
 
  component: () => import('../views/CheckoutView.vue')
},
{
  path: '/contact',
  name: 'contact',
 
  component: () => import('../views/ContactView.vue')
}
];
  
  


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import producto from '../views/producto.vue'
import carcompras from '../views/carcompras.vue'
import login from '../views/login.vue'
import perfil from '../views/perfil.vue'
import homeView from "@/views/HomeView";
import register from "@/views/register";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: homeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
      path: '/productos',
      name: 'producto',
      component: producto
  },
  {
      path: '/carritocompras',
      name: 'carritocompras',
      component: carcompras
  },
  {
      path: '/login',
      name: 'login',
      component: login
  },
  {
      path: '/register',
      name: 'register',
      component: register
  },
  {
      path: '/perfil',
      name: 'perfil',
      component: perfil
  }
]

const router = new VueRouter({
  routes
})

export default router

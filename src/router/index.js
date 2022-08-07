import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import SignUp from '@/components/SignUp.vue'
import AboutUs from '@/views/AboutUs.vue'
import AllProduct from '@/views/AllProduct.vue'

const routes = [
 {path:'/',name:'home',component:Home},
 {path:'/login',name:'login',component:Login},
 {path:'/signUp',name:'signUp',component:SignUp},
 {path:'/about',name:'about',component:AboutUs},
 {path:'/allproduct',name:'allproduct',component:AllProduct}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

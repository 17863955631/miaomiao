import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import CinemaRouter from './cinema'
import mineRouter from './mine'
Vue.use(VueRouter)

const routes = [
  {
    path : "/",
    redirect : "/movie"
  },
  movieRouter,
  mineRouter,
  CinemaRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

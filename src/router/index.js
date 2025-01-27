import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import MovieSearch from '../components/MovieSearch.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movieSearch',
    name: 'MovieSearch',
    component: MovieSearch
  }
]

const router = new VueRouter({
  routes
})

export default router

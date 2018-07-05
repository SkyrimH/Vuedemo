import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/home/Homepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    }
  ]
})
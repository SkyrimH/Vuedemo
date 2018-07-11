import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/home/Homepage'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/home/Homepage'
import List from '@/pages/list/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})

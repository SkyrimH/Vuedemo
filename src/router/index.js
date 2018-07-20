import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/home/Homepage'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

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
    },
    {
      // 动态路由
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})

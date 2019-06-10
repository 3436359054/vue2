import Vue from 'vue'
import Router from 'vue-router'
import City from '@/pages/city/city.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/pages/index/index')
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})

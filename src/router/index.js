import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Hospitals from '@/components/Hospitals/all'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Hospitals.Index',
      path: '/hospitals/index',
      component: Hospitals.Index
    }    
  ]
})

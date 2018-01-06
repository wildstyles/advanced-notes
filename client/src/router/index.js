import Vue from 'vue'
import Router from 'vue-router'

import Hero from '@/components/Index'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import PublicQoutes from '@/components/public/PublicQoutes'
import PublicDiaries from '@/components/public/PublicDiaries'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Hero
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/pqoutes',
      name: 'pQoutes',
      component: PublicQoutes
    },
    {
      path: '/pdiaries',
      name: 'pDiaries',
      component: PublicDiaries
    }
  ]
})

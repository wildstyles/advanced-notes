import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store/store'

import Hero from '@/components/Index'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import PublicQoutes from '@/components/public/PublicQoutes'
import PublicDiaries from '@/components/public/PublicDiaries'
import Profile from '@/components/profile/Profile'

import Diaries from '@/components/profile/items/Diary'
import Notes from '@/components/profile/items/Notes'
import Qoutes from '@/components/profile/items/Qoutes'
import Vocabulary from '@/components/profile/items/Vocabulary'

import FullSingleItem from '@/components/profile/singleItems/FullSingleItem'

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
      path: '/public-qoutes',
      name: 'publicQoutes',
      component: PublicQoutes,
      beforeEnter: (to, from, next) => {
        store.commit('currentPage', 'publicQoutes')
        next()
      }
    },
    {
      path: '/public-diaries/:id',
      name: 'publicDiariesItem',
      component: FullSingleItem,
      props: true,
      beforeEnter: (to, from, next) => {
        store.commit('currentPage', 'publicDiaries')
        next()
      }
    },
    {
      path: '/public-diaries',
      name: 'publicDiaries',
      component: PublicDiaries,
      beforeEnter: (to, from, next) => {
        store.commit('currentPage', 'publicDiaries')
        next()
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/profile/diaries',
      name: 'diaries',
      component: Diaries,
      beforeEnter: (to, from, next) => {
        store.commit('currentPage', 'diaries')
        next()
      }
    },
    {
      path: '/profile/notes',
      name: 'notes',
      component: Notes,
      beforeEnter: (to, from, next) => {
        store.commit('currentPage', 'notes')
        next()
      }
    },
    {
      path: '/profile/qoutes',
      name: 'qoutes',
      component: Qoutes,
      beforeEnter: (to, from, next) => {
        store.commit('currentPage', 'qoutes')
        next()
      }
    },
    {
      path: '/profile/vocabulary',
      name: 'vocabulary',
      component: Vocabulary,
      beforeEnter: (to, from, next) => {
        store.commit('currentPage', 'vocabulary')
        next()
      }
    },
    {
      path: '/profile/notes/:id',
      name: 'noteItem',
      component: FullSingleItem,
      props: true,
      beforeEnter: (to, from, next) => {
        store.commit('currentPage', 'notes')
        next()
      }
    },
    {
      path: '/profile/diaries/:id',
      name: 'diaryItem',
      component: FullSingleItem,
      props: true,
      beforeEnter: (to, from, next) => {
        store.commit('currentPage', 'diaries')
        next()
      }
    }
  ]
})

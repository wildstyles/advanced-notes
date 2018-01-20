import Vue from 'vue'
import Router from 'vue-router'

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

import DiaryItem from '@/components/profile/singleItems/DiaryItem'
import NoteItem from '@/components/profile/singleItems/NoteItem'

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
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/profile/diaries',
      name: 'diaries',
      component: Diaries
    },
    {
      path: '/profile/notes',
      name: 'notes',
      component: Notes
    },
    {
      path: '/profile/qoutes',
      name: 'qoutes',
      component: Qoutes
    },
    {
      path: '/profile/vocabulary',
      name: 'vocabulary',
      component: Vocabulary
    },
    {
      path: '/profile/notes/:id',
      name: 'noteItem',
      component: NoteItem,
      props: true
    },
    {
      path: '/profile/diaries/:id',
      name: 'diaryItem',
      component: DiaryItem,
      props: true
    }
  ]
})

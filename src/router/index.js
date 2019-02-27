//とりあえずモック

import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import About from '@/components/About'
import Episode from '@/components/Episodes'
import Members from '@/components/Members'
import Twitter from '@/components/Twitter'
import Feedback from '@/components/Feedback'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Episodes',
      name: 'Episodes',
      component: Episode,
    },
    {
      path: '/Members',
      name: 'Members',
      component: Members
    },
    {
      path: `Twitter`,
      name: 'Twitter',
      component: Twitter
    },
    {
      path: 'Feedback',
      name: 'Feedback',
      component: Feedback
    },
    {
      path: '*',
      name: 'Not Found',
      component: PageNotFound,
      title: 'Not Found'
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/pages/index'
import firstItems from '@/components/pages/firstItems'
import secondList from '@/components/pages/secondList'
import aboutUs from '@/components/pages/aboutUs'
import aboutUsDetail from '@/components/pages/aboutUsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/firstItems',
      name: 'firstItems',
      component: firstItems
    },
    {
      path: '/secondList',
      name: 'secondList',
      component: secondList
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/aboutUsDetail',
      name: 'aboutUsDetail',
      component: aboutUsDetail
    }
  ]
})

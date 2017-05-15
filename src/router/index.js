import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Help from '@/components/Help/Help'
import Detail from '@/components/Detail/Detail'
import Answer from '@/components/Answer/Answer'
import Swipe from '@/components/Swipe/Swipe'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/help',
    name: 'Help',
    component: Help,
    children: [{
      path: 'detail/:id',
      component: Detail,
      children: [{
        path: ':answer',
        component: Answer
      }]
    }]
  }, {
    path: '/swipe/:id',
    name: 'Swipe',
    component: Swipe
  }]
})

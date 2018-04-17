import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginRouter from './login.router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
    ...LoginRouter,//... 表示将一个数组转为用逗号分隔的参数序列

]

const router = new Router({
  mode:'history',
  routes
})

export default router

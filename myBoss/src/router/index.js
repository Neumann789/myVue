import Vue from 'vue'
import Router from 'vue-router'
import LoginRouter from './login.router'
import HomeRouter from './home.router'

Vue.use(Router)

const routes = [
    ...LoginRouter,//... 表示将一个数组转为用逗号分隔的参数序列
    ...HomeRouter,

]

const router = new Router({
  mode:'history',
  routes
})

export default router

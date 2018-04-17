// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {heightDom, setMenuActive} from "./commons/menu";

//阻止启动生产消息，常用作指令
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  /**
   * 1. 如果已经登录，访问的是登录页面，直接重定向到主页，如果不是，则放开
   * 2. 如果没有登录，所有访问重定向到登录页
   */
  if(store.getters.getIsLogin){
    if(to.path === '/login'){
      next({path:'/'})
    }else{
      next()
    }
  }else{
    if(to.path === '/login'){
      next()
    }else{
      next('/login')
    }
  }
})
/* eslint-disable no-new */
let vue = new Vue({
  el: '#app',
  router,
  store,
  //components: { App } //vue1.0的写法
  render: h => h(App), //vue2.0的写法
  template: '<App/>'
})

heightDom(vue);

//测试发现没有生效
router.afterEach((to )=> {
  heightDom(vue)
  setMenuActive(to.path)

})

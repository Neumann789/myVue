import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'

// 使用前需要安装vuex
Vue.use(Vuex)

//详细用法参考：https://vuex.vuejs.org/zh-cn/api.html
const store = new Vuex.Store({
  modules:{
    login
  },
  strict:true
})


export default store

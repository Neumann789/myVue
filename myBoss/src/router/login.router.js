/**
 * Created by Administrator on 2018/4/18.
 */

import Login from '../views/login/login.vue'
export default [
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/logout',
    redirect:'/login'
  }
]

import Home from '../views/home/home.vue'
import HomeContent from '../views/home/home.content.vue'
import UserRoute from './sys/user.router'
export  default [
  {
    path:'/',
    name:'home',
    component:Home,
    children:[
      {
        path:'',
        component:HomeContent
      },
      ...UserRoute,
    ]
  },

]

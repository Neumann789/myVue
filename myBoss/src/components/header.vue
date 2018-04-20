<template>
  <div id="header" class="headerClass">
      <div class="logo">
        <img src="../assets/head_01.jpg" alt="logo" width="163px" height="59px"/>
      </div>

    <el-menu class="el-menu-class" mode="horizontal" @select="handleSelect">
      <el-menu-item index="0">
        <i class="icon-user icon-large"></i>
        欢迎：{{userData.name}}
      </el-menu-item>
      <el-menu-item index="9-3">
        <i class="icon-off icon-large"></i>
        退出
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script>
  import {CURRENT_LOGIN_INFO} from "../store/mutation-types";
  import { read } from '../storage/session'

  export default {
    data(){
      return {
        userData:{},
        path:''
      }
    },
    mounted(){
      const userData = read(CURRENT_LOGIN_INFO)
      if(userData){
        this.userData = userData.currentUser
      }else{
        this.$router.push({path:'/'})
      }
    },
    computed:{
      'menu'(){
        const menu = this.$store.state.menu.currentMenuActive
        const headers = this.$store.state.header.headerMenus
        return {}
      }
    },

    methods:{
      handleSelect(url){
        if(url ==='9-3'){
          this.$store.dispatch('loginOut').then(()=>{
            location.reload()
          })
        }

        if(/\d+/.test(url)|| url ==='') return
        this.$router.replace({path:'/'+url})
      }
    }
  }
</script>

<style>

  #header .logo{
    float: left;
    margin: 6px 0 0 15px;
  }

  #header .el-menu{
    float: right;
    margin: 9px 0 0;
    background: none;
    border-bottom: none;
  }
  #header .el-menu-item {
    color: #fff;
    border-bottom: none;
  }

  #header .el-menu-item:hover {
    color: #1c8de0;
    border: none;
    background-color: #334057;
  }
 #header .el-menu-item:visited{
    border: none;
    background-color: #334057;
  }
  .header-message {
    width: 300px;
  }


  .el-menu--horizontal .el-submenu > .el-menu {
    top: 50px;
    border-top: none;
  }

  #header .el-submenu__title {
    height: 50px;
    line-height: 50px;
  }

  #header .photo {
    height: 40px;
    width: auto;
    margin-right: 5px;
  }

  .el-menu {
    border-radius: 0;
  }

  .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item, .el-menu--horizontal.el-menu--dark .el-submenu .el-submenu-title {
    color: #c0ccda;
  }



  .el-menu--horizontal .el-submenu__icon-arrow {
    display: none;
  }

  .el-menu-class {
    height: 60px;
  }
</style>

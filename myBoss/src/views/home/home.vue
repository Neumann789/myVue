<template>
  <div id="homeDiv">
    <div class="header-class">
      <header-component></header-component>
    </div>
    <div class="main-class">
      <menu-component></menu-component>
      <div class="content-class">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
  import headerComponent from '../../components/header.vue'
  import menuComponent from '../../components/menu.vue'
  export default {
    components:{
      headerComponent,
      menuComponent
    }
  }

</script>


<style rel="stylesheet/scss" lang="scss">
  #homeDiv{
    width:100%;
    height:100%;
    //内容会被修剪，并且其余内容是不可见的。
    overflow: hidden;

  }

  .header-class {
    background: #334057;
    height: 74px;
  }

  .main-class{
    padding-left: 200px;
    width: auto;
    height:900px;
    overflow: hidden;
    position: relative;
  }

  .content-class{
    height:100%;
    width: 98%;
    padding:20px 0 0;
    margin:0 auto;
    float:left;
  }
</style>

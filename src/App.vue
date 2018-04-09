<!-- 展示模板 -->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>site : {{site}}</h1>
    <h1>url : {{url}}</h1>
    <h1>{{details()}}</h1>
    <hello></hello>

  </div>
</template>

<script>
// 导入组件
import Hello from './components/Hello'

export default {
  name: 'app',
  data: function () {
    return {
      site: "菜鸟教程",
      url: "www.runoob.com",
      alexa: "10000"
    };
  },
  methods: {
    details: function() {
      return  this.site + " - 学的不仅是技术，更是梦想！";
    }
  },
  components: {
    Hello
  }
}
</script>
<!-- 样式代码 -->
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

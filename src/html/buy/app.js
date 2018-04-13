/**
 * Created by Administrator on 2018/4/13.
 */
//定义三个页面组件
//首页组件
var HomeComponent = Vue.extend({
  template:'<h1>home</h1>'
})

//定义列表页组件
var ListComponent = Vue.extend({
  template:'<h1>list</h1>'
})


//定义商品页组件
var ProductComponent = Vue.extend({
  template:'<h1>product</h1>'
})

//注册组件
Vue.component('home',HomeComponent)
Vue.component('list',ListComponent)
Vue.component('product',ProductComponent)

Vue.component('hello',{
  template: '<h1>hello</h1>'
})

Vue.component('world',{
  template: '<h1>world</h1>'
})


//创建vue实例化对象
var app = new Vue({
  el:'#app',
  data:{
    view:'home'
  }
})

//路由函数
function router () {
  //获取hash
  var str = location.hash;
  //console.log('hash为'+str);
  //处理#
  str = str.slice(1);
  str = str.replace(/^\//,'')
  //console.log('hash为'+str);
  if(str.indexOf('/')>-1){
    str = str.slice(0,str.indexOf('/'))
  }

  var map = {
    home:true,
    list:true,
    product:true
  }

  if(map[str]){
    app.view = str;
  }else{
    app.view = 'home';
  }
  //console.log(str)
}

//页面进入的时候  会触发load事件，我们要根据hash来决定进入那个页面
window.addEventListener('load',router)

// hash改变时候的事件交给hashchange事件
window.addEventListener('hashchange',router)


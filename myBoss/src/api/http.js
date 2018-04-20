import Vue from 'vue'
import axios from "axios";
import Utils from "../commons/utils";

//const  BossURL = 'http://127.0.0.1:8080';
const  BossURL = 'http://192.168.188.23:8080';

//为什么此处axios不需要调Vue.use呢？ TODO
axios.defaults.baseURL = BossURL + '/boss'

//添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    const sessionId = Utils.getLoginSessionId();
    config.headers.sessionId = sessionId
    return config
},function (error) {
  return Promise.reject(error)
})

//添加一个响应拦截器
axios.interceptors.response.use(function (res) {
  res.body = res.data
  return res
},function (error) {
  return Promise.reject(error)
})

export default {
  BossURL,
  get:function (url, body) {
    body = body || {}
    return new Promise((resolve,reject) => {
      axios.get(url,body).then((resp) => {
        if(resp.body.respCode && (resp.body.respCode ==='000000' && resp.body.resultCode !== '0000')){
          // 业务报错
          console.log('接口错误',resp.body)
          //token过期退出登录
          if(resp.body.resultCode ==='OP2017'){
            Utils.clear('',true)
            location.replace('/')
          }
          new Vue().$notify({
            title:'提示',
            message:resp.body.resultMsg,
            type:'error',
            duration:'2000'
          })
          throw new Error()
        }else if(resp.body.respCode && resp.body.respCode != '000000'){
          //系统报错
          console.log('接口错误',resp.body)
          new Vue().$notify({
            title:'提示',
            message:resp.body.resultMsg,
            type:'error',
            duration:'2000'
          })
          throw new Error()
        }
        resolve(resp)
      }).catch((error)=>{
        reject(error)
      })
    })
  },
  post:function (url, body) {
    return new Promise((resolve, reject) => {
      axios.post(url, body).then((resp) => {
        if (resp.body.respCode && (resp.body.respCode === '000000' && resp.body.resultCode !== '0000')) {
          // 业务报错
          console.log('接口错误：', resp.body)

          // token过期退出登陆
          if (resp.body.resultCode === 'OP2017') {
            Utils.clear('', true)
            location.replace('/')
          }
          new Vue().$notify({
            title: '提示',
            message: resp.body.resultMsg,
            type: 'error',
            duration: '2000'
          })
          throw new Error()
        } else if (resp.body.respCode && resp.body.respCode !== '000000') {
          // 系统报错
          console.log('接口错误：', resp.body)
          new Vue().$notify({
            title: '提示',
            message: resp.body.resultMsg,
            type: 'error',
            duration: '2000'
          })
          throw new Error()
        }
        resolve(resp)
      }).catch((error) => {
        reject(error)
      })
    })
  }

}

import {CURRENT_LOGIN_INFO,LOGIN_OUT,LOGIN_SESSION_ID} from '../mutation-types'
import {clear, read, save} from "../../storage/session/index";
import {loginAuth} from "../../api/login.service";

const  state = {
  isLogin:false,
  currentUser:{}
}

const mutations = {
  [CURRENT_LOGIN_INFO](state,userInfo){
    state.isLogin = true
    state.currentUser = userInfo
    save(CURRENT_LOGIN_INFO, state)
  },
  [LOGIN_OUT](state){
    state.isLogin = false
    state.currentUser = {}
  }
}

const actions = {
  saveCurrentLoginInfo({commit},params){
    return loginAuth(params).then((res) => {
      commit(CURRENT_LOGIN_INFO,Object.assign(res.body.data,{sessionId:res.body.sessionId}))
      save(LOGIN_SESSION_ID,{sessionId:res.body.sessionId})
    })
  },
  loginOut({commit}){
    return new Promise(function (resolve) {
      commit(LOGIN_OUT)
      clear(CURRENT_LOGIN_INFO,true)
      resolve()
    })
  }
}

const getters = {
  getCurrentLoginInfo(){
    return read(CURRENT_LOGIN_INFO)
  },
  getIsLogin(state){
    if(read(CURRENT_LOGIN_INFO)|| state.isLogin){
      return true
    }else{
      return false
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}



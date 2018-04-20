
import {HEAHER_MENU_DATA} from "../mutation-types";
import {getMenuSrv} from "../../api/header.service";
import utils from "../../commons/utils";

const state = {
  headerMenus:{}
}

const mutations = {
  [HEAHER_MENU_DATA](state,menus){
    state.headerMenus = menus
  }
}

const  actions = {
  getMenu({commit},params){
    return getMenuSrv(params).then((res)=>{
      commit(HEAHER_MENU_DATA,res.body.data);
      return utils.toJsonFromVue(res.body.data)
    })
  }
}

const getters = {
  getMenuList(state){
    return utils.toJsonFromVue(state.headerMenus)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

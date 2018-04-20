
import {POWER_CTRL_DATA, POWER_PARAMS_DATA, SAVE_CURRENT_MENU_ACTIVE, SAVE_CURRENT_NAV_ACTIVE} from "../mutation-types";
import {save} from "../../storage/session/index";

const state = {
  currentMenuActive:'1',
  currentNavActive:'',
  powerData:{},
  powerParams:{}
}

const mutations = {
  [SAVE_CURRENT_MENU_ACTIVE] (state, active){
    state.currentMenuActive = active
  },
  [SAVE_CURRENT_NAV_ACTIVE](state,active){
    state.currentNavActive = active
  },
  [POWER_PARAMS_DATA](state,active){
    state.powerParams = active
  },
  [POWER_CTRL_DATA](state,active){
    state.powerData = active
  }
}

const actions = {
  saveCurrentMenuActiveAction({commit},active){
    commit(SAVE_CURRENT_MENU_ACTIVE,active)
    save('currentNavActive',active)
  },
  saveCurrentNavActiveAction({commit},active){
    commit(SAVE_CURRENT_NAV_ACTIVE,active)
    save('currentNavActive',active)
  }

}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}

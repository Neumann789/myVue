
import store from "../store/index";
import * as _ from "../../lib/lodash/lodash";//TODO
import {clear, read, save} from "../storage/session/index";
import {LOGIN_SESSION_ID} from "../store/mutation-types";

/**
 * 获取当前用户 SessionId
 * @returns {*}
 */
function getLoginSessionId() {
  const currentUser = store.state.login.currentUser;
  if(_.isUndefined(read()) && !currentUser.sessionId){
      return ''
  }else{
      return read(LOGIN_SESSION_ID).sessionId || currentUser.sessionId;
  }
}

function toJsonFromVue(obj) {
  if(obj == null) return obj
  else return JSON.parse(JSON.stringify(obj))
}

export default {
  getLoginSessionId,
  save,
  clear,
  read,
  toJsonFromVue,
}



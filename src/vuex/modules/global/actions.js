
import {UPDATE_BREAD,SHOW_ALERT_DATA} from './mutation-type'


export const updateBread = ({ commit }, params) => {
  commit(UPDATE_BREAD, params);
};

export const showAlert=({commit},params)=>{
  commit(SHOW_ALERT_DATA,params);
};


/**
 * 提示信息
 * type:success,info,danger,warning
 * */
export const showMsg=function (commit,msg,type) {
  let al = {show: true, msg: msg, type: type};
  commit(SHOW_ALERT_DATA, al);
}

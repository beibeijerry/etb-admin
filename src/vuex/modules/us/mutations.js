import {
  CHANGE_LEFTNAV_STATE,
  START_LOADING,
  FINISH_LOADING,
  LOGIN_STATE,
  LOGIN_ERROR,
  GET_ADMIN_INFO,
  ERROR_STATE,
  GET_MEMBER_LIST,
  GET_MEMBER_LEVEL_LIST
} from './mutation-type'

const mutations = {
  // 切换左侧导航的显示状态
  [CHANGE_LEFTNAV_STATE] (state, isShow) {
    state.leftNavState = isShow
  },
  [START_LOADING] (state) {
    state.loading = true
  },
  [FINISH_LOADING] (state) {
    state.loading = false
  },
  [LOGIN_STATE](state){
    state.auth=true
  },
  [LOGIN_ERROR](state){
    state.auth=false
  },
  [GET_ADMIN_INFO](state,adminInfo)
  {
    state.userInfo=adminInfo
  },
  [ERROR_STATE](state){

  },
  [GET_MEMBER_LIST](state,data){
    state.members=data.data;
  },
  [GET_MEMBER_LEVEL_LIST](state,data){
    data.unshift({name: '全部'})
    state.membersLevelList=data;
  }

}
export default mutations

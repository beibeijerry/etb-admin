import {
  CHANGE_LEFTNAV_STATE,
  START_LOADING,
  FINISH_LOADING,
  LOGIN_STATE,
  LOGIN_ERROR
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
  }
}
export default mutations

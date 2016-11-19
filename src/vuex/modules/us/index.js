/**
 * Created by zhengguorong on 16/6/23.
 */
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
  leftNavState: false,
  loading: false,
  auth:false,
  userInfo:{},
  members:{
    pageIndex:1,
    pageTotal: 0,
    pageSize: 10,
    totalRecord:0,
    data:[]
  },
  membersLevelList:[]
}

export default{
  state,
  actions,
  getters,
  mutations
}

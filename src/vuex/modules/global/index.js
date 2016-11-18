/**
 * Created by muran001 on 16/11/11.
 */

import {bread} from '../../../components/config'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
const state = {
  breads: [],
  current_node: bread['welcome'],
  pageData: {
    pageIndex:1,
    pageTotal: 0,
    pageSize: 10,
    totalRecord:0,
  }
}

export default{
  state,
  getters,
  actions,
  mutations
}

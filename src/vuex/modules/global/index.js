/**
 * Created by muran001 on 16/11/11.
 */

import {bread} from '../../../components/config'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
const state = {
  breads:[],
  current_node:bread['welcome']
}

export default{
  state,
  getters,
  actions,
  mutations
}

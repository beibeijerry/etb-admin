import {
  UPDATE_BREAD,
  SHOW_ALERT_DATA
}  from './mutation-type'
import {bread} from '../../../components/config'
const mutations = {
   //更新面包器
  [UPDATE_BREAD](state,currRouter){
    state.breads=[];
    state.current_node = bread[currRouter.name];
    if (state.current_node !== undefined && state.current_node.hasOwnProperty('parent')) {
      var parent = state.current_node.parent;
      state.breads.push(state.current_node);
      while (parent) {
        var parent_node = bread[parent];
        state.breads.unshift(parent_node);
        parent = parent_node.parent;
      }
    }
  },
  [SHOW_ALERT_DATA](state,param){
    state.alert=param;
  }

}
export default mutations

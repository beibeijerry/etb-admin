
import {UPDATE_BREAD,GET_PAGE_DATA} from './mutation-type'


export const updateBread = ({ commit }, params) => {
  commit(UPDATE_BREAD, params);
};

export const getPageData=({commit},params)=>{
  commit(GET_PAGE_DATA,params);
};

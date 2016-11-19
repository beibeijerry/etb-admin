import us from '../../../api/us-api'

import {
  LOGIN_STATE,LOGIN_ERROR,GET_ADMIN_INFO
  ,GET_MEMBER_LIST,ERROR_STATE,GET_MEMBER_LEVEL_LIST,
  GET_MEMBER_DETAIL
} from './mutation-type'

//登陆
export const adminLogin = ({ commit }, params) => {
  const req = us.adminLogin(params).then((data) => {
    commit(LOGIN_STATE, data.data);
    us.getAdminByUsername(params).then((data)=>
    {
      commit(GET_ADMIN_INFO,data.data);
    });
    window.sessionStorage.setItem("sessionId",data.data.value);
    return Promise.resolve(data);
  }).catch((error) => {
    commit(LOGIN_ERROR, error.data);
      return Promise.reject(error);
    });
  return req;
};

//会员列表
export const getMembers=({commit},params)=>{
  const req = us.getUserPageList(params).then((data) => {
    commit(GET_MEMBER_LIST, data);
    return Promise.resolve(data);
  }).catch((error) => {
    commit(ERROR_STATE, error.data);
    return Promise.reject(error);
  });
  return req;
};

//会员级别
export const getMemberLevelList=({commit})=>{
  const req=us.getGradeList().then((ret)=>{
    commit(GET_MEMBER_LEVEL_LIST, ret.data);
    return Promise.resolve(ret);
  }).catch((error)=>{
    commit(ERROR_STATE, error.data);
    return Promise.reject(error);
  })
  return req;
};

//会员详情
export const getMemberDetail=({commit},params)=>{
  const req=us.getUserInfo(params).then((ret)=>{
    commit(GET_MEMBER_DETAIL, ret.data);
    return Promise.resolve(ret);
  }).catch((error)=>{
    commit(ERROR_STATE, error.data);
    return Promise.reject(error);
  })
  return req;
};

import us from '../../../api/us-api'
import {LOGIN_STATE,LOGIN_ERROR} from './mutation-type'

export const adminLogin = ({ commit }, params) => {
  const req = us.adminLogin(params).then((data) => {
    commit(LOGIN_STATE, data.data);
    window.sessionStorage.setItem("sessionId",data.data.value);
    return Promise.resolve(data);
  }).catch((error) => {
    commit(LOGIN_ERROR, error.data);
      return Promise.reject(error);
    });
  return req;
};

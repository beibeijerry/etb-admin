import Vue from 'vue';
import Vuex from 'vuex';
import ac from './modules/ac';
import us from './modules/us';
import global from './modules/global'
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    ac,
    us,
    global
  },
  strict: debug,
});

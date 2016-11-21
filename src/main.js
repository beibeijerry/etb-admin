import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import VueValidator from 'vue-validator';
import VueResource from 'vue-resource';

import 'assets/fonts/glyphicons-pro/glyphicons-pro.css'
import 'assets/fonts/icomoon/icomoon.css'
import 'assets/skin/default_skin/css/theme.css'
import 'assets/admin-tools/admin-forms/css/admin-forms.css'
import '../static/styles/main.css'
import '../static/styles/dialog.css'
import '../static/styles/weui.css'
import App from './App'
import Login from './pages/Login'
import Main from './pages/Main'
import env from '../config/dev.env'
import store from './vuex/store'
import Member from './pages/user/Member.vue'
import MemberLevel from './pages/user/MemberLevel.vue'
import lodash from 'lodash'

import '../config/conf'
import * as filters from './filters'
Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VueValidator);
Vue.use(VueResource);
Vue.use(lodash);

var VueNotify = require('vue-notify');
Vue.use(VueNotify);
window.notify = new VueNotify({
      maxLength: 3
});

Vue.config.devtools = true;

// VueResource 配置
Vue.http.interceptors.push((request,next)=>{
  var sessionId = window.sessionStorage.getItem("sessionId");
  if(sessionId!=null)
    request.headers.set('session-id', sessionId);
  request.headers.set('user-sys', env.user_sys);
  request.headers.set('version',env.user_sys);
  request.headers.set('client-ip', env.user_sys);
  request.headers.set('client-key', env.user_sys);
  request.headers.set('client-net-env',env.user_sys);
  next((response)=>{
    if (response.status === 400 || response.status === 401) {
      // 当 sessionId 已经失效时，清空所有保存在 localStorage 的数据
      window.sessionStorage.clear();
    }
  });
})

// Register email validator function.
Vue.validator('email', (val) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val));
// Register url validator function.
Vue.validator('url', (val) => /^(http\u003a\/\/|https\u003a\/\/)(.{4,})$/.test(val));

// 自定义过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
var router = new VueRouter({
  history:true,
  saveScrollPosition: false,
  transitionOnLoad: true,
  linkActiveClass: 'active',
  routes: [
    {path: '/login', name:'login', component: Login},
    {path: '/main', name:'main',component: Main,children:[
      {path:'/member',name:'member',component:Member},
      {path:'/memberLevel',name:'memberLevel',component:MemberLevel},
    ]},
    {path: '*', redirect: '/login'},
  ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App,alert}
});

/**
 * Created by muran001 on 16/11/26.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Login from 'pages/Login'
import Main from 'pages/Main'
import Member from 'pages/user/Member.vue'
import MemberLevel from 'pages/user/MemberLevel.vue'
import publish from 'pages/sh/publish.vue'
import welcome from 'pages/welcome.vue'

export default function(){
 var router=new VueRouter({
    history:true,
    saveScrollPosition: false,
    transitionOnLoad: true,
    linkActiveClass: 'active',
    routes: [
      {path: '/login', name:'login', component: Login},
      {path: '/main', name:'main',component: Main,children:[
        {path:'/welcome',name:'welcome',component:welcome},
        {path:'/member',name:'member',component:Member},
        {path:'/memberLevel',name:'memberLevel',component:MemberLevel},
        {path:'/publish',name:'publish',component:publish}
      ]},
      {path: '*', redirect: '/login'},
    ]
  });
  return router;
}

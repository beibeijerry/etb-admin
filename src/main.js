import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Login from './components/Login'
import Main from './components/Main'

Vue.use(VueRouter)
var router = new VueRouter({
  routes: [
    {path: '/login', component: Login},
    {path: '/main', component: Main,children:[
    ]},
    {path: '*', redirect: '/login'},
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: {App}
})

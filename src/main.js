import Vue from 'vue'
import VueRouter from 'vue-router';

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/Profile'

Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    {path:'/',component : Home},
    {path:'/About',component:About},
    {path:'/Contact',component:Contact},
    {path:'/Profile/:id',component:Profile}
  ],
  mode:'history'
})

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})

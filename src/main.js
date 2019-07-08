import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入bootstrap.css和index.css
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

// 导入 HeroList 组件
import HeroList from './views/heroes/HeroList.vue'

//1. 加载路由模块 VueRouter
import VueRouter from 'vue-router'
// 2.配置Vue的插件 VueRouter
Vue.use(VueRouter) 

// 3.配置路由规则
const router = new VueRouter({
  routes:[
    // 4.配置路由
    {name:'home',path:'/',redirect:'/hero'},
   {name:'HeroList',path:'/hero',component:HeroList}
  ]
})



new Vue({
  render: h => h(App),
  // 配置路由对象 router
  router,
}).$mount('#app')

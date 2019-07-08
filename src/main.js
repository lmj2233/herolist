import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入bootstrap.css和index.css
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

// 设置全局的axios
// 挂载到Vue实例上,给Vue的构造函数增加成员 原型
import axios from 'axios'
Vue.prototype.axios= axios

// 导入路由对象 router
import router from './router'

new Vue({
  render: h => h(App),
  // 配置路由对象 router
  router,
}).$mount('#app')




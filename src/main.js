import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入bootstrap.css和index.css
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

// 导入路由对象 router
import router from './router'

new Vue({
  render: h => h(App),
  // 配置路由对象 router
  router,
}).$mount('#app')

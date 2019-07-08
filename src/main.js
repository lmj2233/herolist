import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入bootstrap.css和index.css
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

// 导入 HeroList 组件
import HeroList from './views/heroes/HeroList.vue'

new Vue({
  render: h => h(App),
}).$mount('#app')

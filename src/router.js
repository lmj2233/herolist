// 导入Vue (没有Vue)
import Vue from 'vue'


//1. 加载路由模块 VueRouter
import VueRouter from 'vue-router'

// 导入 HeroList 组件
import HeroList from './views/heroes/HeroList.vue'
// 导入 WeaponList 组件
import WeaponList from './views/weapons/WeaponList.vue'
// 导入 EquipList 组件
import EquipList from './views/equips/EquipList.vue'


// 2.配置Vue的插件 VueRouter
Vue.use(VueRouter) 

// 3.配置路由规则
const router = new VueRouter({
  routes:[
    // 4.配置路由
    {name:'home',path:'/',redirect:'/hero'},
   {name:'HeroList',path:'/hero',component:HeroList},
   {name:'WeaponList',path:'/weapon',component:WeaponList},
   {name:'EquipList',path:'/equip',component:EquipList},
  ],
  linkExactActiveClass:'active',
})

// 导出路由对象 router
export default router
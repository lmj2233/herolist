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

// 导入 HeroAdd 组件
import HeroAdd from './views/heroes/HeroAdd.vue'
// 导入 HeroEdit 组件
import HeroEdit from './views/heroes/HeroEdit.vue'

// 2.配置Vue的插件 VueRouter
Vue.use(VueRouter) 

// 3.配置路由规则
const router = new VueRouter({
  linkActiveClass:'active',
  routes:[
    // 4.配置路由
    {name:'home',path:'/',redirect:'/hero'},
   {name:'HeroList',path:'/hero',component:HeroList},
   {name:'WeaponList',path:'/weapon',component:WeaponList},
   {name:'EquipList',path:'/equip',component:EquipList},
  //  因为路径少写了/hero，导致找不到add
   {name:'HeroAdd',path:'/hero/add',component:HeroAdd},
  //  缺少传入的id
   {name:'HeroEdit',path:'/hero/edit/:id',component:HeroEdit,props:true},

  ],
  // 精确类名
  // linkExactActiveClass:'active',
  // linkActiveClass:'active'
})

// 导出路由对象 router
export default router
<template>
  <div id="app">
    <!-- 头部 -->
  <AppHeader></AppHeader>

  <div class="container-fluid">
    <div class="row">
      <!-- 侧边栏 -->
      <AppSilder></AppSilder>
      <!-- 英雄列表部分 占位-->
      <router-view></router-view>
    </div>
  </div>
  </div>
</template>

<script>
// 导入 AppHeader 组件
import AppHeader from './components/AppHeader.vue'
// 导入 AppSilder 组件
import AppSilder from './components/AppSilder.vue'


export default {
  name: 'app',
  components: {
    // 注册组件
   AppHeader,
   AppSilder,
  }
}
</script>

<style>
</style>

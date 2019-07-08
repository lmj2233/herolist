<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <!-- <li class="active">
        <a href="#">英雄列表</a>
      </li> -->
      <router-link to="/hero"  tag="li" >
      <a href="">英雄列表</a>
      </router-link>
      <router-link to="/weapon" tag="li">
      <a href="">武器列表</a>
      </router-link>
      <router-link to="/equip" tag="li">
      <a href="">装备列表</a>
      </router-link>
      <!-- <li>
        <a href="#">武器列表</a>
      </li>
      <li>
        <a href="#">装备列表</a>
      </li> -->
    </ul>
  </div>
</template>

<script>
linkExactActiveClass:'active'
export default {};
</script>

<style lang="less" scoped>
</style>

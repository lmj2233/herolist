<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄列表</h2>
    <!-- <a class="btn btn-success" href="add.html">添加</a> -->
    <router-link class="btn btn-success" :to="{name:'HeroAdd'}">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(val,index) in list" :key="val.id">
            <td>{{ index +1 }}</td>
            <td>{{ val.name }}</td>
            <td>{{ val.gender }}</td>
            <td>
              <!-- <a href="edit.html">edit</a> -->
              <!-- <router-link :to="{name:'HeroEdit',params:{id:val.id}}">编辑</router-link> -->
              <router-link :to="'/hero/edit/' + val.id">编辑</router-link>
              &nbsp;&nbsp;
              <a href="javascript:" @click="del(val.id)">删除</a>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 引入 axios node_modules中的直接导入可以不写准确路径
// import axios from 'axios'

export default {
  data(){
    return {
      list:[]
    }
  },
  mounted(){
    // 调用getData()方法，渲染数据
    this.getData()
  },
  methods:{
    // 从db.json中获取数据
    getData(){
      this.axios.get('http://localhost:3000/heroes')
      .then((res)=>{
        // 解构赋值
        const { status , data }=res
        // console.log(data)
        if( status===200 ){
          // 将获取的数据给list
          this.list=data
        }
      })
      .catch((err)=>{
        alert('系统错误'+err)
      })
    },
    // 删除操作,要传递选中删除的id
    del(ID){
      // 不删除
      // if(!confirm('确定删除吗？')){
      //   return false
      // }
      // 删除成功
      if(confirm('确定要删除吗？')){
        this.axios.delete(`http://localhost:3000/heroes/${ID}`)
      .then((res)=>{
        // console.log(res)
        // 解构赋值，单个数据要有.status
        const status = res.status
        // console.log(res.data+'1')
        if(status === 200){
          // 更新页面列表
          this.getData()
        }
      })
      .catch((err) => {
        alert('系统错误'+err);
      })
      }
    },

  }
};
</script>

<style lang="less" scoped>
</style>

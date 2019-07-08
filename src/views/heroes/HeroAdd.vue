<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="姓名" v-model="formData.name"/>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>
        <select class="form-control" v-model="formData.gender">
            <option value="男">男</option>
            <option value="女">女</option>
        </select>
      </div>
      <!-- 阻止默认事件的发生，默认自动提交 -->
      <button @click.prevent="add" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
// 导入 axios
import axios from 'axios'

export default {
    data(){
        return {
            // 表单双向绑定数据，进行收集输入的数据，方便添加到列表中
            formData:{
                name:"",
                gender:"男"
            }
        }
    },
    methods:{
        add(){
            axios.post('http://localhost:3000/heroes',this.formData)
            .then((res)=>{
                // post指令：状态码201
                if(res.status === 201){
                    // 返回到英雄列表的首页
                    this.$router.push({name:'HeroList'})
                }
            })
            .catch((err)=>{
                alert('系统错误'+err)
            })
        }
    }
};
</script>

<style lang="less" scoped>
</style>

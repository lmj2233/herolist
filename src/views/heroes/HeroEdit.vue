<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">编辑英雄</h2>
    <form>
      <div class="form-group">
        <label for="textName">姓名</label>
        <input  type="text"  class="form-control" id="textName" v-model="formData.name"
          placeholder="姓名"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>
        <select class="form-control" v-model="formData.gender">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <button @click.prevent="update" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
// 导入axios
import axios from 'axios'
export default {
    // 获取到传过来的id
     props:['id'],
    data(){
        return {
            formData:{
                name:'',
                gender:'男'
            }
        }
    },
    // 跳转后渲染数据
    mounted(){
        this.reqData()
    },
    methods:{
        // 请求数据,渲染到页面
        reqData(){
            this.axios.get(`heroes/${this.id}`)
            .then((res)=>{
                if(res.status ===200){
                    this.formData=res.data
                }
            })
            .catch((err)=>{
                alert('系统错误'+err)
            })
        },
        // 修改,提交数据
        update(){
          // id没有传递，找不到要修改的数据
          this.axios.put(`heroes/${this.id}`,this.formData)
          .then((res)=>{
            // 跳转到英雄列表首页
              console.log(1)
              // console.
            if(res.status === 200){
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

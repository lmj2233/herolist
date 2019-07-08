<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="姓名" />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>
        <select class="form-control">
            <option value="男">男</option>
            <option value="女">女</option>
        </select>
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
</style>

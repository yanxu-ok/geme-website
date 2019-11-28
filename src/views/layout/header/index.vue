<template>
  <div class="header">
    <div class="header-top">
      <el-button size="small" type="text">注册</el-button>
      <el-button size="small" type="text">登录</el-button>
    </div>
    <div class="header-container">
      <logo/>
      <search/>
    </div>
    <navbar/>
  </div>
</template>
<script>
import navbar from '../navbar'
import logo from './logo'
import search from './search'
export default {
  name: 'app-header',
  components: {
    navbar,
    logo,
    search
  }
}
</script>
<style lang="less" scoped>
  .header {
    .header-top {
      display: flex;
      justify-content: flex-end;
      padding: 0 25px;
      
    }
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
<template>
  <div class="header">
    <div class="header-container">
      <logo/>
      <list/>
      <search/>
      <carousel/>
      <user-info/>
    </div>
    <navbar/>
    <notices/>
  </div>
</template>
<script>
import navbar from '../navbar'
import logo from './logo'
import search from './search'
import list from './list'
import carousel from './carousel'
import userInfo from './user-info'
import notices from '../notices'
export default {
  name: 'app-header',
  components: {
    navbar,
    logo,
    search,
    list,
    carousel,
    userInfo,
    notices
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
      padding: 30px 50px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
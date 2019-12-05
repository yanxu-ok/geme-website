<template>
  <div class="search">
    <el-input class="item search-input" prefix-icon="el-icon-search" size="small" v-model="title" placeholder="搜帖/搜游戏/搜资讯"></el-input>
  </div>
</template>
<script>
export default {
  name: 'search',
  data() {
    return {
      title: ''
    }
  },
}
</script>
<style lang="less" scoped>
  .search {
    .item {
      vertical-align: middle;
    }
    .search-input {
      width: 500px;
    }
    .search-btn {
      margin-left: 15px;
    }
  }
</style>
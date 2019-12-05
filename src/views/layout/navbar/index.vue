<template>
  <div class="navbar">
    <!-- <el-menu  mode="horizontal" router >
      <el-menu-item v-for="menu in routes" :key="menu.path" :index="menu.path">{{menu.meta.title}}</el-menu-item>
    </el-menu> -->
    <ul class="nav-list clearfix">
      <router-link class="item" v-for="menu in routes" :key="menu.path" tag="li" :to="menu.path">{{menu.title}}</router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'navbar',
  data() {
    return {
      routes: [
        {
          path: '/home',
          title: '网站首页'
        },
        {
          path: '/circle',
          title: '圈子首页'
        },
        {
          path: '/game-center',
          title: '游戏中心'
        },
        {
          path: '/game-news',
          title: '游戏资讯'
        },
        {
          path: '/game-skill',
          title: '游戏技巧'
        },
        {
          path: '/comment',
          title: '网友点评'
        },
        {
          path: '/mall',
          title: '积分商城'
        }
      ]
    }
  },
}
</script>
<style lang="less" scoped>
  .navbar {
    // margin-top: 15px;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.08);
    .nav-list {
      width: 1000px;
      margin: 0 auto;
      // background: #409eff;
      display: flex;
      justify-content: space-between;
      .item {
        flex: auto;
        text-align: center;
        line-height: 45px;
        height: 45px;
        cursor: pointer;
        padding: 0 15px;
        color: rgba(56, 56, 56, 1);
        transition: background .5s;
        &:hover {
          background: rgba(3, 92, 193, 1);
          // font-weight: 600;
          color: #fff;
        }
      }
      .router-link-active {
        background: rgba(3, 92, 193, 1);
        color: #fff;
        font-weight: 600;
      }
    }
  }
</style>
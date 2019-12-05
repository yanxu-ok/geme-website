<template>
  <div>
      <el-dropdown v-if="userId" size="small">
        <div class="user-menu">
          <div class="avatar">
            <el-image :src="avatar" alt="头像" />
          </div>
          <div class="name" :title="name">
            {{name | formate}}
         </div>
         <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <el-button type="text" size="small" @click="handleProfile">我的主页</el-button>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <el-button type="text" size="small" @click="handleLogOut">退出登录</el-button>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    <div v-else class="no-login">
      <div>
        <el-button size="small" @click="handleReg">注册</el-button>
      </div>
      <div style="margin-top: 10px;">
        <el-button size="small" @click="handleLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'user-info',
  computed: {
    ...mapState({
      userId: state => state.user.userId,
      avatar: state => state.user.avatar,
      name: state => state.user.name
    })
  },
  filters: {
    formate(value) {
      return value.length > 6 ? `${value.substring(0, 6)}...` : value
    }
  },
  methods: {
    handleProfile() {
      console.log('跳转到个人主页')
    },
    handleLogOut() {
      console.log('退出')
    },
    handleReg() {
      console.log('注册')
    },
    handleLogin() {
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>
<style lang="less" scoped>
.user-menu {
  display: flex;
  align-items: center;
  cursor: pointer;
  .avatar {
    width: 43px;
    height: 43px;
    border-radius: 50%;
    overflow: hidden;
    .el-image{
      width: 100%;
      height: 100%;
    }
  }
  .name {
    margin-left: 8px;
    color: rgba(80, 80, 80, 1);
  }
}
.no-login {
  display: flex;
  flex-direction: column;
}
</style>
<template>
  <div class="logo">
    <img :src="logoPic" alt="logo">
  </div>
</template>
<script>
import logoPic from '@/assets/comm/logo.png'
export default {
  name: 'logo',
  data() {
    return {
      logoPic
    }
  },
}
</script>
<style lang="less" scoped>
  .logo {
    width: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
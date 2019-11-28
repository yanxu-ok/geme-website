<template>
  <div class="app-main">
    <app-header/>
    <div class="container">
      <router-view/>
    </div>
    <app-footer/>
  </div>
</template>
<script>
import appHeader from './header'
import appFooter from './footer' 
export default {
  name: 'layout',
  components: {
    appHeader,
    appFooter
  }
}
</script>
<style lang="less" scoped>
  .app-main {
    width: 1200px;
    margin: 0 auto;
    .container {
      min-height: calc(100vh - 175px - 135px);
    }
  }
</style>
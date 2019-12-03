<template>
  <div class="game-list-wrap">
    <div class="game-info"></div>
    <div class="game-meta"></div>
  </div>
</template>
<script>
export default {
  name: 'game-list',
  props: {
    list: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      
    }
  },
}
</script>
<style lang="less" scoped>
  .game-list-wrap {
    display: flex;
    .game-info {
      flex: 1;
    }
    .game-meta {
      flex: 1;
    }
  }
</style>
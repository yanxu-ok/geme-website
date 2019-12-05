<template>
  <ul class="header-list">
    <li class="list-item" v-for="item in list" :key="item.id">{{item.title}}</li>
  </ul>
</template>
<script>
export default {
  name: 'list',
  data() {
    return {
      list: []
    }
  },
  methods: {
    getHeaderList() {
      setTimeout(() => {
        this.list = [
          {
            id: 1,
            title: '魔域互通版为官方运营正版游戏1'
          },
          {
            id: 2,
            title: '魔域互通版为官方运营正版游戏2'
          },
          {
            id: 3,
            title: '魔域互通版为官方运营正版游戏3'
          }
        ]
      }, 1000)
    }
  },
  mounted() {
    this.getHeaderList()
  }
}
</script>
<style lang="less" scoped>
  .header-list {
    .list-item {
      color: rgba(80, 80, 80, 1);
      font-size: 14px;
      line-height: 20px;
    }
  }
</style>
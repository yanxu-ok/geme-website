<template>
    <el-carousel class="carousel-list" height="100px" indicator-position="none" arrow="never">
      <el-carousel-item v-for="item in list" :key="item.id" class="carousel-item"> 
        <el-image :src="item.url" ></el-image>
      </el-carousel-item>
    </el-carousel>
</template>
<script>
export default {
  name: 'carousel',
  data() {
    return {
      list: []
    }
  },
  methods: {
    getImageList() {
      setTimeout(() => {
        this.list = [
          {
            id: 1,
            url: require('../../../assets/comm/1.jpg')
          },
          {
            id: 2,
            url: require('../../../assets/comm/2.jpg')
          },
          {
            id: 3,
            url: require('../../../assets/comm/3.jpg')
          }
        ]
      }, 1000)
      
    }
  },
  mounted() {
    this.getImageList()
  }
}
</script>
<style lang="less" scoped>
  .carousel-list {
    width: 280px;
    .carousel-item {
      .el-image {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
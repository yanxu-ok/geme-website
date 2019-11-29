<template>
  <div>
    <div class="block">
      <el-carousel trigger="click">
        <el-carousel-item v-for="item in lunBotu" :key="item.id">
          <img src="@/assets/mall/age1.jpg" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: "lunBoTu",
  data() {
    return {
      lunBotu: [
        { id: 1, src: "@/assets/mall/age1.jpg" },
        { id: 2, src: "@/assets/mall/age2.jpg" },
        { id: 3, src: "@/assets/mall/age3.jpg" }
      ]
    };
  },
  methods: {}
};
</script>
<style lang='less' scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
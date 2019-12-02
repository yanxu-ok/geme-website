<template>
  <div>
    <div class="block">
      <el-carousel trigger="click">
        <el-carousel-item v-for="item in lunBotu" :key="item.id">
          <img :src="item.src" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import age1 from '../../../assets/mall/age1.jpg'
import age2 from '../../../assets/mall/age2.jpg'
import age3 from '../../../assets/mall/age3.jpg'
export default {
  name: "lunBoTu",
  data() {
    return {
      lunBotu: [
        { id: 1, src: age1 },
        { id: 2, src: age2 },
        { id: 3, src: age3 }
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
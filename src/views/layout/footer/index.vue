<template>
  <div class="footer">
    <div class="footer-text">
      <h1 class="title">关于我们</h1>
      <p class="desc">Morbi sed ante efficitur,pellentesque justo sit amet,
feugiat mi.Pellentesque tinciidunt dui ut vaius
luctus.Ut quis metus quis est pulvinar sodales ut in</p>
    </div>
    <div class="footer-pic">
      <img class="pic-item" :src="pic1" alt="pic">
      <img class="pic-item" :src="pic2" alt="pic">
    </div>
  </div>
</template>
<script>
import pic1 from '@/assets/comm/pic1.png'
import pic2 from '@/assets/comm/pic2.png'
export default {
  name: 'app-footer',
  data() {
    return {
      pic1,
      pic2
    }
  },
}
</script>
<style lang="less" scoped>
  .footer {
    display: flex;
    background: #000;
    padding: 25px 15px 15px;
    justify-content: space-between;
    align-items: center;
    .footer-text {
      width: 400px;
      .title {
        color: #fff;
        font-size: 22px;
      }
      .desc {
        margin-top: 10px;
        color: #fff;
        line-height: 20px;
      }
    }
    .footer-pic {
      .pic-item {
        margin-left: 15px;
      }
    }
  }
</style>
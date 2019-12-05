<template>
  <div class="footer">
    <div class="footer-container">
      <h1 class="about">关于我们</h1>
      <p class="desc">
        专业、严谨、有趣，游戏时光由热爱游戏的新老玩家组成，把关于电视游戏的一切分享给大家。
      </p>
      <div class="pic">
        <img class="pic-item" :src="pic1" alt="pic">
        <img class="pic-item" :src="pic2" alt="pic">
      </div> 
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
    box-shadow: 0px 0px 5px 0px rgba(198, 198, 198, 0.5);
    .footer-container {
      width: 1200px;
      margin: 0 auto;
      text-align: center;
      padding: 15px 0;
      .about {
        color: rgba(128, 128, 128, 1);
        font-size: 15px;
        padding: 10px 0 25px;
      }
      .desc {
        color: rgba(128, 128, 128, 1);
        margin-bottom: 10px;
      }
      .pic-item {
        margin-left: 15px;
      }
    }
    
  }
</style>
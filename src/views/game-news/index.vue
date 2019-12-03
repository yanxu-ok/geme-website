<template>
  <div class="main">
      <el-row>
        <el-col :span="12">
          <div class="grid-content ">
            <div  v-for="(fit, index) in fits" :key="index">
              <el-image :src="fit.url" class="tupian"></el-image>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content1 ">
            <div class="biaoti">IOS版手机APP无法正常打开？无法验证应用？</div>
            <div class="neirong">Praesent a lectus turpis. Sed malesuada dolor nec mi scelerisque semper Nulla lacinia
              consevttue mi, non congue sapien fringilla ne.Nulla facilisi. Cras vitae nunc
              vehicula,tincidunt ipsum eget,accumsan urna,Nunc iaculis</div>
            <div class="juli2">
            <div class="wenzi">【IOS版手机】APP无法正常打开？无法验证应用？</div>
            <div class="wenzi">【IOS版手机】APP无法正常打开？无法验证应用？</div>
            <div class="wenzi">【IOS版手机】APP无法正常打开？无法验证应用？</div>
            <div class="wenzi">【IOS版手机】APP无法正常打开？无法验证应用？</div>
            <div class="wenzi">【IOS版手机】APP无法正常打开？无法验证应用？</div>
            <div class="wenzi">【IOS版手机】APP无法正常打开？无法验证应用？</div>
            <div class="wenzi">【IOS版手机】APP无法正常打开？无法验证应用？</div>
          </div></div></el-col> </el-row>
    <el-row :gutter="10">
      <el-col :lg="3" ><div class="grid-content2 "><span>游戏资讯</span></div></el-col>
      <el-col :lg="9" ><div class="grid-content3 "><span>有奖征文，点击进入抽奖平台</span></div></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :lg="9" ><div class="grid-content4 bg-purple-light"><div class="xiaobiaoti"><span>游戏专栏</span>
        <div class="juli">
        <div class="wenzi2">【IOS版手机】APP无法正常打开？无法验证应用？</div>
        <div class="wenzi2">【IOS版手机】APP无法正常打开？无法验证应用？</div>
        <div class="wenzi2">【IOS版手机】APP无法正常打开？无法验证应用？</div>
        <div class="wenzi2">【IOS版手机】APP无法正常打开？无法验证应用？</div>
        <div class="wenzi2">【IOS版手机】APP无法正常打开？无法验证应用？</div>
        <div class="wenzi2">【IOS版手机】APP无法正常打开？无法验证应用？</div>
        <div class="wenzi2">【IOS版手机】APP无法正常打开？无法验证应用？</div>
        </div></div> </div></el-col>
      <el-col :lg="9" ><div class="grid-content5 bg-purple"><div class="xiaobiaoti"><span>互动百科</span></div></div></el-col>
      <el-col :lg="3"><div class="grid-content6 bg-purple-light"><div class="xiaobiaoti"><span>最新资讯</span>
        <div class="juli3">
          <div class="wenzi3">【IOS版手机】APP无法正常打</div>
          <div class="wenzi3">【IOS版手机】APP无法正常打</div>
          <div class="wenzi3">【IOS版手机】APP无法正常打</div>
          <div class="wenzi3">【IOS版手机】APP无法正常打</div>
          <div class="wenzi3">【IOS版手机】APP无法正常打</div>
          <div class="wenzi3">【IOS版手机】APP无法正常打</div>
          <div class="wenzi3">【IOS版手机】APP无法正常打</div>

        </div></div></div></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :lg="9" ><div class="grid-content7 bg-purple-light"><div class="xiaobiaoti"><span>经典系列</span></div></div></el-col>
      <el-col :lg="9" ><div class="grid-content8 bg-purple"><div class="xiaobiaoti"><span>汉化系列</span></div></div></el-col>
      <el-col :lg="3" ><div class="grid-content9 bg-purple-light"><div class="xiaobiaoti"><span>热门资讯</span></div></div></el-col>
    </el-row>
    <el-row  class="zuihou">
      <div class="xiaobiaoti"><span>视频新闻</span></div>
      <div class="imgs-wrap">
        <el-image v-for="fit in fits1" :key="fit.name" :src="fit.url"  class="tupian2"></el-image>
      </div>


    </el-row>




  </div>
</template>
<script>
export default {
  name: 'game-news',
  data() {
    return {
      fits: [
        {name: 'fill', url: require('../../assets/new/1.jpg')},
      ],
      fits1: [
        {name: 'fill', url: require('../../assets/new/1.jpg')},
        {name: '111', url: require('../../assets/new/1.jpg')},
        {name: '2222', url: require('../../assets/new/1.jpg')}
      ],


    }
  },
}
</script>
<style>
  .main{
    width: 100%;
    height: 1776px;
  }
  .grid-content {
      min-height: 36px;
      margin-top: 171px;
      width: 490px;
      height: 345px;
    margin-left: 32px;
    }
  .grid-content1 {
    min-height: 36px;
    margin-top: 171px;
    width: 562px;
    height: 345px;
    margin-left: -41px;
  }
  .tupian{
    width: 490px;
    height: 345px;
  }
  .imgs-wrap {
    display: flex;
  }
  .tupian2{
    width: 164px;
    height: 164px;

  }

.biaoti{
    width: 562px;
    height: 40px;
    color: rgba(227, 92, 50, 1);
    font-size: 27px;
    line-height: 40px;
    text-align: left;
    font-weight: bold;
}
  .neirong{
    color: rgba(63, 63, 63, 1);
    font-size: 17px;
    text-align: left;
  }
  .wenzi {
    width: 457px;
    height: 30px;
    color: rgba(0, 0, 0, 1);
    font-size: 20px;
    line-height: 150%;
    text-align: left;
    font-weight: bold;
  }
  .grid-content2 {
    min-height: 57px;
    width: 156px;
    border: rgba(0, 145, 255, 0.3) solid 1px;
    margin-left: 32px;
    margin-top: 37px;
    color: rgba(3, 92, 193, 1);
    font-size: 22px;
    line-height:57px;
    text-align: center;
    font-weight: bold;
  }
  .grid-content3 {
    min-height: 57px;
    width: 949px;
    border: rgba(0, 145, 255, 0.3) solid 1px;
    margin-left: 48px;
    margin-top: 37px;
    color: rgba(3, 92, 193, 1);
    font-size: 14px;
    line-height: 57px;
    text-align: right;
  }
  .grid-content4 {
    width: 441px;
    height: 352px;
    border: rgba(0, 145, 255, 0.3) solid 1px;
    margin-left: 27px;
    margin-top: 40px;
  }
  .xiaobiaoti{
    width: 88px;
    height: 33px;
    font-weight: bold;
    font-size: 22px;
    color: rgba(3, 92, 193, 1);
    margin-top:9px;
    margin-left:14px;
  }
  .juli{
    margin-top: 28px;
  }
  .juli2{
    margin-top: 5px;
  }
  .juli3{
    margin-top: 18px;
  }
  .wenzi2{
    width: 385px;
    height: 25px;
    color: rgba(77, 77, 77, 1);
    font-size: 16px;
    text-align: left;
    margin-bottom: 17px;
  }
  .wenzi3{
    width: 190px;
    height: 19px;
    color: rgba(0, 0, 0, 1);
    font-size: 13px;

  }
  .grid-content5 {
    width: 441px;
    height: 352px;
    margin-top: 40px;
    margin-left: 28px;
    border: rgba(0, 145, 255, 0.3) solid 1px;
  }
  .grid-content6 {
    width: 210px;
    height: 351px;
    margin-top: 40px;
    margin-left: 29px;
    border: rgba(0, 145, 255, 0.3) solid 1px;
  }
  .grid-content7 {
    width: 441px;
    height: 352px;
    border: rgba(0, 145, 255, 0.3) solid 1px;
    margin-left: 27px;
    margin-top: 19px;
  }
  .grid-content8 {
    width: 441px;
    height: 352px;
    margin-top: 19px;
    margin-left: 28px;
    border: rgba(0, 145, 255, 0.3) solid 1px;
  }
  .grid-content9 {
    width: 210px;
    height: 351px;
    margin-top: 19px;
    margin-left: 29px;
    border: rgba(0, 145, 255, 0.3) solid 1px;
  }
.zuihou{
    width: 1111px;
    height: 352px;
  margin-top: 32px;
  margin-left: 26px;
    color: rgba(80, 80, 80, 1);
    font-size: 14px;
    line-height: 150%;
    border: rgba(42, 130, 228, 0.3) solid 1px;
    text-align: center;
}
</style>

<template>
  <div class="main">
      <el-row>
        <el-col :span="12">
          <div class="grid-content ">
<!--              轮播图-->
            <img :src="nowwhe" class="tupian" />
          </div>
        </el-col>
<!--          模块一-->
        <el-col :span="12">
          <div class="grid-content1 ">
            <div class="biaoti">{{title}}</div>
            <div class="neirong">{{titlecon}}</div>
                <div v-for="item in neirong1" :key="item.id">
                    <div class="wenzi">{{item.con}}</div>
          </div></div></el-col> </el-row>
<!--      栏目一-->
      <div class="biaoti1">
          <div class="youxizixun"><span>游戏资讯</span></div>
          <div class="zixunneirong"><span>发布各类游戏攻略的平台，包括游戏攻略、心得秘籍、视频攻略、游戏技巧、强档图文攻略。</span></div>
          <div class="choujiang"><span>有奖征文，点击进入投稿平台</span></div>
      </div>
<!--      模块二-->
      <div>
      <el-row>
          <el-col :span="8"><div class="mm ">
              <div class="xiaobiaoti">
                  <span>强档攻略</span>
              </div>
              <div class="shuipingxian"></div>
              <div class="gengduo"><span>更多>></span></div>
              <div v-for="item in neirong2" :key="item.id">
                  <div class="wenzi1">{{item.con}}</div>
              </div>
          </div></el-col>
          <el-col :span="8"><div class="mm">
              <div class="xiaobiaoti">
                  <span>视频攻略</span>
              </div>
              <div class="shuipingxian"></div>
              <div class="gengduo"><span>更多>></span></div>
              <div v-for="item in neirong2" :key="item.id">
                  <div class="wenzi1">{{item.con}}</div>
              </div>
          </div></el-col>
          <el-col :span="8"><div class="mm">
              <div class="xiaobiaoti">
                  <span>真人</span>
              </div>
              <div class="shuipingxian"></div>
              <div class="gengduo"><span>更多>></span></div>
              <div v-for="item in neirong2" :key="item.id">
                  <div class="wenzi1">{{item.con}}</div>
              </div>
          </div></el-col>
      </el-row>
      <el-row>
          <el-col :span="8"><div class="mm ">
              <div class="xiaobiaoti">
                  <span>强档攻略</span>
              </div>
              <div class="shuipingxian"></div>
              <div class="gengduo"><span>更多>></span></div>
              <div v-for="item in neirong2" :key="item.id">
                  <div class="wenzi1">{{item.con}}</div>
              </div>
          </div></el-col>
          <el-col :span="8"><div class="mm">
              <div class="xiaobiaoti">
                  <span>视频攻略</span>
              </div>
              <div class="shuipingxian"></div>
              <div class="gengduo"><span>更多>></span></div>
              <div v-for="item in neirong2" :key="item.id">
                  <div class="wenzi1">{{item.con}}</div>
              </div>
          </div></el-col>
          <el-col :span="8"><div class="mm">
              <div class="xiaobiaoti">
                  <span>真人</span>
              </div>
              <div class="shuipingxian"></div>
              <div class="gengduo"><span>更多>></span></div>
              <div v-for="item in neirong2" :key="item.id">
                  <div class="wenzi1">{{item.con}}</div>
              </div>
          </div></el-col>
      </el-row></div>
<!--      模块三-->
<div class="mokuaisan">
    <div class="shipinxinwen">视频新闻</div>
    <div class="imgs-wrap">
        <el-image v-for="fit in fits" :key="fit.name" :src="fit.url"  class="tupian2">    </el-image>
    </div>
</div>
      <img :src="nowwhe3" class="tupian3" />










  </div>
</template>
<script>
export default {
  name: 'game-news',

  data() {
    return {
        fits: [
            {name: 'fill', url: require('../../assets/new/1.jpg')},
            {name: '111', url: require('../../assets/new/1.jpg')},
            {name: '2222', url: require('../../assets/new/1.jpg')},
            {name: '3333', url: require('../../assets/new/1.jpg')},
        ],

      fits1: [
        {name: 'fill', url: require('../../assets/new/1.jpg')},
        {name: '111', url: require('../../assets/new/1.jpg')},
        {name: '2222', url: require('../../assets/new/1.jpg')}
      ],
        //轮播图
      wheplanting: [
        require("../../assets/new/1.jpg"),
        require("../../assets/new/2.jpg"),
        require("../../assets/new/3.jpg"),
        require("../../assets/new/1.jpg"),
        require("../../assets/new/2.jpg")
      ],
      i: "0",
      nowwhe: require("../../assets/new/1.jpg"),
        // 模块一
        title:"IOS版手机APP无法正常打开？无法验证应用？",
        titlecon:"Praesent a lectus turpis. Sed malesuada dolor nec mi scelerisque semper Nulla lacinia" +
            "        consevttue mi, non congue sapien fringilla ne.Nulla facilisi. Cras vitae nunc" +
            "        vehicula,tincidunt ipsum eget,accumsan urna,Nunc iaculis",
        neirong1:
            [
                {con:"【IOS版手机】APP无法正常打开？无法验证应用？",
                    id:"1"},
                {con:"【IOS版手机】APP无法正常打开？无法验证应用？",
                    id:"2"} ,
                {con:"【IOS版手机】APP无法正常打开？无法验证应用？",
                    id:"3"}  ,
                {con:"【IOS版手机】APP无法正常打开？无法验证应用？",
                    id:"4"},
                {con:"【IOS版手机】APP无法正常打开？无法验证应用？",
                    id:"5"},
                {con:"【IOS版手机】APP无法正常打开？无法验证应用？",
                    id:"6"},
                {con:"【IOS版手机】APP无法正常打开？无法验证应用？",
                    id:"7"}

            ],
        neirong2:
            [
                {con:"【攻略】文字标题文字标题文字标题文字标题-1",
                    id:"1"},
                {con:"【攻略】文字标题文字标题文字标题文字标题-1",
                    id:"2"} ,
                {con:"【攻略】文字标题文字标题文字标题文字标题-1",
                    id:"3"}  ,
                {con:"【攻略】文字标题文字标题文字标题文字标题-1",
                    id:"4"},
                {con:"【攻略】文字标题文字标题文字标题文字标题-1",
                    id:"5"},
            ],
        nowwhe3: require("../../assets/new/4.png"),



    }
  },
  mounted: function() {
    this.nowwhe = this.wheplanting[0];

    var _this = this;

    setInterval(function() {
      _this.i++;

      _this.nowwhe = _this.wheplanting[_this.i];

      if (_this.i >= _this.wheplanting.length - 1) {
        _this.i = 0;
      }
    }, 3000);
  }
}
</script>
<style scoped>
  .main{
    width: 100%;
    height: 1670px;
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
      margin-left: -30px;
  }
.biaoti{
    width: 521px;
    height: 37px;
    color: rgba(239, 86, 86, 1);
    font-size: 25px;
    line-height: 37px;
    text-align: left;
    font-weight: bold;
}
  .neirong{
      height: 130px;
      color: rgba(56, 56, 56, 1);
      font-size: 14px;
      text-align: left;
  }
  .wenzi {
      color: rgba(56, 56, 56, 1);
    font-size: 14px;
    line-height: 150%;
    text-align: left;
    font-weight: bold;
      margin-top: 5px;
  }
    .biaoti1{
      width: 1133px;
      height: 48px;
      background-color: rgba(245, 245, 245, 1);
      font-size: 14px;
      line-height: 48px;
      text-align: center;
        margin-top: 26px;
        display: flex;
    }
    .youxizixun{
      width: 75px;
      height: 48px;
      color: rgba(255, 255, 255, 1);
      background-color: rgba(3, 92, 193, 1);
      font-size: 16px;
      line-height: 48px;
      text-align: center;
      font-weight: bold;
           }
   .zixunneirong{
      color: rgba(56, 56, 56, 1);
      font-size: 14px;
      line-height:48px;
       margin-left:5px;
    }
  .mm {
      min-height: 250px;
      margin-top: 32px;
  }
    .xiaobiaoti{
      width: 75px;
      height: 46px;
      color: rgba(255, 255, 255, 1);
      background-color: rgba(3, 92, 193, 1);
      font-size: 16px;
      line-height: 46px;
      text-align: center;
    }
  .choujiang{
      letter-spacing: 1px;
      color: rgba(239, 86, 86, 1);
      font-size: 14px;
      line-height: 48px;
      margin-left: 276px;
  }
    .shuipingxian{
      width: 280px;
      height: 3px;
      background-color: rgba(3, 92, 193, 1);
      text-align: center;
        margin-top: -45px;
        margin-left: 75px;
    }
    .gengduo{
      color: rgba(3, 92, 193, 1);
      font-size: 14px;
        margin-left: 309px;
        margin-top: 22px;
    }
    .wenzi1{
      width: 365px;
      height: 21px;
      letter-spacing: 2px;
      color: rgba(56, 56, 56, 1);
      font-size: 14px;
      line-height: 150%;
      text-align: left;
        margin-top: 12px;
    }
.mokuaisan{
      width: 1133px;
      height: 281px;
      background-color: rgba(247, 246, 246, 1);
      border-radius: 6px;
margin-top: 10px;
}
    .shipinxinwen{
        width: 100px;
        height: 50px;
        font-size: 14px;
        line-height: 50px;
        text-align: center;
        color: rgba(80, 80, 80, 1);
    }
    .imgs-wrap{
        display: flex;
    }
    .tupian2{
      width: 250px;
      height: 169px;
        margin-left:27px;
        margin-top: 18px;
    }
    .tupian3{
        width: 1133px;
        height: 147px;
        margin-top:48px;
    }

</style>

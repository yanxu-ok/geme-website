<template>
  <div>
    <div class="Overall">
      <div class="upleft">
        <div class="upleftup">
          <el-button type="primary" class="right-frist">热门圈子</el-button>
          <label class="right" @click="morecircle">更多圈子 ></label>
        </div>
        <div class="upleftdown">
          <div class="card-room" :key="index" v-for="(item,index) in card.slice(0,6)">
            <div class="card">
              <div class="card-up">
                <div class="card-up-left">
                  <img :src="item.pic" class="images" />
                </div>
                <div class="card-up-right">
                  <div class="card-up-right-up">
                    <label class="card-title">{{item.title}}</label>
                  </div>
                  <div class="card-up-right-down">
                    <label class="record">人数</label>
                    <label class="record">动态</label>
                    <label class="record-data">{{item.bodynumber}}</label>
                    <label class="record-data">{{item.dynamic}}</label>
                  </div>
                </div>
              </div>
              <div class="card-down">
                <label class="jianjie">简介：{{item.introduction}}</label>
              </div>
            </div>
            <el-button type="primary" size="mini" class="btn-up">关注</el-button>
          </div>
        </div>
      </div>

      <div class="upright">
        <div class="uprightup">
          <label class="uprightup-label">国内第一游戏社交圈</label>
          <label class="uprightup-label">共有{{circlenumbaer}}个圈子</label>
          <el-button type="primary" size="small" class="btn-up2">我要创圈</el-button>
        </div>

        <div class="uprightdown">
          <div class="uprightdown-title">
            <label class="left">热门动态</label>
            <label class="right">更多动态 ></label>
          </div>
          <div class="uprightdown-carousel">
            <el-carousel trigger="click" height="270px">
              <el-carousel-item :key="id" v-for="(Carousel,id) in Carousel">
                <img :src="Carousel.Carousel2" class="Carousel-pic" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>

    <div class="center">
      <img :src="Advertisement" style="width:1200px;heigh:110px" />
    </div>

    <div class="buttom">
      <div class="buttom-left">
        <div class="comment-card" :key="id" v-for="(comment,id) in comment.slice(0,2)">
          <div class="comment-card-left">
            <img :src="comment.Userhead" class="Userhead" />
            <label class="comment-card-left-title">{{comment.username}}</label>
            <div class="comment-card-center">
              <label>等级：{{comment.Grade}}</label>
              <label>帖子：{{comment.Post}}</label>
              <label>积分：{{comment.integral}}</label>
            </div>
            <el-button type="primary" size="small" class="comment-card-btn">关注</el-button>
          </div>
          <div class="comment-card-right-bottom">
            <div class="comment-card-right">
              <label class="comment-title">{{comment.title}}</label>
              <textarea class="comment-card-comment" disabled="true" v-model="comment.comment"></textarea>
            </div>
            <div class="comment-card-buttom-room">
              <div class="comment-card-buttom" v-for="(item,index) in comment.chatu.slice(0,3)" :key="index">
                <img :src="item" class="comment-bottom" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="buttom-right">
        <div class="buttom-right-top">
          <div class="uprightdown-title">
            <label class="left">热门圈子</label>
            <label class="right">更多圈子 ></label>
          </div>
          <div class="buttom-right-top-buttom">
            

            <div class="buttom-right-top-right">
              <div class="xinxicard" v-for="(xinxi,index) in xinxi.slice(0,8)" :key="index">
                <div class="paiming-ather" :class="[abcd == index?aaa:bbb]" v-if="index ==0 || index ==1 ">{{index+1}}</div>
                <div class="paiming-ather" :class="[2 == index?ccc:ddd]" v-else>{{index+1}}</div>
                <img :src="xinxi.rmtx" class="xinxiTX" />
                <div class="xinxicard-miaoshu">
                  <label class="xinxicard-miaoshu-title">{{xinxi.title}}</label>
                  <label>{{xinxi.miaoshu}}</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="uprightdown">
          <div class="uprightdown-title">
            <label class="left">热门动态</label>
            <label class="right">更多动态 > ></label>
          </div>
          <div class="uprightdown-carousel">
            <el-carousel trigger="click" height="270px">
              <el-carousel-item :key="id" v-for="(Carousel,id) in Carousel">
                <img :src="Carousel.Carousel2" class="Carousel-pic" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pic from "@/assets/circle/circle-index-1.jpg";
import Carousel1 from "@/assets/circle/Carousel1.jpg";
import Carousel2 from "@/assets/circle/Carousel2.jpg";
import Carousel3 from "@/assets/circle/Carousel3.jpg";
import Carousel4 from "@/assets/circle/Carousel4.jpg";
import Carousel5 from "@/assets/circle/Carousel5.jpg";
import Advertisement from "@/assets/circle/center.jpg";
import Userhead from "@/assets/circle/Userhead.jpg";
import rmtx from "@/assets/circle/rmtx.jpg";
export default {
  name: "circle-home",
  data() {
    return {
      msg: "123",
      abcd:0,
      aaa:'paiming-1',
      bbb:'paiming-2',
      ccc:'paiming-3',
      ddd:'paiming-ather',
      card: [
        {
          id: 1,
          title: "哇哈哈",
          bodynumber: "999",
          pic,
          dynamic: "990",
          introduction: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
        },
        {
          id: 2,
          title: "哇哈哈",
          bodynumber: "999",
          pic,
          dynamic: "990",
          introduction: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
        },
        {
          id: 3,
          title: "哇哈哈",
          bodynumber: "999",
          pic,
          dynamic: "990",
          introduction: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
        },
        {
          id: 4,
          title: "哇哈哈",
          bodynumber: "999",
          pic,
          dynamic: "990",
          introduction: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
        }
      ],
      Carousel: [
        {
          id: 1,
          Carousel1
        },
        {
          id: 2,
          Carousel2
        },
        {
          id: 3,
          Carousel3
        },
        {
          id: 4,
          Carousel4
        },
      ],
      comment: [
        {
          id: "1",
          Userhead,
          username: "风流倜傥宁采臣",
          Grade: "50",
          Post: "99",
          integral: "500",
          title: "九条命的爱情",
          comment:"狙击手作为现代战争环境下一种相对特殊的远程兵种，凭借着低调的风格，危险的气质，一击必杀的隐忍和深藏不露的作战方式，渐渐在各类游戏当中发展出了属于自己的科技树和生态链。一把杀敌于无形的狙击枪，既是区分抖音萌新和油管大佬的分水岭，也是一些“蹲逼”最终成长能否为“地藏”的试金石。狙击手作为现代战争环境下一种相对特殊的远程兵种，凭借着低调的风格，危险的气质，一击必杀的隐忍和深藏不露的作战方式，渐渐在各类游戏当中发展出了属于自己的科技树和生态链。一把杀敌于无形的狙击枪，既是区分抖音萌新和油管大佬的分水岭，也是一些“蹲逼”最终成长能否为“地藏”的试金石。",
          chatu: [Carousel1, Carousel2, Carousel3, Carousel4]
        },
        {
          id: "2",
          Userhead,
          username: "宁采臣",
          Grade: "40",
          Post: "90",
          integral: "5000",
          title: "九爱情",
          comment:"狙击手作为现代战争环境下一种相对特殊的远程兵种，凭借着低调的风格，危险的气质，一击必杀的隐忍和深藏不露的作战方式，渐渐在各类游戏当中发展出了属于自己的科技树和生态链。一把杀敌于无形的狙击枪，既是区分抖音萌新和油管大佬的分水岭，也是一些“蹲逼”最终成长能否为“地藏”的试金石。狙击手作为现代战争环境下一种相对特殊的远程兵种，凭借着低调的风格，危险的气质，一击必杀的隐忍和深藏不露的作战方式，渐渐在各类游戏当中发展出了属于自己的科技树和生态链。一把杀敌于无形的狙击枪，既是区分抖音萌新和油管大佬的分水岭，也是一些“蹲逼”最终成长能否为“地藏”的试金石。",
          chatu: [Carousel1, Carousel2, Carousel3, Carousel4]
        }
      ],
      xinxi: [
        {
          rmtx,
          title: "哇哈哈",
          miaoshu: "九条命的爱情半条命"
        },
        {
          rmtx,
          title: "哇哈哈",
          miaoshu: "九条命的爱情半条命"
        },
        {
          rmtx,
          title: "哇哈哈",
          miaoshu: "九条命的爱情半条命"
        },
        {
          rmtx,
          title: "哇哈哈",
          miaoshu: "九条命的爱情半条命"
        },
        {
          rmtx,
          title: "哇哈哈",
          miaoshu: "九条命的爱情半条命"
        },
        {
          rmtx,
          title: "哇哈哈",
          miaoshu: "九条命的爱情半条命"
        },
        {
          rmtx,
          title: "哇哈哈",
          miaoshu: "九条命的爱情半条命"
        },
        {
          rmtx,
          title: "哇哈哈",
          miaoshu: "九条命的爱情半条命"
        }
      ],
      Advertisement,
      circlenumbaer: "18"
    };
  },
  methods:{
    morecircle:{
      
    }
  }
};
</script>


<style scoped>
.card {
  width: 100%;
  height: 150px;
}
.card-room {
  width: 210px;
  height: 200px;
  padding-top: 10px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: rgba(42, 130, 228, 0.3) solid 1px;
}
.card-title {
  font-weight: bold;
  color: rgba(71, 71, 255, 0.87);
}
.card-up {
  display: flex;
}
.card-up-left {
  width: 45%;
  text-align: center;
}
.card-up-right {
  width: 50%;
  text-align: center;
}
.card-up-right-down {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}
.card-up-right-up {
  margin-top: 10px;
}

.card-down {
  margin-top: 10px;
  margin: 10px 10px 0px 10px;
}
.jianjie{
  color: rgba(56, 56, 56, 1);
	font-size: 14px;
	line-height: 150%;
}

.record {
  width: 50%;
  font-size: 15px;
  text-align: center;
}
.record-data {
  width: 50%;
  font-size: 15px;
  text-align: center;
  color: #4863ff;
}

.images {
  width: 71px;
  height: 77px;
}
.Carousel-pic {
  width: 100%;
  height: 100%;
}
.Userhead {
  width: 108px;
  height: 109px;
}
.comment-bottom {
  width: 140px;
  height: 100px;
}

.uprightup-label {
  margin-top: 20px;
}

.btn-up {
  width: 30%;
  background-color: #263ec4;
}
.btn-up2 {
  margin-top: 15px;
  background-color: #263ec4;
}
.comment-card-btn {
  background-color: #263ec4;
  border: 0px;
}

.Overall {
  margin-left: 2%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.upleft {
  width: 65%;
  margin-top: 2%;
  padding-left: 2%;
  padding-top: 2%;
  padding-right:2%; 
  border: rgba(42, 130, 228, 0.3) solid 1px;

}
.upleftup {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between
}
.left {
  text-align: left;
  width: 50%;
  letter-spacing: 2px;
	color: rgba(56, 56, 56, 1);
	font-size: 18px;
	line-height: 150%;
  font-weight: bold;
}
.right-frist{
  background-color: #263ec4
}
/* .left-first{
  width: 87px;
	height: 48px;
	color: rgba(255, 255, 255, 1);
	background-color: rgba(3, 92, 193, 1);
	font-size: 16px;
	line-height: 150%;
	text-align: center;
	font-weight: bold;
} */
.right {
  text-align: right;
  padding-top: 5px;
  width: 50%;
  font-size: 10px;
  color: rgba(3, 92, 193, 1);
}
.upleftdown {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.upright {
  width: 35%;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.uprightup {
  width: 85%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: rgba(42, 130, 228, 0.3) solid 1px;
}
.uprightdown {
  width: 85%;
  height: 350px;
  margin-top: 20px;
  border: rgba(42, 130, 228, 0.3) solid 1px;
  display: flex;
  flex-direction: column;
  align-items: center
}
.uprightdown-title {
  width: 85%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 10px 10px 10px 10px;
}
.uprightdown-carousel {
  width: 85%;

}

.center {
  width: 100%;
  margin-top: 20px;
}

.buttom {
  margin-bottom: 2%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.buttom-left {
  width: 60%;
  margin-top: 2%;
}
.buttom-right {
  width: 40%;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.buttom-right-top {
  width: 85%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: rgba(42, 130, 228, 0.3) solid 1px;
}
.comment-card {
  width: 100%;
  height: 400px;
  padding: 10px 10px 10px 10px;
  margin-bottom: 20px;
  display: flex;
  border: rgba(42, 130, 228, 0.3) solid 1px;
}
.comment-card-left {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.comment-card-right {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
}
.comment-card-center {
  font-size: 13px;
  line-height: 150%;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 10px 0 10px 0;
}
.comment-card-left-title {
  margin-top: 10px;
  font-size: 14px;
  color: #1029b9;
}
.comment-title {
  margin: 20px 0px 0px 20px;
  color: rgba(56, 56, 56, 1);
	font-size: 14px;
	line-height: 150%;
  font-weight: bold;
}
.comment-card-comment {
  width: 100%;
  height: 220px;
  padding: 20px;
  background-color: #ffffff;
  resize: none;
  border: 0px;
  color: rgba(56, 56, 56, 1);
	font-size: 14px;
  line-height: 150%;
}
.comment-card-buttom {
  width: 25%;
}
.comment-card-right-bottom {
  width: 100%;
  height: 100%;
  margin-left: 2%;
  display: flex;
  flex-direction: column;
}
.comment-card-buttom-room {
  width: 90%;
  padding-left: 2%; 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.buttom-right-top-buttom {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin: auto;
}
.buttom-right-top-left {
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.buttom-right-top-right {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin-top: 5px;
}

.paiming-1 {
  width: 27px;
  height: 27px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(212, 48, 48, 1)!important;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  margin: auto;
}
.paiming-2 {
  width: 27px;
  height: 27px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(250, 126, 1, 1)!important;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  margin: auto;
}
.paiming-3 {
  width: 27px;
  height: 27px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(245, 227, 69, 1)!important;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  margin: auto;
}
.paiming-ather {
  width: 27px;
  height: 27px;
  padding-top: 4px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(0, 145, 255, 1);
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  margin: auto;
}

.xinxicard {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}
.xinxiTX {
  width: 49px;
  height: 49px;
}
.xinxicard-miaoshu {
  width: 75%;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
}
.xinxicard-miaoshu-title {
  font-weight: bold;
}
</style>



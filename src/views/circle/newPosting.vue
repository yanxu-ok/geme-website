<template>
  <div style="width:100%">
    <!-- 上方搜索 -->
    <div class="search">
      <div style="width: 62px;
      height: 42px;
      letter-spacing: 2px;
      color: rgba(56, 56, 56, 1);
      font-size: 16px;
      line-height: 260%;
      text-align: center;
      margin:5px;">全部</div>
      <div style="width: 89px;
      height: 42px;
      letter-spacing: 2px;
      color: rgba(255, 255, 255, 1);
      background-color: rgba(3, 92, 193, 1);
      font-size: 16px;
      line-height: 260%;
      text-align: center;
      font-weight: bold;
      margin:5px;"><icon-svg icon-class="Posting" style="width:22px;height:22px;position: relative;bottom:-2px;left:-3px"/>发帖</div>
    </div>

    <!-- 下方 -->
    <div class="buttom">
      <!-- 左侧帖子 -->
      <div class="buttom-left">
        <!-- 评论卡片 -->
        <div class="comment-card">
          <div class="comment-card_room">
            <!-- 评论左侧个人信息 -->
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

            <!-- 评论右侧 评论标题与内容 -->
            <div class="comment-card-right-bottom">
              <div class="comment-card-right">
                <div class="comment-title">
                  <label>{{comment.title}}</label>
                </div>
                <div class="Information">
                  <div class="label_room">
                    <div class="labelll_title">标题：</div>
                    <el-input
                      type="text"
                      placeholder="输入内容"
                      v-model="newPosting.title"
                      show-word-limit
                      style="width:500px"
                    ></el-input>
                  </div>
                  <div class="label_room">
                    <div class="labelll_title">内容：</div>
                    <el-input
                      type="textarea"
                      placeholder="请输入内容"
                      v-model="newPosting.introduce"
                      maxlength="500"
                      :autosize="{ minRows: 2, maxRows: 4}"
                      show-word-limit
                      :rows="2"
                      resize="none"
                      style="width:500px;"
                    ></el-input>
                  </div>
                  <div style="width:100%; padding-top: 20px;padding-left: 10%;display: flex;flex-direction: row;justify-content:space-between;align-items:center">
                    <div class="addpic"><icon-svg icon-class="+" class-name="addpic_pic"/></div>
                    <button class="btn_post">发布</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧 -->
      <div class="all_right">
        <!-- 右上用户卡片 -->
        <div class="card-room">
          <div class="card">
            <div class="card-up">
              <div class="card-up-left">
                <img :src="card.pic" class="images" />
              </div>
              <div class="card-up-right">
                <div class="card-up-right-up">
                  <label class="card-title">{{card.title}}</label>
                </div>
                <div class="card-up-right-down">
                  <label class="record">人数</label>
                  <label class="record">动态</label>
                  <label class="record-data">{{card.bodynumber}}</label>
                  <label class="record-data">{{card.dynamic}}</label>
                </div>
              </div>
            </div>
            <div class="card-down">
              <label class="jianjie">简介：{{card.introduction}}</label>
            </div>
          </div>
          <el-button type="primary" class="btn-up">关注</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pic from "@/assets/circle/circle_touxiang.jpg";
import Userhead from "@/assets/circle/Userhead.jpg";
import Carousel1 from "@/assets/circle/Carousel1.jpg";
import Carousel2 from "@/assets/circle/Carousel2.jpg";
import Carousel3 from "@/assets/circle/Carousel3.jpg";
import Carousel4 from "@/assets/circle/Carousel4.jpg";
export default {
  name: "circleforum",
  components: {},
  data() {
    return {
      msg: "123",
      comment: {
        id: "1",
        Userhead,
        username: "风流倜傥宁采臣",
        Grade: "50",
        Post: "99",
        integral: "500",
        title: "九条命的爱情",
        comment:
          "狙击手作为现代战争环境下一种相对特殊的远程兵种，凭借着低调的风格，危险的气质，一击必杀的隐忍和深藏不露的作战方式，渐渐在各类游戏当中发展出了属于自己的科技树和生态链。一把杀敌于无形的狙击枪，既是区分抖音萌新和油管大佬的分水岭，也是一些“蹲逼”最终成长能否为“地藏”的试金石。狙击手作为现代战争环境下一种相对特殊的远程兵种，凭借着低调的风格，危险的气质，一击必杀的隐忍和深藏不露的作战方式，渐渐在各类游戏当中发展出了属于自己的科技树和生态链。一把杀敌于无形的狙击枪，既是区分抖音萌新和油管大佬的分水岭，也是一些“蹲逼”最终成长能否为“地藏”的试金石。",
        chatu: [Carousel1, Carousel2, Carousel3, Carousel4],
        good: "50",
        toke: "60"
      },
      card: {
        id: 1,
        title: "哇哈哈",
        bodynumber: "999",
        pic,
        dynamic: "990",
        introduction: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
      },
      newPosting:{
        title:"",
        introduce:"",
      }
    };
  }
};
</script>

<style scoped>
.addpic{
  width: 70px;
  height: 70px;
  padding-top: 18px;
  background-color: rgba(221, 221, 221, 1);
	text-align: center;
  
}
.addpic_pic{
  width: 40px;
  height: 40px;
}
.Information {
  width: 100%;
  padding: 4% 4% 3% 3%;
}
.label_room {
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.labelll_title {
  width: 70px;
  color: rgba(80, 80, 80, 1);
  font-size: 14px;
  line-height: 200%;
}
.btn_post {
  width: 73px;
  height: 43px;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(3, 92, 193, 1);
  font-size: 14px;
  line-height: 200%;
  border-radius: 6px;
  text-align: center;
}
.search {
  width: 100%;
  height: 54px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 6px;
  line-height: 150%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.11428571428571431);
  display: flex;
  flex-wrap: wrap;
}

.all_right {
  width: 33%;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
}
.buttom {
  width: 100%;
  display: flex;
}
.buttom-left {
  width: 67%;
  margin-top: 2%;
}
.comment-card-btn {
  background-color: #263ec4;
  border: 0px;
}
.comment-card {
  width: 100%;
  height: 450px;
  padding: 10px 10px 10px 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  border: rgba(204, 204, 204, 1) solid 1px;
}
.comment-card_room {
  width: 100%;
  height: 400px;
  padding: 10px 10px 10px 10px;
  margin-bottom: 20px;
  display: flex;
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
  height: 75%;
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
  margin: 0px 0px 0px 20px;
  padding-right: 20px;
  color: rgba(56, 56, 56, 1);
  font-size: 14px;
  line-height: 150%;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
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
  padding-left: 4%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.Userhead {
  width: 108px;
  height: 109px;
}

.btn-up {
  width: 30%;
  background-color: #263ec4;
}
.record {
  width: 50%;
  color: rgba(56, 56, 56, 1);
  font-size: 16px;
  line-height: 150%;
  text-align: center;
}
.record-data {
  width: 50%;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: rgba(56, 56, 56, 1);
}
.images {
  width: 110px;
  height: 110px;
}
.card {
  width: 100%;
  height: 150px;
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-room {
  width: 90%;
  height: 280px;
  margin-left: 10%;
  margin-bottom: 10%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: rgba(204, 204, 204, 1) solid 1px;
}
.card-room2 {
  width: 90%;
  height: 340px;
  margin-left: 10%;
  margin-bottom: 10%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: rgba(204, 204, 204, 1) solid 1px;
}
.card-title {
  font-size: 18px;
  line-height: 150%;
  font-weight: bold;
  color: rgba(3, 92, 193, 1);
}
.card-up {
  width: 90%;
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
  width: 80%;
  margin: 20px 10px 0px 10px;
}
.jianjie {
  color: rgba(56, 56, 56, 1);
  font-size: 14px;
  line-height: 150%;
}
</style>
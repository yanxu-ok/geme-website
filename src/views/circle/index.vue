<template>
  <div>
    <div class="Overall">
      <div class="upleft">
        <div class="upleftup">
          <label class="left">热门圈子</label>
          <label class="right">更多圈子 > ></label>
        </div>
        <div class="upleftdown">
          <div class="card-room" :key="index" v-for="(item,index) in card">
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
                <label>简介：{{item.introduction}}</label>
              </div>
            </div>
            <el-button type="primary" class="btn-up">关注</el-button>
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

    <div class="center">
      <img :src="Advertisement" style="width:1200px;heigh:110px" />
    </div>

    <div class="buttom">
      <div class="buttom-left">
        <div class="comment-card" :key="id" v-for="(comment,id) in comment">
          <div class="comment-card-left">
            <img :src="comment.Userhead" class="Userhead"/>
            <label class="comment-card-left-title">{{comment.username}}</label>
            <div class="comment-card-center">
            <label>等级：{{comment.Grade}}</label>
            <label>帖子：{{comment.Post}}</label>
            <label>积分：{{comment.integral}}</label>
            </div>
             <el-button type="primary" size="small" class="comment-card-btn">关注</el-button>
          </div>
          <div class="comment-card-right">
            <label class="comment-title">{{comment.title}}</label>
            <textarea class="comment-card-comment" disabled="true" v-model="comment.comment"></textarea>
          </div>
        </div>
      </div>

      <div class="buttom-right">
        <div class="buttom-right-top">
          <div class="uprightdown-title">
            <label class="left">热门圈子</label>
            <label class="right">更多圈子 > ></label>
          </div>
        </div>

        <div class="buttom-right-buttom">
          <div class="uprightdown-title">
            <label class="left">热门活动</label>
            <label class="right">更多活动 > ></label>
          </div>
          <div>
            <el-carousel trigger="click" height="228px">
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
export default {
  name: "circle-home",
  data() {
    return {
      msg: "123",
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
        {
          id: 5,
          Carousel5
        }
      ],
      comment: [
        {
          id:'1',
          Userhead,
          username:"风流倜傥宁采臣",
          Grade:'50',
          Post:'99',
          integral:'500',
          title:"九条命的爱情",
          comment:"Pellentesque iaculis, augue eu bibendum posuere, erat orci vestibulum mi, id tempor augue enim ut sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris scelerisque orci sed sapien vulputate aliquam. Sed volutpat maximus libero eget porttitor. Ut a massa porta, dapibus justo sed, varius sapien. Cum socis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent neque arcu, aliquam ut eros sollicitudin, fermentum venenatis risus. Vestibulum eleifend ligula a odio tristique, et molestie lacus pretium. Etiam tempus ornare eros vel pharetra. Pellentesque in felis quam. In risus justo, congue ut quam vel, dictum dapibus tristique, et molestie lacus pretium. Etiam tempus ornare eros vel pharetra. Pellentesque in felis quam. In risus justo, congue ut quam vel, dictum nunc.Pellentesque iaculis, augue eu bibendum posuere, erat orci vestibulum mi, id tempor augue enim ut sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris scelerisque orci sed sapien vulputate aliquam. Sed volutpat maximus libero eget porttitor. Ut a massa porta, dapibus justo sed, varius sapien. Cum socis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent neque arcu, aliquam ut eros sollicitudin, fermentum venenatis risus. Vestibulum eleifend ligula a odio tristique, et molestie lacus pretium. Etiam tempus ornare eros vel pharetra. Pellentesque in felis quam. In risus justo, congue ut quam vel, dictum dapibus tristique, et molestie lacus pretium. Etiam tempus ornare eros vel pharetra. Pellentesque in felis quam. In risus justo, congue ut quam vel, dictum nunc.",
        },
         {
          id:'2',
          Userhead,
          username:"宁采臣",
          Grade:'40',
          Post:'90',
          integral:'5000',
          title:"九爱情",
          comment:"Pellentesque iaculis, augue eu bibendum posuere, erat orci vestibulum mi, id tempor augue enim ut sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris scelerisque orci sed sapien vulputate aliquam. Sed volutpat maximus libero eget porttitor. Ut a massa porta, dapibus justo sed, varius sapien. Cum socis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent neque arcu, aliquam ut eros sollicitudin, fermentum venenatis risus. Vestibulum eleifend ligula a odio tristique, et molestie lacus pretium. Etiam tempus ornare eros vel pharetra. Pellentesque in felis quam. In risus justo, congue ut quam vel, dictum dapibus tristique, et molestie lacus pretium. Etiam tempus ornare eros vel pharetra. Pellentesque in felis quam. In risus justo, congue ut quam vel, dictum nunc.Pellentesque iaculis, augue eu bibendum posuere, erat orci vestibulum mi, id tempor augue enim ut sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris scelerisque orci sed sapien vulputate aliquam. Sed volutpat maximus libero eget porttitor. Ut a massa porta, dapibus justo sed, varius sapien. Cum socis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent neque arcu, aliquam ut eros sollicitudin, fermentum venenatis risus. Vestibulum eleifend ligula a odio tristique, et molestie lacus pretium. Etiam tempus ornare eros vel pharetra. Pellentesque in felis quam. In risus justo, congue ut quam vel, dictum dapibus tristique, et molestie lacus pretium. Etiam tempus ornare eros vel pharetra. Pellentesque in felis quam. In risus justo, congue ut quam vel, dictum nunc.",
        },
      ],
      Advertisement,
      circlenumbaer: "18"
    };
  }
};
</script>


<style scoped>
.card {
  width: 100%;
  height: 155px;
  padding-top: 10px;
  box-shadow: 0px 5px 5px 1px rgba(112, 112, 112, 0.5);
}
.card-room {
  width: 210px;
  height: 225px;
  padding-top: 10px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin: 10px 10px 5px 10px;
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
.Userhead{
  width: 108px;
  height: 109px;
}


.uprightup-label {
  margin-top: 20px;
}

.btn-up {
  width: 50%;
  margin-top: 10px;
  background-color: #263ec4;
}
.btn-up2 {
  margin-top: 15px;
  background-color: #263ec4;
}
.comment-card-btn{
  background-color: #e35c32;
  border: 0px
}



.Overall {
  margin-left: 2%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.upleft {
  width: 70%;
  margin-top: 2%;
}
.upleftup {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.left {
  text-align: left;
  width: 50%;
  font-size: 20px;
  font-weight: bold;
  color: rgb(83, 83, 255);
}
.right {
  text-align: right;
  width: 50%;
  font-size: 10px;
  color: #63c3d4;
  text-decoration: underline;
}
.upleftdown {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.upright {
  width: 30%;
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
  border: #e0dbdb solid 1px;
}
.uprightdown {
  width: 85%;
  height: 350px;
  margin-top: 20px;
  border: #e0dbdb solid 1px;
}
.uprightdown-title {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 10px 10px 10px 10px;
}
.uprightdown-carousel {
  width: 100%;
  height: 100%;
  margin: 20px 0 20px 0;
}

.center {
  width: 100%;
  margin-top: 20px;
}

.buttom {
  margin-left: 2%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.buttom-left {
  width: 70%;
  margin-top: 2%;
}
.buttom-right {
  width: 30%;
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
  border: #aa97ff solid 1px;
}
.buttom-right-buttom {
  width: 85%;
  height: 270px;
  margin-top: 40px;
  border: #aa97ff solid 1px;
}
.comment-card{
  width: 100%;
  height: 350px;
  padding: 10px 10px 10px 10px;
  display: flex;
}
.comment-card-left{
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center
}
.comment-card-right{
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.comment-card-center{
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 10px 0 10px 0
}
.comment-card-left-title{
  margin-top: 10px;
  font-size: 15px;
  color: #1029b9;
}
.comment-title{
  margin-bottom: 20px
}
.comment-card-comment{
  width: 100%;
  height: 100%;
  background-color: #ffffff;

  resize:none; 
  border: 0px;
}
</style>



<template>

    <div class="Overall">

      <!-- 左上方 -->
      <div class="upleft">

       <!--  左上方 标题   -->
        <div class="upleftup">
          <el-button type="primary" class="right-frist">热门圈子</el-button>
        </div>

        <!-- 圈子卡片 -->
        <div class="upleftdown">
          <div class="card-room" :key="index" v-for="(item,index) in card">
            <div class="card" @click="circle()">
              <div class="card-up">
                <div class="card-up-left">
                  <img :src="item.pic" class="images" />
                </div>
                <div class="card-up-right">
                  <div class="card-up-right-up">
                    <label class="card-title">《{{item.title}}》</label>
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
        <div style="text-align: center;">
        <IPagination  v-show="total>0" :total="total" :curr.sync="listQuery.page" :size.sync="listQuery.size"  /> <!--  @on-page-change="getUserList" -->
        </div>
      </div>
      
      <!-- 右上 -->
      <div class="upright">

        <!-- 右上方框 上半部分 -->
        <div class="uprightup">
          <label class="uprightup-label">国内第一游戏社交圈</label>
          <label class="uprightup-label">共有{{circlenumbaer}}个圈子</label>
          <el-button type="primary" size="small" class="btn-up2">我要创圈</el-button>
        </div>


        <!-- 右上方框 下半部分 -->
        <div class="uprightdown">

          <!-- 标题（热门  更多） -->
          <div class="uprightdown-title">
            <label class="left">热门动态</label>
            <label class="right">更多动态 ></label>
          </div>

          <!-- 上方右下角轮播图 -->
          <div class="uprightdown-carousel">
            <el-carousel trigger="click" height="270px">
              <el-carousel-item :key="item.id" v-for="item in Carousel">
                <img :src="item.Carousel" class="Carousel-pic" />
              </el-carousel-item>
            </el-carousel>
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
import Userhead from "@/assets/circle/Userhead.jpg";
import IPagination from "@/components/IPagination/index.vue";
export default {
  name: "circle-home",
  components:{IPagination},
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
        },
        {
          id: 5,
          title: "哇哈哈",
          bodynumber: "999",
          pic,
          dynamic: "990",
          introduction: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
        },
        {
          id: 6,
          title: "哇哈哈",
          bodynumber: "999",
          pic,
          dynamic: "990",
          introduction: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
        },
        {
          id: 7,
          title: "哇哈哈",
          bodynumber: "999",
          pic,
          dynamic: "990",
          introduction: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
        },
        {
          id: 8,
          title: "哇哈哈",
          bodynumber: "999",
          pic,
          dynamic: "990",
          introduction: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
        },
        {
          id: 9,
          title: "哇哈哈",
          bodynumber: "999",
          pic,
          dynamic: "990",
          introduction: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
        },
        {
          id: 10,
          title: "哇哈哈",
          bodynumber: "999",
          pic,
          dynamic: "990",
          introduction: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
        },
      ],
      Carousel: [
        {
          id: 1,
          Carousel: Carousel1
        },
        {
          id: 2,
          Carousel:Carousel2
        },
        {
          id: 3,
          Carousel:Carousel3
        },
        {
          id: 4,
          Carousel:Carousel4
        },
      ],
      listQuery:{
          page:1,
          size:9,
      },
      total:10,
      circlenumbaer: "18"
    };
  },
  methods:{
      circle(){
        this.$router.push({path:'/circle'})
      },
  }
};
</script>


<style scoped>
.card {
  width: 100%;
  height: 150px;
}
.card-room {
  width: 230px;
  height: 200px;
  padding-top: 10px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: rgba(42, 130, 228, 0.3) solid 1px;
}
.card-title {
  font-size: 15px;
  line-height: 150%;
  font-weight: bold;
  color: rgba(3, 92, 193, 1);
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
  color: rgba(56, 56, 56, 1);
  font-size: 14px;
  line-height: 150%;
  text-align: center;
}
.record-data {
  width: 50%;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: rgba(56, 56, 56, 1);
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
  width: 100%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-between
}
.upleft {
  width: 67%;
  margin-top: 2%;
  padding: 2%;
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
  width: 33%;
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

</style>



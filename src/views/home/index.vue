<template>
  <div>
    <!-- 消息欄  -->
    <div class="first">
      <!-- left -->
      <div class="Headlines">今日头条</div>
      <!-- middle -->
      <div class="disappear">
        <img src="../../icons/svg/horn.svg" class="img" />
        <div class="disappear_text">客户端下载地址：</div>
        <div v-for="item in list" class="web" :key="item">
          <div class="web_text">{{item.web}}</div>
          <div>
            <img :src="item.img" class="web_img" />
          </div>
        </div>
        <!-- right -->
        <div class="app">谨防上当受骗，点击下载官方APP。</div>
      </div>
    </div>
    <!-- 第一模块 -->
    <div class="content">
      <!-- left-top -->
      <div style="width:50%;">
        <div>
          <!-- first -->
          <div class="title">{{title}}</div>
          <!-- second -->
          <div class="titlecon">{{titlecon}}</div>
          <!-- third -->
          <div v-for="item1 in list1" :key="item1">
            <div class="cocon">{{item1}}</div>
          </div>
        </div>
        <!-- left-min -->
        <div>
          <!-- first -->
          <div class="title">{{title}}</div>
          <!-- second -->
          <div class="titlecon">{{titlecon1}}</div>
        </div>
        <!-- left-bottom -->
        <div class="leftbottom">
          <!-- left -->
          <div class="Headlines">点评台</div>
          <div class="comment1">发布观点，您可以获得丰富的点评奖励。</div>
          <div class="comment">点击这里发表点评</div>
        </div>
      </div>
      <!-- right -->
      <div style="width:50%;">
        <div style="float:right">
          <img :src="nowwhe" class="wheimg" />
        </div>
        <div class="comment2">更多评测 > ></div>
        <!-- 清除浮动 -->
        <div class="clear"></div>
      </div>
    </div>
    <!-- 第二模块 -->
    <div class="second">
      <div v-for="item2 in list2" :key="item2" class="box">
        <img :src="item2.img" class="second_img" />
        <div>
          <!-- 标题 -->
          <div class="second_title">{{item2.title}}</div>
          <!-- 内容 -->
          <div class="second_con">{{item2.con}}</div>
        </div>
      </div>
    </div>
    <!-- 广告 -->
    <div>
      <img :src="advertisement" class="adv" />
    </div>
    <!-- 第三模块 -->
    <div>
      <!-- top -->
      <div class="third">
        <div class="Headlines">游戏技巧</div>
        <div class="third_mid">发布各类游戏攻略的平台，包括游戏攻略、心得秘籍、视频攻略、游戏技巧、强档图文攻略。</div>
        <div class="third_right">
          <div style="float: right;">有奖征文，点击进入投稿平台</div>
        </div>
      </div>
      <!-- min -->
      <div class="min">
        <div v-for="item3 in list3" :key="item3" class="min_frame">
          <div class="min_title">{{item3.title}}</div>
          <div v-for="item4 in item3.con" :key="item4">
            <div class="min_con">{{item4}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 第四模块 -->
    <div>
      <!-- top -->
      <div class="fourth">
        <div class="Headlines">积分商城</div>
        <div class="fourth_min">发布帖子、发布点评以及站点奖励获得积分可获得大量话费、优惠券以及实物</div>
        <div class="fourth_right">
          <div style="float:right">有奖征文，点击进入投稿平台</div>
        </div>
      </div>
      <!-- min -->
      <div class="botton">
          <div v-for="item5 in list4" :key="item5" class="last">
              <img :src="item5.img" class="last_img">
              <div class="last_money">{{item5.money}}</div>
              <div class="last_text">
                <button class="last_button">{{item5.text}}</button>
              </div>
              
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import DragProcess from "_c/DragProcess";
export default {
  name: "home",
  components: {
    DragProcess
  },
  methods: {},
  data() {
    return {
      list: [
        {
          web: "AAA.COM",
          img: require("../../icons/svg/stars.svg")
        },
        {
          web: "AAA.COM",
          img: require("../../icons/svg/stars.svg")
        },
        {
          web: "AAA.COM",
          img: require("../../icons/svg/stars.svg")
        }
      ],
      title: "魔域，魔域互通版为官方运营正版游戏",
      titlecon:
        "Tristique,et molestie lacus pertium. Etiam tempus ornare erocs vel pharetra. Pellenterque in felis quam. In risus justo, congue ut quam vel, dictum dapibus nuclacus pretium. Etiam tempus ornare eros vel pharetra. Pellentesque in felis quam.In risus justo.",
      list1: [
        "> *****************",
        "> *****************",
        "> *****************",
        "> *****************"
      ],
      titlecon1:
        "Tristique, et molestie lacus pretium. Etiam tempus ornare eros vel pharetra. Pellentesque in felis quam. In risus justo, congue ut quam vel, dictum dapibus nunc.lacus pretium. Etiam tempus ornare eros vel pharetra. ",
      wheplanting: [
        require("../../assets/home/wp1.jpg"),
        require("../../assets/home/wp2.jpg"),
        require("../../assets/home/wp3.jpg"),
        require("../../assets/home/wp4.jpg"),
        require("../../assets/home/wp5.jpg")
      ],
      i: "0",
      nowwhe: require("../../assets/home/wp1.jpg"),
      list2: [
        {
          img: require("../../assets/home/headp4.jpg"),
          title: "单行文字啊啊啊啊",
          con:
            " In risus justo, congue ut quam vel, dictum dapibus nunc.lacus pretium. Etiam tempus ornare eros vel pharetra.  tum venenatis risus. Vestibulum eleifend ligula a odio tristique, et molestie."
        },
        {
          img: require("../../assets/home/headp1.jpg"),
          title: "单行文字啊啊啊啊",
          con:
            " In risus justo, congue ut quam vel, dictum dapibus nunc.lacus pretium. Etiam tempus ornare eros vel pharetra.  tum venenatis risus. Vestibulum eleifend ligula a odio tristique。"
        },
        {
          img: require("../../assets/home/headp3.jpg"),
          title: "单行文字啊啊啊啊",
          con:
            " In risus justo, congue ut quam vel, dictum dapibus nunc.lacus pretium. Etiam tempus ornare eros vel pharetra.  tum venenatis risus. Vestibulum eleifend ligula a odio tristique, et molesti."
        },
        {
          img: require("../../assets/home/headp2.jpg"),
          title: "单行文字啊啊啊啊",
          con:
            " In risus justo, congue ut quam vel, dictum dapibus nunc.lacus pretium. Etiam tempus ornare eros vel pharetra.  tum venenatis risus. Vestibulum eleifend ligula a odio tristique。"
        }
      ],
      advertisement: require("../../assets/home/Advertisement.jpg"),
      list3: [
        {
          title: "强档攻略",
          con: [
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈"
          ]
        },
        {
          title: "视频攻略",
          con: [
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈"
          ]
        },
        {
          title: "真人",
          con: [
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈"
          ]
        },
        {
          title: "联机教程",
          con: [
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈"
          ]
        },
        {
          title: "游戏问答",
          con: [
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈"
          ]
        },
        {
          title: "老虎机",
          con: [
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈",
            "汇集全网最新最全的游戏技巧。哇哈哈哈哈哈哈哈"
          ]
        }
      ],
      list4:[
        {
            img:require("../../assets/home/integral1.jpg"),
            money:'20元话费',
            text:'兑换'
        },
         {
            img:require("../../assets/home/integral2.jpg"),
            money:'50元话费',
            text:'兑换'
        },
         {
            img:require("../../assets/home/integral3.jpg"),
            money:'20元话费',
            text:'兑换'
        }, {
            img:require("../../assets/home/integral4.jpg"),
            money:'20元话费',
            text:'兑换'
        }, 
        {
            img:require("../../assets/home/integral5.jpg"),
            money:'20元话费',
            text:'兑换'
        },
         {
            img:require("../../assets/home/integral6.jpg"),
            money:'20元话费',
            text:'兑换'
        }
      ]
    };
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
};
</script>
<style scoped>
.first {
  /* border: salmon solid 1px; */
  height: 130px;
  width: 100%;
  padding: 40px 0px 40px 24px;
  display: flex;
  flex-direction: row;
}
.Headlines {
  width: 93px;
  height: 52px;
  font-size: 14px;
  line-height: 52px;
  color: rgba(3, 92, 193, 1);
  text-align: center;
  font-weight: bold;
  border: 1px solid #035cc1;
}
.disappear {
  border-top: 1px dotted #999999;
  border-bottom: 1px dotted #999999;
  height: 40px;
  margin-top: 5px;
  margin-left: 10px;
  width: 89%;
  line-height: 40px;
  font-size: 17px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
}
.img {
  width: 30px;
  height: 30px;
  margin-top: 5px;
}
.disappear_text {
  font-weight: bold;
  margin-left: 5px;
}
.web {
  /* border: solid 1px springgreen; */
  display: flex;
  flex-direction: row;
}
.web_text {
  font-weight: bold;
  margin-left: 15px;
}
.web_img {
  width: 28px;
  height: 28px;
  margin-top: 5px;
  margin-left: 5px;
}
.app {
  font-weight: bold;
  color: rgba(255, 111, 35, 1);
  margin-left: 80px;
}
.title {
  color: rgba(227, 92, 50, 1);
  font-size: 27px;
  font-weight: bold;
}
.titlecon {
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  line-height: 160%;
  margin-top: 10px;
}
.cocon {
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  line-height: 150%;
}
.leftbottom {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
}
.comment {
  color: rgba(0, 0, 0, 1);
  font-size: 15px;
  /* border: #035cc1 solid 1px; */
  padding-top: 30px;
}
.comment1 {
  color: rgba(0, 0, 0, 1);
  font-size: 15px;
  /* border: #035cc1 solid 1px; */
  padding-top: 30px;
  margin-left: 15px;
}
.content {
  /* margin-top: 30px; */
  margin-left: 20px;
  margin-right: 25px;
  display: flex;
  flex-direction: row;
}
.comment2 {
  color: rgba(0, 0, 0, 1);
  font-size: 15px;
  /* border: #035cc1 solid 1px; */
  padding-top: 10px;
  float: right;
}
.clear {
  clear: both;
}
.wheimg {
  width: 500px;
  height: 400px;
}
.second {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 20px;
  margin-right: 20px;
}
.second_img {
  width: 113px;
  height: 113px;
}
.box {
  width: 50%;
  /* border: #035cc1 solid 1px; */
  display: flex;
  flex-direction: row;
  margin-top: 30px;
}
.second_title {
  margin-left: 5px;
  font-size: 15px;
}
.second_con {
  color: rgba(0, 0, 0, 1);
  font-size: 15px;
  line-height: 140%;
  margin-top: 15px;
  margin-left: 5px;
}
.adv {
  width: 1200px;
  height: 110px;
  margin-top: 10px;
  margin-bottom: 15px;
}
.third {
  margin-left: 25px;
  margin-right: 35px;
  display: flex;
  flex-direction: row;
  height: 54px;
  line-height: 54px;
  /* border: #035cc1 solid 1px; */
}
.third_mid {
  font-size: 15px;
  margin-left: 20px;
}
.third_right {
  font-size: 15px;
  /* border: #035cc1 solid 1px; */
  width: 36%;
}
.min {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 20px;
}
.min_frame {
  height: 232px;
  width: 31.5%;
  margin-right: 20px;
  margin-top: 20px;
  border: #e0e0e0 solid 1px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
  border-top: none;
  padding-top: 10px;
  padding-left: 10px;
}
.min_title {
  font-size: 28px;
  margin-bottom: 10px;
}
.min_con {
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  margin-left: 5px;
}
.fourth {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px;
}
.fourth_right {
  /* border: #035cc1 solid 1px; */
  width: 480px;
  margin-top: 32px;
}
.fourth_min {
  /* border: #035cc1 solid 1px; */
  width: 560px;
  margin-top: 32px;
  margin-left: 20px;
}
.last{
  width: 15%;
  height: 230px;
  margin-left:20px;
  margin-right: 20px;
  /* border: #035cc1 solid 1px  */
}
.botton{
  display: flex;
  flex-direction: row;
}
.last_img{
  width: 155px;
  height: 112px;
}
.last_money{
  font-size: 20px;
  height: 50px;
  line-height: 50px;
  text-align: center
}
.last_button{
  width: 73px;
  height: 30px;
  	border-radius: 3px;
	font-size: 14px;
	text-align: center;
  	color: rgba(255, 255, 255, 1);
	background-color: rgba(227, 92, 50, 1);
}
.last_text{
  /* border: #035cc1 solid 1px; */
  text-align: center
}
</style>
<template>
  <div>
    <!-- 消息欄  -->
    <div class="first">
      <!-- left -->
      <div class="Headlines" id="aa">今日头条</div>
      <!-- middle -->
      <div class="disappear">
        <img src="../../icons/svg/horn.svg" class="img" />
        <div class="disappear_text">客户端下载地址：</div>
        <div v-for="item in list" class="web" :key="item.id">
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
      <div class="left">
        <div>
          <!-- first -->
          <div class="title">{{title}}</div>
          <!-- second -->
          <div class="titlecon">{{titlecon}}</div>
          <!-- third -->
          <div v-for="item1 in list1" :key="item1.id" class="title1">
            <img src="../../icons/svg/arrow.svg" class="arrow" />
            <div class="cocon" @click="article()">{{item1.con}}</div>
            <div class="clear"></div>
          </div>
        </div>
        <!-- left-min -->
        <div>
          <!-- first -->
          <div class="title">{{title}}</div>
          <!-- second -->
          <div class="titlecon">{{titlecon1}}</div>
        </div>
      </div>
      <!-- right -->
      <div class="right">
        <div>
          <img :src="nowwhe" class="wheimg" />
        </div>
      </div>
    </div>
    <!-- 点播台 -->
    <div class="bar">
      <div class="Headlines1">点评台</div>
      <div class="bar_first">发布观点，您可以获得丰富的点评奖励。</div>
      <div class="bar_second">点击这里发表点评</div>
      <div class="bar_third" @click="eval()">更多评测 ></div>
    </div>

    <!-- 第二模块 -->
    <div class="second">
      <div v-for="item2 in list2" :key="item2.id" class="box">
        <div>
          <img :src="item2.img" class="second_img" />
        </div>
        <div class="box1">
          <!-- 用户 -->
          <div class="second_name" @click="personal()">{{item2.name}}</div>
          <!-- 状态 -->
          <div class="second_state">{{item2.state}}</div>
          <!-- 游戏 -->
          <div class="second_game" @click="game()">{{item2.game}}</div>
          <!-- 清除缓存 -->
          <div class="clear"></div>
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
      <div class="bar">
        <div class="Headlines1">游戏技巧</div>
        <div class="bar_first1">发布各类游戏攻略的平台，包括游戏攻略、心得秘籍、视频攻略、游戏技巧、强档图文攻略。</div>
        <div class="third_right">
          <div style="float: right;" @click="contribute()">有奖征文，点击进入投稿平台</div>
          <!-- 清除浮动 -->
          <div class="clear"></div>
        </div>
      </div>
      <!-- min -->
      <div class="min">
        <div v-for="(item3) in list3" :key="item3.title" class="min_frame">
          <div class="web" style="  margin-bottom: 15px;">
            <div class="Headlines1">{{item3.title}}</div>
            <div class="more" @click="more">{{item3.more}}</div>
          </div>
          <div v-for="item4 in item3.con" :key="item4.id">
            <div class="min_con" @click="specarticle(item3.id)">{{item4.cons}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 第四模块 -->
    <div>
      <!-- top -->
      <div class="bar">
        <div class="Headlines1">积分商城</div>
        <div class="bar_first1">发布帖子、发布点评以及站点奖励获得积分可获得大量话费、优惠券以及实物</div>
        <div class="fourth_right">
          <div @click="contribute()">有奖征文，点击进入投稿平台</div>
        </div>
      </div>
      <!-- min -->
      <div class="botton">
        <div v-for="item5 in list4" :key="item5.img" class="last">
          <img :src="item5.img" class="last_img" />
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
  methods: {
    //跳转个人中心页面
    personal() {
      // this.$router.push({ path:'/two.html'  })
      console.log("个人中心");
    },
    //跳转文章页面
    article() {
      this.$router.push({ path:'article'  })
      console.log("文章页面");
    },
    //跳转到【游戏中心-游戏内页】
    game() {
      // this.$router.push({ path:'/two.html'  })
      console.log("游戏中心-游戏内页");
    },
    //跳转网友评测界面
    eval() {
      // this.$router.push({ path:'/two.html'  })
      console.log("网友点评");
    },
    //跳转到投稿页面
    contribute() {
      this.$router.push({ path:'contribute'  })
      console.log("投稿");
    },
    //跳转到【文章页】（表示某一篇文章）
    specarticle(s) {
      // this.$router.push({ path:'/two.html'  })
      if (s == 2) {
         this.$router.push({ path:'videopage'})
        console.log("视频");
      } else {
        console.log("表示某一篇文章");
      }
    },
    //更多
    more() {
      this.$router.push({ path:'more'  })
      console.log("更多");
    }
  },
  data() {
    return {
      n: 1,
      list: [
        {
          id: "1",
          web: "AAA.COM",
          img: require("../../icons/svg/stars.svg")
        },
        {
          id: "2",
          web: "AAA.COM",
          img: require("../../icons/svg/stars.svg")
        },
        {
          id: "3",
          web: "AAA.COM",
          img: require("../../icons/svg/stars.svg")
        }
      ],
      title: "魔域，魔域互通版为官方运营正版游戏",
      titlecon:
        "狙击手作为现代战争环境下一种相对特殊的远程兵种，凭借着低调的风格，危险的气质，一击必杀的隐忍和深藏不露的作战方式，渐渐在各类游戏当中发展出了属于自己的科技树和生态链。一把杀敌于无形的狙击枪，既是区分抖音萌新和油管大佬的分水岭。",
      list1: [
        { con: "标题标题标题标题标题标题标题标题标题标题", id: "1" },
        { con: "标题标题标题标题标题标题标题标题标题标题", id: "2" },
        { con: "标题标题标题标题标题标题标题标题标题标题", id: "3" },
        { con: "标题标题标题标题标题标题标题标题标题标题", id: "4" }
      ],
      titlecon1:
        "狙击手作为现代战争环境下一种相对特殊的远程兵种，凭借着低调的风格，危险的气质，一击必杀的隐忍和深藏不露的作战方式，渐渐在各类游戏当中发展出了属于自己的科技树和生态链。一把杀敌于无形的狙击枪，既是区分抖音萌新和油管大佬的分水岭，也是一些“蹲逼”最终成长能否为“地藏”的试金石。",
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
          id: "1",
          img: require("../../assets/home/headp1.jpg"),
          name: "杨雪儿",
          state: "评测了",
          game: "魔域3",
          con:
            "但其庞大复杂程度也让不少新玩家难以掌握，本篇我们就来针对新玩家进行一些入门指引。我只有两行，多出看不见。但其庞大复杂程度也让不少新玩家难以掌握，本篇我们就来针对新玩家进行一些入门指引。"
        },
        {
          id: "2",
          img: require("../../assets/home/headp2.png"),
          name: "杨雪儿",
          state: "评测了",
          game: "魔域3",
          con:
            "但其庞大复杂程度也让不少新玩家难以掌握，本篇我们就来针对新玩家进行一些入门指引。我只有两行，多出看不见。但其庞大复杂程度也让不少新玩家难以掌握，本篇我们就来针对新玩家进行一些入门指引。"
        },
        {
          id: "3",
          img: require("../../assets/home/headp3.jpg"),
          name: "杨雪儿",
          state: "评测了",
          game: "魔域3",
          con:
            "但其庞大复杂程度也让不少新玩家难以掌握，本篇我们就来针对新玩家进行一些入门指引。我只有两行，多出看不见。但其庞大复杂程度也让不少新玩家难以掌握，本篇我们就来针对新玩家进行一些入门指引。"
        },
        {
          id: "4",
          img: require("../../assets/home/headp4.jpg"),
          name: "杨雪儿",
          state: "评测了",
          game: "魔域3",
          con:
            "但其庞大复杂程度也让不少新玩家难以掌握，本篇我们就来针对新玩家进行一些入门指引。我只有两行，多出看不见。但其庞大复杂程度也让不少新玩家难以掌握，本篇我们就来针对新玩家进行一些入门指引。"
        },
        {
          id: "5",
          img: require("../../assets/home/headp5.jpg"),
          name: "杨雪儿",
          state: "评测了",
          game: "魔域3",
          con:
            "但其庞大复杂程度也让不少新玩家难以掌握，本篇我们就来针对新玩家进行一些入门指引。我只有两行，多出看不见。但其庞大复杂程度也让不少新玩家难以掌握，本篇我们就来针对新玩家进行一些入门指引。"
        },
        {
          id: "6",
          img: require("../../assets/home/headp6.jpg"),
          name: "杨雪儿",
          state: "评测了",
          game: "魔域3",
          con:
            "但其庞大复杂程度也让不少新玩家难以掌握，本篇我们就来针对新玩家进行一些入门指引。我只有两行，多出看不见。但其庞大复杂程度也让不少新玩家难以掌握，本篇我们就来针对新玩家进行一些入门指引。"
        }
      ],
      advertisement: require("../../assets/home/Advertisement.png"),
      list3: [
        {
          id:'1',
          title: "强档攻略",
          more: "更多>>",
          con: [
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "1" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "2" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "3" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "4" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "5" }
          ]
        },
        {
          id:'2',
          title: "视频攻略",
          more: "更多>>",
          con: [
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "1" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "2" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "3" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "4" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "5" }
          ]
        },
        {
          id:'3',
          title: "真人",
          more: "更多>>",
          con: [
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "1" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "2" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "3" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "4" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "5" }
          ]
        },
        {
          id:'4',
          title: "联机教程",
          more: "更多>>",
          con: [
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "1" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "2" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "3" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "4" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "5" }
          ]
        },
        {
          id:'5',
          title: "游戏问答",
          more: "更多>>",
          con: [
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "1" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "2" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "3" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "4" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "5" }
          ]
        },
        {
          id:'6',
          title: "老虎机",
          more: "更多>>",
          con: [
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "1" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "2" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "3" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "4" },
            { cons: "【攻略】文字标题文字标题文字标题文字标题-1", id: "5" }
          ]
        }
      ],
      list4: [
        {
          id: "1",
          img: require("../../assets/home/integral1.jpg"),
          money: "20元话费",
          text: "兑换"
        },
        {
          id: "2",
          img: require("../../assets/home/integral2.jpg"),
          money: "50元话费",
          text: "兑换"
        },
        {
          id: "3",
          img: require("../../assets/home/integral3.jpg"),
          money: "20元话费",
          text: "兑换"
        },
        {
          id: "4",
          img: require("../../assets/home/integral4.jpg"),
          money: "20元话费",
          text: "兑换"
        },
        {
          id: "5",
          img: require("../../assets/home/integral5.jpg"),
          money: "20元话费",
          text: "兑换"
        },
        {
          id: "6",
          img: require("../../assets/home/integral6.jpg"),
          money: "20元话费",
          text: "兑换"
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
  /* height: 100px; */
  background-color: rgba(245, 245, 245, 1);
  width: 100%;
  display: flex;
  flex-direction: row;
}
.Headlines {
  width: 122px;
  height: 48px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(3, 92, 193, 1);
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  line-height: 48px;
}
.disappear {
  height: 40px;
  margin-top: 5px;
  margin-left: 10px;
  width: 89%;
  line-height: 40px;
  font-size: 14px;
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
  color: rgba(42, 130, 228, 1);
  /* margin-left: 80px; */
  /* border: solid 1px springgreen; */
  /* width: 50%; */
  text-align: right;
  margin-left: 285px;
}
.left {
  width: 55%;
  border: rgba(204, 204, 204, 1) solid 1px;
  padding-left: 20px;
  /* padding-top: 20px; */
  padding-right: 40px;
}
.right {
  width: 40%;
  margin-left: 40px;
}
.title {
  color: rgba(56, 56, 56, 1);
  font-size: 20px;
  font-weight: bold;
  padding-top: 20px;
  /* border: sandybrown solid 1px; */
}
.titlecon {
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  line-height: 160%;
  margin-top: 10px;
  margin-bottom: 20px;
}
.title1 {
  height: 25px;
  line-height: 25px;
}
.arrow {
  width: 15px;
  height: 15px;
  float: left;
  /* border: 1px slateblue solid; */
  padding-top: 5px;
}
.Headlines1 {
  width: 71px;
  height: 42px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(3, 92, 193, 1);
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  line-height: 42px;
}
.cocon {
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  /* line-height: 25px; */
  /* border:  solid springgreen 1px */
}
.bar {
  height: 42px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: rgba(245, 245, 245, 1);
}
.bar_first {
  line-height: 42px;
  font-size: 14px;
  margin-left: 3px;
}
.bar_first1 {
  line-height: 42px;
  font-size: 14px;
  margin-left: 10px;
}
.bar_second {
  line-height: 42px;
  font-size: 14px;
  color: rgba(239, 86, 86, 1);
  margin-left: 20px;
}
.bar_third {
  line-height: 42px;
  font-size: 14px;
  color: rgba(239, 86, 86, 1);
  /* border: solid springgreen 1px; */
  margin-left: 620px;
}
.leftbottom {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
}

.content {
  margin-top: 30px;
  /* margin-left: 20px; */
  margin-right: 25px;
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
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
  /* margin-top: 20px; */
  /* border: springgreen solid 1px; */
}
.second_img {
  border: rgba(187, 188, 175, 1) solid 1px;
  padding: 5px;
  width: 105px;
  height: 100px;
}
.box {
  width: 50%;
  /* border: #035cc1 solid 1px; */
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: dotted rgba(153, 153, 153, 1) 1px;
}
.box:nth-child(5) {
  border-bottom: none;
}
.box:nth-child(6) {
  border-bottom: none;
}
.box1 {
  padding-right: 30px;
  /* border: springgreen solid 1px; */
}
.second_name {
  margin-left: 5px;
  font-size: 17px;
  font-weight: bold;
  float: left;
}
.second_state {
  font-size: 17px;
  margin-left: 10px;
  float: left;
  color: rgba(239, 86, 86, 1);
}
.second_game {
  margin-left: 10px;
  color: rgba(80, 80, 80, 1);
  font-size: 17px;
  float: left;
}
.second_con {
  color: rgba(0, 0, 0, 1);
  font-size: 15px;
  line-height: 130%;
  margin-top: 15px;
  margin-left: 5px;
}
.more {
  /* border: solid steelblue 1px; */
  /* width: 80%; */
  text-align: right;
  color: rgba(3, 92, 193, 1);
  font-size: 14px;
  margin-top: 23px;
  margin-left: 240px;
}
.adv {
  width: 100%;
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
  font-size: 14px;
  /* border: #035cc1 solid 1px; */
  width: 43%;
  line-height: 42px;
  color: rgba(239, 86, 86, 1);
}
.min {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* margin-left: 20px; */
}
.min_frame {
  height: 215px;
  width: 31.5%;
  margin-top: 30px;
  margin-right: 30px;
  border-top: rgba(3, 92, 193, 1) solid 2px;
}
.min_frame:nth-child(3n) {
  margin-right: 0px;
  /* background-color: aqua */
}
.min_con {
  color: rgba(56, 56, 56, 1);
  font-size: 14px;
  line-height: 200%;
}
.fourth_right {
  /* border: #035cc1 solid 1px; */
  font-size: 14px;
  /* width: 51.5%; */
  line-height: 42px;
  color: rgba(239, 86, 86, 1);
  margin-left: 415px;
}

.last {
  width: 15%;
  height: 230px;
  margin-left: 20px;
  margin-right: 20px;
  /* border: #035cc1 solid 1px  */
}
.botton {
  display: flex;
  flex-direction: row;
}
.last_img {
  width: 155px;
  height: 112px;
}
.last_money {
  font-size: 20px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.last_button {
  width: 73px;
  height: 30px;
  border-radius: 3px;
  font-size: 14px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(227, 92, 50, 1);
}
.last_text {
  /* border: #035cc1 solid 1px; */
  text-align: center;
}
</style>
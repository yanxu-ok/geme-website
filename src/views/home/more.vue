<template>
  <div>
    <!-- top -->
    <div class="top">
      <div
        v-for="item in title"
        :key="item"
        class="title"
        @mouseover="mouseOver($event)"
        @mouseleave="mouseLeave($event)"
      >{{item}}</div>
    </div>
    <!-- middle -->
    <div class="min">
      <!-- left -->
      <div class="min_left">
          <!-- subject -->
          <div class="subject">文章</div>
      </div>
      <!-- right -->
      <div class="min_right">
        <!-- 背景 -->
        <div>
          <img :src="perback" class="perback" />
        </div>
        <!-- 头像 -->
        <div class="box">
          <img :src="background" class="background" />
        </div>
        <!-- 用户名 -->
        <div class="float">
          <div class="name">{{name}}</div>
          <!-- 等级 -->
          <div class="grade">{{grade}}</div>
        </div>
        <!-- bottom -->
        <div style="margin-top:40px">
          <div v-for="item1 in list" :key="item1.id" class="bottom">
            <div class="number">{{item1.number}}</div>
            <div class="text">{{item1.text}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "more",
  components: {},
  methods: {
    //鼠标经过时
    mouseOver($event) {
      $event.currentTarget.className = "index ";
    },
    //鼠标离开时
    mouseLeave($event) {
      $event.currentTarget.className = "title ";
    }
  },
  data() {
    return {
      title: [
        "全部",
        "强档攻略",
        "联机教程",
        "视频攻略",
        "真人",
        "游戏问答",
        "老虎机"
      ],
      perback: require("../../assets/home/perback.jpg"),
      background: require("../../assets/home/background.jpg"),
      name: "太空人一号",
      grade: "LV50",
      list: [
        {
          number: "63",
          id: "1",
          text: "关注"
        },
        {
          number: "63",
          id: "2",
          text: "粉丝"
        },
        {
          number: "6",
          id: "3",
          text: "圈子"
        },
        {
          number: "105",
          id: "4",
          text: "发帖数"
        }
      ]
    };
  }
};
</script>
<style scoped>
.top {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.11);
  border-radius: 6px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.11428571428571431);
  display: flex;
  flex-direction: row;
}
.title {
  width: 10%;
  text-align: center;
  font-size: 16px;
  letter-spacing: 2px;
  /* background-color:springgreen; */
  /* border: solid springgreen 1px; */
}
.index {
  width: 10%;
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(3, 92, 193, 1);
  font-size: 16px;
}
.subject{
    letter-spacing: 2px;
	color: rgba(80, 80, 80, 1);
	font-size: 20px;
    font-weight: bold
}
.min {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.min_left {
  width: 70%;
  height: 1000px;
  border: 1px solid rgba(0, 0, 0, 0.11);
  border-radius: 6px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.11428571428571431);
    padding: 20px 60px 0px 40px;
}
.min_right {
  width: 28%;
  height: 400px;
  margin-left: 20px;
  border: 1px solid rgba(0, 0, 0, 0.11);
  border-radius: 6px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.11428571428571431);
}


.clear {
  clear: both;
}

.perback {
  width: 100%;
  height: 200px;
  border-radius: 6px;
}
.background {
  width: 92px;
  height: 92px;
  border-radius: 46px;
  /* margin-top: -70px; */
  border: solid rgba(255, 255, 255, 0.36) 2px;
}
.box {
  /* border:  slateblue solid 1px; */
  margin-top: -85px;
  text-align: center;
}
.float {
  display: flex;
  flex-direction: row;
}
.name {
  color: rgba(80, 80, 80, 1);
  font-size: 16px;
  font-weight: bold;
  width: 50%;
  text-align: right;
  height: 30px;
  line-height: 30px;
  /* border: slateblue solid 1px; */
}
.grade {
  width: 55px;
  height: 21px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 141, 26, 1);
  border-radius: 11px;
  font-size: 14px;
  text-align: center;
  line-height: 21px;
  margin-top: 5px;
  margin-left: 30px;
}
.bottom {
  border-right: solid black 1px;
  width: 25%;
  float: left;
  text-align: center
}
.bottom:nth-child(4){
      border-right: none
}
.number{
    height: 40px;
    /* border: solid springgreen 1px; */
    font-size: 22px;
}
.text{
    height: 20px;
    font-size: 14px;
}
</style>
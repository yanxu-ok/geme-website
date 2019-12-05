<template>
  <div class="backgroundImg">
    <div class="img_touxiang">
      <div>
        <div>
          <img src="@/assets/profile/22222.jpg" class="img1234" />
        </div>
        <div class="dengji">
          <div>太空人一号</div>
          <div>LV50</div>
          <div>白银会员</div>
        </div>
        <div class="guanzhu" @click="isShow" v-if="Isshow">关注</div>
        <div class="guanzhu" @click="isShow" v-else>已关注</div>
        <!-- 下面区域 -->
        <div class="down">
          <div class="title">
            <span>全部</span>
          </div>

          <div class="content">
            <!-- 左侧 -->
            <div class="content_a">
              <div class="guanzhu1">
                <div
                  v-for="(item, index) in myList"
                  :key="index"
                  class="xiao"
                  @click="nextPage(item.title)"
                >
                  <div>{{item.count}}</div>
                  <div>{{item.title}}</div>
                </div>
              </div>
              <div class="jianjie">
                <div class="text">资料简介</div>
                <div class="input">
                  <div v-for="(item, index) in userInfo" :key="index">
                    {{item.title}}
                    <input v-model="item.content" />
                  </div>
                </div>
              </div>
            </div>
            <!-- 右侧 -->
            <div class="content_b">
              <div class="backg" v-for="(item, index) in 2" :key="index">
                <div class="title1123">
                  <div>
                    <img src="@/assets/profile/12333.jpg" class="img123" />
                  </div>
                  <div>
                    <div class="dengji1">
                      <div>太空人一号</div>
                      <div>LV50</div>
                      <div>白银会员</div>
                    </div>
                    <div class="date">2019-10-30 21:31</div>
                  </div>
                </div>
                <!-- 文字 -->
                <div class="text_content">
                  Automation Empire是一个关于效率和扩展的模拟/管理游戏。从零开始，建立起有红场和机器组成的庞大且相互连接的工业网络。有效的
                  资源玉树对于您作为自动化工程师的成功至关重要，利用您可以使用的所有工具，包括矿车，无人机，卡车，火车和货运火箭。利用您的
                  创造力来规划高效的机器物流网络，以形成机械的生产超级有机体。这只最新一条评测.......
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "profile",
  data() {
    return {
      Isshow: true,
      userInfo: [
        {
          title: "昵称",
          content: "太空人一号"
        },
        {
          title: "昵称",
          content: "太空人一号"
        },
        {
          title: "昵称",
          content: "太空人一号"
        },
        {
          title: "昵称",
          content: "太空人一号"
        }
      ],
      myList: [
        { title: "关注", count: 63 },
        { title: "粉丝", count: 63 },
        { title: "圈子", count: 6 },
        { title: "发帖数", count: 105 }
      ]
    };
  },
  methods: {
    isShow() {
      this.Isshow = !this.Isshow;
    },
    nextPage(...args) {
      if (args[0] === "关注") {
        this.$router.push("/myguanzhu");
      } else if (args[0] === "粉丝") {
        this.$router.push("/myfans");
      }
    }
  }
};
</script>
<style lang='less' scoped>
.backgroundImg {
  width: auto;
  height: 900px;
  background: url("~@/assets/profile/beijing.jpg");
  background-size: 100% 100%;
  position: relative;
  .img_touxiang {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 15%);
    text-align: center;
    .img1234 {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.62);
      border: 10px solid rgba(255, 255, 255, 0.62);
    }
    .dengji {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      div {
        margin: 0 5px;
      }
      div:nth-child(1) {
        color: rgba(255, 255, 255, 1);
        font-weight: bold;
        font-size: 18px;
      }
      div:nth-child(2) {
        background-color: rgba(255, 141, 26, 1);
        color: rgba(255, 255, 255, 1);
        font-weight: bold;
        font-size: 18px;
        border-radius: 13px;
        font-size: 15px;
        line-height: 150%;
        padding: 0px 5px;
      }
      div:nth-child(3) {
        background-color: rgba(239, 86, 86, 1);
        color: rgba(255, 255, 255, 1);
        font-weight: bold;
        font-size: 18px;
        border-radius: 13px;
        font-size: 15px;
        line-height: 150%;
        padding: 0px 5px;
      }
    }
    .guanzhu {
      width: 100px;
      margin: 0 auto;
      margin-top: 10px;
      padding: 5px;
      box-sizing: border-box;
      color: rgba(255, 255, 255, 1);
      background-color: rgba(3, 92, 193, 1);
      border-radius: 27px;
      font-size: 18px;
      text-align: center;
      font-weight: bold;
    }
  }
}
.down {
  width: 850px;
  height: auto;
  margin: 0 auto;
  margin-top: 30px;
  .title {
    width: 100%;
    height: 50px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.11428571428571431);
    text-align: left;
    border-radius: 6px;
    span {
      color: rgba(3, 92, 193, 1);
      font-weight: bold;
      line-height: 50px;
      margin-left: 3%;
      box-sizing: border-box;
      font-size: 18px;
    }
  }
  .content {
    width: 100%;
    display: flex;
    .content_a {
      margin-top: 3%;
      flex: 2;
    }
    .content_b {
      margin-top: 1%;
      flex: 3;
      margin-left: 3%;
    }
    .guanzhu1 {
      display: flex;
      color: black;
      background-color: white;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.11428571428571431);
      border-radius: 6px;
      .xiao {
        margin: 4% 5%;
        border-right: 1px solid rgba(153, 153, 153, 1);
        padding: 1%;
        box-sizing: border-box;
        font-size: 14px;
        line-height: 150%;
        color: rgba(80, 80, 80, 1);
      }
    }
    .jianjie {
      margin-top: 10px;
      background-color: white;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.11428571428571431);
      border-radius: 6px;
      padding: 6% 8%;
      .text {
        text-align: left;
        color: rgba(56, 56, 56, 1);
        font-size: 15px;
        font-weight: bold;
        padding-top: 10px;
        box-sizing: border-box;
        padding-left: 10px;
      }
      .input {
        // margin-top: 10%;
        font-size: 14px;
        line-height: 150%;
        text-align: left;
        input {
          border: none;
          margin-left: 30px;
        }
        div {
          margin-top: 14%;
        }
      }
    }
  }
}
.title1123 {
  text-align: left;
  display: flex;
  background-color: white;
  padding: 3%;
  .date {
    color: rgba(80, 80, 80, 1);
    font-size: 11px;
    margin-top: 15%;
  }
  .img123 {
    width: 60px;
    height: 60px;
  }
  .dengji1 {
    display: flex;
    align-items: center;
    div {
      margin: 0 5px;
    }
    div:nth-child(1) {
      color: rgba(80, 80, 80, 1);
      font-weight: bold;
      font-size: 11px;
    }
    div:nth-child(2) {
      background-color: rgba(255, 141, 26, 1);
      color: rgba(255, 255, 255, 1);
      font-weight: bold;
      font-size: 11px;
      border-radius: 13px;
      padding: 0px 5px;
    }
    div:nth-child(3) {
      background-color: rgba(239, 86, 86, 1);
      color: rgba(255, 255, 255, 1);
      font-weight: bold;
      border-radius: 13px;
      line-height: 150%;
      padding: 0px 5px;
      font-size: 11px;
    }
  }
}
.backg {
  background-color: white;
  padding: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.11428571428571431);
  border-radius: 6px;
  margin-top: 2%;
}
.text_content {
  line-height: 150%;
  text-align: left;
  font-size: 11px;
  color: rgba(80, 80, 80, 1);
}
</style>
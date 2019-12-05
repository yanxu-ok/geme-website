<template>
  <div class="room">
    <!-- 左侧 标题+信息填写 -->
    <div class="left">
      <div class="add_title">
        <label class="title_left">创建圈子</label>
      </div>

      <!-- 信息填写 -->
      <div class="Information">
        <div class="label_room">
          <div class="labelll_title">圈子名称：</div>
          <el-input
            type="text"
            placeholder="输入内容"
            v-model="newCircle.name"
            maxlength="10"
            show-word-limit
            style="width:250px"
          ></el-input>
        </div>
        <div class="label_room">
          <div class="labelll_title">圈介绍：</div>
          <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="newCircle.introduce"
            maxlength="50"
            show-word-limit
            :rows="2"
            resize="none"
            style="width:590px;"
          ></el-input>
        </div>
        <div class="label_room">
          <label class="labelll_title">联系方式：</label>
          <el-input
            type="text"
            placeholder="输入内容"
            v-model="newCircle.phone"
            show-word-limit
            style="width:250px"
          ></el-input>
        </div>
        <div class="label_room">
          <label class="labelll_title">申请理由：</label>
          <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="newCircle.reason"
            maxlength="50"
            show-word-limit
            :rows="2"
            resize="none"
            style="width:590px;"
          ></el-input>
        </div>
        <div class="label_room">
          <label class="labelll_title">验证码：</label>

          <!-- 验证码 -->

          <el-form ref="form" class="Verification_room">
            <el-form-item prop="Verification">
              <!-- 注意：prop与input绑定的值一定要一致，否则验证规则中的value会报undefined，因为value即为绑定的input输入值 -->
              <el-input v-model="newCircle.Verification" placeholder="请输入验证码" class></el-input>
            </el-form-item>
            <el-form-item>
              <div class="identifybox">
                <s-identify :identifyCode="identifyCode" @click="refreshCode"></s-identify>
                <div class="icon_room">
                  <icon-svg icon-class="Refresh" @click="refreshCode"/>
                </div>
              </div>
            </el-form-item>
          </el-form>
        </div>

        <div style="width:100%; text-align: center; padding-top: 50px;">
          <button class="btn_post">提交</button>
        </div>
      </div>
    </div>

    <!--  右侧 个人信息 -->
    <div class="right">
      <div class="rihgt_top_pic">
        <div class="Head_portrait_room"></div>
      </div>

      <!-- 右边卡片 下半部分 文字描述 -->
      <div class="right_bottom">
        <!-- 名字+等级 -->
        <div class="title">
          <label class="name">{{Personal.name}}</label>
          <div class="level">LV{{Personal.level}}</div>
        </div>

        <!-- 具体数据 -->
        <div class="content">
          <div class="massige_room">
            <label class="massige">{{Personal.follow}}</label>
            <label class="massige_title">关注</label>
          </div>
          <div class="barrier_line"></div>
          <div class="massige_room">
            <label class="massige">{{Personal.fans}}</label>
            <label class="massige_title">粉丝</label>
          </div>
          <div class="barrier_line"></div>
          <div class="massige_room">
            <label class="massige">{{Personal.circle}}</label>
            <label class="massige_title">圈子</label>
          </div>
          <div class="barrier_line"></div>
          <div class="massige_room">
            <label class="massige">{{Personal.post}}</label>
            <label class="massige_title">帖子</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SIdentify from "@/components/identify/identify.vue";
export default {
  name: "newCricle",
  components: {
    SIdentify
  },
  data() {
    // 验证码自定义验证规则
    const validateVerifycode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (value !== this.identifyCode) {
        console.log("validateVerifycode:", value);
        callback(new Error("验证码不正确!"));
      } else {
        callback();
      }
    };

    return {
      Personal: {
        name: "太空人一号",
        level: "50",
        follow: "63",
        fans: "63",
        circle: "6",
        post: "105"
      },
      newCircle: {
        name: "",
        introduce: "",
        phone: "",
        reason: "",
        Verification: ""
      },
      identifyCodes: "1234567890",
      identifyCode: ""
    };
  },

  mounted() {
    // 验证码初始化
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },

  methods: {
    // 生成随机数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 切换验证码
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    // 生成四位随机验证码
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    }
  }
};
</script>

<style scoped>
.room {
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.left {
  width: 65%;
  height: 650px;
}
.add_title {
  width: 100%;
  height: 43px;
  background-color: rgba(3, 92, 193, 1);
  font-size: 14px;
  line-height: 150%;
}
.title_left {
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  line-height: 200%;
  font-weight: bold;
  margin-left: 10px;
}
.Information {
  width: 100%;
  padding: 4% 4% 7% 4%;
  border: rgba(42, 130, 228, 0.3) solid 1px;
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
  width: 158px;
  height: 48px;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(3, 92, 193, 1);
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  font-weight: bold;
}
.Verification_room {
  width: 100%;
  height: 38px;
  display: flex;
}
.identifybox {
  height: 38px;
  margin-left: 40px;
  display: flex;
  flex-direction: row;
}
.icon_room {
  width: 38px;
  height: 38px;
  background-color: rgba(204, 204, 204, 1);
  text-align: center;
}

.right {
  width: 350px;
  height: 350px;
  color: rgba(80, 80, 80, 1);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 6px;
  font-size: 14px;
  line-height: 150%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.11428571428571431);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.rihgt_top_pic {
  width: 350px;
  height: 150px;
  text-align: center;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-image: url("~@/assets/circle/newcircle-top.jpg");
  background-size: 100% 215px;
  background-repeat: no-repeat;
  background-position-y: -33px;
}
.Head_portrait_room {
  width: 92px;
  height: 92px;
  text-align: center;
  border-radius: 46px;
  background-image: url("~@/assets/circle/newcircle-center.jpg");
  background-size: 100% 113px;
  background-repeat: no-repeat;
  background-position-y: -10px;
  border: 5px solid rgba(255, 255, 255, 0.274);
  position: relative;
  top: 76px;
  left: 125px;
}

.content {
  width: 100%;
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}
.right_bottom {
  width: 90%;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  width: 55%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.name {
  width: 80px;
  height: 24px;
  color: rgba(80, 80, 80, 1);
  font-size: 16px;
  line-height: 150%;
  text-align: left;
  font-weight: bold;
}
.level {
  width: 55px;
  height: 21px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 141, 26, 1);
  border-radius: 11px;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
}
.barrier_line {
  width: 1px;
  height: 60px;
  background-color: rgba(153, 153, 153, 1);
  text-align: center;
}
.massige_room {
  width: 25%;
  height: 65px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}
.massige {
  color: rgba(80, 80, 80, 1);
  font-size: 22px;
  line-height: 150%;
  text-align: center;
  margin-bottom: 10px;
}
.massige_title {
  color: rgba(80, 80, 80, 1);
  font-size: 14px;
  line-height: 150%;
}
</style>
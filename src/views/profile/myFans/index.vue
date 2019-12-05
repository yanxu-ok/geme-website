<template>
  <div>
    <!-- 头部 -->
    <div class="header_top">
      <input type="button" value="我的粉丝" />
    </div>
    <div class="content_center">
      <!-- 左 -->
      <div class="content_center_left">
        <!-- 循环 -->
        <div class="rongqi" v-for="(item, index) in 5" :key="index">
          <div>
            <img src="@/assets/profile/5555.jpg" />
          </div>
          <div class="rongqi_right">
            <div>
              <div class="rongqi_right_text">风流倜傥宁采臣</div>
              <div class="rongqi_right_dengji">LV50</div>
            </div>
            <div class="rongqi_right_guanzhu">
              <input type="button" value="关注" />
            </div>
          </div>
        </div>
      </div>
      <!-- 右 -->
      <div class="content_center_right"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myFans",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang='less' scoped>
.header_top {
  width: 90%;
  margin: 0 auto;
  border-radius: 6px;
  font-size: 14px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.11428571428571431);
  padding: 8px;
  input {
    height: 30px;
    border: none;
    background-color: rgba(3, 92, 193, 1);
    padding: 5px;
    text-align: center;
    box-sizing: border-box;
    border-radius: 6px;
    color: rgba(255, 255, 255, 1);
  }
}
.content_center {
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  .content_center_left {
    border-radius: 6px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.11428571428571431);
    padding: 10px;
    flex: 3;
    .rongqi {
      display: flex;
      border-bottom: 1px solid rgba(153, 153, 153, 0.29);
      padding: 10px;
      div:nth-child(1) {
        flex: 1;
      }
      div:nth-child(2) {
        flex: 6;
      }
      img {
        width: 100%;
      }
    }
  }
  .content_center_right {
    flex: 1;
  }
}
.rongqi_right {
  display: flex;
  align-items: center;
  margin-left: 40px;
  width: auto;
  .rongqi_right_text {
    color: rgba(3, 92, 193, 1);
    font-size: 11px;
    line-height: 150%;
    text-align: left;
    font-weight: bold;
    width: 100px;
  }
  .rongqi_right_dengji {
    color: rgba(255, 255, 255, 1);
    background-color: rgba(255, 141, 26, 1);
    border-radius: 11px;
    font-size: 10px;
    padding: 3px;
    box-sizing: border-box;
    width: 50%;
    margin-top: 10px;
    text-align: center;
  }
  .rongqi_right_guanzhu {
    text-align: right;
    input {
      border: none;
      background-color: rgba(3, 92, 193, 1);
      border-radius: 6px;
      font-size: 14px;
      line-height: 150%;
      text-align: center;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      padding: 3px 10px;
    }
  }
}
</style>
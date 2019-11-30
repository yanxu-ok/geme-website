<template>
  <div>
    <!-- 销售 -->
    <div class="right_top">
      <!-- title -->
      <div class="right_top_title">
        <div>销售冠军</div>
        <div>人气冠军</div>
      </div>
      <div class="right_top_img">
        <img src="@/assets/mall/1336.jpg" />
      </div>
      <div class="right_top_text">Xiaomi/小米 小米手机4c高配版/移</div>
      <div class="right_top_down">
        <div class="right_top_down_text">
          <div>8999金币</div>
          <div>已兑823件</div>
        </div>
        <input type="button" value="立即兑换" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "xiaoShou",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang='less' scoped>
.right_top_img {
  padding: 10px;
  box-sizing: border-box;
  img {
    width: 100%;
  }
}
.right_top_text {
  font-weight: bold;
  font-size: 10px;
  text-align: center;
  color: rgba(0, 145, 255, 1);
}
.right_top_down {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid rgba(0, 145, 255, 0.3);
  padding: 5px;
  div {
    font-size: 10px;
    font-weight: bold;
    color: rgba(83, 200, 75, 1);
  }
  div:nth-child(n) {
    margin-left: 10px;
  }
  input {
    border: none;
    border-radius: 3px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(255, 111, 35, 1);
    padding: 5px 3px;
  }
}
.right_top {
  border: 1px solid rgba(0, 145, 255, 0.3);
  .right_top_title {
    display: flex;
    align-items: center;
    width: 100%;
    div {
      text-align: center;
      width: 50%;
      height: 30px;
      line-height: 30px;
      font-weight: bold;
      font-size: 10px;
    }
    div:nth-child(2) {
      background-color: rgba(229, 229, 229, 1);
    }
  }
}
</style>
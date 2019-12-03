<template>
  <div class="right_top">
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
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang='less' scoped>
.right_top_img {
  padding: 30px;
  box-sizing: border-box;
  img {
    width: 100%;
  }
}
.right_top_text {
  font-weight: bold;
  font-size: 10px;
  text-align: center;
  color: rgba(56, 56, 56, 1);
  // 
}
.right_top_down {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  border-top: 1px solid rgba(128, 128, 128, 0.19);
  padding: 5px;
  margin: 20px auto;
  div {
    font-size: 10px;
    font-weight: bold;
    color: rgba(239, 86, 86, 1);
    margin-top: 5px;
  }
  div:nth-child(n) {
    margin-left: 10px;
  }
  input {
    border: none;
    border-radius: 3px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(239, 86, 86, 1);
    padding: 5px 3px;
  }
}
</style>
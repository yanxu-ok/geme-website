<template>
  <div>
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
  name: "right",
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
  div:nth-child(n){
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
</style>
<template>
  <div>
    <div class="shopNotice">
      <div class="shopTitle1">
        <div></div>
        <span>商城公告</span>
      </div>
      <div class="content">
        <div>it618钱包 支付宝单笔转账到支付宝账...</div>
        <div>IT618精品插件（电脑版+手机版）有什么...</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shopNotice",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang='less' scoped>
.shopNotice {
  margin-top: 10px;
  border: 1px solid rgba(0, 145, 255, 0.3);
}
.shopTitle1 {
  margin-left: 30px;
  display: flex;
  align-items: center;
  margin-top: 5px;
  div {
    width: 5px;
    height: 19px;
    background-color: rgba(255, 111, 35, 1);
    margin-right: 10px;
    font-size: 12px;
  }
}
.content {
  div {
    width: 80%;
    border-bottom: 1px solid rgba(0, 145, 255, 0.3);
    padding: 10px 5px;
    line-height: 150%;
    text-align: left;
    font-size: 10px;
    margin: 5px auto;
  }
  div:nth-child(1) {
    color: rgba(255, 0, 0, 1);
  }
  div:nth-child(2) {
    color: rgba(83, 200, 75, 1);
  }
}
</style>
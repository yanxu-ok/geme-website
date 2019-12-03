<template>
  <div>
    <!-- 销售 -->
    <div class="right_top">
      <!-- title -->
      <div class="right_top_title">
        <div @click="xiaoshou">销售冠军</div>
        <div @click="renqi">人气冠军</div>
      </div>
      <!-- 三级路由 -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "xiaoShou",
  data() {
    return {};
  },
  methods: {
    xiaoshou() {
      this.$router.push("/mall");
    },
    renqi() {
      console.log(this.$route)
      console.log(this.$router)
      this.$router.push("/mall/threeRouter");
    }
  }
};
</script>
<style lang='less' scoped>
.right_top {
  border-radius: 6px;
  box-shadow:rgba(198, 198, 198, 0.5) 0px 0px 5px;
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
.myActive{
  background-color: none;
}
</style>
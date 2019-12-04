<template>
  <div>
    <!-- 销售 -->
    <div class="right_top">
      <el-tabs type="border-card">
        <el-tab-pane label="销售冠军">
          <threeRouter></threeRouter>
        </el-tab-pane>
        <el-tab-pane label="人气冠军">
          <threeRouter></threeRouter>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import threeRouter from "./threeRouter";
export default {
  name: "xiaoShou",
  components: {
    threeRouter
  },
  data() {
    return {};
  },
  methods: {
    xiaoshou() {
      this.$router.push("/mall");
    },
    renqi() {
      console.log(this.$route);
      console.log(this.$router);
      this.$router.push("/mall/threeRouter");
    }
  }
};
</script>
<style lang='less' scoped>
.right_top {
  border-radius: 6px;
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
.myActive {
  background-color: none;
}
/deep/.el-tabs--border-card {
  border: none;
  border-radius: 5px;
}
/deep/.el-tabs__nav {
  width: 100%;
  color: rgba(80, 80, 80, 1);
  .el-tabs__item {
    width: 50%;
    text-align: center;
    background-color: rgba(224, 224, 224, 0.79);
  }
}
</style>
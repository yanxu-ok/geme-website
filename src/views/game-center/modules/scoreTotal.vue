<template>
  <div class="total_home">
    <div>综合得分:</div>
    <div v-for="(item, index) in 5" :key="index">
      <img src="@/assets/comment/xingxing.svg" v-if="(item*2) <= parseInt(scoreTotal)" />
      <img src="@/assets/comment/xingxing1.svg" v-else />
    </div>
    <div class="scoreTotal_text">{{scoreTotal}}分</div>
  </div>
</template>
<script>
export default {
  name: "scoreTotal",
  props: {
    scoreTotal: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
.total_home {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div:nth-child(2) {
    color: rgb(156, 118, 118);
  }
  .scoreTotal_text {
    color: rgba(212, 48, 48, 1);
    font-size: 14px;
    line-height: 150%;
    margin-left: 5px;
  }
  .scoreTotal_text2 {
    font-size: 14px;
    line-height: 150%;
    margin-left: 5px;
  }
}
img {
  width: 21px;
}
</style>
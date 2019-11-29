<template>
  <div>
    <div class="rankingList">
      <div class="ranking_header">
        <div>
          <img src="@/assets/mall/2.png" />
        </div>
        <div>商品兑换数量排行榜</div>
        <div>
          <button>月排行</button>
          <button>年排行</button>
        </div>
      </div>
      <hr />

      <hr class="shui" />
      <div v-for="(item, index) in shopList" :key="index">
        <div class="content">
          <div>
            <img src="@/assets/mall/567.jpg" />
          </div>
          <div>{{item.title}}</div>
          <div>{{index + 1}}</div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "rankingList",
  data() {
    return {
      shopList: [
        { id: 1, title: "中国移动100元话费充值卡交易" },
        { id: 2, title: "中国移动200元话费充值卡交易" }
      ]
    };
  },
  methods: {}
};
</script>
<style lang='less' scoped>
.rankingList {
  margin-top: 10px;
  border: 1px solid rgba(0, 145, 255, 0.3);
  .shui {
    margin-top: 40px;
  }
  .ranking_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      margin-left: 10px;
    }
    div:nth-child(1) {
      flex: 1;
      img {
        width: 100%;
        height: auto;
      }
    }
    div:nth-child(2) {
      flex: 2;
      font-size: 13px;
      line-height: 150%;
      text-align: center;
      font-weight: bold;
    }
    div:nth-child(3) {
      flex: 3;
      align-self: flex-end;
      button {
        border: none;
        color: rgba(80, 80, 80, 1);
        background-color: rgba(153, 153, 153, 1);
        font-size: 11px;
        line-height: 150%;
        text-align: center;
        padding: 7px 15px;
        margin-left: 5px;
      }
    }
  }
}
.content {
  display: flex;
  align-items: center;
  height: 50px;
  div {
    margin-left: 40px;
  }
  div:nth-child(1) {
    flex: 2;
    img {
      width: 100%;
      height: auto;
    }
  }
  div:nth-child(2) {
    flex: 3;
    line-height: 150%;
    font-weight: bold;
    font-size: 10px;
    color: rgba(0, 145, 255, 1);
  }
  div:nth-child(3) {
    flex: 2;
    align-self: flex-start;
    color: rgba(0, 145, 255, 1);
    font-size: 12px;
    line-height: 150%;
    text-align: left;
  }
}
</style>
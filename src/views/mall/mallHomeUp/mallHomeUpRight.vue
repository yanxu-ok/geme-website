<template>
  <div>
    <div class="shopp">
      <!--  -->
      <span class="smallheader">
        <div class="xuhi">
          <div class="small"></div>虚拟商品
        </div>
        <div>更多>></div>
      </span>
      <!-- 列表 -->
      <div class="list" v-for="(item, index) in shopList" :key="index">
        <img src="@/assets/mall/789.jpg" />
        <div>{{item.title}}</div>
        <div>{{item.price}}金币</div>
        <div class="renqi">
          <div>库存{{item.stock}}件</div>
          <span>人气{{item.popularity}}</span>
        </div>
        <div class="renQi2">
          <div>已兑{{item.already}}件</div>
          <input type="submit" value="立即兑换" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mallHomeUpRight",
  data() {
    return {
      shopList: [
        // stock库存   popularity人气   already已兑
        {
          id: 1,
          title: "我的产品11111111111111111111111",
          price: 11,
          stock: 4308,
          popularity: 1076,
          already: 38
        },
        {
          id: 2,
          title: "小米手机商品管理设置了",
          price: 100,
          stock: 931,
          popularity: 4934,
          already: 14
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang='less' scoped>
.shopp {
  border: 1px solid rgba(0, 145, 255, 0.3);
  margin-top: 10px;
  .smallheader {
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    .small {
      width: 5px;
      height: 19px;
      background-color: rgba(255, 111, 35, 1);
      margin-right: 10px;
      font-size: 12px;
    }
    .xuhi {
      display: flex;
    }
    div:nth-child(2) {
      font-size: 11px;
      line-height: 150%;
      text-align: left;
      color: rgba(0, 145, 255, 1);
    }
  }
  .list {
    width: 100%;
    text-align: center;
    margin-top: 15px;
    div:nth-child(2) {
      color: rgba(0, 145, 255, 1);
      font-size: 10px;
      line-height: 150%;
    }
    div:nth-child(3) {
      text-align: left;
      margin: 0 18%;
      font-size: 10px;
      line-height: 150%;
    }
    img {
      padding: 10px 0px;
      width: auto;
      height: 200px;
      box-sizing: border-box;
    }
    .renqi {
      display: flex;
      justify-content: space-between;
      margin: 0 18%;
      font-size: 10px;
      line-height: 150%;
    }
    .renQi2 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1px 18%;
      font-size: 10px;
      line-height: 150%;
      input {
        border: none;
        background-color: rgba(229, 231, 232, 1);
        line-height: 150%;
        font-weight: bold;
        color: rgba(128, 128, 128, 1);
        padding: 3px;
        font-size: 12px;
      }
    }
  }
}
</style>
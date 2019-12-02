<template>
  <div>
    <div class="shopp">
      <span class="smallheader">
        <div></div>推荐商品
      </span>
      <!-- 商品菜单 -->
      <div class="shangPinRongQi">
        <!-- 一件商品 -->
        <div class="xiaoRongQi" v-for="(item, index) in shopList" :key="index">
          <img src="@/assets/mall/1338.jpg" />
          <div class="shopTitle">{{item.title}}</div>
          <div>{{item.price}}金币</div>
          <div class="renQi">
            <div>库存{{item.stock}}件</div>
            <div>人气{{item.popularity}}</div>
          </div>
          <div class="renQi">
            <div>已兑{{item.already}}件</div>
            <input type="submit" value="立即兑换" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shop",
  data() {
    return {
      shopList: [
        // stock库存   popularity人气   already已兑
        {
          id: 1,
          title: "小米手机商品管理设置了",
          price: 100,
          stock: 931,
          popularity: 4934,
          already: 14
        },
        {
          id: 2,
          title: "小米手机商品管理设置了",
          price: 100,
          stock: 931,
          popularity: 4934,
          already: 14
        },
        {
          id: 3,
          title: "小米手机商品管理设置了",
          price: 100,
          stock: 931,
          popularity: 4934,
          already: 14
        },
        {
          id: 4,
          title: "小米手机商品管理设置了",
          price: 100,
          stock: 931,
          popularity: 4934,
          already: 14
        },
        {
          id: 5,
          title: "小米手机商品管理设置了",
          price: 100,
          stock: 931,
          popularity: 4934,
          already: 14
        },
        {
          id: 6,
          title: "小米手机商品管理设置了",
          price: 100,
          stock: 931,
          popularity: 4934,
          already: 14
        },
        {
          id: 7,
          title: "小米手机商品管理设置了",
          price: 100,
          stock: 931,
          popularity: 4934,
          already: 14
        },
        {
          id: 8,
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
  padding-top: 10px;
  height: auto;
  .smallheader {
    margin-left: 30px;
    display: flex;
    align-items: center;
    div {
      width: 5px;
      height: 19px;
      background-color: rgba(255, 111, 35, 1);
      margin-right: 10px;
      font-size: 12px;
    }
  }
  .shangPinRongQi {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .xiaoRongQi {
      border: 1px solid rgba(0, 145, 255, 0.3);
      margin: 15px 15px;
      width: 170px;
      height: auto;
      padding: 5px;
      img {
        width: 100%;
        height: 150px;
      }
      .shopTitle {
        color: rgba(0, 145, 255, 1);
        font-size: 10px;
        text-align: left;
        line-height: 150%;
        font-weight: bold;
      }
      div {
        font-size: 10px;
        line-height: 150%;
        font-weight: bold;
      }
      .renQi {
        display: flex;
        justify-content: space-between;
        align-items: center;
        input {
          border: none;
          background-color: rgba(229, 231, 232, 1);
          line-height: 150%;
          font-weight: bold;
          color: rgba(128, 128, 128, 1);
          padding: 3px;
        }
      }
    }
  }
}
</style>
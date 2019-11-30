<template>
  <div class="mall">
    <el-select v-model="value" placeholder="请选择" size="small">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <!-- 中间主区域 -->
    <div class="mall_home">
      <!-- 左侧 -->
      <div class="mall_home_left">
        <!-- 轮播 -->
        <lunBoTu></lunBoTu>
        <!-- 商品列表-->
        <shop></shop>
      </div>
      <!-- 右侧 -->
      <div class="mall_home_right">
        <!-- 销售 -->
        <div class="right_top">
          <!-- title -->
          <div class="right_top_title">
            <div>销售冠军</div>
            <div>人气冠军</div>
          </div>
          <!-- 路由坑 -->
          <div>
            <!-- <router-view></router-view> -->
            <right></right>
          </div>
        </div>
        <!-- 商城公告 -->
        <shopNotice></shopNotice>
        <!-- 最近兑换 -->
        <lately></lately>
        <!-- 排行榜 -->
        <rankingList></rankingList>
      </div>
    </div>
    <img src="@/assets/mall/1378.jpg" />
    <!-- 中间下区域 -->
    <div class="mall_home_up">
      <div class="mall_home_up_left">
        <!-- 热销商品 -->
        <div>
          <hotShop></hotShop>
        </div>
        <div>
          <phone></phone>
        </div>
      </div>
      <div class="mall_home_up_right"></div>   
    </div>
  </div>
</template>
<script>
import right from "./mallHomeRight/right";
import shopNotice from "./mallHomeRight/shopNotice";
import lately from "./mallHomeRight/lately";
import rankingList from "./mallHomeRight/rankingList";
import lunBoTu from "./mallHomeLeft/lunBoTu";
import shop from "./mallHomeLeft/shop";
import hotShop from "./mallHomeUp/hotShop";
import phone from "./mallHomeUp/phone";
export default {
  components: {
    right,
    shopNotice,
    lately,
    rankingList,
    lunBoTu,
    shop,
    hotShop,
    phone
  },
  name: "mall",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "生活电器"
        },
        {
          value: "选项2",
          label: "数码电子"
        },
        {
          value: "选项3",
          label: "虚拟商品"
        }
      ],
      value: "全部商品分类导航"
    };
  }
};
</script>
<style lang="less" scoped>
.el-select {
  margin-top: 10px;
}
.mall_home {
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  .mall_home_left {
    flex: 5;
  }
  .mall_home_right {
    flex: 2;
    margin-left: 20px;
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
  }
}
.mall {
  img {
    width: 100%;
    margin-top: 10px;
  }
}
.mall_home_up {
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  .mall_home_up_left {
    flex: 5;
  }
  .mall_home_up_right {
    margin-left: 20px;
    flex: 2;
  }
}
</style>
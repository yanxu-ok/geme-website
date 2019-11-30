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
        <!-- 销售冠军 -->
        <xiaoShou></xiaoShou>
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
        <!-- 手机配件 -->
        <div>
          <phone></phone>
        </div>
      </div>
      <!-- 虚拟商品 -->
      <div class="mall_home_up_right">
        <mallHomeUpRight></mallHomeUpRight>
      </div>
    </div>
    <!-- 时尚数码 -->
    <div class="mall_home_bottom">
      <fashion></fashion>
    </div>
  </div>
</template>
<script>
import {
  lunBoTu,
  xiaoShou,
  shopNotice,
  lately,
  rankingList,
  shop,
  hotShop,
  phone,
  mallHomeUpRight,
  fashion
} from "./index";
export default {
  components: {
    xiaoShou,
    shopNotice,
    lately,
    rankingList,
    lunBoTu,
    shop,
    hotShop,
    phone,
    mallHomeUpRight,
    fashion
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
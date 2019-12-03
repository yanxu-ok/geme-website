<template>
  <div>
    <div class="tags-wrap">
      <tagList
        v-for="(category, index) in categorys"
        :key="index"
        :label="category.label"
        :list="category.list"
      />
    </div>
    <div class="search-wrap">
      <div class="order">
        <div
          class="order-item"
          @click="handleClick(option.id)"
          v-for="(option, index) in orderOptions"
          :key="index"
          :class="{'active': orderBy === option.id}"
        >{{option.label}}</div>
      </div>
      <div class="check-list">
        <el-checkbox-group v-model="checked">
          <el-checkbox label="热门推荐">
            <img class="pic" :src="hotPic" alt />热门推荐
          </el-checkbox>
          <el-checkbox label="免费游戏"><img class="pic" :src="hotPic1" alt />免费游戏</el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    <!-- 中间 -->
    <!-- <div v-for="(item, index) in gameInfo" :key="index"> -->
    <gameWrap :gameInfo="gameInfo"></gameWrap>
    <!-- </div> -->
  </div>
</template>
<script>
import tagList from "_c/TagList";
import hotPic from "@/assets/gameCenter/77.png";
import gameWrap from "_v/comment/gameWrap";
import hotPic1 from '@/assets/gameCenter/99.png'
export default {
  name: "comment",
  components: {
    tagList,
    gameWrap
  },
  data() {
    return {
      hotPic,
      hotPic1,
      categorys: [
        {
          label: "游戏类型",
          list: [
            { id: 1, label: "全部" },
            { id: 2, label: "动作游戏" },
            { id: 3, label: "冒险解谜" },
            { id: 4, label: "角色扮演" },
            { id: 5, label: "体育竞技" },
            { id: 6, label: "赛车竞速" },
            { id: 7, label: "益智" }
          ]
        },
        {
          label: "游戏语言",
          list: [
            { id: 1, label: "全部" },
            { id: 2, label: "简体中文" },
            { id: 3, label: "繁体中文" },
            { id: 4, label: "English" },
            { id: 5, label: "其他" }
          ]
        },
        {
          label: "游戏平台",
          list: [
            { id: 1, label: "全部" },
            { id: 2, label: "自主研发" },
            { id: 3, label: "STEAM" },
            { id: 4, label: "EPIC" },
            { id: 5, label: "ORIGIN" },
            { id: 6, label: "UPLAY" },
            { id: 7, label: "WEGAME" }
          ]
        },
        {
          label: "游戏模式",
          list: [
            { id: 1, label: "全部" },
            { id: 2, label: "单人" },
            { id: 3, label: "双人" },
            { id: 4, label: "多人" }
          ]
        }
      ],
      orderOptions: [
        { id: 1, label: "默认排序" },
        { id: 2, label: "最新加入" }
      ],
      orderBy: 1,
      checked: [],
      gameInfo: [
        {
          id: 1,
          title: "英雄联盟",
          gameContent: "祖安打招呼方式",
          fourScore: [
            { id: 1.1, title: "画面", score: 2 },
            { id: 1.2, title: "体验", score: 9 },
            { id: 1.3, title: "互动", score: 7 },
            { id: 1.4, title: "其他", score: 4 }
          ],
          scoreTotal:10
        },
        {
          id: 2,
          title: "qq飞车",
          gameContent: "S车限时赠送",
          fourScore: [
            { id: 2.1, title: "画面", score: 9 },
            { id: 2.2, title: "体验", score: 4 },
            { id: 2.3, title: "互动", score: 3 },
            { id: 2.4, title: "其他", score: 7 }
          ],
          scoreTotal:8
        }
      ]
    };
  },
  methods: {
    handleClick(id) {
      this.orderBy = id;
    }
  }
};
</script>
<style lang="less" scoped>
.tags-wrap {
  display: flex;
  flex-wrap: wrap;
  padding: 15px 0;
}
.search-wrap {
  display: flex;
  border: 1px solid rgba(214, 214, 214, 1);
  align-items: center;
  height: 60px;
  .order {
    display: flex;
    width: 200px;
    .order-item {
      cursor: pointer;
      width: 100px;
      text-align: center;
      height: 60px;
      line-height: 60px;
    }
    .active {
      background: #035cc1;
      color: #fff;
    }
  }
  .check-list {
    margin-left: 30px;
    .pic {
      display: inline-block;
      vertical-align: middle;
      width: 24px;
      height: 24px;
    }
  }
}
</style>
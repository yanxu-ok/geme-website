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
          <el-checkbox label="免费游戏">
            <img class="pic" :src="hotPic1" alt />免费游戏
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    <!-- 中间部分 -->
    <div class="games_wrap_center">
      <gamesWrapCenter :gameInfo="gameInfo"></gamesWrapCenter>
    </div>
  </div>
</template>
<script>
import tagList from "_c/TagList";
import hotPic from "@/assets/gameCenter/77.png";
import hotPic1 from "@/assets/gameCenter/99.png";
import gamesWrapCenter from "./modules/gamesWrapCenter.vue";
export default {
  name: "game-center",
  components: {
    tagList,
    gamesWrapCenter
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
          gameName: "英雄联盟",
          ScoreTotal: 10,
          pingtai: "STEAM EPIC UPLAY WEGAME",
          explain: "EA Account （支持与 Steam 账户关联",
          Score: [
            { id: 1, title: "体验指数", score: 10 },
            { id: 1, title: "专家指数", score: 10 },
            { id: 1, title: "媒体指数", score: 10 },
            { id: 1, title: "画面指数", score: 10 },
            { id: 1, title: "玩家指数", score: 10 }
          ],

          gameJianjie:
            "建立起由工厂和机器组成的庞大且相互连接的工业网络。有效的资源运输对于您作为自动化工程师的成功至关重要。利用您可以使用的所有工具，包括矿车，无人机，卡车，火车和货运火箭。利用您的创造力来规划高效的机器物流网络，以形成机械的生产超级有机体。建立起由工厂和机器组成的庞大且相互连接的工业网络。有效的资源运输对于您作为自动化工程师的成功至关重要。利用您可以使用的所有工具，包括矿车，无人机...."   
        },
        {
          id: 2,
          gameName: "qq飞车",
          ScoreTotal: 8,
          pingtai: "STEAM EPIC UPLAY WEGAME",
          explain: "EA Account （支持与 Steam 账户关联",
          Score: [
            { id: 1, title: "体验指数", score: 8 },
            { id: 1, title: "专家指数", score: 8 },
            { id: 1, title: "媒体指数", score: 8 },
            { id: 1, title: "画面指数", score: 8 },
            { id: 1, title: "玩家指数", score: 8 }
          ],
          gameJianjie:
            "建立起由工厂和机器组成的庞大且相互连接的工业网络。有效的资源运输对于您作为自动化工程师的成功至关重要。利用您可以使用的所有工具，包括矿车，无人机，卡车，火车和货运火箭。利用您的创造力来规划高效的机器物流网络，以形成机械的生产超级有机体。建立起由工厂和机器组成的庞大且相互连接的工业网络。有效的资源运输对于您作为自动化工程师的成功至关重要。利用您可以使用的所有工具，包括矿车，无人机...."   
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
  // flex-direction: column;
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
.games_wrap_center {
  margin-top: 15px;
}
</style>
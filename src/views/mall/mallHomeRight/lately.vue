<template>
  <div>
    <div class="nerver">
      <div class="nerverTitle1">
        <div></div>
        <span>最近兑换</span>
      </div>

      <div class="nerverList" v-for="(item, index) in list" :key="index">
        <hr/>
        <div class="content">
          <img src="@/assets/mall/1.jpeg"/>
          <div>
            {{item.name}}{{item.datatime}}天前兑换了{{item.size}}个{{item.title}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "lately",
  data() {
    return {
      list:[
        {id:1,name:'刘子豪',datetime:12,size:1,title:'苹果iPhone6A1586三网通公开版4.7英'},
        {id:2,name:'张傻狗',datetime:12,size:2,title:'苹果iPhone6A1586三网通公开版4.7英'},
        {id:3,name:'张磊',datetime:12,size:1,title:'苹果iPhone6A1586三网通公开版4.7英'},
        {id:4,name:'楚金港',datetime:12,size:1,title:'苹果iPhone6A1586三网通公开版4.7英'}
      ]
    };
  },
  methods: {}
};
</script>
<style lang='less' scoped>
.nerver {
  margin-top: 10px;
  border: 1px solid rgba(0, 145, 255, 0.3);
  .nerverList {
    width: 80%;
    margin: 10px auto;
    img {
      width: 40px;
      height: 40px;
    }
    hr {
      margin-bottom: 5px;
    }
    .content{
      display: flex;
      div{
        margin-left: 10px;
        font-size: 11px;
        line-height: 150%;
        text-align: left;
      }
    }
  }
}
.nerverTitle1 {
  margin-left: 30px;
  display: flex;
  align-items: center;
  margin-top: 5px;
  div {
    width: 5px;
    height: 19px;
    background-color: rgba(255, 111, 35, 1);
    margin-right: 10px;
    font-size: 12px;
  }
}
</style>
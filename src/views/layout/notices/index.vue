<template>
  <div class="notice-wrap">
    <div class="notice-content">
      <div class="title">今日头条</div>
      <div class="meta">
        <!-- <icon-svg icon-class="horn" /> -->
        <div class="meta-label">客户端下载地址：</div>
        <div class="meta-text" v-for="item in notices" :key="item.id">
          <span>{{item.text}}</span>
          <!-- <icon-svg icon-class="stars"/> -->
        </div>
      </div>
      <div class="warning">
        谨防上当受骗，点击下载官方APP。
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'notices',
  data() {
    return {
      notices: [
        {
          id: 1,
          text: "AAA.COM"
        },
        {
          id: 2,
          text: "AAA.COM"
        },
        {
          id: 3,
          text: "AAA.COM"
        }
      ]
    }
  },
}
</script>
<style lang="less" scoped>
  .notice-wrap {
    margin-top: 20px;
    background-color: rgba(245, 245, 245, 1);
    .notice-content {
      display: flex;
      padding: 0 20px;
      width: 1200px;
      margin: 0 auto;
      height: 45px;
    }
    .title {
      width: 120px;
      color: rgba(255, 255, 255, 1);
      background-color: rgba(3, 92, 193, 1);
      font-size: 20px;
      text-align: center;
      font-weight: bold;
      line-height: 45px;
    }
    .meta {
      margin-left: 20px;
      font-size: 14px;
      display: flex;
      align-items: center;
      .meta-label {
        color: rgba(56, 56, 56, 1);
        font-weight: 600;
      }
      .meta-text {
        span {
          margin-left: 10px;
        }
      }
      
    }
    .warning {
      color: rgba(42, 130, 228, 1);
      font-weight: 600;
      // align-self: flex-end;
      line-height: 45px;
      margin-left: auto;
    }
  }
</style>
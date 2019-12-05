<template>
  <div>
    <!-- top -->
    <div class="top">
      <button class="button">提交</button>
    </div>
    <!-- middle -->
    <div class="min">
      <!-- left -->

      <div class="min_left">
        <form>
          <!-- first -->
          <div class="spacing">
            <div class="tit" style="margin-right: 30px;">标题：</div>
            <el-input
              type="text"
              placeholder="输入内容"
              v-model="text"
              maxlength="10"
              show-word-limit
              class="title"
            ></el-input>
            <div class="clear"></div>
          </div>
          <!-- second -->
          <div class="spacing">
            <div class="tit" style="margin-right: 2px;">联系方式：</div>
            <el-input v-model="tel" placeholder="输入内容" class="tel"></el-input>
            <div class="clear"></div>
          </div>
          <!-- third -->
          <div class="spacing">
            <div class="tit" style="margin-right: 2px;">文章内容：</div>
            <el-input
              type="textarea"
              :autosize="{ minRows: 10, maxRows: 10}"
              placeholder="输入内容"
              v-model="con"
              class="con"
            ></el-input>
          </div>
          <!-- Fourth -->
          <div class="spacing">
            <div class="tit" style="margin-right: 30px;">附件：</div>
            <el-upload
            class="photo"
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            :on-success="handleAvatarSuccess"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible" >
              <img  width="100%" :src="dialogImageUrl"  alt="" />
            </el-dialog>
          </div>
        </form>
            <!-- 按钮 -->
            <div class="button1">
                <button class="ok">提交</button>
            </div>
      </div>
      <!-- right -->
      <div class="min_right">
        <!-- 背景 -->
        <div>
          <img :src="perback" class="perback" />
        </div>
        <!-- 头像 -->
        <div class="box">
          <img :src="background" class="background" />
        </div>
        <!-- 用户名 -->
        <div class="float">
          <div class="name">{{name}}</div>
          <!-- 等级 -->
          <div class="grade">{{grade}}</div>
        </div>
        <!-- bottom -->
        <div style="margin-top:40px">
          <div v-for="item1 in list" :key="item1.id" class="bottom">
            <div class="number">{{item1.number}}</div>
            <div class="text">{{item1.text}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "contr",
  components: {},
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
 handleAvatarSuccess(res, file) {
        this.dialogImageUrl = URL.createObjectURL(file.raw);
        // 图片地址
        console.log(this.dialogImageUrl)
      },
  },
  data() {
    return {
      text: "",
      tel: "",
      con: "",
      dialogImageUrl: "",
      imageUrl:'',
      dialogVisible: false,
      perback: require("../../assets/home/perback.jpg"),
      background: require("../../assets/home/background.jpg"),
      name: "太空人一号",
      grade: "LV50",
      list: [
        {
          number: "63",
          id: "1",
          text: "关注"
        },
        {
          number: "63",
          id: "2",
          text: "粉丝"
        },
        {
          number: "6",
          id: "3",
          text: "圈子"
        },
        {
          number: "105",
          id: "4",
          text: "发帖数"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.top {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.11);
  border-radius: 6px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.11428571428571431);
  display: flex;
  flex-direction: row;
}
.button {
  width: 92px;
  height: 42px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(3, 92, 193, 1);
  font-size: 16px;
  text-align: center;
  letter-spacing: 2px;
  margin-top: 3px;
  margin-left: 10px;
}

.min {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.min_left {
  width: 70%;
  height: 1000px;
  border: 1px solid rgba(0, 0, 0, 0.11);
  border-radius: 6px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.11428571428571431);
  padding: 20px 60px 0px 40px;
}
.spacing {
  margin-bottom: 20px;
}
.tit {
  height: 38px;
  line-height: 38px;
  float: left;
  font-size: 14px;
}
.tel {
  width: 242px;
  height: 38px;
  font-size: 12px;
  color: rgba(51, 51, 51, 0.4);
}
.con {
  width: 550px;
  /* height: 238px; */
  font-size: 12px;
  color: rgba(51, 51, 51, 0.4);
}
.photo{
    /deep/.el-upload--picture-card {
        width: 50px;
        height: 50px;
        line-height: 59px;
    }
    /deep/.el-upload-list__item {
        width: 50px;
        height: 50px;
        
    }
}
.ok{
    width: 158px;
    height: 48px;
    color: rgba(255, 255, 255, 1);
	background-color: rgba(3, 92, 193, 1);
    font-size: 20px;
    text-align: center;
	font-weight: bold;
}
.button1{
    margin-top: 100px;
    width: 100%;
    text-align: center;
    // border: solid 1px springgreen
}
.title {
  width: 242px;
  height: 38px;
  font-size: 12px;
  color: rgba(51, 51, 51, 0.4);
}
.min_right {
  width: 28%;
  height: 400px;
  margin-left: 20px;
  border: 1px solid rgba(0, 0, 0, 0.11);
  border-radius: 6px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.11428571428571431);
}

.clear {
  clear: both;
}

.perback {
  width: 100%;
  height: 200px;
  border-radius: 6px;
}
.background {
  width: 92px;
  height: 92px;
  border-radius: 46px;
  /* margin-top: -70px; */
  border: solid rgba(255, 255, 255, 0.36) 2px;
}
.box {
  /* border:  slateblue solid 1px; */
  margin-top: -85px;
  text-align: center;
}
.float {
  display: flex;
  flex-direction: row;
}
.name {
  color: rgba(80, 80, 80, 1);
  font-size: 16px;
  font-weight: bold;
  width: 50%;
  text-align: right;
  height: 30px;
  line-height: 30px;
  /* border: slateblue solid 1px; */
}
.grade {
  width: 55px;
  height: 21px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 141, 26, 1);
  border-radius: 11px;
  font-size: 14px;
  text-align: center;
  line-height: 21px;
  margin-top: 5px;
  margin-left: 30px;
}
.bottom {
  border-right: solid black 1px;
  width: 25%;
  float: left;
  text-align: center;
}
.bottom:nth-child(4) {
  border-right: none;
}
.number {
  height: 40px;
  /* border: solid springgreen 1px; */
  font-size: 22px;
}
.text {
  height: 20px;
  font-size: 14px;
}
</style>
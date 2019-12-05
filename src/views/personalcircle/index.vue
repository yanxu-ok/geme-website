<template>
  <div>
    <div class="text">
        <!-- <div class="lab_a" @click="create"><label>我创建的</label></div>
        <div class="lab_b" @click="attention"><label>我关注的</label></div> -->
        <div v-for="(item,index) in loops" class="lab_b" @click="bianse(index)" :class="[index==abc?'lab_a':'lab_b']">
            {{item}}
        </div>
    </div>
    <div class="text_a" v-if='abc===0'>
        <div class="box">
            <div class="box_s">
                <div class="box_b" v-for="ietm in info" :key="ietm.id">
                <div class="box_two">
                <div class="img"><img :src="ietm.img"/></div>
                <div class="heit">
                <div class="txt">{{ietm.name}}</div>
                <div class="txt_a"><label class="lab_c">{{ietm.uname}}</label><label class="lab_d">{{ietm.namiy}}</label></div>
                <div class="txt_b"><label class="lab_c">{{ietm.quantity}}</label><label class="lab_d">{{ietm.dynamic}}</label></div>
                </div>
                </div>
                <div class="txt_c">{{ietm.introduction}}</div>
                </div>
                </div>
        </div>
        <div class="box_a">
            <div class="box_e"><img :src="information.img"/>
            </div>
            <div class="box_f"><img :src="information.photo"/></div>
            <div class="txt_e"><div class="kong">{{information.name}}</div><div class="dengji">LV{{information.dengji}}</div></div>
            <div class="xianshi">
                <div class="shangxia">
                    <div class="labo">{{information.attention}}</div>
                    <div class="labo_a">关注</div>
                </div>
                <div class="shu"></div>
                <div class="shangxia">
                    <div class="labo">{{information.fans}}}</div>
                    <div class="labo_a">粉丝</div>
                </div>
                <div class="shu"></div>
                <div class="shangxia">
                    <div class="labo">{{information.circle}}</div>
                    <div class="labo_a">圈子</div>
                </div>
                <div class="shu"></div>
                <div class="shangxia">
                    <div class="labo">{{information.posts}}</div>
                    <div class="labo_a">发帖数</div>
                </div>
            </div>
        </div>
    </div>
    <div class="text_a" v-if='abc!=0'> 
        <div class="box_aa">
            <div class="box_s">
                <div class="box_bb" v-for="ietm in info" :key="ietm.id">
                <div class="box_two">
                <div class="img"><img :src="ietm.img"/></div>
                <div class="heit">
                <div class="txt">{{ietm.name}}</div>
                <div class="txt_a"><label class="lab_c">{{ietm.uname}}</label><label class="lab_d">{{ietm.namiy}}</label></div>
                <div class="txt_b"><label class="lab_c">{{ietm.quantity}}</label><label class="lab_d">{{ietm.dynamic}}</label></div>
                </div>
                </div>
                <div class="txt_c">{{ietm.introduction}}</div>
                <div class="btu">以关注</div>
                </div>
            </div>
        </div>
        <div class="box_a">
            <div class="box_e"><img :src="information.img"/>
            </div>
            <div class="box_f"><img :src="information.photo"/></div>
            <div class="txt_e"><div class="kong">{{information.name}}</div><div class="dengji">LV{{information.dengji}}</div></div>
            <div class="xianshi">
                <div class="shangxia">
                    <div class="labo">{{information.attention}}</div>
                    <div class="labo_a">关注</div>
                </div>
                <div class="shu"></div>
                <div class="shangxia">
                    <div class="labo">{{information.fans}}}</div>
                    <div class="labo_a">粉丝</div>
                </div>
                <div class="shu"></div>
                <div class="shangxia">
                    <div class="labo">{{information.circle}}</div>
                    <div class="labo_a">圈子</div>
                </div>
                <div class="shu"></div>
                <div class="shangxia">
                    <div class="labo">{{information.posts}}</div>
                    <div class="labo_a">发帖数</div>
                </div>
            </div>
        </div>
    </div>
    </div>

</template>
<script>
export default {
  name: 'game-skill',
  data(){
      return{
          ss:false,
          loops:['我创建的','我关注的'],
            abc:0,
          
          info:[
              {
                  id:1,
                 img:require("@/assets/img/nvhai.jpg"),
                 name:"魔域3攻略圈",
                 uname:"人数",
                 namiy:"动态",
                 quantity:990,
                 dynamic:999,
                 introduction:"简介：我们就来针对新玩家进行一些入门指引",
              },
              {
                  id:2,
                 img:require("@/assets/img/nvhai.jpg"),
                 name:"魔域3攻略圈",
                 uname:"人数",
                 namiy:"动态",
                 quantity:990,
                 dynamic:999,
                 introduction:"简介：我们就来针对新玩家进行一些入门指引",
              },
              {
                  id:3,
                 img:require("@/assets/img/nvhai.jpg"),
                 name:"魔域3攻略圈",
                 uname:"人数",
                 namiy:"动态",
                 quantity:990,
                 dynamic:999,
                 introduction:"简介：我们就来针对新玩家进行一些入门指引",
              },
              {
                  id:4,
                 img:require("@/assets/img/nvhai.jpg"),
                 name:"魔域3攻略圈",
                 uname:"人数",
                 namiy:"动态",
                 quantity:990,
                 dynamic:999,
                 introduction:"简介：我们就来针对新玩家进行一些入门指引",
              }
          ],
          information:{
              img:require("@/assets/img/beijing.jpg"),
              photo:require("@/assets/img/photo.jpg"),
              name:"太空人一号",
              dengji:50,
              attention:60,
              fans:66,
              circle:6,
              posts:105,
          }
      }
  },
  methods:{
      bianse:function(index){
          this.abc = index
          console.log(index);
      }
  }
}
</script>
<style lang='less' scoped>
.text{
    display: flex;
	width: 1260px;
    height: 54px;
    margin: auto;
	top: 24px;
	color: rgba(80, 80, 80, 1);
	background-color: rgba(255, 255, 255, 1);
	border-radius: 6px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.11428571428571431);
    padding: 6px;
}
.lab_a{
	width: 92px;
	height: 42px;
	left: 14px;
    top: 6px;
	letter-spacing: 2px;
	color: rgba(255, 255, 255, 1);
	background-color: rgba(3, 92, 193, 1);
	font-size: 16px;
	line-height: 42px;
	text-align: center;
    font-weight: bold;
    border-radius: 3px;
}
.lab_b{
    width: 92px;
    height: 42px;
    left: 22px;
    top: 6px;
    font-size: 16px;
    line-height: 42px;
    text-align: center;
}
.text_a{
    display: flex;
    width: 1260px;
    margin: auto;
}
.box{
	width: 881px;
    height: 750px;
    left: 223px;
	margin-top: 20px;
	color: rgba(80, 80, 80, 1);
	background-color: rgba(255, 255, 255, 1);
	border-radius: 6px;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.11428571428571431);
}
.box_s{
    display: flex;
    flex-wrap: wrap;
}
.btu{
	width: 72px;
	height: 29px;
	margin: auto;
	margin-top: 25px;
	color: rgba(255, 255, 255, 1);
	background-color: rgba(166, 166, 166, 1);
	border-radius: 6px;
	font-size: 14px;
	line-height: 29px;
	text-align: center;
}
.box_aa{
    width: 881px;
    height: 750px;
    left: 223px;
	margin-top: 20px;
	color: rgba(80, 80, 80, 1);
	background-color: rgba(255, 255, 255, 1);
	border-radius: 6px;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.11428571428571431);
}
.box_a{
	width: 350px;
	height: 341px;
	margin-left: 34px;
	margin-top: 20px;
	color: rgba(80, 80, 80, 1);
	background-color: rgba(255, 255, 255, 1);
	border-radius: 6px;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.11428571428571431);
}
.box_b{
    width: 257px;
    height: 176px;
    margin-left: 18px;
    margin-top: 16px;
    color: rgba(80, 80, 80, 1);
    border: 1px solid rgba(0, 0, 0, 0.22);
    box-shadow: rgba(204, 204, 204, 1) solid 1px;
}
.box_bb{
    width: 257px;
    height: 222px;
    margin-left: 18px;
    margin-top: 16px;
    color: rgba(80, 80, 80, 1);
    border: 1px solid rgba(0, 0, 0, 0.22);
    box-shadow: rgba(204, 204, 204, 1) solid 1px;
}
.box_two{
display: flex;
}
.heit{
    height: 86px;
}

.img{
	width: 79px;
    height: 86px;
    margin-left: 23px;
    margin-top: 13px;
}

.img img{
	width: 86px;
	height: 86px;
}
.txt{
	width: 114px;
	height: 24px;
	margin-left: 26px;
	margin-top: 20px;
	color: rgba(3, 92, 193, 1);
	font-size: 15px;
	line-height: 24px;
	text-align: left;
	font-weight: bold;
}
.txt_a{
    display: flex;
	width: 75px;
	height: 23px;
	margin-left: 29px;
	margin-top: 9px;
	color: rgba(56, 56, 56, 1);
	font-size: 14px;
}
.txt_b{
    display: flex;
	width: 65px;
	height: 23px;
	margin-left: 34px;
	color: rgba(56, 56, 56, 1);
	font-size: 10px;
}
.lab_c{
    width: 50%;
    height: 23px;
    text-align: left;
    line-height: 23px;
}
.lab_d{
    width: 50%;
    height: 23px;
    text-align: right;
    line-height: 23px;
}
.box_one{
    width: 206px;
    height: 46px;
}
.txt_c{
    width: 206px;
    height: 46px;
    margin-left: 24px;
    margin-top: 9px;
    font-size: 14px;
    line-height: 150%;
    text-align: left;
    color: rgba(56, 56, 56, 1);
}
.box_e{
	width: 350px;
	height: 150px;
	left: 1138px;
    top: 296px;
}

.box_e img{
	width: 350px;
	height: 150px;
    top: -33px;
    border-radius: 6px;
}
.box_f{
	width: 92px;
    height: 92px;
	margin-left: 125px;
    margin-top: -70px;
    border-radius: 46px;
    box-shadow: #24ffffff solid 4px;
}

.box_f img{
	width: 92px;
	height: 92px;
    border-radius: 46px;
}
.txt_e{
    display: flex;
}
.kong{
	width: 80px;
	height: 24px;
	margin-left: 88px;
	margin-top: 11px;
	color: rgba(80, 80, 80, 1);
	font-size: 16px;
	line-height: 150%;
	text-align: left;
	font-weight: bold;
}
.dengji{
	width: 55px;
	height: 21px;
	margin-left: 31px;
	margin-top: 12px;
	color: rgba(255, 255, 255, 1);
	background-color: rgba(255, 141, 26, 1);
	border-radius: 11px;
	font-size: 14px;
	line-height: 150%;
	text-align: center;
}
.xianshi{
    display: flex;
}
.shangxia{
    margin-top: 31px;
    margin-left: 25px;
}
.labo{
	width: 26px;
	height: 33px;
	color: rgba(80, 80, 80, 1);
	font-size: 22px;
    line-height: 150%;
    text-align: center;
}
.labo_a{
	height: 21px;
	margin-top: 10px;
	color: rgba(80, 80, 80, 1);
	font-size: 14px;
    line-height: 150%;
    text-align: left;
    text-align: center; 
}
.shu{
	width: 1px;
	height: 60px;
	margin-left: 30px;
	margin-top: 40px;
	color: rgba(80, 80, 80, 1);
	background-color: rgba(153, 153, 153, 1);
	text-align: center;
}
</style>
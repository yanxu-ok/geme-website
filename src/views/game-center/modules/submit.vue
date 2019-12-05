<template>
  <div>
      <div class="shangbian"></div>
    <div class="dahezi">
        <div class="zuo">
            <div class="touxiang">
                <img src="@/assets/detail/83.jpg"/>
            </div>
        </div>
        <div class="zhong">
            <div class="zhongshang"><div class="mingzi">{{mingzi}}</div></div>
            <div class="zhongshang1" v-for="zzx in zxcv" :key="zzx.id">
                <div class="huamian">{{zzx.ccccc}}</div>
                <div class="pingfen">
                    <div class="fen">
                       <div>
                           <div class="dafen">打分：</div>
                           <div class="dafen">评论：</div>
                        </div>
                        <div class="pinglun">
                            <div class="fen10">
                                

                                <div>10分</div>
                            </div>
                            <input  class="surukuang"/>
                            <div class="shangchuan">
                                <img src="@/icons/svg/1594.svg"/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="zhongshang11">
                <div class="huamian">总结</div>
                <div class="pingfen">
                    <div class="fen">
                       <div>
                           <div class="dafen">打分：</div>
                           <div class="dafen">评论：</div>
                        </div>
                        <div class="pinglun">
                            <div class="fen10">
                                

                                <div>10分</div>
                            </div>
                            <input  class="surukuang"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="you">
            <div class="youmianhezi">
                <div class="beijing">
                <div class="kong"></div>
                    <div class="youximingzi">魔域3</div>
                    <div class="tupian4">
                        <img src="@/assets/detail/tupian2.jpg"/>
                    </div>
                    <div>xingxing</div>
                    <div class="dahezi1">
                        <div class="san">画面：{{huamian}}</div>
                        <div class="san">体验：{{tiyan}}</div>
                        <div class="san">互动：{{hudong}}</div>
                    </div>
                    
                        <div class="dahezi3">
                        <div class="zxdp">最新点评</div>
                        <div>({{zuixin}})份</div>
                        </div>
                    <div class="sdf" v-for="cxz in cxzcxz" :key="cxz.id">
                    <div class="dahezi">
                    <div class="tupian5">
                        <img :src="cxz.img"/>
                    </div>
                    <div class="mingzi1">{{cxz.mingzi1}}</div>
                    </div>
                    <div>
                        {{cxz.neirong23}}
                    </div>
                    </div>

                </div>
            </div>
            <div class="tijiao">提交</div>
        </div>

    </div>
  </div>
</template>
<script>
import { magenta } from 'color-name'
export default {
   
  name: 'game-submit',
  data() {
       return {
           mingzi:'杨雪儿',
           huamian:'9.5',
           tiyan:'9.0',
           hudong:'8.9',
           zuixin:'36',
           cxzcxz:[
               {
                   id:1,
                   mingzi1:'杨雪儿',
                   neirong23:'评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容—详细>',
                   img: require("@/assets/detail/83.jpg")
               },
               {
                   id:2,
                   mingzi1:'杨雪儿',
                   neirong23:'评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容—详细>',
                   img: require("@/assets/detail/83.jpg")
               },
               {
                   id:3,
                   mingzi1:'杨雪儿',
                   neirong23:'评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容—详细>',
                   img: require("@/assets/detail/83.jpg")
               },
           ],
           zxcv:[
               {
                   id:1,
                   ccccc:'画面'
               },
               {
                   id:2,
                   ccccc:'体验'
               },
               {
                   id:3,
                   ccccc:'互动'
               },
               {
                   id:4,
                   ccccc:'其他'
               },
           ]
       }
       
  },
  methods:{
       
       }
}
</script>
<style lang='less' scoped>
.youximingzi{
	letter-spacing: 2px;
	color: rgba(80, 80, 80, 1);
	font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
}
.sdf{
    width: 267px;
    margin: auto;
    text-align: left;
    margin-top: 20px;
}
.tijiao{
    width: 158px;
	height: 48px;
	letter-spacing: 2px;
	color: rgba(255, 255, 255, 1);
	background-color: rgba(3, 92, 193, 1);
	font-size: 20px;
	line-height: 48px;
	text-align: center;
    font-weight: bold;
    margin: auto;
    margin-top: 100px;
}
.zxdp{
    width: 72px;
	height: 27px;
	color: rgba(80, 80, 80, 1);
	font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
}
.shangbian{
    height: 30px;
}
.kong{
    height: 30px;
}
.san{
    margin: auto;
    font-size: 18px;
}
.tupian4{
    width: 270px;
	height: 275px;
    border: rgba(222, 221, 221, 1) solid 1px;
    background-color: #ffffff;
    padding: 10px;
    margin: auto;
    img{
	width: 250px;
	height: 255px;
}
}
.tupian5{
    width: 53px;
	height: 53px;
    border: rgba(166, 166, 166, 1) solid 1px;
    padding: 4px;
    background-color: #ffffff;
    img{
        width: 43px;
	    height: 43px;
    }
}
.mingzi1{
	letter-spacing: 2px;
	color: rgba(80, 80, 80, 1);
	font-size: 14px;
	line-height: 53px;
    text-align: left;
    height: 53px;
    margin-left: 20px;
    margin-bottom: 10px;
}
.dahezi{
    display: flex;
}
.dahezi1{
    display: flex;
    margin: 20px;
}

.dahezi3{
    display: flex;
    margin-left: 25px;
}
.zuo{
    width: 60px;
    margin-left: -60px;
}
.zhong{
    width: 900px;
    margin-left: 30px;
}
.you{
    width: 400px;
    margin-left: 50px;
}
.touxiang{
    width: 53px;
    height: 53px;
    padding: 4px;
    border: rgba(166, 166, 166, 1) solid 1px;
    img{
        width: 43px;
	    height: 43px;
    }
}
.zhongshang{
    height: 53px;
    width: 100%;
    background-color:rgba(3, 92, 193, 1);
    margin-bottom: 20px;
}
.zhongshang1{
    width: 100%;
	color: rgba(80, 80, 80, 1);
	background-color: rgba(245, 245, 245, 1);
	font-size: 14px;
    display: flex;
    margin-bottom: 30px;
}
.zhongshang11{
    width: 100%;
	color: rgba(80, 80, 80, 1);
	background-color: rgba(245, 245, 245, 1);
	font-size: 14px;
    display: flex;
    margin-bottom: 30px;
}
.mingzi{
	color: rgba(255, 255, 255, 1);
	font-size: 14px;
	line-height: 53px;
    text-align: left;
    margin-left: 20px;
}
.huamian{
    width: 70px;
	letter-spacing: 2px;
	color: rgba(80, 80, 80, 1);
    font-size: 16px;
    padding-top: 24px;
    text-align: center;
}
.pingfen{
    width: 100%;
    height: 95%;
    margin-top: 7px;
    border-left: rgba(166, 166, 166, 1) solid 1px;
    padding: 20px;
}
.fen{
    display: flex;
}
.dafen{
    margin-bottom: 20px;
}
.pinglun{
    padding-left: 20px;
}
.fen10{
    display: flex;
}
.surukuang{
    width: 366px;
	height: 125px;
	text-indent: 5px;
	color: rgba(51, 51, 51, 0.6571428571428573);
	border-radius: 2px;
	font-size: 12px;
	line-height: 150%;
	border: rgba(153, 153, 153, 1) solid 1px;
    text-align: left;
    margin-top: 20px;
}
.shangchuan{
    width: 87px;
	height: 87px;
	color: rgba(80, 80, 80, 1);
    background-color: rgba(221, 221, 221, 1);
    padding: 10px;
    margin-top: 25px;
    img{
        width: 65px;
	   height: 65px;
    }
}
.youmianhezi{
    width: 366px;
	left: 1122px;
	top: 256px;
	color: rgba(80, 80, 80, 1);
	box-shadow: rgba(255, 255, 255, 1) solid 19px;
	font-size: 14px;
	line-height: 150%;
	border: rgba(166, 166, 166, 1) solid 1px;
    text-align: center;
    padding: 20px;
}
.beijing{
    background-color: rgba(245, 245, 245, 1);
    width: 100%;
    height: 100%;

}
</style>
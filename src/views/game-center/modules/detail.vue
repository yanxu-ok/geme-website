<template>
<div>
  <div class="zhuishang">
  <div>
    <div class="yxny_kuang">
    <div class="yxny_tupian">
       <img src="@/assets/detail/lztg.jpg"/>
    <div class="heise">
        <img src="@/icons/svg/41.svg"/>
    </div>
    <div class="tpp">
        <div class="tp" v-for="item in list" :key="item.id">
            <img :src="item.img"/>
        </div>
    </div>
    <div class="heise1">
        <img src="@/icons/svg/44.svg"/>
    </div>

    </div>
    <div class="yxny_kuang1">
        <div class="sanguozi">
           三国志
        </div>
        <div class="pingche">
            <img src="@/icons/svg/1477.svg"/>
            评测
        </div>
        <div class="guanwang">
            <img src="@/icons/svg/30.svg"/>
            官网
        </div>
    </div >
    <div class="yxny_kuang2">
        <div class="yxny_kuang3">
            游戏类型：
        </div>
        <div class="wangzi" v-for="j in jutt" :key="j.id">
            {{j.wangzi}}
        </div>
    </div >
    <div class="yxny_kuang2">
        <div class="yxny_kuang3">
            游戏平台：
        </div>
        <div class="wangzi" v-for="jj in juttt" :key="jj.id">
             {{jj.wangzi}}
        </div>
    </div >
    <div class="yxny_kuang2">
        <div class="yxny_kuang3">
            游戏评语：
        </div>
        <div class="pingyu">
            {{pingyu}}
        </div>
    </div >
    <div class="yxny_kuang2">
        <div class="yxny_kuang3">
            大小：
        </div>
        <div class="pingyu">
           {{daxiao}}
        </div>
    </div >
    <div class="yxny_kuang2">
        <div class="yxny_kuang3">
            特点：
        </div>
        <div class="pingyu">
            {{tedian}}
        </div>
    </div >
    <div class="yxny_kuang2">
        <div class="yxny_kuang3">
            类型：
        </div>
        <div class="wangzi" v-for="jjj in jutttt" :key="jjj.id">
            {{jjj.wangzi}}
        </div>
    </div >
    <div class="yxny_kuang4">
        <div class="yxny_kuang5">
            攻略：
        </div>
        <div>
        <div class="pingyu1">
            {{gonglue}}
        </div>
        <div class="pingyu1">
            {{gonglue1}}
        </div>
        <div class="pingyu1">
            {{gonglue2}}
        </div>
        </div>
    </div >
    </div>
    <div class="xiamian">
        <div class="zuo">
            <div class="yxny_kuang222">
                <div class="yxny_kuang3">
                   游戏模式：
                  </div>
                <div class="wangzi" v-for="q in juq" :key="q.id">
                   {{q.wangzi}}
                </div>
            </div>
            <div class="yxny_kuang222">
                <div class="yxny_kuang3">
                   游戏语言：
                  </div>
                <div class="wangzi" v-for="qq in juqq" :key="qq.id">
                   {{qq.wangzi}}
                </div>
            </div>
            <div class="yxny_kuang2222">
                <div class="yxny_kuang3">
                   联系方式：
                </div>
                <div class="pingyu">
                  {{rexian}}
                </div>
            </div>
        </div>
        <div class="you">
            <div class="yxny_kuang22">
                <div class="yxny_kuang3">
                   游戏终端：
                  </div>
                <div class="wangzi" v-for="qqq in juqqq" :key="qqq.id">
                   {{qqq.wangzi}}
                </div>
            </div>
            <div class="yxny_kuang22">
                <div class="yxny_kuang3">
                   评测组别：
                  </div>
                <div class="wangzi"  v-for="qqqq in juqqqq" :key="qqqq.id">
                   {{qqqq.wangzi}}
                </div>
                
            </div>
        </div>
    </div>
    
    <div class="xiakuang">
        <div class="zuokuang">
        <div class="xiakuang_1">
          <div class="xiakuang_11">
          {{hutu}}
          </div>
          <div class="xiakuang_12">
          {{hutu1}}
          </div>
          <div class="xiakuang_13">
          {{hutu2}}
          </div>
       </div>
        <div class="tphz">
       <img src="@/assets/detail/xunzhang.png"/>
        </div>
        <div class="tu">
            <div class="tiyan">
            <div class="tiyan1">
                体验指数
            </div>
            <div class="tiyan2">
            <div class="lanse">
            </div>
            </div>
            <div class="tiyan3">
                9.7分
            </div>
            </div>
            <div class="tiyan">
            <div class="tiyan1">
                媒体指数
            </div>
            <div class="tiyan2">
            <div class="lanse1">
            </div>
            </div>
            <div class="tiyan3">
                9.8分
            </div>
            </div>
            <div class="tiyan">
            <div class="tiyan1">
                玩家指数
            </div>
            <div class="tiyan2">
            <div class="lanse2">
            </div>
            </div>
            <div class="tiyan3">
                8.7分
            </div>
            </div>
            <div class="tiyan">
            <div class="tiyan1">
                专家指数
            </div>
            <div class="tiyan2">
            <div class="lanse3">
            </div>
            </div>
            <div class="tiyan3">
                9.9分
            </div>
            </div>
            <div class="tiyan">
            <div class="tiyan1">
                画面指数
            </div>
            <div class="tiyan2">
            <div class="lanse4">
            </div>
            </div>
            <div class="tiyan3">
                9.9分
            </div>
            </div>
       </div>
        <div class="xingxing">
        <div>
            综合得分
        </div>
        <div>
            9.5分
        </div>
        </div>
       </div>
       <div class="youkuang">
       <div class="suju">数据来源标准：</div>
       <div class="suju1">游戏画面、游戏特色占比30%</div>
       <div class="suju1">玩家点评数据占比30%</div>
       <div class="suju1">国内各大游戏门户专家指数占比20%</div>
       <div class="suju1">行业媒体和主流媒体曝光度止数占比10%</div>
       <div class="suju1">游戏体验以及功能指数占比10%</div>
       <div class="chakan">查看详细信息>></div>
       </div>
    </div>
    <div zuixiamian>
        <div class="yuyue">
           <div class="yuyue1">预约优惠</div> 
           <div class="yuyue2">
               <div class="yuyue3">
                   {{youhui80}}
               </div>
               <div class="yuyue4">
                   {{yuoxiaoqi}}
               </div>
           </div>
           <div class="tupian7">
               <img src="@/assets/detail/lztg.jpg"/>
           </div>
           <div class="zt">
            {{youhui}}
        </div>
        </div>
        <div class="yuyue">
           <div class="yuyue1">游戏简介</div> 
           <div class="zt">
            {{jianjie}}
        <div class="gengduo">
            更多>>
        </div>
        </div>
        </div>
        <div class="yuyue101">
        <div class="yuyue01">
           <div class="yuyue1">游戏点评</div>
           <div class="yuyue4">
                   我要点评>>
           </div>
        </div>
        <div class="yuyue001"> 
            发表点评（57）
        </div>
        <input class="suru"/>
        <div class="zhuche">
            <div>
            注册
           </div>
           <div class="sugang">
           </div>
           <div>
            登录
           </div>
           <div class="xudenglu">
            需要登陆才可发布评论
           </div>
           <div class="fabu">
               发布
           </div>
        </div>
        </div>
        
    </div>
</div>
<div class="youshangshang">
    <div class="youshang">
        <div class="pingfenpaihang">
            评分排行榜
        </div>
        <div class="pingfenpaihang1">
        <div class="juzhong">游戏</div>
        <div class="juzhong">星级</div>
        </div>
        <div class="paiming1">
            <div class="diyi">
                {{paiming}}
            </div>
            <div class="mingzi">
                {{mingzi}}
            </div>
        </div>
        <div class="paiming1">
            <div class="dier">
                {{paiming1}}
            </div>
            <div class="mingzi">
                {{mingzi1}}
            </div>
        </div>
        <div class="paiming1">
            <div class="disan">
                {{paiming2}}
            </div>
            <div class="mingzi">
                {{mingzi2}}
            </div>
        </div>
        <div class="paiming1" v-for="cv in cvbn" :key="cv.id">
            <div class="disi">
                {{cv.paiming}}
            </div>
            <div class="mingzi">
                {{cv.mingzi}}
            </div>
        </div>
    </div>
    <div class="youshang1">
        <div class="pingfenpaihang">
            最新攻略
        <div class="yougengduo">
            更多
        </div>
        </div>
        <div class="paiming1" v-for="zc in assd" :key="zc.id">
            <div class="mingzizi">
                {{zc.az}}
            </div>
        </div>
    </div>
    <div class="youtu">
    <img src="@/assets/detail/tupian4.jpg"/>
    </div>
    <div class="youxia">
        <div class="gao24">
            <div class="shutiao"></div>
            推荐文章
            <div class="lansegengduo">{{gengduo}}</div>
            </div>
            <div class="paiming1" v-for="zxc in asd" :key="zxc.id">
            <div class="mingzizi">
                {{zxc.az}}
            </div>
        </div>
    </div>
</div>
</div>
    <div class="jiewei" v-for="zx in sdsd" :key="zx.id">
        <div class="touxiang">
        <img :src="zx.img"/>
        </div>
        <div class="neirong">
            <div class="hezi22">
                <div class="mingzilan">
                    {{zx.qwe}}
                </div>
                <div class="shijian">
                    {{zx.shijian}}
                </div>
            </div>
            <div class="wenzineirong">
                {{zx.neirong}}
            </div>
        </div>
    </div>
    <div class="fanyeka">
        <div class="fanye">上一页</div>
        <div class="suzhi" v-for="ye in fanye" :key="ye.id">{{ye.su}}</div>
        <div class="fanye">下一页</div>
    </div>
 </div>
</template>
<script>
export default {
    name: 'game-detail',
    data() {
       return {
           pingyu:'超级强无敌好玩我是游戏评语，我最棒哈哈啊哈哈哈哈',
           daxiao:'1111M',
           tedian:'VR画质全景真人模拟',
           gonglue:'我是攻略1，我是攻略，我是链接',
           gonglue1:'我是攻略1，我是攻略，我是链接',
           gonglue2:'我是攻略1，我是攻略，我是链接',
           rexian:'热线：400-800-88600',
           hutu:'虎图游戏授予',
           hutu1:'三国志',
           hutu2:'黄金人气徽章',
           gengduo:'更多',
           paiming:'1',
           mingzi:'武林玩转',
           paiming1:'2',
           mingzi1:'武林玩转',
           paiming2:'3',
           mingzi2:'武林玩转',
           youhui80:'游戏预购优惠，现在预购优惠80%',
           yuoxiaoqi:'截止日期：长期有效',
           youhui:'什么叫做预购游戏？预购游戏有什么好处？目前有许多玩家预购都这个词的概念还是有些模糊，特别是第一次购买正版游戏的玩家不清楚这个预购和直接购买有什么区别，赶紧预购吧！',
           jianjie:'Automation Empire是一个关于效率和扩展的模拟/管理游戏。从零开始，建立起有红场和机器组成的庞大且相互连接的工业网络。有效的资源玉树对于您作为自动化工程师的成功至关重要，利用您可以使用的所有工具，包括矿车，无人机，卡车，火车和货运火箭。利用您的创造力来规划高效的机器物流网络，以形成机械的生产超级有机体。',
            list: [
                {
                    id:1,
                  img: require("@/assets/detail/tupian1.jpg")
                },
                {
                    id:2,
                  img: require("@/assets/detail/tupian2.jpg")
                },
                {
                    id:3,
                  img: require("@/assets/detail/tupian3.jpg")
                },
                {
                    id:4,
                  img: require("@/assets/detail/tupian4.jpg")
                },
                {
                    id:5,
                  img: require("@/assets/detail/tupian5.jpg")
                },
            ],
            fanye:[
                {
                    di:1,
                    su:1
                },
                {
                    di:2,
                    su:2
                },
                {
                    di:3,
                    su:3
                },
                {
                    di:4,
                    su:4
                },
                {
                    di:5,
                    su:'...'
                },
                {
                    di:6,
                    su:100
                },
                {
                    di:7,
                    su:101
                },
                {
                    di:8,
                    su:102
                },
                {
                    di:9,
                    su:103
                },


            ],
            cvbn:[
                {
                    di:1,
                    paiming:'4',
                    mingzi:'武林外传'
                },
                {
                    di:2,
                    paiming:'5',
                    mingzi:'三国志'
                },
                {
                    di:3,
                    paiming:'6',
                    mingzi:'三国志'
                },
                {
                    di:4,
                    paiming:'7',
                    mingzi:'武林外传'
                },
                {
                    di:5,
                    paiming:'8',
                    mingzi:'武林外传'
                },
                {
                    di:6,
                    paiming:'9',
                    mingzi:'三国志'
                },
            ],
            assd:[
                {
                    id:1,
                    az:'汇集全网最新最全的游戏技巧'
                },
                {
                    id:2,
                    az:'汇集全网最新最全的游戏技巧'
                },
                {
                    id:3,
                    az:'汇集全网最新最全的游戏技巧'
                },
                {
                    id:4,
                    az:'汇集全网最新最全的游戏技巧'
                },
                {
                    id:5,
                    az:'汇集全网最新最全的游戏技巧'
                },
                {
                    id:6,
                    az:'汇集全网最新最全的游戏技巧'
                },
            ],
            asd:[
                {
                    id:1,
                    az:'汇集全网最新最全的游戏技巧'
                },
                {
                    id:2,
                    az:'汇集全网最新最全的游戏技巧'
                },
                {
                    id:3,
                    az:'汇集全网最新最全的游戏技巧'
                },
                {
                    id:4,
                    az:'汇集全网最新最全的游戏技巧'
                },
                {
                    id:5,
                    az:'汇集全网最新最全的游戏技巧'
                },
            ],
            sdsd:[
                {
                    id:1,
                    img: require("@/assets/detail/83.jpg"),
                    qwe:'美丽的金元宝',
                    shijian:'2015-08-09  13:48:15',
                    neirong:'Automation Empire是一个关于效率和扩展的模拟/管理游戏。从零开始，建立起有红场和机器组成的庞大且相互连接的工业网络。有效的资源玉树对于您作为自动化工程师的成功至关重要，利用您可以使用的所有工具，包括矿车，无人机，卡车，火车和货运火箭。利用您的创造力来规划高效的机器物流网络，以形成机械的生产超级有机体。'
                },
                {
                    id:2,
                    img: require("@/assets/detail/84.jpg"),
                    qwe:'美丽的金元宝',
                    shijian:'2015-08-09  13:48:15',
                    neirong:'Automation Empire是一个关于效率和扩展的模拟/管理游戏。从零开始，建立起有红场和机器组成的庞大且相互连接的工业网络。有效的资源玉树对于您作为自动化工程师的成功至关重要，利用您可以使用的所有工具，包括矿车，无人机，卡车，火车和货运火箭。利用您的创造力来规划高效的机器物流网络，以形成机械的生产超级有机体。'
                },
                {
                    id:3,
                    img: require("@/assets/detail/85.jpg"),
                    qwe:'美丽的金元宝',
                    shijian:'2015-08-09  13:48:15',
                    neirong:'Automation Empire是一个关于效率和扩展的模拟/管理游戏。从零开始，建立起有红场和机器组成的庞大且相互连接的工业网络。有效的资源玉树对于您作为自动化工程师的成功至关重要，利用您可以使用的所有工具，包括矿车，无人机，卡车，火车和货运火箭。利用您的创造力来规划高效的机器物流网络，以形成机械的生产超级有机体。'
                },
            ],
        jutt:[
            {  
                id:1,
                wangzi:'网址1'
            },
            {
                id:2,
                wangzi:'网址2'
            },
            {  
                id:3,
                wangzi:'网址3'
            },
            {
                id:4,
                wangzi:'网址4'
            },
        ],
        juttt:[
            {  
                id:1,
                wangzi:'自主研发'
            },
        ],
        jutttt:[
            {  
                id:1,
                wangzi:'动作游戏'
            },
            {  
                id:2,
                wangzi:'体育竞技'
            },
            {  
                id:3,
                wangzi:'角色扮演'
            },
        ],
        juq:[
            {  
                id:1,
                wangzi:'双人'
            },
            {  
                id:2,
                wangzi:'单人'
            },
        ],
        juqq:[
            {  
                id:1,
                wangzi:'简体中文'
            },
            {  
                id:2,
                wangzi:'繁体中文'
            },
        ],
        juqqq:[
            {  
                id:1,
                wangzi:'电脑客户端'
            },
            {  
                id:2,
                wangzi:'手机互通版'
            },
        ],
        juqqqq:[
            {  
                id:1,
                wangzi:'游戏组'
            },
            
        ],
       
       }
    }
}
</script>
<style lang='less' scoped>
.zhuishang{
    display:flex;
}
.youshangshang{
    margin-left: 30px;
}
.youshang{
    width: 326px;
	height: 705px;
    color: rgba(80, 80, 80, 1);
    border:1px solid rgba(0, 0, 0, 0.11);
	font-size: 14px;
    text-align: center;
    padding: 20px;
    margin-bottom: 20px;
}
.youshang1{
    width: 326px;
	height: 463px;
    color: rgba(80, 80, 80, 1);
    border:1px solid rgba(0, 0, 0, 0.11);
	font-size: 14px;
    text-align: center;
    padding: 20px;
    margin-bottom: 20px;
}
.yxny_kuang{
    width: 886px;
    height: 521px;
}
.yxny_tupian{
    float: left;
    width: 460px;
    height: 521px;
    padding: 22px;
    border:1px solid rgba(0, 0, 0, 0.11);
    img {
    width: 413px;
	height: 394px;
    box-sizing: border-box;
    }
}
.heise{
    float: left;
    width: 15px;
    height: 66px;
    margin-top: 10px;
    background-color: rgba(51, 51, 51, 1);
    display:flex;
    img{
	width: 28px;
	height: 28px;
    align-self:center;
    margin-left: -6px;
}
}
.heise1{
    float: right;
    width: 15px;
    height: 66px;
    margin-top: 10px;
    background-color: rgba(51, 51, 51, 1);
    display:flex;
    img{
	width: 28px;
	height: 28px;
    align-self:center;
    margin-left: -6px;
}
}
.tp{
    width: 76px;
    height: 65px;
    padding-left: 5px;
    img{
        width: 66px;
        height: 65px;
    }
}
.wangzi{
    height: 33px;
    line-height: 33px;
    color: rgba(102, 102, 102, 1);
    background-color: rgba(43, 40, 40, 0.07);
    font-size: 14px;
    border-radius: 3px;
    margin-top: 14px;
    margin-left: 20px;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
}
.tpp{
    display: flex;
    width: 382px;
    height: 65px;
    float: left;
    margin-top: 10px;
}

.yxny_kuang1{
    float:right;
    width: 426px;
    height: 63px;
    padding-left: 21px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.11);
    border-right: 1px solid rgba(0, 0, 0, 0.11);
    border-top: 1px solid rgba(0, 0, 0, 0.11);
}
.yxny_kuang2{
    display: flex;
    width: 426px;
    height: 62px;
    float:right;
    border-bottom: 1px solid rgba(0, 0, 0, 0.11);
    border-right: 1px solid rgba(0, 0, 0, 0.11);
}
.yxny_kuang22{
    display: flex;
    width: 426px;
    height: 62px;
    float: left;
    border-bottom: 1px solid rgba(0, 0, 0, 0.11);
}
.yxny_kuang222{
    display: flex;
    width: 460px;
    height: 62px;
    float: left;
    border-bottom: 1px solid rgba(0, 0, 0, 0.11);
}
.yxny_kuang2222{
    display: flex;
    width: 460px;
    height: 62px;
    float: left;
}
.yxny_kuang3{
    line-height: 62px;
    width: 90px;
    background-color: rgba(0, 0, 0, 0.11);
    text-align: right;
    font-size: 14px;
}
.yxny_kuang4{
    display: flex;
    width: 426px;
    height: 87px;
    float:right;
    border-bottom: 1px solid rgba(0, 0, 0, 0.11);
    border-right: 1px solid rgba(0, 0, 0, 0.11);
}
.yxny_kuang5{
    line-height: 87px;
    width: 90px;
    background-color: rgba(0, 0, 0, 0.11);
    text-align: right;
    font-size: 14px;
}
.xiamian{
    display: flex;
    width: 886px;
    height: 187px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.11);
    border-right: 1px solid rgba(0, 0, 0, 0.11);
    border-left: 1px solid rgba(0, 0, 0, 0.11);
}
.zuo{
    width: 459px;
}
.you{
    width: 425px;
}
.pingyu{
    line-height: 62px;
    margin-left: 20px;
    font-size: 14px;
    width: 315px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
}
.pingyu1{
    margin-left: 20px;
    font-size: 14px;
    width: 315px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    margin-top: 10px;
}
.sanguozi{
    float: left;
    line-height: 63px;
    color: rgba(102, 102, 102, 1);
    font-weight: bold;
}
.pingche{
    float: left;
    width: 70px;
    height: 33px;
    line-height: 33px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(3, 92, 193, 1);
    font-size: 14px;
    margin-left: 190px;
    border-radius: 3px;
    margin-top: 16px;
    display:flex;
    img{
	width: 15px;
    height: 15px;
    align-self:center;
    margin-left: 8px;
    margin-right: 8px;
    }
}
.guanwang{
    float:right;
    margin-right: 6px;
    margin-top: 16px;
    width: 70px;
    height: 33px;
    line-height: 33px;
    font-size: 14px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(3, 92, 193, 1);
    border-radius: 3px;
    display:flex;
    img{
	width: 15px;
    height: 15px;
    margin-left: 8px;
    margin-right: 8px;
    align-self:center;
    }
}
.xiakuang{
    border-bottom: 1px solid rgba(0, 0, 0, 0.22);
    width: 886px;
    display:flex;
    padding-bottom: 20px;
    margin-bottom: 20px;
}
.zuokuang{
    width: 460px;
}
.tphz{
    width: 70px;
    height: 77px;
    margin-top: 10px;
    margin-left:auto;
    margin-right: auto;
    img{
        width: 70px;
        height: 77px;
    }
}
.xiakuang_1{
    display:flex;
    font-size: 20px;
    font-weight: bold;
    margin-top: 50px;
}
.xiakuang_12{
    color: rgba(212, 48, 48, 1);
    padding-left: 10px;
    padding-right: 10px;
}
.xiakuang_13{
    margin-right: auto;
}
.xiakuang_11{
    margin-left: auto;
}
.tu{
    width: 354px;
    height: 259px;
    margin-left:auto;
    margin-right: auto;
    margin-top: 10px;
}
.tiyan{
    display:flex;
}
.tiyan1{
    width: 77px;
	height: 36px;
	color: rgba(80, 80, 80, 1);
	font-size: 13px;
    text-align: left;
    margin-bottom: 17px;
    text-align: center;
}
.tiyan2{
    width: 179px;
    height: 9px;
    background-color: rgba(212, 211, 211, 1);
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 3px;
}
.lanse{
    width: 94%;
    height: 100%;
    background-color: #6c0bec;
}
.lanse1{
    width: 96%;
    height: 100%;
    background-color: #6c0bec;
}
.lanse2{
    width: 74%;
    height: 100%;
    background-color: #6c0bec;
}
.lanse3{
    width: 98%;
    height: 100%;
    background-color: #6c0bec;
}
.lanse4{
    width: 98%;
    height: 100%;
    background-color: #6c0bec;
}
.tiyan3{
    width: 59px;
	height: 36px;
	color: rgba(243, 12, 12, 1);
	font-size: 13px;
    text-align: center;
}
.xingxing{
    display:flex;
}
.youkuang{
    width: 396px;
    height: 357px;
    margin-left: 30px;
    margin-top: 120px;
}
.suju{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 30px;
}
.suju1{
    font-size: 18px;
    color: rgba(56, 56, 56, 1);
    margin-bottom: 30px;
    margin-top: 30px;
    width: 380px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
}
.chakan{
    width: 169px;
	height: 46px;
	color: rgba(255, 255, 255, 1);
	background-color: rgba(239, 86, 86, 1);
	font-size: 18px;
	line-height: 46px;
	text-align: center;
}
.yuyue{
    border-bottom: 1px solid rgba(0, 0, 0, 0.22);
    width: 886px;
    padding-bottom: 20px;
    margin-bottom: 20px;
}
.yuyue101{
    width: 886px;
    padding-bottom: 20px;
}
.yuyue01{
    width: 886px;
     display:flex;
}
.yuyue001{
	color: rgba(56, 56, 56, 1);
	font-size: 14px;
}

.yuyue1{
	color: rgba(239, 86, 86, 1);
	font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
}
.yuyue2{
     display:flex;
     padding-bottom: 20px;
}
.yuyue3{
    margin-left: 0px;
    margin-right: auto;
    font-size: 17px;
    font-weight: bold;
    color: rgba(56, 56, 56, 1);
}
.yuyue4{
    margin-left: auto;
    margin-right: 0px;
    color: rgba(80, 80, 80, 1);
	font-size: 14px;
}
.tupian7{  
	width: 210px;
	height: 150px;
    border: rgba(222, 221, 221, 1) solid 1px;
    padding: 10px;
    img{
	width: 190px;
    height: 130px;
}
}
.zt{
    margin-top: 20px;
    width: 850px;
	height: 56px;
	color: rgba(56, 56, 56, 1);
	font-size: 14px;
}
.gengduo{
    font-size: 14px;
    color: rgba(56, 56, 56, 1);
    margin-left: 470px;
    margin-top: -13px;
}
.suru{
    margin-top: 20px;
    width: 841px;
	height: 112px;
	text-indent: 5px;
	color: rgba(140, 140, 140, 1);
	background-color: rgba(243, 242, 242, 1);
	border-radius: 6px;
	font-size: 14px;
	border: rgba(153, 153, 153, 1) solid 1px;
	text-align: left;
}
.zhuche{
    display:flex;
    font-size: 14px;
    margin-top: 30px;
}
.sugang{
    width: 2px;
    height: 18px;
    background-color: rgba(56, 56, 56, 1);
    margin-left: 5px;
    margin-right: 5px;
}
.xudenglu{
    margin-left: 10px;
}
.fabu{
    width: 73px;
	height: 43px;
	color: rgba(255, 255, 255, 1);
	background-color: rgba(3, 92, 193, 1);
	border-radius: 6px;
    text-align: center;
    margin-right: 50px;
    margin-left: auto;
    margin-top: -20px;
    line-height: 43px;
}
.pingfenpaihang{
    width: 282px;
	height: 43px;
	color: rgba(102, 104, 108, 1);
	background-color: rgba(247, 246, 246, 1);
	border-radius: 3px;
	font-size: 15px;
    text-align: left;
    padding-left: 15px;
    font-weight: bold;
    line-height: 43px;
    display: flex;
}
.pingfenpaihang1{
    width: 282px;
	height: 43px;
	color: rgba(102, 104, 108, 1);
	background-color: rgba(247, 246, 246, 1);
	border-radius: 3px;
    font-size: 15px;
    display:flex;
    line-height: 43px;
    margin-top: 1px;
    margin-bottom: 10px;
}
.juzhong{
    margin-left: auto;
    margin-right: auto;
    width: 100px;
}
.paiming1{
    height: 65px;
    line-height: 65px;
    display: flex;
     border-bottom: 1px solid rgba(0, 0, 0, 0.22);
}
.diyi{
    width: 27px;
	height: 27px;
	color: rgba(255, 255, 255, 1);
	background-color: rgba(212, 48, 48, 1);
	font-size: 14px;
    text-align: center;
    font-weight: bold;
    line-height: 27px;
    margin-top: 20px;
}
.dier{
    width: 27px;
	height: 27px;
	color: rgba(255, 255, 255, 1);
	background-color: rgba(250, 126, 1, 1);
	font-size: 14px;
    text-align: center;
    font-weight: bold;
    line-height: 27px;
    margin-top: 20px;
}
.disan{
    width: 27px;
	height: 27px;
	color: rgba(255, 255, 255, 1);
	background-color: rgba(245, 227, 69, 1);
	font-size: 14px;
    text-align: center;
    font-weight: bold;
    line-height: 27px;
    margin-top: 20px;
}
.disi{
    width: 27px;
	height: 27px;
	color: rgba(255, 255, 255, 1);
	background-color: rgba(0, 145, 255, 1);
	font-size: 14px;
    text-align: center;
    font-weight: bold;
    line-height: 27px;
    margin-top: 20px;
}
.mingzi{
	color: rgba(80, 80, 80, 1);
    font-size: 14px;
    width: 90px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    margin-left: 10px;
    
}
.mingzizi{
    font-weight: bold;
    color: rgba(80, 80, 80, 1);
    font-size: 14px;
    width: 220px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    margin-left: 10px;
    }
.yougengduo{
    font-size: 14px;
    margin-right: 20px;
    margin-left: auto;
}
.youtu{
    img{
        width: 326px;
    	height: 322px;
    }
}
.youxia{
    padding:20px;
    width: 326px;
	height: 383px;
	color: rgba(80, 80, 80, 1);
	font-size: 14px;
    line-height: 150%;
    border: 1px solid rgba(0, 0, 0, 0.22);
    margin-top: 20px;
    text-align: center;
}
.gao24{
    font-size: 15px;
    font-weight: bold;
    display: flex;
}
.shutiao{
    width: 4px;
    height: 18px;
    background-color: rgba(3, 92, 193, 1);
    margin-top: 2px;
    margin-left: 6px;
    margin-right: 10px;
}
.lansegengduo{
	color: rgba(3, 92, 193, 1);
    font-size: 14px;
    margin-left: auto;
    margin-right: 10px;
}
.jiewei{
    width: 952px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.22);
    display: flex;
    margin-bottom: 20px;
}
.touxiang{
    
	width: 61px;
	height: 59px;
    img{
	width: 61px;
	height: 61px;
    }
}
.neirong{
    width: 871px;
    margin-left: 20px;
     
}
.hezi22{
    display: flex;
}
.mingzilan{
    color: rgba(3, 92, 193, 1);
	font-size: 14px;
    font-weight: bold;
    width: 600px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
}
.shijian{
    width: 300px;
	color: rgba(80, 80, 80, 1);
	font-size: 14px;
	text-align: right;
}
.wenzineirong{
	color: rgba(80, 80, 80, 1);
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 20px;
	line-height: 200%;
}
.fanye{
    width: 64px;
	height: 32px;
	color: rgba(166, 166, 166, 1);
	box-shadow: rgba(202, 202, 202, 1) solid 1px;
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.22);
    margin: 3px;
}
.fanyeka{
    display: flex;
    width: 900px;
    margin-right: 0px;
    margin-left: auto;
}
.suzhi{
	height: 32px;
	color: rgba(56, 56, 56, 1);
	box-shadow: rgba(229, 229, 229, 1) solid 1px;
	font-size: 16px;
	line-height: 32px;
    text-align: center;
    margin: 3px;
    border: 1px solid rgba(0, 0, 0, 0.22);
    padding-left: 10px;
    padding-right: 10px;
}
</style>
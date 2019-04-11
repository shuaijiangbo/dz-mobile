<template>
  <div class="">
    <headnav title="关于我们"></headnav>
    <div class="wrapper">
      <!--top-->
      <!--content-->
      <div class="content">
        <div class="gy_ctn_bgdpicu02" :style="{backgroundImage:'url('+ topbackgroundpicu03+')'}"></div>
        <!--tab-->
        <div class="wrap" id="wrap">
          <ul class="tabClick" :style="{backgroundImage:'url('+ topbackgroundpicu04+')'}">
            <li class="active" :style="{left:positionSize}">{{title}}</li>
            <li @click="changeContent(1)">关于我们</li>
            <li @click="changeContent(2)">合作伙伴</li>
            <li style="width:34%" @click="changeContent(3)">招贤纳士</li>
          </ul>
          <div class="lineBorder">
            <div class="lineDiv"><!--移动的div--></div>
          </div>
          <div class="tabCon">
            <div class="tabBox">
              <div class="tabList" v-show="positionSize==0">
                <div class="tabList_ctn">
                  <img :src=gypic />
                </div>
              </div>
              <div class="tabList"  v-show="positionSize=='125px'">
                <div class="tabList_ctn">
                  <img :src=guanyu />
                </div>
              </div>
              <div class="tabList"  v-show="positionSize=='250px'">
                <div class="tabList_shadow">
                  <div class="tabList_ctn ">

                    <div class="tabList_ctnu01">
                      <span class="float_left"></span>
                      <h2 class="float_left" :style="{fontSize:'.5rem'}">
                        电政信息科技
                      </h2>
                    </div>
                    <div class="clear"></div>
                    <div class="tabList_ctnu02">
                      <ul>
                        <li>
                          <i class="icon iconfont icon-qizi"></i> 民营公司
                        </li>
                        <li>
                          <i class="icon iconfont icon-dianhua1"></i> 023-5653XXXX
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <i class="icon iconfont icon-renshutongji"></i> 少于20人
                        </li>
                        <li>
                          <i class="icon iconfont icon-time"></i> 周一至周五 09:00-18:30
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <i class="icon iconfont icon-xiezilou1"></i> 大数据挖掘应用
                        </li>
                        <li>
                          <i class="icon iconfont icon-dingwei2"></i> 重庆市渝北区光电园双子座A18-6
                        </li>
                      </ul>
                      <div class="tabList_ctnu03">
                        <ul>
                          <li>
                            五险一金
                          </li>
                          <li>
                            员工旅游
                          </li>
                          <li>
                            年终奖金
                          </li>
                          <li>
                            加班补助
                          </li>
                          <li>
                            包住
                          </li>
                          <li>
                            通讯补贴
                          </li>
                          <li>
                            带薪年假
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="tabList_ctnu04">
                  <ul>
                    <li class="tabList_ctnu04_clear" @click="jumper">
                      <h2 class="float_left bold">大数据开发工程师</h2>
                      <h2 class="float_right text_yellow">月薪：1.2-1.5W</h2>
                      <div class="clear"></div>
                      <span class="float_left tabList_ctnu04_text">
                                            本科以上  |  3-4年经验   |  招1人
                                        </span>
                      <span class="float_right tabList_ctnu04_text">
                                            2018-12-11
                                        </span>
                    </li>
                    <li class="tabList_ctnu04_clear" @click="jumper">
                      <h2 class="float_left bold">大数据架构师</h2>
                      <h2 class="float_right text_yellow">月薪：1.2-1.5W</h2>
                      <div class="clear"></div>
                      <span class="float_left tabList_ctnu04_text">
                                            本科以上  |  3-4年经验   |  招1人
                                        </span>
                      <span class="float_right tabList_ctnu04_text">
                                            2018-12-11
                                        </span>
                    </li>
                    <li class="tabList_ctnu04_clear" @click="jumper">
                      <h2 class="float_left bold">大数据开发工程师</h2>
                      <h2 class="float_right text_yellow">月薪：1.2-1.5W</h2>
                      <div class="clear"></div>
                      <span class="float_left tabList_ctnu04_text">
                                            本科以上  |  3-4年经验   |  招1人
                                        </span>
                      <span class="float_right tabList_ctnu04_text">
                                            2018-12-11
                                        </span>
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </div>
        </div>
        <!--tab end-->
      </div>
      <!--content end-->
      <!--foot end-->
    </div>
  </div>
</template>

<script>
  import headnav from '@/components/common/headerabout'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        guanyu:require('@/assets/imgs/guanyu_u02.jpg'),
        gypic:require('@/assets/imgs/gy_pic.png'),
        topbackgroundpicu03:require('@/assets/imgs/top_backgroundpicu03.png'),
        topbackgroundpicu04:require('@/assets/imgs/top_backgroundpicu04.png'),
        positionSize:'',
        title:"关于我们"
      }
    },
    components:{
      headnav
    },
    created(){
    },
    methods:{
      changeContent(num){
        if(num==1){
          this.positionSize='0';
          this.title='关于我们';
        }
        else if(num==2){
          this.positionSize='125px';
          this.title='合作伙伴';
        }
        else if(num==3){
          this.positionSize='250px';
          this.title='招贤纳士';
        }
      },
      jumper(newsId){
        this.$router.push({path:'aboutUsDetail'});
        this.init();
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .float_left{
    float: left;
  }
  .float_right {
    float: right;
  }
  img{
    width: 100%;
  }

  /*guanyu*/
  .gy_ctn_bgdpicu02 {
    /*background-image: url(../images/top_backgroundpicu03.png);*/
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    height: 3.7rem;
  }
  .wrap{margin-top: -1.1rem;}

  .tabList_ctn {width: 92%;margin: 4% auto 0;}
  .tabList_ctnu01 {border-bottom:1px solid #d2d2d2;overflow:hidden;padding-bottom: 3%;}
  .tabList_ctnu01 span{
    background-color:#078dff;
    display:block;
    width:0.36rem;
    height:0.7rem;
    margin-right:0.2rem;

  }
  .tabList_shadow {
    -moz-box-shadow: 0px 2px 4px #dddddd; /* 老的 Firefox */
    box-shadow: 0px 2px 4px #dddddd;
    background-color:  #fff;
    padding: 1% 0 0 0;
  }
  .tabList_ctnu01 h2{
    color:#2a2929;
  }
  .tabList_ctnu02 {overflow:hidden;margin: 3% 0 0;}
  .tabList_ctnu02 ul{clear:both;margin-bottom:2%;overflow:hidden;}
  .tabList_ctnu02 ul li {float:left;width: 48%;padding-right: 1%;text-align:  left;color:  #7d7d7d;font-size: 0.3rem;}
  .tabList_ctnu02 ul li .icon {font-size: 0.4rem;}
  .tabList_ctnu03 {
    overflow:hidden;
    margin: 4% 0 2%;
  }
  .tabList_ctnu03 ul li {
    float:left;
    background-color:#f4f4f4;
    text-align:center;
    width: 19%;
    margin: 0 1% 1% 0;
    padding:0.1rem 0;
  }
  .tabList_ctnu04{margin:  4% 0;}
  .tabList_ctnu04 ul .tabList_ctnu04_clear{clear:both;width:92%;padding: 3% 4%;overflow:hidden;background-color:#fff;-moz-box-shadow: 0px 2px 4px #dddddd; /* 老的 Firefox */box-shadow: 0px 2px 4px #dddddd;margin-bottom: 4%;}
  .tabList_ctnu04 ul li h2{margin-bottom:0.1rem;font-size:0.4rem;font-weight: 600}
  .tabList_ctnu04 ul li .bold{font-weight: bold;}
  .text_yellow{color:#fd690f;}
  .tabList_ctnu04_text {
    font-size:0.3rem;
    color:#989898;
  }
  .tabClick{
    /*background-image: url(../images/top_backgroundpicu04.png);*/
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;; overflow: hidden}
  .tabClick li{height: 1.09rem;line-height: 1.09rem;width: 33%;float: left;text-align: center;color: #fff;font-size: 0.4rem;}
  .tabClick li.active{color: #fff;transition: 0.1s;background-color:  #078dff;position: absolute}
  .tabCon{overflow: hidden;}
  .tabBox{ position: relative}
  .tabList{word-break: break-all;width:100%;float:left;text-align:center;font-size:36px;font-family: "Arial Black";}
  .lineBorder{}
  .lineDiv{}

  /*guanyu end*/
</style>


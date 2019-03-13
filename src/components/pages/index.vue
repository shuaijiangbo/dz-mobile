<template>
  <div id="index">
    <headnav></headnav>
    <div>
      <van-swipe :autoplay="3000" indicator-color="white"  :style="{width:'100%',height:'200px'}">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" :style="{width:'100%',height:'100%'}"/>
        </van-swipe-item>
      </van-swipe>

      <!-- 所有项目模块-->
      <div class="all-projects-box">
        <ul class="all-projects" :class="{'show-all':showTip}">
          <li class="single-project" v-for="(project,index) in project_data" @click="jumperDetail(project.typeNumber,project.typeIndex)">
            <i class="project-icon"  :style="{backgroundImage:'url('+project_icon+')',backgroundPosition:project.position}"></i>
            <p class="project-name">
              {{project.name}}
            </p>
          </li>
        </ul>
        <div>
          <button type="button" class="learn-more" @click="showTip=!showTip" v-text="showTip?'收起':'查看更多'"></button>
        </div>
      </div>
      <!-- 所有项目模块-->

      <div class="module-wrap-box">
        <div class="module-wrap">
          <ul>
            <li class="slide-item" @click="jumper(0)">
              <img class="item-bg" :src=picu01 alt="">
              <div class="mask">
                <div class="bg other-bg"></div>
                <div class="slide-content">
                  <div class="item-img-panel" style="height: 1.5rem;">
                    <img :src=icon_u01 alt="" class="item-img">
                  </div>
                  <h3 class="item-title">智慧城市</h3>
                </div>
              </div>
            </li>

            <li class="slide-item"  @click="jumper(1)">
              <img class="item-bg" :src=picu02 alt="">
              <div class="mask">
                <div class="bg other-bg"></div>
                <div class="slide-content">
                  <div class="item-img-panel" style="height:1.5rem;">
                    <img :src=icon_u02 alt="" class="item-img">
                  </div>
                  <h3 class="item-title">行业解决方案</h3>
                </div>
              </div>
            </li>
            <li class="slide-item">
              <a href="http://www.hotisports.com/">
                <img class="item-bg" :src=picu03 alt="">
                <div class="mask">
                  <div class="bg other-bg"></div>
                  <div class="slide-content">
                    <div class="item-img-panel" style="height:1.5rem;">
                      <img :src=icon_u03 alt="" class="item-img">
                    </div>
                    <h3 class="item-title">运动赛事解决方案</h3>
                  </div>
                </div>
              </a>
            </li>
            <li class="slide-item"  @click="jumper(3)">
              <img class="item-bg" :src=picu04 alt="">
              <div class="mask">
                <div class="bg other-bg"></div>
                <div class="slide-content">
                  <div class="item-img-panel" style="height:1.5rem;">
                    <img :src=icon_u04 alt="" class="item-img">
                  </div>
                  <h3 class="item-title">智能技术</h3>
                </div>
              </div>
            </li>

            <li class="slide-item"  @click="jumper(4)">
              <img class="item-bg" :src=picu05 alt="">
              <div class="mask">
                <div class="bg other-bg"></div>
                <div class="slide-content">
                  <div class="item-img-panel" style="height:1.5rem;">
                    <img :src=icon_u05 alt="" class="item-img">
                  </div>
                  <h3 class="item-title">服务内容</h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footers></footers>
  </div>
</template>

<script>
  import headnav from '@/components/common/header'
  import footers from '@/components/common/footer'
  import banner1 from '@/assets/imgs/banner.png'
  import banner2 from '@/assets/imgs/banner0.jpg'
  import banner3 from '@/assets/imgs/banner1.jpg'
  import banner4 from '@/assets/imgs/banner2.jpg'
  export default {
    name: 'index',
    data(){
      return {
        project_icon:require('@/assets/imgs/sprite_icon.png'),
        picu01:require('@/assets/imgs/listu01.png'),
        picu02:require('@/assets/imgs/listu02.png'),
        picu03:require('@/assets/imgs/listu03.png'),
        picu04:require('@/assets/imgs/listu04.png'),
        picu05:require('@/assets/imgs/listu05.png'),

        icon_u01:require('@/assets/imgs/icon_u01.png'),
        icon_u02:require('@/assets/imgs/icon_u02.png'),
        icon_u03:require('@/assets/imgs/icon_u03.png'),
        icon_u04:require('@/assets/imgs/icon_u04.png'),
        icon_u05:require('@/assets/imgs/icon_u05.png'),

        showTip:false,
        activeIndex:'',
        images: [
          banner1,
          banner2,
          banner3,
          banner4,
        ],
        project_data:[{
          name:'智慧商圈',
          position:'0px 0',
          typeNumber:0,
          typeIndex:'1',
          detailPic:'zhihui_u01',

        },{
          name:'智慧校园',
          position:'-48px 0',
          typeNumber:0,
          detailPic:'zhihui_u02',
          typeIndex:'2'
        },{
          name:'互联网+政务服务',
          position:'-96px 0',
          typeNumber:1,
          detailPic:'hangye_u01',
          typeIndex:'1'
        },{
          name:'政府信用体系建设',
          position:'-144px 0',
          typeNumber:1,
          detailPic:'hangye_u02',
          typeIndex:'2'
        },{
          name:'法人信息数据库',
          position:'-192px 0',
          typeNumber:1,
          detailPic:'hangye_u03',
          typeIndex:'3'

        },{
          name:'社区党建',
          position:'-240px 0',
          typeNumber:1,
          detailPic:'hangye_u04',
          typeIndex:'4'
        },{
          name:'应急管理',
          position:'-288px 0',
          typeNumber:1,
          detailPic:'hangye_u05',
          typeIndex:'5'
        },{
          name:'智慧生态环境管理',
          position:'-336px 0',
          typeNumber:1,
          detailPic:'hangye_u06',
          typeIndex:'6'
        },{
          name:'海绵城市监测管理',
          position:'-384px 0',
          detailPic:'hangye_u07',
          typeNumber:1,
          typeIndex:'7'
        },{
          name:'无人机飞控系统',
          position:'-432px 0',
          typeNumber:2,
          detailPic:'qita_u01',
          typeIndex:'1'
        },{
          name:'无人机智能吊舱',
          position:'0 -48px',
          typeNumber:2,
          detailPic:'qita_u02',
          typeIndex:'2'
        },{
          name:'智慧管线监管',
          position:'-48px -48px',
          typeNumber:2,
          detailPic:'qita_u03',
          typeIndex:'3'
        },{
          name:'智能视频分析',
          position:'-144px -48px',
          typeNumber:3,
          detailPic:'zhineng_u01',
          typeIndex:'1'
        },{
          name:'遥感反演分析',
          position:'-192px -48px',
          typeNumber:3,
          detailPic:'zhineng_u02',
          typeIndex:'2'
        },{
          name:'室内定位技术',
          position:'-240px -48px',
          typeNumber:3,
          detailPic:'zhineng_u03',
          typeIndex:'3'
        },{
          name:'咨询服务',
          position:'-432px -48px',
          typeNumber:4,
          detailPic:'fuwu_03',
          typeIndex:'1'
        },{
          name:'数据共享',
          position:'-384px -48px',
          typeNumber:5,
          detailPic:'chanpin_u01',
          typeIndex:'1'
        },{
          name:'大数据平台',
          position:'0 -96px',
          typeNumber:5,
          detailPic:'chanpin_u02',
          typeIndex:'2'
        },{
          name:'人工智能平台',
          position:'-48px -96px',
          typeNumber:5,
          detailPic:'chanpin_u03',
          typeIndex:'3'
        },{
          name:'云平台',
          position:'-96px -96px',
          typeNumber:5,
          detailPic:'chanpin_u04',
          typeIndex:'4'
        },{
          name:'物联网平台',
          position:'-144px -96px',
          typeNumber:5,
          detailPic:'chanpin_u05',
          typeIndex:'5'
        }],



        jumperParame:[
          [{
            name:"智慧商圈",
            des:"辅助招商，快速落地",
            position:'0px 0',
            typeIndex:'1',
            detailPic:'zhihui_u01',
            icon:'icon-shangquanguimo'
          },{
            name:"智慧园区",
            des:"辅助招商，快速落地，辅助招商，快速落地",
            position:'-48px 0',
            typeIndex:'2',
            detailPic:'zhihui_u02',
            icon:'icon-zhihuihua'
          }],[{
            name:"互联网加政务服务",
            des:"辅助招商，快速落地",
            position:'-96px 0',
            typeIndex:'1',
            detailPic:'hangye_u01',
            icon:'icon-hulianwang'
          },{
            name:"政府信用体系建设",
            des:"辅助招商，快速落地",
            position:'-144px 0',
            typeIndex:'2',
            detailPic:'hangye_u02',
            icon:'icon-xinyong'
          },{
            name:"法人信息数据库",
            des:"辅助招商，快速落地",
            position:'-192px 0',
            typeIndex:'3',
            detailPic:'hangye_u03',
            icon:'icon-web-icon-'
          },{
            name:"社区党建",
            des:"辅助招商，快速落地",
            position:'-240px 0',
            typeIndex:'4',
            detailPic:'hangye_u04',
            icon:'icon-dangwugongkai'
          },{
            name:"应急管理",
            des:"辅助招商，快速落地",
            position:'-288px 0',
            typeIndex:'5',
            detailPic:'hangye_u05',
            icon:'icon-yingji'
          },{
            name:"智慧生态环境管理",
            des:"辅助招商，快速落地",
            position:'-336px 0',
            typeIndex:'6',
            detailPic:'hangye_u06',
            icon:'icon-shengtai'
          },{
            name:"海绵城市监测管理",
            des:"辅助招商，快速落地",
            position:'-384px 0',
            typeIndex:'7',
            detailPic:'hangye_u07',
            icon:'icon-shengtaibaohu'
          }],[{
            name:"无人机飞控系统",
            des:"辅助招商，快速落地",
            position:'-432px 0',
            typeIndex:'1',
            detailPic:'qita_u01',
            icon:'icon-UAV'
          },{
            name:"无人机智能吊舱",
            des:"辅助招商，快速落地",
            position:'0 -48px',
            typeIndex:'2',
            detailPic:'qita_u02',
            icon:'icon-wurenji'
          },{
            name:"智慧管线监管",
            des:"辅助招商，快速落地",
            position:'-48px -48px',
            typeIndex:'3',
            detailPic:'qita_u03',
            icon:'icon-guanxianguanli'
          },{
            name:"资产管理系统",
            des:"辅助招商，快速落地",
            position:'-96px -48px',
            typeIndex:'4',
            detailPic:'zhunbei',
            icon:'icon-zichanguanli'
          }],[{
            name:"智能视频分析",
            des:"辅助招商，快速落地",
            position:'-144px -48px',
            typeIndex:'1',
            detailPic:'zhineng_u01',
            icon:'icon-shexiangtou'
          },{
            name:"遥感反演分析",
            des:"辅助招商，快速落地",
            position:'-192px -48px',
            typeIndex:'2',
            detailPic:'zhineng_u02',
            icon:'icon-shujugongxiang'
          },{
            name:"室内定位技术",
            des:"辅助招商，快速落地",
            position:'-240px -48px',
            typeIndex:'3',
            detailPic:'zhineng_u03',
            icon:'icon-shineidingwei'
          }],[{
            name:"平台服务",
            des:"辅助招商，快速落地",
            position:'-144px -48px',
            typeIndex:'1',
            detailPic:'zhunbei',
            icon:'icon-pingtaifuwu'
          },{
            name:"数据服务",
            des:"辅助招商，快速落地",
            position:'-192px -48px',
            typeIndex:'2',
            detailPic:'zhunbei',
            icon:'icon-shuju'
          },{
            name:"咨询服务",
            des:"辅助招商，快速落地",
            position:'-240px -48px',
            typeIndex:'3',
            detailPic:'fuwu_03',
            icon:'icon-icon-'
          }],[{
            name:"数据共享",
            des:"辅助招商，快速落地",
            position:'-144px -48px',
            typeIndex:'1',
            detailPic:'chanpin_u01',
            icon:'icon-tongyongleigongxiangyuan'
          },{
            name:"大数据平台",
            des:"辅助招商，快速落地",
            position:'-192px -48px',
            typeIndex:'2',
            detailPic:'chanpin_u02',
            icon:'icon-yidongyunkongzhitaiicon58'
          },{
            name:"人工智能平台",
            des:"辅助招商，快速落地",
            position:'-240px -48px',
            typeIndex:'3',
            detailPic:'chanpin_u03',
            icon:'icon-rengongzhineng'
          },{
            name:"云平台",
            des:"辅助招商，快速落地",
            position:'-288px -48px',
            typeIndex:'4',
            detailPic:'chanpin_u04',
            icon:'icon-yunshuju'
          },{
            name:"物联网平台",
            des:"辅助招商，快速落地",
            position:'-336px -48px',
            typeIndex:'5',
            detailPic:'chanpin_u05',
            icon:'icon-keji'
          }]
        ]
      }
    },
    components:{
      headnav,
      footers
    },
    methods:{
      jumper(index){
          this.$router.push({path:'firstItems',query:{'typeNumber':index}})
      },
      jumperDetail(typeNumber,typeIndex ){
        let lists=JSON.stringify(this.jumperParame[typeNumber]);
        let newsId=typeIndex;
        this.$router.push({path:'secondList',query:{'tabIndex':newsId,'lists':lists,'firstClassActiveIndex':typeNumber}})
      }
    },
    /*    watch:{
          $route(to,from){
            this.activeIndex=to.meta;
          }
        }*/
  }
</script>

<style  type="text/scss" lang="scss" scoped>
  div{
    color: #000;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .all-projects-box{
    width: 100%;
    font-size: 13px;
    padding-top: 20px;
    padding-bottom: 20px;
    .all-projects{
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
      height: 260px;
      overflow: hidden;
      transition:0.2s ease-in;
      li.single-project{
        float: left;
        width: 33.3%;
        height: 130px;
        cursor: pointer;
        i.project-icon{
          display: block;
          height: 48px;
          width: 48px;
          margin: 0 auto;
          background-size: auto;
          background-repeat: no-repeat;
          margin-bottom: 10px;
        }
      }
    }
    .show-all{
      height: 890px;
    }
    .learn-more{
      width: 140px;
      height: 40px;
      background: none;
      border: 1px solid #bfbfbf;
    }
  }

  .module-wrap-box{
    width: 100%;
    .module-wrap{
      width: 98%;
      margin: 0 auto;
      ul{
        width: 100%;
        .slide-item{
          width: 100%;
          height: 5.4rem;
          position: relative;
          color: #000;
          font-size: 0;
          text-align: center;
          margin-bottom: 3px;
          img.item-bg{
            width: 100%;
            height: 100%;
          }
          .mask{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            .bg{
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              background: #161a1d;
              opacity: .2;
              filter: alpha(opacity=20);
              -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(20));
              transition: all .4s cubic-bezier(.4,0,.2,1);
            }
            .slide-content{
              position: absolute;
              left: 0;
              right: 0;
              top: 1.2rem;
              bottom: 0;
              transition: all .4s cubic-bezier(.4,0,.2,1);
              .item-img-panel{
                position: relative;
                width: 19%;
                height: 54px;
                display: inline-block;
                .item-img{
                  position: absolute;
                  left: 0;
                  right: 0;
                  top: 0;
                  width: 100%;
                  display: inline-block;
                  opacity: 1;
                  filter: alpha(opacity=100);
                  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(100));
                  transition: all .4s cubic-bezier(.4,0,.2,1);
                }
              }
              .item-title{
                color: #fff;
                font-size: 22px;
                line-height: 24px;
                margin: 0;
                padding: 0;
                margin-top: 24px;
                font-weight: 700;
                transition: all .4s cubic-bezier(.4,0,.2,1);
              }
            }
          }
        }
      }
    }
  }
</style>

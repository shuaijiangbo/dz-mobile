<template>
  <div class="" :key="times">
    <headnav :title="titlename" @init="init"></headnav>
    <ul :key="times">
      <li class="dz_li" v-for="item in thisTpyeList.childrens" @click="jupmer(item.typeIndex,thisTpyeListJson)">
        <div class="li_dz_tle">
          <p><i class="icon iconfont" :class=item.icon></i>{{item.name}}<span class="pull-right"><i class="iconfont icon-youjiantou"></i></span></p>
        </div>
        <div class="li_dz_ctn">
          {{item.des}}
          <img :src=item.pic />
        </div>
      </li>
    </ul>
    <footers></footers>
  </div>
</template>

<script>
  import footers from '@/components/common/footer'
  import headnav from '@/components/common/header1'
  import zhihui_u01 from '@/assets/imgs/itemsmalllist/zhihui_u01.jpg'
  import zhihui_u02 from '@/assets/imgs/itemsmalllist/zhihui_u02.jpg'

  import hangye_u01 from '@/assets/imgs/itemsmalllist/hangye_u01.jpg'
  import hangye_u02 from '@/assets/imgs/itemsmalllist/hangye_u02.jpg'
  import hangye_u03 from '@/assets/imgs/itemsmalllist/hangye_u03.jpg'
  import hangye_u04 from '@/assets/imgs/itemsmalllist/hangye_u04.jpg'
  import hangye_u05 from '@/assets/imgs/itemsmalllist/hangye_u05.jpg'
  import hangye_u06 from '@/assets/imgs/itemsmalllist/hangye_u06.jpg'
  import hangye_u07 from '@/assets/imgs/itemsmalllist/hangye_u07.jpg'

  import qita_u01 from '@/assets/imgs/itemsmalllist/qita_u01.jpg'
  import qita_u02 from '@/assets/imgs/itemsmalllist/qita_u02.jpg'
  import qita_u03 from '@/assets/imgs/itemsmalllist/qita_u03.jpg'
  import qita_u04 from '@/assets/imgs/itemsmalllist/qita_u04.jpg'


  import zhineng_u01 from '@/assets/imgs/itemsmalllist/zhineng_u01.jpg'
  import zhineng_u02 from '@/assets/imgs/itemsmalllist/zhineng_u02.jpg'
  import zhineng_u03 from '@/assets/imgs/itemsmalllist/zhineng_u03.jpg'

  import zhunbei from '@/assets/imgs/itemsmalllist/zhunbei.jpg'
  import fuwu_03 from '@/assets/imgs/itemsmalllist/fuwu_03.jpg'


  import chanpin_u01 from '@/assets/imgs/itemsmalllist/chanpin_u01.jpg'
  import chanpin_u02 from '@/assets/imgs/itemsmalllist/chanpin_u02.jpg'
  import chanpin_u03 from '@/assets/imgs/itemsmalllist/chanpin_u03.jpg'
  import chanpin_u04 from '@/assets/imgs/itemsmalllist/chanpin_u04.jpg'
  import chanpin_u05 from '@/assets/imgs/itemsmalllist/chanpin_u05.jpg'
  export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      times:new Date().getTime()+'',
      secondList:[{
        name:'智慧城市解决方案',
        childrens:[{
          name:"智慧商圈",
          des:"辅助招商，快速落地",
          position:'0px 0',
          typeIndex:'1',
          pic:zhihui_u01,
          detailPic:'zhihui_u01',
          icon:'icon-shangquanguimo'
        },{
          name:"智慧园区",
          des:"辅助招商，快速落地，辅助招商，快速落地",
          position:'-48px 0',
          typeIndex:'2',
          pic:zhihui_u02,
          detailPic:'zhihui_u02',
          icon:'icon-zhihuihua'
        }]
      },{
        name:'行业解决方案',
        childrens:[{
          name:"互联网加政务服务",
          des:"辅助招商，快速落地",
          position:'-96px 0',
          typeIndex:'1',
          pic:hangye_u01,
          detailPic:'hangye_u01',
          icon:'icon-hulianwang'
        },{
          name:"政府信用体系建设",
          des:"辅助招商，快速落地",
          position:'-144px 0',
          typeIndex:'2',
          pic:hangye_u02,
          detailPic:'zhihui_u02',
          icon:'icon-xinyong'
        },{
          name:"法人信息数据库",
          des:"辅助招商，快速落地",
          position:'-192px 0',
          typeIndex:'3',
          pic:hangye_u03,
          detailPic:'hangye_u03',
          icon:'icon-web-icon-'
        },{
          name:"社区党建",
          des:"辅助招商，快速落地",
          position:'-240px 0',
          typeIndex:'4',
          pic:hangye_u04,
          detailPic:'hangye_u04',
          icon:'icon-dangwugongkai'
        },{
          name:"应急管理",
          des:"辅助招商，快速落地",
          position:'-288px 0',
          typeIndex:'5',
          pic:hangye_u05,
          detailPic:'hangye_u05',
          icon:'icon-yingji'
        },{
          name:"智慧生态环境管理",
          des:"辅助招商，快速落地",
          position:'-336px 0',
          typeIndex:'6',
          pic:hangye_u06,
          detailPic:'hangye_u06',
          icon:'icon-shengtai'
        },{
          name:"海绵城市监测管理",
          des:"辅助招商，快速落地",
          position:'-384px 0',
          typeIndex:'7',
          pic:hangye_u07,
          detailPic:'hangye_u07',
          icon:'icon-shengtaibaohu'
        }]
      },{
        name:'其他解决方案',
        childrens:[{
          name:"无人机飞控系统",
          des:"辅助招商，快速落地",
          position:'-432px 0',
          typeIndex:'1',
          pic:qita_u01,
          detailPic:'qita_u01',
          icon:'icon-UAV'
        },{
          name:"无人机智能吊舱",
          des:"辅助招商，快速落地",
          position:'0 -48px',
          typeIndex:'2',
          pic:qita_u02,
          detailPic:'qita_u02',
          icon:'icon-wurenji'
        },{
          name:"智慧管线监管",
          des:"辅助招商，快速落地",
          position:'-48px -48px',
          typeIndex:'3',
          pic:qita_u03,
          detailPic:'qita_u03',
          icon:'icon-guanxianguanli'
        },{
          name:"资产管理系统",
          des:"辅助招商，快速落地",
          position:'-96px -48px',
          typeIndex:'4',
          pic:zhunbei,
          detailPic:'zhunbei',
          icon:'icon-zichanguanli'
        }]
      },{
        name:'智能技术',
        childrens:[{
          name:"智能视频分析",
          des:"辅助招商，快速落地",
          position:'-144px -48px',
          typeIndex:'1',
          pic:zhineng_u01,
          detailPic:'zhineng_u01',
          icon:'icon-shexiangtou'
        },{
          name:"遥感反演分析",
          des:"辅助招商，快速落地",
          position:'-192px -48px',
          typeIndex:'2',
          pic:zhineng_u02,
          detailPic:'zhineng_u02',
          icon:'icon-shujugongxiang'
        },{
          name:"室内定位技术",
          des:"辅助招商，快速落地",
          position:'-240px -48px',
          typeIndex:'3',
          pic:zhineng_u03,
          detailPic:'zhineng_u03',
          icon:'icon-shineidingwei'
        }]
      },{
        name:'服务内容',
        childrens:[{
          name:"平台服务",
          des:"辅助招商，快速落地",
          position:'-288px -48px',
          typeIndex:'1',
          pic:zhunbei,
          detailPic:'zhunbei',
          icon:'icon-pingtaifuwu'
        },{
          name:"数据服务",
          des:"辅助招商，快速落地",
          position:'-336px -48px',
          typeIndex:'2',
          pic:zhunbei,
          detailPic:'zhunbei',
          icon:'icon-shuju'
        },{
          name:"咨询服务",
          des:"辅助招商，快速落地",
          position:'-384px -48px',
          typeIndex:'3',
          pic:fuwu_03,
          detailPic:'fuwu_03',
          icon:'icon-icon-'
        }]
      },{
        name:'基础平台产品',
        childrens:[{
          name:"数据共享",
          des:"辅助招商，快速落地",
          position:'-432px -48px',
          typeIndex:'1',
          pic:chanpin_u01,
          detailPic:'chanpin_u01',
          icon:'icon-tongyongleigongxiangyuan'
        },{
          name:"大数据平台",
          des:"辅助招商，快速落地",
          position:'0 -96px',
          typeIndex:'2',
          pic:chanpin_u02,
          detailPic:'chanpin_u02',
          icon:'icon-yidongyunkongzhitaiicon58'
        },{
          name:"人工智能平台",
          des:"辅助招商，快速落地",
          position:'-48px -96px',
          typeIndex:'3',
          pic:chanpin_u03,
          detailPic:'chanpin_u03',
          icon:'icon-rengongzhineng'
        },{
          name:"云平台",
          des:"辅助招商，快速落地",
          position:'-96px -96px',
          typeIndex:'4',
          pic:chanpin_u04,
          detailPic:'chanpin_u04',
          icon:'icon-yunshuju'
        },{
          name:"物联网平台",
          des:"辅助招商，快速落地",
          position:'-144px -96px',
          typeIndex:'5',
          pic:chanpin_u05,
          detailPic:'chanpin_u05',
          icon:'icon-keji'
        }]
      }]
    }
  },
  components:{
    headnav,
    footers
  },
    methods:{
      setData(){
        this.thisTpyeList=this.secondList[this.typeNumber];
        this.titlename=this.thisTpyeList.name;
        this.thisTpyeListJson=JSON.stringify(this.thisTpyeList.childrens);
      },
      init(){
        this.typeNumber=this.$route.query.typeNumber;
        this.setData();
        this.times = new Date().getTime()+'';
      },
      jupmer(newsId,lists){
        this.$router.push({path:'secondList',query:{'tabIndex':newsId,'lists':lists}})
      }
    },
    created(){
      this.init();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  type="text/scss" lang="scss" scoped>
  .dz_li {
    background-color: #fff;
    margin: 0.5rem 0 0;
  }
  .li_dz_tle {
    background-color: #f8f8f8;
    border: 1px solid #d2d2d2;
    border-right: 0px none;
    border-left: 0px none;
    span{
      float: right;
      .iconfont{
        margin-right: 0;
      }
    }
    .iconfont{
      font-size: 0.7rem;
      margin-right: 0.2rem;
      margin-top: -0.02rem;
      float: left;
    }
  }

  .li_dz_tle p, .li_dz_ctn {
    width: 94%;
    margin: 0 auto;
    padding: 0.25rem 0;
    font-size: 0.5rem;
    text-align: left;

  }

  .li_dz_ctn {
    color: #828586;
    img{
      width: 100%;
    }

  }
</style>

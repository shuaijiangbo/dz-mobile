<template>
  <div class="">
    <headnav title="职位详情"></headnav>
    <div class="wrapper">
      <!--top-->
      <!--content-->
      <div class="content">
        <div class="ctnBox_u01">
          <h2 class="bold">大数据开发工程师</h2>
          <p class="tabList_ctnu04_text">
            本科以上  |  3-4年经验   |  招1人
          </p>
          <h2 class="text_yellow" >月薪：1.2-1.5W  <span class="float_right ctnBox_u01_text">
    2018-12-11
        </span>
          </h2>
        </div>

        <div class="ctnBox_u02">
          <div class="cn_u02">
            <h2 class="ctnBox_u02_title">
              <span class="float_left ctnBoxu02_title_picu01"><img :src=icon_stitlepicu01 /></span>岗位职责
            </h2>
            <p>1、负责业务数据收集整理，对多种数据源进行深度诊断性组合分析、挖掘、深度分析和建模，对相关数据进行深度挖掘分析。</p>
            <p>2、对公司业务的运营进行评估和建议，从数据的角度推动公司运营决策、产品方向和运营。</p>
            <p>3、深入理解业务，发现业务特征潜在机会，给出有效的行动建议。</p>
          </div>
          <div class="cn_u02">
            <h2 class="ctnBox_u02_title">
              <span class="float_left ctnBoxu02_title_picu01"><img :src=icon_stitlepicu01 /></span>任职要求
            </h2>
            <p>1. 精通ORACLE及MYSQL数据库，有扎实的数据库基础；</p>
            <p>2. 精通Hadoop，Mapreduce，Hbase，Yarn，Spark等技术并有3年以上的开发经验；</p>
            <p>3. 精通impala和Hive的SQL性能优化；</p>
          </div>
        </div>
      </div>
      <!--content end-->
      <div class="ctnBoxu03">
        <a class="btn">立即申请</a>
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
      icon_stitlepicu01:require('@/assets/imgs/icon_stitlepicu01.png'),
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
      this.$router.push({path:'projectDetail',query:{'tabIndex':newsId,'lists':this.$route.query.lists}});
      this.init();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >


  h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: 500;
  }

  q:before, q:after {
    content: '';
  }

  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sup {
    top: -.5em;
  }

  sub {
    bottom: -.25em;
  }

  a:hover {
    text-decoration: underline;
  }

  ins, a {
    text-decoration: none;
  }
  .clear {
    clear:both;
  }
  .wrapper {
    min-height: 100%;
    height: auto !important;
    height: 100%;
    position: relative;
  }

  /*guanyu*/
  .top_u02 {
    /*background-image: url(../images/top_backgroundpicu01.png);*/
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    height: 1.4rem;
    text-align: center;
    position: relative;
  }

  .top_u02 h2 {
    color: #fff;
    line-height: 1.4rem;
    font-weight: bold;
    font-size: 0.6rem;
  }

  .float_left {
    float: left;
  }
  .content {
    padding: 0 0 1.9rem;
    text-align: left;
  }
  .li_dz_tle p .icon {
    margin-right: 0.2rem;
    float: left;
    margin-top: -0.02rem;
  }

  img {
    width: 100%;
  }

  .top-left {
    width: 0.3rem;
    margin: 0.42rem 0 0 0.3rem;
  }

  .float_right {
    float: right;
  }

  .top-right {
    width: 0.5rem;
    margin: 0.45rem 0.3rem 0 0;
  }

  .backgroundColor {
    background-color: #ebebec;
  }

  .tabList_ctnu04{margin:  4% 0;}
  .tabList_ctnu04 ul .tabList_ctnu04_clear{clear:both;width:92%;padding: 3% 4%;overflow:hidden;background-color:#fff;-moz-box-shadow: 0px 2px 4px #dddddd; /* 老的 Firefox */box-shadow: 0px 2px 4px #dddddd;margin-bottom: 4%;}
  .tabList_ctnu04 ul li h2{margin-bottom:0.1rem;font-size:0.4rem;}
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
  .tabClick li.active{color: #fff;transition: 0.1s;background-color:  #078dff;}
  .tabCon{overflow: hidden;}
  .tabBox{ position: relative}
  .tabList{word-break: break-all;width:100%;float:left;text-align:center;font-size:36px;font-family: "Arial Black";}
  .lineBorder{}
  .lineDiv{}
  .ctnBox_u01 h2 {
    font-weight: bold;
  }
  .ctnBox_u01_text {
    font-size:0.3rem;
    color:#989898;
    margin-top: 0.15rem;
  }
  .ctnBox_u02 {
    width: 90%;
    margin: 5% auto 4%;
    overflow:  hidden;
  }
  .ctnBox_u01 {width: 86%;margin: 4% auto;-moz-box-shadow: 0px 2px 4px #dddddd; /* 老的 Firefox */box-shadow: 0px 2px 4px #dddddd;padding: 3%;line-height: 0.6rem;}
  .ctnBoxu02_title_picu01 {width: 0.67rem;margin-right:0.15rem;}
  .ctnBox_u02_title {
    font-weight:bold;
    margin: 0 0 0.15rem;
  }
  .ctnBox_u02 p{
    color:#9f9f9f;
    font-size: 0.35rem;
    line-height: 0.5rem;
  }
  .cn_u02 {overflow:hidden;margin: 0 0 0.4rem;}
  .ctnBoxu03{position:absolute;bottom: 0.3rem;left:0.3rem;right:0.3rem;}
  .ctnBoxu03 .btn {
    display: block;
    font-size: 0.45rem;
    background-color: #1a8afa;
    color: #fff;
    text-align: center;
    line-height: 1rem;
    border-radius: 0.1rem;
  }
  /*guanyu end*/
</style>

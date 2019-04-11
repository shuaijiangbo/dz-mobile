<template>
  <header class="hello">
    <van-nav-bar :title=title :style="{backgroundImage:'url('+topBack+')'}" left-arrow @click-left="$router.back(-1)">
      <van-icon name="wap-nav" :style="{color:'#fff',fontSize:'30px'}" slot="right" @click="show=true"/>
    </van-nav-bar>
    <van-popup :style="{backgroundColor:'#0e1730'}" v-model="show" position="right" :overlay="true">
      <ul>
        <li v-for="(item,index) in items" @click="jumper(index)">
          {{item.name}}
        </li>
      </ul>
    </van-popup>
  </header>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: ['title'],
    data() {
      return {
        topBack: require('@/assets/imgs/top_backgroundpicu02.png'),
        logo: require('@/assets/imgs/logo.png'),
        show: false,
        items: [
          {
            name: '首页',
          },
          {
            name: '智慧城市解决方案',
          }, {
            name: '行业解决方案',
          }, {
            name: '其他解决方案',
          }, {
            name: '智能技术',
          }, {
            name: '服务内容',
          }, {
            name: '基础平台产品',
          }, {
            name: 'HOTi',
          }, {
            name: '关于我们',
          }]
      }
    },
    methods: {
      jumper(index) {
        if (index == 0) {
          this.$router.push({path: '/'})
        } else if (index == 8) {
          this.$router.push({path: 'aboutUs'})
        } else {
          this.$router.push({path: 'firstItems', query: {'typeNumber': (index - 1)}});
          this.$emit('init');
        }
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/scss" lang="scss" scoped>

  .logo{
    width: 4rem;
    vertical-align: middle;
  }
  .van-nav-bar{
    z-index: 1;
    background-size: 100% 100%;
    background-position: center center;
    height: 1.4rem;
    line-height: 1.4rem;
  }

  .van-popup{
    background: #0e1730;
  }
  .van-popup li{
    color: #fff;
    font-size: 18px;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #273868;
  }
  .van-popup--right{
    width: 70%;
    height: 100%;
  }
  .van-nav-bar .van-icon,.van-nav-bar__text{
    color: #fff;
  }
  .van-nav-bar__title{
    color: #fff;
    font-size: 20px;
    font-weight: 700;
  }
  .van-nav-bar{
    z-index: 1;
    background-size: 100% 100%;
    background-position: center center;
    height: 1.4rem;
    line-height: 1.4rem;

  }

  .van-popup--right{
    width: 70%;
    height: 100%;
  }
</style>


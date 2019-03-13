<template>
  <header class="hello">
    <van-nav-bar  left-arrow :style="{backgroundImage:'url('+topBack+')'}">
      <img :src=logo class="logo"  slot="left" />
      <van-icon name="wap-nav" :style="{color:'#fff',fontSize:'30px'}" slot="right" @click="show=true"/>
    </van-nav-bar>
    <van-popup v-model="show" position="right" :overlay="true">
      <ul>
          <li v-for="(item,index) in items" @click="jumper(index+1)">
              {{item.name}}
          </li>
      </ul>
    </van-popup>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      topBack: require('@/assets/imgs/top_backgroundpicu02.png'),
      logo: require('@/assets/imgs/logo.png'),
      show: false,
      items:[
        {
          name:'智慧城市解决方案',
        },{
          name:'行业解决方案',
        },{
          name:'其他解决方案',
        },{
          name:'智能技术',
        },{
          name:'服务内容',
        },{
          name:'基础平台产品',
        },{
          name:'HOTi',
        },{
          name:'关于我们',
        }]
    }
  },
  methods:{
      jumper(index) {
     if (index == 0) {
          this.$router.push({path: '/'})
        } else if (index == 8) {
          this.$router.push({path: 'aboutUs'})
        } else {
          this.$router.push({path: 'firstItems', query: {'typeNumber': (index - 1)}})
        }
      },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/scss" lang="scss" scoped>
  .van-popup--right{
    width: 70%;
    height: 100%;
  }
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
/*  .van-nav-bar{
    background: orangered;
  }*/
  .van-popup{
    background: #0e1730;
    li{
      color: #fff;
      font-size: 18px;
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #273868;
    }
  }
</style>

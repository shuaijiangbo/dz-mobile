<template>
  <div>
    <header class="hello">
      <van-nav-bar
        :style="{ backgroundImage: 'url('+ headerBg +')'}"
      >
        <div slot="left">
          <img :src="logo" class="logo" alt="">
        </div>
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </header>
  </div>
</template>

<script>
  import url from '@/api/serviceAPI.config.js'
  import {get, post} from '@/api/fetch.js';
export default {
  name: 'HelloWorld',
  data () {
    return {
      logo:require('@/assets/images/logo.png'),
      headerBg:require('@/assets/images/top_backgroundpicu02.png'),
      data:[]
    }
  },
  methods:{
    toRegister(){
      post(url.userindex,{name:123424}).then(res=>{
        this.data=res.data;
      })

      get(url.homeindex).then(res=>{
        console.log(res);
      })

      post(url.userregister).then(res=>{
        console.log(res);
      })
      get(url.homeregister).then(res=>{
        console.log(res);
      })

     /* post(url.loginStatus).then(res => {

      });
      get(url.eventfilelist,{id:5544}).then(res=>{
        this.noticeList=res.data;
      })*/
    }

  },
  created(){
      this.toRegister();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo{
    width: 4rem;
    vertical-align: middle;
  }
</style>

<template>
  <div class="conten-box">
    <headnav :title="perjectName"></headnav>
    <div class="contenter">
      <img :src="require('@/assets/imgs/itemlist/'+this.projectDetail.detailPic+'.jpg')"  alt="">
    </div>
    <footers></footers>
  </div>

</template>

<script>
  import headnav from '@/components/common/header1'
  import footers from '@/components/common/footer'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    headnav,
    footers
  },
  created(){
    this.init();
  },
  methods:{
    init(){
      this.newsId= this.$route.query.tabIndex;
      this.lists=JSON.parse(this.$route.query.lists);

      this.projectDetail=this.lists[this.newsId-1];
      this.perjectName=this.projectDetail.name;
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
  .contenter{
    min-height: 550px;
  }
  img{
    width: 100%;
  }
</style>

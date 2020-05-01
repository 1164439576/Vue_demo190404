<template>
  <body>
    <el-container class="container">
      <div>
        <Navigation></Navigation>
      </div>
      <el-container>
        <!--中间主体-->
        <el-main>
          <HaoWuList :codeone="codeone" :codetwo="codetwo" ></HaoWuList>
        </el-main>
        <!--右侧边栏-->
        <el-aside width="400px">
          <Recommond></Recommond>
        </el-aside>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </body>
</template>

<script>
  import Navigation from '../components/common/Navigation'
  import Classification from "../components/common/Classification"
  import Infinitelist from "../components/common/Infinite-list"
  import Recommond from "../components/common/Recommond"
  import HaoWuList from "../components/common/HaoWuList"
  export default {
    name: "YouXuanHaoWuPage",

    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',

        codeone:'0',
        codetwo:'0'

      };
    },


    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },

    beforeCreate(){

      this.codeone=this.$route.query.codeone;
      this.codetwo=this.$route.query.codetwo;

    },

    components: {
      Navigation,
      Classification,
      Infinitelist,
      Recommond,
      HaoWuList
    }


  }
</script>

<style scoped>

  .title{
    color: brown;
    font-family: 华文中宋;
    font-size: xx-large;
    text-align: left;
    float: left;
  }
  .search{
    width: 40%;
    float: left;
    padding: 8px;
    position: relative;
    left: 10%;

  }
  .search-button{
    float: left;
    padding: 12px;
    margin: 8px;
    position: relative;
    left: 9%;
  }
  .dropdown{
    margin: 8px;
    float: right;
  }
  .username-button{
    background-color: transparent;
    border-color: transparent;

  }

  /*轮播图*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }




  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }



  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    color: #333;
    text-align: center;
    line-height: 0px;
  }

  .el-aside {
    /*background-color: #D3DCE6;*/
    color: #333;
    text-align: center;
    line-height: 50px;
  }


  /*main列表*/
  .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    text-align: center;
    line-height: 150px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .container{
    margin-left: 15%;
    width: 1600px;
  }

  body{
    background-image: url("../assets/picture/background.png");
    position: relative;
    top: -60px;
  }
</style>



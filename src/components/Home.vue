<template>
  <body>
  <el-container class="container">
    <div class="titleDiv">
      <navigation class="navigation"></navigation>
    </div>

    <el-container>
      <el-aside  width="230px">
        <Classification></Classification>
      </el-aside>
      <!--中间主体-->
      <el-main>
        <el-carousel :interval="5000" arrow="always"  height="400px"  >
          <el-carousel-item v-for="item in 4" :key="item">
            <!--<h3>{{ item }}</h3>-->
            <img src="../assets/background.jpeg" width="100%"  height="400px"/>

          </el-carousel-item>
        </el-carousel>
        <h2 class="h2Title">— 热帖展示 —</h2>
        <Infinitelist></Infinitelist>
      </el-main>
      <!--右侧边栏-->
      <el-aside class="rightAside" width="400px">
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
  export default {
      name: "Home",

      data() {
        return {
          input: '',
          activeIndex: '1',
          activeIndex2: '1',
          pros:null,
          uName:this.$store.getters.getUser.uName,
          islogin: this.$store.getters.getUser==null?false:true,
        };
      },
      methods: {

        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        gotoReleasePost(){
          this.$router.push({path:'/ReleasePost'})
        },
        gotoSearchPage(){
          this.$router.push({path:'/SearchPage'})
        },
        gotoPersonalCenter(){
          this.$router.push({path:'/personalCenter'})
        }
      },
      components: {
        Classification,
        Infinitelist,
        Recommond,
        Navigation
    }


    }
</script>

<style scoped>

  .h2Title{
    line-height: 20px;
    font-size: xx-large;
  }

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
    /*margin-left: 15px;*/
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }



  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 0px;
  }


  el-aside {
    /*background-image: url("/static/picture/4.png");*/
    text-align: center;
    line-height: 50px;
  }


  /*main列表*/
  .el-main {
    /*background-image: url("/static/picture/background3.png");*/
    /*background-color: #E9EEF3;*/
    color: #333;
    text-align: center;
    line-height: 150px;
  }

  body > .el-container {
    /*margin-bottom: 40px;*/
    position: relative;
    /*top: -60px;*/
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }



  .titleDiv{
    height: 150px;
  }

  .container{
    margin-left: 15%;
    width: 1600px;
  }
  body{
    /*background-image: url("/static/picture/background.png");*/
    background-image: url("../assets/picture/background.png");
    position: relative;
    top: -60px;
  }

</style>

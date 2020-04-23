<template>
  <body>

  <el-container class="container">
    <div class="titleDiv">
      <navigation></navigation>
    </div>

    <el-container class="body">
      <!--中间主体-->
      <el-main class="main">
        <div>
          <h2>搜索结果</h2>
        </div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="相关帖子" name="first">
            <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">

              <li>
                <div class="div3-1">
                  <img :src="src1" class="img1" @click="gotoDetailsPage()"/>
                </div>
                <div class="div3-2">
                  <h2 class="title">
                    Wyeth 惠氏 蓝钻启赋 幼儿配方奶粉 3段 900g    &nbsp;&nbsp;&nbsp; 价格：238.83包邮
                  </h2>
                  <div class="author">
                    <div class="demo-type">
                      <el-avatar :size="60" src="https://empty" @error="errorHandler">
                        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
                      </el-avatar>
                    </div>
                    <span class="author-name"> sss </span>
                  </div>
                  <div class="time">
                    2020年4月17日23:55:39 &nbsp;&nbsp;&nbsp;
                    <i class="el-icon-thumb"> 点赞数:99</i> &nbsp;&nbsp;&nbsp;
                    <i class="el-icon-star-off">收藏数:899</i>
                    <el-button class="link" type="primary" @click="gotoDetailsPage()">查看详情</el-button>
                  </div>
                </div>
              </li>
              <li>
                <div class="div3-1">
                  <img :src="src" class="img1" @click="gotoDetailsPage()"/>
                </div>
                <div class="div3-2">
                  <h2 class="title">
                    考拉海购黑卡会员：TISSOT 天梭 魅时系列 T109.407.16.031.00 男士机械腕表&nbsp;&nbsp;&nbsp; 价格：238.83包邮
                  </h2>
                  <div class="author">
                    <div class="demo-type">
                      <el-avatar :size="60" src="https://empty" >
                        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
                      </el-avatar>
                    </div>
                    <span class="author-name"> sss </span>
                  </div>
                  <div class="time">
                    2020年4月17日23:55:39 &nbsp;&nbsp;&nbsp;
                    <i class="el-icon-thumb"> 点赞数:99</i> &nbsp;&nbsp;&nbsp;
                    <i class="el-icon-star-off">收藏数:899</i>
                    <el-button class="link" type="primary" @click="gotoDetailsPage()">查看详情</el-button>
                  </div>
                </div>
              </li>
            </ul>


          </el-tab-pane>
          <el-tab-pane label="相关用户" name="second">相关用户</el-tab-pane>
        </el-tabs>




      </el-main>
      <!--右侧边栏-->
      <el-aside width="350px">
        <Recommond></Recommond>
      </el-aside>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>

  </body>
</template>

<script>
  import Navigation from '../components/common/Navigation'
  import Recommond from "../components/common/Recommond"
    export default {
      name: "SearchPage",
      data() {
        return {
          activeName: 'first',
          src: 'http://39.106.120.220/group1/M00/00/00/J2p43F6dGxSAZtLVAAEI4WlUlsY434.jpg',
          src1: "http://39.106.120.220/group1/M00/00/00/J2p43F6dGtmAfNHcAAEuSIdYPUs740.jpg"
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        gotoDetailsPage(){

          this.$router.push({path:'/DetailsPage'})
        }
      },
      components: {
        Navigation,
        Recommond
      }
    }
</script>

<style scoped>
  .img1{
    top: 50px;
    float: left;
    width: 300px;
    height: 200px;
  }
  .div3-1{
    width: 300px;
    padding: 20px;
    /*float: left;*/
    text-align: left;
  }

  .link{
    position: relative;
  }

  .time{
    text-align: left;
    line-height: 20px;
    font-size: 18px;
    height: 50px;
  }

  .author-name{
    width: 60%;
    float: left;
    position: relative;
    left: 20px;
    top: 28px;
    font-size: 30px;
  }

  .demo-type{
    width: 50px;
    float: left;
  }

  .author{
    height: 70px;
    text-align: left;
    line-height: 20px;
    font-size: 30px;
  }

  .div3-2{
    width: 60%;
    height: 200px;
    float: left;
    text-align: left;
    position: relative;
    left: 5%;
    top: -30px;
  }

  .div3-2>h2{
    height: 26%;
    line-height: 1.15;
  }
  ul li{
    list-style-type:none;
    background-color: #F0F0F0;
    height: 250px;
    border: #CCC 2px solid;
  }

  .main{
    width: 80%;
  }
  .container{
    margin-left: 10%;
    width: 1600px;
  }
  body{
    background-image: url("../assets/picture/background.png");
    position: relative;
    top: -60px;
  }

</style>

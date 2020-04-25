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
          <MyPostsList></MyPostsList>

          </el-tab-pane>
          <el-tab-pane label="相关用户" name="second">
            <UserListFans></UserListFans>
          </el-tab-pane>
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
  import UserListFans from "../components/common/UserListFans"
  import Infinitelist from "../components/common/Infinite-list"
  import MyPostsList from "../components/common/MyPostsList"

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
        Recommond,
        UserListFans,
        Infinitelist,
        MyPostsList
      }
    }
</script>

<style scoped>
  Infinitelist{
    position: relative;
    top: 50px;
  }
  .img1{
    top: 50px;
    float: left;
    width: 250px;
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
    background-image: url("../assets/picture/background10.png");
    width: 1000px;
    margin-top: 5px;
  }


  .main{
    width: 80%;
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

<template>
  <el-container class="container">
    <div class="header1">
      <div class="logoDiv" @click="gotoHome()">
        <div class="logoDiv1"><img src="/static/picture/logo.png"/></div>
        <div class="logoDiv2"><img src="/static/picture/yzsh.png"/></div>
        <div class="logoDiv3"><img src="/static/picture/sqpt.png"/></div>
      </div>
      <!--<h1 class="title">益众生活社区平台</h1>-->
      <div class="searchDiv">
        <el-input
          class="search"
          placeholder="请输入内容"
          v-model="input"
          clearable>
        </el-input>
        <el-button type="primary" icon="el-icon-search" class='search-button' @click="gotoSearchPage()"><strong>搜索</strong></el-button>
      </div>
    </div>
    <el-header>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1"  @click="gotoHome()">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">浏览帖子</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" @click="gotoReleasePost()">发布帖子</el-menu-item>

        <el-dropdown v-if="islogin" class="dropdown">
          <el-button type="primary" class="username-button" @click="gotoPersonalCenter()">
            欢迎你，{{uName}}<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item ><span @click="gotoPersonalCenter()">个人中心</span></el-dropdown-item>
            <el-dropdown-item><span @click="gotoMyPostsList()">我的帖子</span></el-dropdown-item>
            <el-dropdown-item><span @click="gotoMyFavoriteList()">我的收藏</span></el-dropdown-item>
            <el-dropdown-item><span @click="gotoCommentList()">我的评论</span></el-dropdown-item>
            <el-dropdown-item><span @click="gotoUserListConcerns()">我的关注</span></el-dropdown-item>
            <el-dropdown-item><span @click="gotoUserListFans()">我的粉丝</span></el-dropdown-item>
            <el-dropdown-item><span @click="gotosettingPage()">账户设置</span></el-dropdown-item>
            <el-dropdown-item><span @click="gotoLogin()">退出登录</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu>

    </el-header>

  </el-container>
</template>

<script>

    export default {
      name: "Navigation",

      data() {
        return {
          input: '',
          activeIndex: '1',
          activeIndex2: '1',
          uName:this.$store.getters.getUser.uName,
          islogin: this.$store.getters.getUser==null?false:true,
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        gotoPersonalCenter(){
          this.$router.push({path:'/personalCenter'})
        },
        gotoSearchPage(){
          this.$router.push({path:'/SearchPage'})
        },
        gotoHome(){
          this.$router.push({path:'/Home'})
        },
        gotoReleasePost(){
          this.$router.push({path:'/releasePost'})
        },
        gotoLogin(){
          this.$router.push({path:'/logout'})
        },
        gotoMyPostsList(){
          this.$router.push({path:'/personalCenter/MyPostsList'})
        },
        gotoMyFavoriteList(){
          this.$router.push({path:'/personalCenter/MyFavoriteList'})
        },
        gotoCommentList(){
          this.$router.push({path:'/personalCenter/CommentList'})
        },
        gotoUserListConcerns(){
          this.$router.push({path:'/personalCenter/UserListConcerns'})
        },
        gotoUserListFans(){
          this.$router.push({path:'/personalCenter/UserListFans'})
        },
        gotosettingPage(){
          this.$router.push({path:'/settingPage'})
        },

      }

    }
</script>

<style scoped>
  .logoDiv1{
    float: left;
    position: relative;
    left: -50px;
  }
  .logoDiv2{
    float: left;
    position: relative;
    left: -50px;
    bottom: 10px;
  }
  .logoDiv3{
    float: left;
    position: relative;
    left: -74px;
    bottom: 10px;
  }


  .logoDiv{
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
  }
  .search-button{
    float: left;
    padding: 12px;
    margin: 8px;
    position: relative;
    background-color: transparent;
    color: crimson;
    border-color: crimson;
  }
  .searchDiv{
    position: relative;
    top: 24px;
  }
  .dropdown{
    margin: 8px;
    float: right;
  }
  .username-button{
    background-color: transparent;
    border-color: transparent;

  }



  .el-carousel__item h3 {
    background-image: url("/static/picture/background.png");

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
    background-image: url("/static/picture/background.png");
    /*background-color: #B3C0D1;*/
    color: #333;
    text-align: center;
    line-height: 0px;
  }


  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 50px;
  }


  /*main列表*/
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 150px;
  }
  .el-menu-demo{
    width: 1600px;
    position: relative;
    left: -20px;
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
  .header1{
    height: 90px;
  }
  .container{
    height: 150px;
    position: relative;

    left: -238px;
  }



</style>

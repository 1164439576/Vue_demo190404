<template>
  <body>
    <el-container class="container">
      <div class="titleDiv">
        <navigation></navigation>
      </div>

      <el-container class="body">

        <!--中间主体-->
        <el-main class="pageHeader">
          <el-page-header @back="goBack" content="个人中心"> </el-page-header>
          <el-divider></el-divider>
          <div class="div3">
            <div class="div3-1">
             <!-- <div class="demo-basic&#45;&#45;circle">
                <div class="img1"><el-avatar :size="150" :src="circleUrl"></el-avatar></div>
              </div>-->
              <el-upload
                class="avatar-uploader"
                action="http://39.106.120.220:8081/upload2/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                <span>点击上图上传头像</span>
              </el-upload>

            </div>
            <div class="div3-2">
              <div class="div3-2-1">
                <h2 class="title">
                  用户1231231
                </h2 >
                <div class="title-setting">
                  <div><i class="el-icon-present"></i>   <el-button type="info" plain @click="gotoGiftPage()">积分兑换</el-button></div>
                  <div><i class="el-icon-setting"></i>   <el-button type="info" plain @click="gotoSettingPage()">账户设置</el-button></div>
                </div>

              </div>
              <div class="div3-2-2">
                <div class="div3-2-2-1">
                  <h3>2000</h3>
                  <span>经验</span>
                </div>
                <div class="div3-2-2-1">
                  <h3>20</h3>
                  <span>金币</span>
                </div>
                <div class="div3-2-2-1">
                  <h3>20</h3>
                  <span>关注</span>
                </div>
                <div class="div3-2-2-1">
                  <h3>20</h3>
                  <span>粉丝</span>
                </div>
              </div>
              <div class="profile">
               <span>
                 您还没有个人简介呢，去设置吧
               </span>
              </div>
            </div>
          </div>
          <el-divider ></el-divider>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick(activeName)">
            <el-tab-pane label="我的帖子" name="first" ><h2>我的帖子</h2></el-tab-pane>
            <el-tab-pane label="我的收藏" name="second" ><h2>我的收藏</h2></el-tab-pane>
            <el-tab-pane label="我的评论" name="third" ><h2>我的评论</h2></el-tab-pane>
            <el-tab-pane label="我的关注" name="fourth" ><h2>我的关注</h2></el-tab-pane>
            <el-tab-pane label="我的粉丝" name="fifth" ><h2>我的粉丝</h2></el-tab-pane>
          </el-tabs>

          <div class="listDiv">
            <router-view></router-view>
          </div>

        </el-main>
        <!--右侧边栏-->
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
  import Recommond from "../components/common/Recommond"
  import Infinitelist from "../components/common/Infinite-list"
  import MyPostsList from "../components/common/MyPostsList"
  import MyFavoriteList from "../components/common/MyFavoriteList"
  import CommentList from "../components/common/CommentList"
  import UserListConcerns from "./common/UserListConcerns"
  import UserListFans from "./common/UserListFans"


    export default {
        name: "PersonalCenter",
        data() {
          return {
            imageUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            circleUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            activeName: 'first'
          }
        },
        methods: {
          handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
          },
          beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
              this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
              this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
          },
          goBack() {
            history.back();
            console.log('go back');
          },
          handleClick(activename) {
            if(activename=="first"){
              this.$router.push({path:'/personalCenter/MyPostsList'})
            }else if(activename=="second"){
              this.$router.push({path:'/personalCenter/MyFavoriteList'})
            }
            else if(activename=="third"){
              this.$router.push({path:'/personalCenter/CommentList'})
            }
            else if(activename=="fourth"){
              this.$router.push({path:'/personalCenter/UserListConcerns'})
            }else if(activename=="fifth"){
              this.$router.push({path:'/personalCenter/UserListFans'})
            }else{
              error()
            }
          },
          gotoSettingPage(){
            this.$router.push({path:'/settingPage'})
          },
          gotoGiftPage(){
            this.$router.push({path:'/giftPage'})
          },
          tip(){
            this.$message('这是一条消息提示');
          },
          success() {
            this.$message({
              message: '恭喜你，这是一条成功消息',
              type: 'success'
            });
          },

          warning() {
            this.$message({
              message: '警告哦，这是一条警告消息',
              type: 'warning'
            });
          },

          error() {
            this.$message.error('页码错误哦~');
          }


        },
      components: {
        Navigation,
        Recommond,
        Infinitelist,
        MyPostsList,
        MyFavoriteList,
        CommentList,
        UserListConcerns,
        UserListFans
      }
    }

</script>

<style scoped>
  .listDiv{
    width: 100%;
  }

  .profile{
    height: 60px;
    margin-top: 20px;
    padding: 5px;
    /*border-style: solid; border-width: 1px;*/
  }
  .div3-2-2-1>h3{
    color: crimson;
    margin: 5px;
  }
  .div3-2-2-1{
    line-height: 20px;
    display: inline-block;
    margin-right: 25px;
    font-size: x-large;
    text-align: center;
  }

  .title-setting>div{
    display: block;
    float: left;
    margin-right: 20px;
  }
  .title-setting{
    /*width:300px;*/
    float: left;
    /*display: inline-block;*/
  }
  .title{
    width: 250px;
    float: left;
  }
  .div3-2-2{
    margin-left: 0px;
    display: inline-block;
    position: relative;
    left: -258px;
  }

  .div3-2-1{
    height: 60px;
  }



  /*上传图像*/
  .avatar-uploader .el-upload {
    border: 1px dashed darkorange;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;

  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .avatar-uploader{
    top: 50px;
    float: left;
    width: 250px;
    height: 200px;
  }
  .div3-1{
    width: 250px;

    padding: 20px;
    /*float: left;*/
    text-align: left;
  }
  .div3{
    height: 250px;
    background-color: #d0d0d0;
    background-image: url("../assets/picture/background5.png");
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
    display: block;
  }

  .div3-2{
    width: 60%;
    height: 200px;
    float: left;
    text-align: left;
    position: relative;
    top: -30px;
  }

  .div3-2>h2{
    height: 26%;
    line-height: 1.15;
  }
  ul li{
    list-style-type:none;
    background-color: #FFB5B5;
    height: 250px;
    border: #CCC 2px solid;
    position: relative;
    left: -25px;
  }
  ul{
    margin: 0px;
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

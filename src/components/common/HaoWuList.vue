<template>
    <div  id="div0">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>类别1</el-breadcrumb-item>
        <el-breadcrumb-item>类别2</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <h1  id="pageTitle">优选好物展示</h1>

      <div id="div1">
        <div>
          <b>
            <span>选择分类:</span>
            <el-divider direction="vertical"></el-divider>
            <span>选择分类</span>
            <el-divider direction="vertical"></el-divider>
            <span>选择分类</span>
          </b>
        </div>


      </div>
      <el-divider></el-divider>

      <div id="div2">
        <div>
          <b>
            <span>排序方式:</span>
            <el-divider direction="vertical"></el-divider>
            <span>按时间排序</span>
            <el-divider direction="vertical"></el-divider>
            <span>综合排序</span>
          </b>
        </div>



      </div>
      <el-divider></el-divider>


      <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto" >

        <li v-for="item in 10" :key="item">
          <div class="div3-1">
            <img :src="src" class="img1" @click="gotoDetailsPage()"/>
          </div>
          <div class="div3-2">
            <h2 class="title">
              dddd标题dddd标题dddd标题d
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


      </ul>
      <el-pagination
        class="fenye"
        background
        layout="prev, pager, next"
        :total="100">
      </el-pagination>



    </div>
</template>

<script>
    export default {
      name: "HaoWuList",
      data() {
        return {
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          count: 0
        }
      },
      methods:{
        gotoDetailsPage(){
          this.$router.push({path:'/DetailsPage'})
        },
        load () {
          this.count =5
        }

      }
    }
</script>

<style scoped>

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

  .div3-1{
    width: 300px;
    padding: 20px;
    /*float: left;*/
    text-align: left;
  }
  .img1{
    top: 50px;
    float: left;
    width: 300px;
    height: 200px;
  }

  
  

  #div0{
    width: 100%;
    height: auto;
    background-color: transparent;
    margin: 0;
    line-height: 1.2;
    font-family: arial,sans-serif;
    font-size: 14px;
    color: #333;
    -webkit-text-size-adjust: none;
  }

  .el-breadcrumb,.el-breadcrumb-item{
    font-size: 22px;
  }
  #pageTitle{
    font-size: 38px;
    line-height: 10px;
  }

  #div1{
    height: auto;
    background-color: #FC9D99;
    line-height: 40px;
    font-size: large;
  }

  #div1>div{
    text-align: left;
    margin-left: 10px;
    font-size: larger;
  }

  #div2{
    height: fit-content;
    line-height: 40px;
    background-color: deepskyblue;
    padding: 0px;
    font-size: large;
  }
  #div2>div{
    text-align: left;
    margin-left: 10px;
    font-size: larger;

  }
 .div3{
    width: 80%;
    height: 250px;
  }
  ul li{
    list-style-type:none;
    background-color: #FFF3EE;
    height: 250px;
    width: 90%;
    border: #CCC 2px solid;
  }
  #img1{
    width: 200px;
    height: 200px;
  }
  .el-divider{
    margin: 10px;
  }

</style>

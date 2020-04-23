<template>
  <body>
  <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto" >
    <li v-for="item in 10" :key="item">
      <div class="div3-1">
        <img :src="src" class="img1" @click="gotoDetailsPage()"/>
      </div>
      <div class="div3-2">
        <h2 class="title">
          Wyeth 惠氏 蓝钻启赋 幼儿配方奶粉 3段 900g    &nbsp;&nbsp;&nbsp; 价格：238.83包邮
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
  <el-pagination
    class="fenye"
    background
    layout="prev, pager, next"
    :total="100">
  </el-pagination>
  </body>


</template>

<script>
      export default {
        name: "Infinite-list",
        data () {
          return {
            count: 10,
            src:"http://39.106.120.220/group1/M00/00/00/J2p43F6dGxSAZtLVAAEI4WlUlsY434.jpg"
          }
        },
        methods: {
          load () {
            // this.count += 2
          },
          gotoDetailsPage(){
            this.$router.push({path:'/DetailsPage'})
          }

        }
      }

</script>

<style scoped>
  .fenye{
    line-height: 30px;
  }


  .img1{
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
    background-color: #ECFFFF;
    background-image: url("/static/picture/background8.png");
    height: 250px;
    border: #CCC 2px solid;
    position: relative;
    left: -25px;
  }
  ul{
    margin: 0px;
  }
  body{
  }

</style>

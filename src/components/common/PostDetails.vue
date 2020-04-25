<template>
    <div class="body">
      <div id="div1">
        <img :src="src" id="img1" />

      </div>

      <div id="div2">
          <h3 id="title">帖子标题帖子标题帖子标题帖子标题子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题</h3>
      </div>
      <div id="div4">
        <div class="demo-type">
          <el-avatar :size="60" src="https://empty" @error="errorHandler">
            <img src="http://39.106.120.220/group1/M00/00/00/J2p43F6bxYeAKgswAADaazaI7BY048.jpg"/>
          </el-avatar>

        </div>
        <h5 id="username">作者名称</h5>

      </div>
      <div id="div3">
        2020年4月17日23:55:39    &nbsp;&nbsp;&nbsp;
        <i class="el-icon-thumb"> 点赞数:99</i>  &nbsp;&nbsp;&nbsp;
        <i class="el-icon-star-off">收藏数:899</i>
      </div>

      <div id="text">
        <span>
                  gggggggggggggggggd都是对的的点点滴滴的点点滴滴多多多多付 gggggggggggggggggd都是对的的点点滴滴的点点滴滴多多多多付 gggggggggggggggggd都是对的的点点滴滴的点点滴滴多多多多付

        </span>

      </div>






    </div>
</template>

<script>
    export default {
      name: "PostDetails",
      data() {
        return {
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        }
      },
      methods: {
        errorHandler() {
          return true
        }
      }
    }
</script>

<style scoped>

  .body{
    background-color: dimgrey;
  }
  #div1{
    padding: 0px;
    height:300px;
  }

  #img1{
    width: 400px;
    height: 300px;
    clear: both;
  }
  
  #div2{
    padding: 0px;
    width: 80%;
    padding-left: 10%;
  }
  h3{
    line-height: 40px;
    margin: 0px;
    font-size: 26px;
    display: block;
  }
  #div4{
    line-height: 30px;
    color: darkorange;
    font-family: 华文中宋;
    font-size: 22px;
    text-align: center;
    height: 80px;
  }

  #div3{
    text-align: center;
    /*float: left;*/
    line-height: 20px;
    font-size: 20px;
    color: hotpink;
    height: auto;
    padding: 10px;
    background-color: darkcyan;
  }
  .demo-type{
    float: left;
    position: relative;
    left: 45%;
  }


  #username{

    float: left;
    position: relative;
    left: 46%;
    bottom: 10px;
  }

  #text{
    text-align: center;
    width: 80%;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    line-height: 30px;
    margin-left: 10%;
    font-size: large;

  }



</style>

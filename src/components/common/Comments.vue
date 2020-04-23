<template>
  <div class="body">
    <div class="title"> 发表评论</div>
    <div class="replyDiv">
      <el-input
        class="textarea"
        type="textarea"
        :rows="5"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
      <div class="replyButton">
        <el-button type="primary" round>发表评论</el-button>
      </div>
    </div>
    <div class="title"> 评论列表</div>
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto" >
      <li v-for="item in 10" :key="item">

        <div class="author">
          <div class="demo-type">
            <el-avatar :size="60" src="https://empty" >
              <img src="http://39.106.120.220/group1/M00/00/00/J2p43F6dGxSAZtLVAAEI4WlUlsY434.jpg"/>
            </el-avatar>
          </div>
          <div class="authorNameDiv">
            <span class="name">作者222222  </span>
            <span class="belong"> 所属文章：123123</span>
            <span class="time"> 评论时间:2020年4月21日16:24:51</span>
          </div>

        </div>
        <div class="timediv">
            <span>
              评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容
              评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容

              评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容
            </span>


        </div>

        <div class="button">
          <el-button class="link" type="info" round>查看回复</el-button>
          <!--<el-button class="link" type="danger"  round @click="RemovePost()">删除</el-button>-->
          <el-button class="link" type="success" round round @click="RemovePost()">回复评论</el-button>

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
    name: "CommentList",
    data () {
      return {
        count: 10,
        src:"http://39.106.120.220/group1/M00/00/00/J2p43F6dGxSAZtLVAAEI4WlUlsY434.jpg",
        textarea: ''
      }
    },
    methods: {
      load () {
        // this.count += 2
      },
      gotoDetailsPage(){
        this.$router.push({path:'/DetailsPage'});
      },
      RemovePost(){
        alert("已删除");
      }

    }
  }

</script>

<style scoped>

  .button{
    text-align: right;
    margin-right: 10px;
    line-height: 20px;
  }
  .fenye{
    line-height: 30px;
  }


  .link{
    position: relative;
    /*left: 80%;*/

  }
  .time{
    color: dimgrey;
  }

  .timediv{
    text-align: left;
    line-height: 30px;
    font-size: 18px;
    height: auto;
  }
  .name{
    font-size: 26px;
    color: darkcyan;
  }
  .authorNameDiv>span{
    margin-right: 50px;
  }

  .authorNameDiv{
    /*float: left;*/
    position: relative;
    left: 20px;
    top: 28px;
    font-size: 18px;

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
    background-color: #FFE6D9	;
    /*height: auto;*/
    border: #CCC 2px solid;
    position: relative;
    left: -25px;
    margin: 5px;
    padding: 10px;
    font-family: 微软雅黑;
  }
  ul{
    margin: 0px;
  }
  .replyButton{
    line-height: 50px;
    text-align: right;
    position: relative;
    padding: 10px;
    right: 50px;
  }

  .textarea{
    width: 96%;
    position: relative;
    margin-top: 8px;
  }
  .replyDiv{
    background-color: #FFF8D7;
    width: 95%;
    position: relative;
    left: 2%;
    border-style: solid ;
    border-color: #FFDC35;
  }
  .title{
    font-size: 30px;
    line-height: 50px;
  }
  .body{
  }

</style>

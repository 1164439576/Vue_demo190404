<template>
  <div>
    <h2>我的关注</h2>
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto" >
      <li v-for="item in 10" :key="item">

        <div class="author">
          <div class="demo-type">
            <el-avatar :size="60" src="https://empty" >
              <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
            </el-avatar>
          </div>
          <div class="authorNameDiv">
            <span class="name">作者222222  </span>
            <span class="belong"> 经验值：123123</span>
            <!--<span class="time"> 评论时间:2020年4月21日16:24:51</span>-->
            <div class="link">
              <el-button  type="danger"  round @click="RemovePost()">删除</el-button>
            </div>

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
    name: "UserList",
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
    float: right;
    position: relative;
    /*left: 80%;*/
    right: 50px;
    bottom: 10px;


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
    background-color:#FFF3EE	;
    /*height: auto;*/
    border: #CCC 2px solid;
    position: relative;
    left: -25px;
    margin: 5px;
    padding: 10px;
    font-family: 微软雅黑;
    margin-top: 5px;
  }
  li :hover{
    cursor: pointer;
  }
  ul{
    margin: 0px;
  }

</style>



<template>
  <body>
  <ul class="infinite-list" v-infinite-scroll="load"   v-loading="listLoading" style="overflow:auto" >
    <li v-for="(item ,i) in posts" :key="i">
      <div class="div3-1">
        <img :src="item.picurl" class="img1" @click="gotoDetailsPage()"/>
      </div>
      <div class="div3-2">
        <h2 class="title">
         {{item.titlename}}
        </h2>
        <div class="author">
          <div class="demo-type">
            <el-avatar :size="60" src="https://empty" >

              <img  v-if="item.userPicURl!=''" :src="item.userPicURl"/>
              <img  v-else="item.userPicURl==null" src="http://39.106.120.220/group1/M00/00/00/J2p43F6bxYeAKgswAADaazaI7BY048.jpg"/>
            </el-avatar>
          </div>
          <span class="author-name"> {{item.authorname}} </span>
        </div>
        <div class="time">
          <b>{{item.posttime}} &nbsp;</b>
          <i class="el-icon-thumb"> <b>点赞数:{{item.likenum}}</b></i> &nbsp; &nbsp;<i class="el-icon-thumb"> <b> 点踩数:{{item.unlikenum}}</b></i>  &nbsp; &nbsp;
          <i class="el-icon-star-off"><b>收藏数:{{item.collectnum}}</b></i>

          <el-button class="link" type="primary" @click="gotoDetailsPage()"><b>查看详情</b></el-button>
        </div>
      </div>
    </li>
  </ul>
  <!--<el-pagination
    class="fenye"
    background
    layout="prev, pager, next"
    :total="100">
  </el-pagination>-->
  <div class="paginationDiv">
    <template >
      <pagination
        class="pagination"
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="getList" />
    </template>
  </div>


  </body>


</template>

<script>
  import Pagination from './Pagination'

  export default {
        name: "Infinite-list",
        data () {
          return {
            listLoading:false,

            count: 10,
            src:"http://39.106.120.220/group1/M00/00/00/J2p43F6dGxSAZtLVAAEI4WlUlsY434.jpg",

            total: 200,
            listQuery: {
              page: 1,
              limit: 200
            },


            posts:[
              {
                authorid: 1,
                authorname: "晚风",
                beginTime: "2020年4月17日23:55:39",
                codeone: '电脑数码',
                codetwo: '手机',
                collectnum: 44,
                content: "<p>好好用啊</p>>",
                endTime: "2020年4月17日23:55:39",
                id: 0,
                ip: "string",
                likenum: 110,
                picurl: "http://39.106.120.220/group1/M00/00/00/J2p43F6qh0GAM9LmAAEuSIdYPUs432.jpg",
                posttime: "2020年4月17日23:55:39",
                titlename: "666666666",
                unlikenum: 4,
                //添加用户头像
                userPicURl:'',

              },
              {
                authorid: 1,
                authorname: "晚风",
                beginTime: "2020年4月17日23:55:39",
                codeone: '电脑数码',
                codetwo: '手机',
                collectnum: 44,
                content: "<p>好好用啊</p>>",
                endTime: "2020年4月17日23:55:39",
                id: 0,
                ip: "string",
                likenum: 110,
                picurl: "http://39.106.120.220/group1/M00/00/00/J2p43F6qh0GAM9LmAAEuSIdYPUs432.jpg",
                posttime: "2020年4月17日23:55:39",
                titlename: "666666666",
                unlikenum: 4,
                userPicURl:'',
              },

            ],



          }
        },
        methods: {
          load () {
            // this.count += 2
          },
          gotoDetailsPage(){
            this.$router.push({path:'/DetailsPage'})
          },

          getList() {
            this.listLoading = true
            //TODO 2020年4月30日19:29:26 分页获取数据  百度一下
            // 获取数据

            setTimeout(() => {
              this.listLoading = false
            }, 1000)
          },

        },
        components: { Pagination },

        created() {
          //TODO  2020年4月30日19:14:35 请完善 获取热门展示 list，获取帖子list
          var vm =this;
          /*this.axios.get('http://39.106.120.220:81/titlelist2?page=5')
            .then(function (resp) {

            if(resp.data.success){
              //再在home.vue里获取vuex对象里的user对象的内容。
              vm.$message({
                message: resp.data.message,
                type: 'success'
              });
              setTimeout(function(){
                vm.$router.push("/home");
              },2000)
            }else{
              vm.$message.error(resp.data.message);
            }

          }).catch(function (error) {
            console.log(error)
          })*/



        }

      }

</script>



<style scoped>


  .paginationDiv{
    line-height: 10px;
  }
  .fenye{
    line-height: 30px;
  }
  .link{
    position: relative;
    left: 60%;
    top: 5px;
    background-color: transparent;
    color: darkturquoise;
    border-color: palevioletred;
    font-family: 微软雅黑;
    /*background-image: url("../../assets/picture/background3.png");*/
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

  .time {
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
    background-image: url("../../assets/picture/background10.png");
    height: 250px;
    border: #CCC 2px solid;
    position: relative;
    left: -25px;
    margin-top: 5px;
  }
  ul{
    margin: 0px;
  }

  body{
  }

</style>

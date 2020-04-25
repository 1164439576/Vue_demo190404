<template>
  <body>
  <el-container class="container">
    <div class="titleDiv">
      <navigation></navigation>
    </div>

    <el-container class="body">

      <!--中间主体-->
      <el-main class="pageHeader">
        <el-page-header @back="goBack" content="礼品兑换" @> </el-page-header>
        <el-divider></el-divider>
        <div>
          <el-tabs type="border-card" class="tab">
            <el-tab-pane label="礼品列表">

              <el-row>
                <el-col :span="5" v-for="(o, index) in 20" :key="o" :offset="index > 0 ? 1 : 1" class="card">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                    <div style="padding: 14px;">
                      <span>好吃的汉堡</span>
                      <div class="bottom clearfix">

                        <!--<time class="time">{{ currentDate }}</time>-->
                        <strong><span class="price"> 需要25积分</span></strong>
                        <el-button type="text" class="button">立即兑换</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>

            </el-tab-pane>
            <el-tab-pane label="兑换记录">

              兑换记录
            </el-tab-pane>
          </el-tabs>



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
  import Recommond from '../components/common/Recommond'


  export default {
    name: "GiftPage",
    data() {

        return {
          // currentDate:  new Date().toLocaleDateString()

        }
      },
    methods: {
      /*submitForm1(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

            var vm =this;

            this.axios.put('http://39.106.120.220:81/user',{
              "uAddress": null,
              "uCreateTime": null,
              "uEmail": this.ruleForm1.uEmail,
              "uEnable": null,
              "uEx": null,
              "uGoldnum": null,
              "uHeadurl": null,
              "uId": null,
              "uName": this.ruleForm1.username,
              "uPassword":null,
              "uProfile": null,
              "uSex": null,
              "uTel": this.ruleForm.userTel,
              "uTitlenum": null,
              "uUpdateTime": null

            }).then(function (resp) {

              if(resp.data.data){
                alert('submit!');
                vm.$message({
                  message: resp.data.message,
                  type: 'success'
                });
                setTimeout(function(){
                  // vm.$router.push("/orders");
                  vm.$router.push({path:'/Login'})
                },2000)
              }else{
                vm.$message.error(resp.data.message);
              }

            }).catch(function (error) {
              console.log(error)
            })

          } else {
            console.log('error submit!!');
            this.errorTip();
            return false;
          }
        });
      },*/


      goBack() {
        console.log('go back');
        history.back();
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

    }
  }

</script>

<style scoped>
  .tab{
    background-color: transparent;
  }
  /*卡片css   开始*/


  .price{
    font-size: large;
    color: crimson;
  }

  .card{
    margin-bottom: 20px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  /*卡片css   结束*/


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





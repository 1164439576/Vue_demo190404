<template>
    <body>
      <div class="logoDiv" >
        <div class="logoDiv1"><img src="/static/picture/logo.png"/></div>
        <div class="logoDiv2"><img src="/static/picture/yzsh.png"/></div>
        <div class="logoDiv3"><img src="/static/picture/sqpt.png"/></div>
      </div>
      <el-form ref="form"  :rules="rules" :model="form" label-width="80px" class="login-box">
        <h3 class="login-title">欢迎登录</h3>
        <el-form-item label="手机号码:" prop="userTel" >
          <el-input v-model="form.userTel"></el-input>
        </el-form-item>

        <el-form-item label="密码:" prop="userPwd">
          <el-input v-model="form.userPwd"></el-input>
        </el-form-item>

        <el-form-item class="login-button">
          <el-button type="primary" @click="onSubmit('form')">登录</el-button>
          <el-button type="primary" @click="regist()">注册</el-button>
        </el-form-item>
      </el-form>
    </body>
</template>

<script>
    export default {
        name: "Login",
        data() {
          return {
            form: {
              userTel: '',
              userPwd: ''
            },
            rules:{
              userTel: [
                { required: true, message: '请输入电话', trigger: 'blur' },
                { min: 11, max: 11, message: '长度必须是11个数字', trigger: 'blur' }
              ],
              userPwd: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 6, max: 50, message: '长度在 5 到 50 个字符', trigger: 'blur' }
              ]
            }
          }
        },
        methods:{
          onSubmit(formName){
            var vm = this;
            vm.$router.push("/home");

            this.$refs[formName].validate((valid) => {
              if (valid) {
                //表单验证成功，要发送登录请求
                this.axios({
                  method: 'GET',
                  url: 'http://39.106.120.220:81/userlogin?teloremail='+vm.form.userTel+'&password='+vm.form.userPwd
                }).then(function(resp){
                  if(resp.data.result){
                    var user = resp.data.data;
                    sessionStorage.setItem("isLogin","true")
                    //往vuex里存放一个user对象
                    //先要有user对象
                    //再存到vuex里
                    vm.$store.dispatch('asyncUpdateUser', user);
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
                })

              } else {
                this.$message({
                  message: '电话号码或密码不能为空！',
                  type: 'warning'
                });
                return false;
              }
            });


          },
          regist(){
            console.log("注册")
            this.$router.push({path:'/registPage'})

          }



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
    font-size: xx-large;
    text-align: center;
    margin-left: 32%;
    /*float: left;*/
  }

  .login-box{
    width: 400px;
    margin: 150px auto;
    border: #DCDFE6 solid 1px;
    padding:30px 40px 20px 20px;
    border-radius:20px;
    box-shadow: 0px 0px 20px #DCDFE6;
    position: relative;
    top: 200px;
  }
  .login-title{
    text-align: center;
    margin-bottom:30px;
    font-size: xx-large;
  }
  .login-button{
    text-align: center;
  }
  body{
    /*background-image: url("/static/picture/background.png");*/
    position: relative;
    /*height: 100%;*/
  }
</style>

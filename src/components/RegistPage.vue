<template>
  <body>
    <div class="logoDiv" >
      <div class="logoDiv1"><img src="/static/picture/logo.png"/></div>
      <div class="logoDiv2"><img src="/static/picture/yzsh.png"/></div>
      <div class="logoDiv3"><img src="/static/picture/sqpt.png"/></div>
    </div>

    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="regist-box">
      <h3 class="regist-title">欢迎注册</h3>
      <el-form-item label="电话" prop="userTel">
        <el-input type="email" v-model="ruleForm.userTel" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="用户昵称" prop="username">
        <el-input  v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

  </body>
</template>

<script>
  import Qs from 'qs'

  export default {
      name: "RegistPage",
      data() {
        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm.pass) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        return {
          ruleForm: {
            userTel:'',
            username:'',
            pass: '',
            checkPass: '',

          },

          rules: {
            email:[
              { required: true, message: '请输入邮箱地址', trigger: 'blur' },
              { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ],
            username: [
              { required: true, message: '请输入用户昵称', trigger: 'blur' },
              { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
            ],
            userTel: [
              { required: true, message: '请输入电话', trigger: 'blur' },
              { min: 1, max: 11, message: '长度必须是11个数字', trigger: 'blur' }
            ],
            pass: [
              { required: true,validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { required: true,validator: validatePass2, trigger: 'blur' }
            ],
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {

              var vm =this;

              this.axios.post('http://39.106.120.220:81/user',{
                "uAddress": null,
                "uCreateTime": null,
                "uEmail": null,
                "uEnable": null,
                "uEx": null,
                "uGoldnum": null,
                "uHeadurl": null,
                "uId": null,
                "uName": this.ruleForm.username,
                "uPassword": this.ruleForm.pass,
                "uProfile": null,
                "uSex": null,
                "uTel": this.ruleForm.userTel,
                "uTitlenum": null,
                "uUpdateTime": null

              }).then(function (resp) {

                if(resp.data.data){
                  // alert('submit!');
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
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
          this.messageTip();
        },
        // 错误提示
        errorTip() {
          this.$notify.error({
            title: '错误',
            message: '注册失败'
          });
        },
        // 消息提示
        messageTip() {
          this.$notify.info({
            title: '消息',
            message: '注册输入框已重置'
          });
        },
        // 成功提示
        successTip() {
          this.$notify({
            title: '成功',
            message: '重置成功',
            type: 'success'
          });
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
    font-size: xx-large;
    text-align: center;
    margin-left: 32%;
    /*float: left;*/
  }
  .regist-box{
    width: 400px;
    margin: 150px auto;
    border: #DCDFE6 solid 1px;
    padding:30px 40px 20px 20px;
    border-radius:20px;
    box-shadow: 0px 0px 20px #DCDFE6;
    position: relative;
    top: 120px;
  }
  .regist-title{
    text-align: center;
    line-height: 10px;
    font-size: xx-large;
  }
  .login-button{
    text-align: center;
  }

</style>

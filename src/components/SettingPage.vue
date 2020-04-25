<template>
  <body>
  <el-container class="container">
    <div class="titleDiv">
      <navigation></navigation>
    </div>

    <el-container class="body">

      <!--中间主体-->
      <el-main class="pageHeader">
        <el-page-header @back="goBack" content="个人设置" @> </el-page-header>
        <el-divider></el-divider>
        <div >
          <el-tabs :tab-position="tabPosition" >
            <el-tab-pane label="个人信息">

              <el-form :model="ruleForm1" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="regist-box">
                <el-form-item label="电话" prop="userTel">
                  <el-input type="email" v-model="ruleForm1.userTel" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="uEmail">
                  <el-input  v-model="ruleForm1.uEmail" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户昵称" prop="username">
                  <el-input  v-model="ruleForm1.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="address">
                  <el-input  v-model="ruleForm1.uAddress" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="uSex">
                  <el-select v-model="ruleForm1.uSex" placeholder="请选择性别">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="个人介绍" prop="profile">
                  <el-input type="textarea" v-model="ruleForm1.uProfile"></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="submitForm1('ruleForm1')">提交</el-button>

                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="登录密码">

              <el-form :model="ruleForm2" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="regist-box">

                <el-form-item label="密码" prop="pass">
                  <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                  <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>

                </el-form-item>
              </el-form>

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
    name: "SetttingPage",
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
        ruleForm1: {
          userTel:'',
          username:'',
          pass: '',
          checkPass: '',
          uSex:'',
          uEmail:'',
          uAddress: '',
          uProfile: '',

        },
        ruleForm2: {
          pass: '',
          checkPass: '',
        },
        tabPosition: 'left',

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
      return {
        tabPosition: 'left'

      }    },
    methods: {
      submitForm1(formName) {
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
      },


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
  .regist-box{
    width: 500px;
    position: relative;
    left: 100px;

    
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



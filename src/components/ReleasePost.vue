<template>
  <body>
    <el-container class="container">
      <div class="titleDiv">
        <navigation></navigation>
      </div>

      <el-container class="bodyDiv">


      <!--中间主体-->
      <!--中间主体-->
      <el-main class="main">
        <el-page-header @back="goBack" content="发帖页面"  class="back"> </el-page-header>
        <el-divider></el-divider>

        <div class="div1">
        <span class="mainPicture"> 添加主图:&nbsp </span>
        <el-upload
          class="avatar-uploader"
          action="http://39.106.120.220:8081/upload2/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        </div>
        <div class="titleDiv">
          <span class="inputTitle">
            请输入标题: &nbsp;
          </span>
          <el-input
            class="input"
            placeholder="请输入内容"
            v-model="post.titlename"
            clearable>
          </el-input>
        </div>

        <div class="editor">
          <span class="editorTitle"> 输入正文:&nbsp </span>
          <Editor :mytext="text" @detailContent="text=$event"></Editor>
        </div>

        <div class="settingDiv">
          <div>
            <span class="leibieTitle">设置类别：</span>
            <div class="block">
              <span class="demonstration">设置选择帖子类别：</span>
              <el-cascader
                @change="OnClick"
                ref="myCascader"
                placeholder="帖子类别"
                :options="options"
                filterable></el-cascader>
            </div>
          </div>

          <div class="block">
            <span class="demonstration">设置活动时间范围：</span>
            <el-date-picker
              @change="OnClick2"
              v-model="date"
              type="datetimerange"
              format="yyyy-MM-dd HH:mm:ss"
              value-format="yyyy-MM-dd HH:mm:ss"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00']">
            </el-date-picker>
          </div>
          <div class="successButtonDiv">
            <el-button type="success" @click="releaseButton()">点击发布</el-button>
          </div>
        </div>
      </el-main>

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
  import Editor from '../components/common/Editor'
  import { quillEditor } from 'vue-quill-editor'
  import Recommond from "../components/common/Recommond"
    export default {
        name: "ReleasePost",
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1',
          //富文本
          text:'',
          editorOption:{},
          imageUrl: '',

          date:'',
          options: [
            {
              value: '1',
              label: '电脑数码',
              children:[
                {
                  value: '1',
                  label: '手机通讯',
                },
                {
                  value: '2',
                  label: '数码配件',
                 }
                ,
                {
                  value: '3',
                  label: '软件游戏',
                }
                ,
                {
                  value: '4',
                  label: '虚拟产品',
                }
                ,
                {
                  value: '5',
                  label: '存储设备',
                }
                ,
                {
                  value: '6',
                  label: '影音播放',
                }
                ,
                {
                  value: '7',
                  label: '电脑整机',
                }
                ,
                {
                  value: '8',
                  label: '电脑外设',
                }
                ,
                {
                  value: '9',
                  label: '网络设备',
                }
                ,
                {
                  value: '10',
                  label: '智能设备',
                }
                ,
                {
                  value: '11',
                  label: '办公仪器',
                }
                ,
                {
                  value: '12',
                  label: '文具用品',
                }
              ]
            },
            {
              value: '2',
              label: '家用电器',
              children: [
                {
                  value: '1',
                  label: '大家电',
                },
                {
                  value: '2',
                  label: '厨卫大电',
                },
                {
                  value: '3',
                  label: '生活电器',
                },
                {
                  value: '4',
                  label: '厨房小电',
                },
                {
                  value: '5',
                  label: '个护健康',
                }

              ]
            },
            {
              value: '3',
              label: '日用百货',
              children: [
                {
                  value: '1',
                  label: '宠物用品',
                },
                {
                  value: '2',
                  label: '厨房用具',
                },
                {
                  value: '3',
                  label: '生活用品',
                },
                {
                  value: '4',
                  label: '家居清洁',
                },
                {
                  value: '5',
                  label: '家装主材',
                },
                {
                  value: '6',
                  label: '五金电工',
                },
                {
                  value: '7',
                  label: '住宅家具',
                },
                {
                  value: '8',
                  label: '灯具灯饰',
                },
                {
                  value: '9',
                  label: '家纺布艺',
                },
                {
                  value: '10',
                  label: '家居饰品',
                },
                {
                  value: '11',
                  label: '园艺用品',
                },


              ]
            },
            {
              value: '4',
              label: '运动户外',
              children: [
                {
                  value: '1',
                  label: '运动服饰',
                },
                {
                  value: '2',
                  label: '户外装备',
                },
                {
                  value: '3',
                  label: '体育项目',
                },
                {
                  value: '4',
                  label: '运动器材',
                },
                {
                  value: '5',
                  label: '男装',
                },
                {
                  value: '6',
                  label: '女装',
                },
                {
                  value: '7',
                  label: '男包',
                },
                {
                  value: '8',
                  label: '女包',
                },
                {
                  value: '9',
                  label: '服装配饰',
                },
                {
                  value: '10',
                  label: '功能箱包',
                },


              ]
            },
            {
              value: '5',
              label: '个性化妆',
              children: [
                {
                  value: '1',
                  label: '彩妆产品',
                },
                {
                  value: '2',
                  label: '口腔护理',
                },
                {
                  value: '3',
                  label: '美发护发',
                },
                {
                  value: '4',
                  label: '眼睛护理',
                },
                {
                  value: '5',
                  label: '钟',
                },
                {
                  value: '6',
                  label: '手表',
                },
                {
                  value: '7',
                  label: '珠宝首饰',
                },


              ]
            },
            {
              value: '6',
              label: '母婴用品',
              children: [
                {
                  value: '1',
                  label: '奶粉',
                },
                {
                  value: '2',
                  label: '婴儿安全用品',
                },
                {
                  value: '3',
                  label: '喂养用品',
                },
                {
                  value: '4',
                  label: '童装',
                },
                {
                  value: '5',
                  label: '洗护用品',
                },
                {
                  value: '6',
                  label: '婴儿服饰',
                },
                {
                  value: '7',
                  label: '孕产妇用品',
                },
                {
                  value: '8',
                  label: '玩具',
                },
                {
                  value: '9',
                  label: '乐器',
                }


              ]
            },
            {
              value: '7',
              label: '食品生鲜',
              children: [
                {
                  value: '1',
                  label: '酒类',
                },
                {
                  value: '2',
                  label: '水饮',
                },
                {
                  value: '3',
                  label: '冲调饮品',
                },
                {
                  value: '4',
                  label: '粮油调味',
                },
                {
                  value: '5',
                  label: '生鲜食品',
                },
                {
                  value: '6',
                  label: '休闲食品',
                },
                {
                  value: '7',
                  label: '节日食品',
                }


              ]
            },
            {
              value: '8',
              label: '文化娱乐',
              children: [
                {
                  value: '1',
                  label: '礼品',
                },
                {
                  value: '2',
                  label: '音像制品',
                },
                {
                  value: '3',
                  label: '图书杂志',
                },
                {
                  value: '4',
                  label: '电子书刊',
                },
                {
                  value: '5',
                  label: '在线教育',
                },
                {
                  value: '6',
                  label: '票务',
                }

              ]
            }




          ],
          post:{
            authorid : this.$store.getters.getUser.uId,
            authorname: this.$store.getters.getUser.uName,
            beginTime: "",
            codeone: 1,
            codetwo: 1,
            collectnum: 0,
            content: "",
            endTime:'',
            id: 0,
            ip: '127.0.0.1',
            likenum: 0,
            picurl: this.imageUrl,
            titlename : this.input,
            unlikenum: 0

          }

        }; //return
      },

      methods: {
          //发布帖子
        releaseButton(){
          document.getElementById("save").click();
          this.post.content=this.text;

          var vm =this;
          // console.log(JSON.stringify(this.post));
          // console.log(JSON.stringify(this.post.picurl));
          // console.log(JSON.stringify(this.imageUrl));

          this.axios.post('http://39.106.120.220:81/title',{
            authorid : this.post.authorid,
            authorname: this.post.authorname,
            beginTime: this.post.beginTime,
            codeone: this.post.codeone,
            codetwo: this.post.codetwo,
            collectnum: this.post.collectnum,
            content:this.post.content,
            endTime:this.post.endTime,
            id: this.post.id,
            ip: this.post.ip,
            likenum: this.post.likenum,
            picurl: this.imageUrl,
            titlename: this.post.titlename,
            unlikenum: this.post.unlikenum
          }).then(function (resp) {

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
          })

        },
        //设置类别
        OnClick(item){
          // var list=new Array();
          // list= this.$refs['myCascader'].currentLabels;
          // console.log(item[0]);
          this.post.codeone=item[0];
          this.post.codetwo=item[1];

        },
        //设置时间
        OnClick2(item){
          // console.log(item[0]);
          // console.log(item[1]);
          this.post.beginTime=item[0];
          this.post.endTime=item[1];
          // this.post.
        },

        goBack() {
          console.log('go back');
          history.back();
        },
        onEditorBlur() {
          console.log("ss");
          console.log(content);

          // console.log(this.$refs["myQuillEditor"].getContents())
        },
        onEditorFocus() {//获得焦点事件
        },
        onEditorChange() {//内容改变事件

        },
        handleAvatarSuccess(res, file) {

          // this.imageUrl = URL.createObjectURL(file.raw);
          // this.imageUrl=this.imageUrl.replace('localhost','')
          this.imageUrl=res.data;
          // alert(this.imageUrl);
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        }
      },
      components: {
        Navigation,
        Editor,
        Recommond
      }
    }
</script>

<style scoped>
  .back{
    position: relative;
    left: -140px;

  }
  .successButtonDiv{
    text-align: center;
  }
  .block{
    margin: 20px;
    font-size: large;
  }
  .leibieTitle{
    font-size: x-large;
    position: relative;
    text-align: left;
  }
  .settingDiv{
    /*background-color: coral;*/
    width: 800px;
    height: auto;
    position: relative;
    top: 500px;
    text-align: left;
  }
  .editorTitle{
    font-size: x-large;
    position: relative;

  }
  .editor{
    height: 30px;
    text-align: left;
    width: 70%;
  }

  .input{
    width: 600px;
    line-height: 1.5;
    position: relative;
    top: 30px;
  }

  .inputTitle{
    font-size: x-large;
    line-height: 1.5;
    position: relative;
    top: 30px;
  }
  .titleDiv{
    height: 50px;
    text-align: left;
  }


  .mainPicture{

    font-size: x-large;
    float: left;
    top: 60px;
  }

  .div1{
    width: 300px;
  }

  .titleDiv{
    height: 100px;

  }
  .main{
    height: 1200px;
    /*background-color: whitesmoke;*/
    background-image: url("../assets/picture/background11.png");
    padding-left: 10%;

  }



  .body{
    padding: 0px;
    background-color: seashell;
    width: 100%;
    margin-top: 30px;

  }
/*添加主图*/

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;

  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .container{
    margin-left: 15%;
    width: 1600px;
  }
  .bodyDiv{
    position: relative;
    top: 50px;
  }

  body{
    background-image: url("/static/picture/background.png");
    position: relative;
    top: -60px;
  }


</style>

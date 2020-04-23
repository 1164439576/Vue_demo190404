<template>
  <body>
    <el-container class="container">
      <div class="titleDiv">
        <navigation></navigation>
      </div>

      <el-container class="bodyDiv">

      <!--中间主体-->
      <el-main class="main">

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
            v-model="input"
            clearable>
          </el-input>
        </div>

        <div class="editor">
          <span class="editorTitle"> 输入正文:&nbsp </span>
          <Editor></Editor>
        </div>

        <div class="settingDiv">
          <div>
            <span class="leibieTitle">设置类别：</span>
            <div class="block">
              <span class="demonstration">设置选择类别：</span>
              <el-cascader
                placeholder="试试搜索：指南"
                :options="options"
                filterable></el-cascader>
            </div>
          </div>

          <div class="block">
            <span class="demonstration">设置活动时间范围：</span>
            <el-date-picker
              v-model="date"
              type="datetimerange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00']">
            </el-date-picker>
          </div>
          <div class="successButtonDiv">
            <el-button type="success">点击发布</el-button>
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
          content:null,
          editorOption:{},
          imageUrl: '',
          input: '',
          date:'',
          options: [{
            value: 'zhinan',
            label: '指南',
            children: [{
              value: 'shejiyuanze',
              label: '设计原则',
              children: [{
                value: 'yizhi',
                label: '一致'
              }, {
                value: 'fankui',
                label: '反馈'
              }, {
                value: 'xiaolv',
                label: '效率'
              }, {
                value: 'kekong',
                label: '可控'
              }]
            }, {
              value: 'daohang',
              label: '导航',
              children: [{
                value: 'cexiangdaohang',
                label: '侧向导航'
              }, {
                value: 'dingbudaohang',
                label: '顶部导航'
              }]
            }]
          }, {
            value: 'zujian',
            label: '组件',
            children: [{
              value: 'basic',
              label: 'Basic',
              children: [{
                value: 'layout',
                label: 'Layout 布局'
              }, {
                value: 'color',
                label: 'Color 色彩'
              }, {
                value: 'typography',
                label: 'Typography 字体'
              }, {
                value: 'icon',
                label: 'Icon 图标'
              }, {
                value: 'button',
                label: 'Button 按钮'
              }]
            }, {
              value: 'form',
              label: 'Form',
              children: [{
                value: 'radio',
                label: 'Radio 单选框'
              }, {
                value: 'checkbox',
                label: 'Checkbox 多选框'
              }, {
                value: 'input',
                label: 'Input 输入框'
              }, {
                value: 'input-number',
                label: 'InputNumber 计数器'
              }, {
                value: 'select',
                label: 'Select 选择器'
              }, {
                value: 'cascader',
                label: 'Cascader 级联选择器'
              }, {
                value: 'switch',
                label: 'Switch 开关'
              }, {
                value: 'slider',
                label: 'Slider 滑块'
              }, {
                value: 'time-picker',
                label: 'TimePicker 时间选择器'
              }, {
                value: 'date-picker',
                label: 'DatePicker 日期选择器'
              }, {
                value: 'datetime-picker',
                label: 'DateTimePicker 日期时间选择器'
              }, {
                value: 'upload',
                label: 'Upload 上传'
              }, {
                value: 'rate',
                label: 'Rate 评分'
              }, {
                value: 'form',
                label: 'Form 表单'
              }]
            }, {
              value: 'data',
              label: 'Data',
              children: [{
                value: 'table',
                label: 'Table 表格'
              }, {
                value: 'tag',
                label: 'Tag 标签'
              }, {
                value: 'progress',
                label: 'Progress 进度条'
              }, {
                value: 'tree',
                label: 'Tree 树形控件'
              }, {
                value: 'pagination',
                label: 'Pagination 分页'
              }, {
                value: 'badge',
                label: 'Badge 标记'
              }]
            }, {
              value: 'notice',
              label: 'Notice',
              children: [{
                value: 'alert',
                label: 'Alert 警告'
              }, {
                value: 'loading',
                label: 'Loading 加载'
              }, {
                value: 'message',
                label: 'Message 消息提示'
              }, {
                value: 'message-box',
                label: 'MessageBox 弹框'
              }, {
                value: 'notification',
                label: 'Notification 通知'
              }]
            }, {
              value: 'navigation',
              label: 'Navigation',
              children: [{
                value: 'menu',
                label: 'NavMenu 导航菜单'
              }, {
                value: 'tabs',
                label: 'Tabs 标签页'
              }, {
                value: 'breadcrumb',
                label: 'Breadcrumb 面包屑'
              }, {
                value: 'dropdown',
                label: 'Dropdown 下拉菜单'
              }, {
                value: 'steps',
                label: 'Steps 步骤条'
              }]
            }, {
              value: 'others',
              label: 'Others',
              children: [{
                value: 'dialog',
                label: 'Dialog 对话框'
              }, {
                value: 'tooltip',
                label: 'Tooltip 文字提示'
              }, {
                value: 'popover',
                label: 'Popover 弹出框'
              }, {
                value: 'card',
                label: 'Card 卡片'
              }, {
                value: 'carousel',
                label: 'Carousel 走马灯'
              }, {
                value: 'collapse',
                label: 'Collapse 折叠面板'
              }]
            }]
          }, {
            value: 'ziyuan',
            label: '资源',
            children: [{
              value: 'axure',
              label: 'Axure Components'
            }, {
              value: 'sketch',
              label: 'Sketch Templates'
            }, {
              value: 'jiaohu',
              label: '组件交互文档'
            }]
          }]
        };
      },

      methods: {
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
          this.imageUrl = URL.createObjectURL(file.raw);
          alert(this.imageUrl);
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
    background-image: url("../assets/picture/background6.png");
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
    margin-left: 10%;
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

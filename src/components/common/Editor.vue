<template>
  <div>
    <!-- 图片上传组件辅助-->
    <el-upload
      class="avatar-uploader"
      :action="serverUrl"
      name="img"
      :headers="header"
      :show-file-list="false"
      :on-success="uploadSuccess"
      :on-error="uploadError"
      :before-upload="beforeUpload">
    </el-upload>
    <!--富文本编辑器组件-->
    <el-row v-loading="quillUpdateImg">
      <quill-editor
        class="editor"
        v-model="detailContent"
        ref="myQuillEditor"
        :options="editorOption"
        @change="onEditorChange($event)"
        @ready="onEditorReady($event)"
      >
      </quill-editor>
    </el-row>
    <button v-on:click="saveHtml" id='save' class="save">保存</button>
  </div>
</template>
<script>

  // 工具栏配置
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{'header': 1}, {'header': 2}],               // custom button values
    [{'list': 'ordered'}, {'list': 'bullet'}],
    [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
    [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
    [{'direction': 'rtl'}],                         // text direction

    [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
    [{'header': [1, 2, 3, 4, 5, 6, false]}],

    [{'color': []}, {'background': []}],          // dropdown with defaults from theme
    [{'font': []}],
    [{'align': []}],
    ['link'],/*, 'image', 'video'*/
    ['clean']                                         // remove formatting button
  ]
  export default {
    data() {
      return {
        serverUrl: 'http://39.106.120.220:8081/upload2/',  // 这里写你要上传的图片服务器地址
        quillUpdateImg: false, // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
        header: {token: sessionStorage.token},  // 有的图片服务器要求请求头需要有token之类的参数，写在这里
        detailContent: '', // 富文本内容
        editorOption: {

          placeholder: '',
          theme: 'snow',  // or 'bubble'
          modules: {
            toolbar: {
              container: toolbarOptions,  // 工具栏
              handlers: {
                'image': function (value) {
                  if (value) {
                    alert(1)
                    document.querySelector('.avatar-uploader input').click()
                    // document.querySelector('#quill-upload input').click()
                  } else {
                    this.quill.format('image', false);
                  }
                }
              }
            }
          }
        }  // 富文本编辑器配置
      }
    },
    methods: {
      // 上传图片前
      beforeUpload(res, file) {
        // 显示loading动画
        this.quillUpdateImg = true
      },
      // 上传图片成功
      uploadSuccess(res, file) { // res为图片服务器返回的数据
        // 获取富文本组件实例
        let quill = this.$refs.myQuillEditor.quill
        // 如果上传成功
        if (res.code === '200' && res.info !== null) {
          // 获取光标所在位置
          let length = quill.getSelection().index;
          // 插入图片  res.info为服务器返回的图片地址
          quill.insertEmbed(length, 'image', res.info)
          // 调整光标到最后
          quill.setSelection(length + 1)
        } else {
          this.$message.error('图片插入失败')
        }
        // loading动画消失
        this.quillUpdateImg = false
      },
      // 上传图片失败
      uploadError(res, file) {
        // loading动画消失
        this.quillUpdateImg = false
        this.$message.error('图片插入失败')
      },
      onEditorReady(editor) { // 准备编辑器
      },
      onEditorBlur(){}, // 失去焦点事件
      onEditorFocus(){}, // 获得焦点事件
      onEditorChange(){}, // 内容改变事件
      saveHtml:function(event){
        this.$emit('detailContent',this.detailContent);
        // alert(this.detailContent);
      }
    }
  }
</script>
<style scoped>
  .editor{
    height: 400px;
  }
  .save{
    visibility: hidden;
    top: 100px;
  }

</style>


<!--
<template>
  <div>
    &lt;!&ndash; 图片上传组件辅助&ndash;&gt;
    <el-upload
      class="avatar-uploader"
      :action="serverUrl"
      name="img"
      :headers="header"
      :show-file-list="false"
      :on-success="uploadSuccess"
      :on-error="uploadError"
      :before-upload="beforeUpload">
    </el-upload>
    &lt;!&ndash;富文本编辑器组件&ndash;&gt;
   &lt;!&ndash; <el-row v-loading="uillUpdateImg">&ndash;&gt;
      <quill-editor
        v-model="detailContent"
        ref="myQuillEditor"
        :options="editorOption"
        @change="onEditorChange($event)"
        @ready="onEditorReady($event)"
      >
      </quill-editor>
    &lt;!&ndash;</el-row>&ndash;&gt;
  </div>
</template>
<script>
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{'header': 1}, {'header': 2}],               // custom button values
    [{'list': 'ordered'}, {'list': 'bullet'}],
    [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
    [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
    [{'direction': 'rtl'}],                         // text direction

    [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
    [{'header': [1, 2, 3, 4, 5, 6, false]}],

    [{'color': []}, {'background': []}],          // dropdown with defaults from theme
    [{'font': []}],
    [{'align': []}],
    ['link', 'image', 'video'],
    ['clean']                                         // remove formatting button
  ]

  export default {
    name: "Editor",
    data() {
      return {
       /* quillUpdateImg: false,*/ // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
        serverUrl: 'http://39.106.120.220:8081/upload2/',  // 这里写你要上传的图片服务器地址
        header: {token: sessionStorage.token},  // 有的图片服务器要求请求头需要有token之类的参数，写在这里
        detailContent: '', // 富文本内容
        editorOption: {
          placeholder: '',
          theme: 'snow',  // or 'bubble'
          modules: {
            toolbar: {
              container: toolbarOptions,  // 工具栏
              handlers: {
                'image': function (value) {
                  if (value) {
                    document.querySelector('.avatar-uploader input').click()
                  } else {
                    this.quill.format('image', false);
                  }
                }
              }
            }
          }
        }  // 富文本编辑器配置
      }
    },
    methods: {
      // 上传图片前
      beforeUpload(res, file) {
        // 显示loading动画
        /*this.quillUpdateImg = true*/
      },
      // 上传图片成功
      uploadSuccess(res, file) {
        // res为图片服务器返回的数据
        // 获取富文本组件实例
        let quill = this.$refs.myQuillEditor.quill
        // 如果上传成功
        if (res.code === '200' && res.info !== null) {
          // 获取光标所在位置
          let length = quill.getSelection().index;
          // 插入图片  res.info为服务器返回的图片地址
          quill.insertEmbed(length, 'image', res.info)
          // 调整光标到最后
          quill.setSelection(length + 1)
        } else {
          this.$message.error('图片插入失败')
        }
        // loading动画消失
        this.quillUpdateImg = false

      },
      // 上传图片失败
      uploadError(res, file) {
        // loading动画消失
        /*this.quillUpdateImg = false*/
        this.$message.error('图片插入失败')
      },
      onEditorReady(editor) { // 准备编辑器
      },
      onEditorBlur(){}, // 失去焦点事件
      onEditorFocus(){}, // 获得焦点事件
      onEditorChange(){}, // 内容改变事件
    }
  }
</script>


-->
















<!--
<template>
  <div class="edit_container">
    <quill-editor
      class="editor"
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
      @change="onEditorChange($event)">
    </quill-editor>
    <button v-on:click="saveHtml"  class="save">保存</button>
  </div>
</template>

<script>
  export default {
    name: "Editor",
    data(){
      return {
        content: `<p>hello world</p>`,
        editorOption: {}
      }
    },computed: {
      editor() {
        return this.$refs.myQuillEditor.quill;
      },
    },methods: {
      onEditorReady(editor) { // 准备编辑器
      },
      onEditorBlur(){}, // 失去焦点事件
      onEditorFocus(){}, // 获得焦点事件
      onEditorChange(){}, // 内容改变事件
      saveHtml:function(event){
        alert(this.content);
      }
    }
  }
</script>

<style scoped>
  .save{
    position: relative;
    top: 80px;

  }

  .editor{
    width: 800px;
    height: 400px;
    margin-left: 10%;
  }



  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

-->


var E = window.wangEditor
var editor = new E('#div1') // 两个参数也可以传入 elem 对象，class 选择器
//开启debug模式
editor.customConfig.debug = true;
// 关闭粘贴内容中的样式
editor.customConfig.pasteFilterStyle = false
// 忽略粘贴内容中的图片
editor.customConfig.pasteIgnoreImg = true
// 使用 base64 保存图片
//editor.customConfig.uploadImgShowBase64 = true

// 上传图片到服务器
editor.customConfig.uploadFileName = 'file'; //设置文件上传的参数名称
editor.customConfig.uploadImgServer = 'http://39.106.120.220:8081/upload2/'; //设置上传文件的服务器路径
editor.customConfig.uploadImgMaxSize = 10 * 1024 * 1024; // 将图片大小限制为 3M
//自定义上传图片事件
editor.customConfig.uploadImgHooks = {
  before: function(xhr, editor, files) {

  },
  success: function(xhr, editor, result) {
    console.log("上传成功");
  },
  fail: function(xhr, editor, result) {
    console.log("上传失败,原因是" + result);
  },
  error: function(xhr, editor) {
    console.log("上传出错");
  },
  timeout: function(xhr, editor) {
    console.log("上传超时");
  },
  customInsert: function (insertImg, result, editor) {
    // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
    // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果

    // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
    var url = result.data
    insertImg(url)


    // result 必须是一个 JSON 格式字符串！！！否则报错
  }
}

editor.create()
$('#div1').attr('style','height:200px;');

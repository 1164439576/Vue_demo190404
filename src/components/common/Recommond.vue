<template>
  <body class="bodyDiv">
    <div>
      <h5 class="title">— 热贴排行榜 —</h5>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="date"
          label="排名"
          width="50">
        </el-table-column>
        <el-table-column
          prop="name"
          label="作者"
          width="90">
        </el-table-column>
        <el-table-column
          prop="address"
          label="帖子名称">
        </el-table-column>
      </el-table>
    </div>
    <div>
      <h5 class="title">— 达人排行榜 —</h5>
      <el-table
        :data="tableData2"
        stripe
        style="width: 100%">
        <el-table-column
          prop="date"
          label="排名"
          width="50">
        </el-table-column>
        <el-table-column
          prop="name"
          label="用户昵称"
          width="90">
        </el-table-column>
        <el-table-column
          prop="address"
          label="活跃度">
        </el-table-column>
      </el-table>
    </div>
  </body>

</template>

<script>
    export default {
        name: "Recommond",
      data() {
        return {
          tableData: [{
            date: '1',
            name: '王小虎',
            address: 'JINHAO 金豪 996 钢笔'
          }, {
            date: '2',
            name: '王小虎',
            address: 'Lenovo 联想 小新Air 14 2020 14英寸笔记本电脑（i5-1035G1、16GB、512GB、MX350）'
          }, {
            date: '3',
            name: '王小虎',
            address: 'NIKE 耐克 Jordan AIR BQ5655 男子连帽卫衣'
          }, {
            date: '4',
            name: '王小虎',
            address: '轻质舒适 男款柔软纯棉运动长裤'
          }],
          tableData2: [{
            date: '1',
            name: '王小虎',
            address: '3333'
          }, {
            date: '2',
            name: '王小虎',
            address: '2345'
          }, {
            date: '3',
            name: '王小虎',
            address: '2221'
          }, {
            date: '4',
            name: '王小虎',
            address: '1999'
          }, {
            date: '5',
            name: '王小虎',
            address: '1999'
          }, {
            date: '6',
            name: '王小虎',
            address: '1999'
          }, {
            date: '7',
            name: '王小虎',
            address: '1999'
          }]
        }
      }
    }
</script>

<style scoped>
  .title{
    line-height: 30px;
    text-align: center;
    font-size: 36px;
    padding: 5px;
    margin: 5px;
  }

  body{
    /*position: fixed;*/
  }
  .bodyDiv{
    padding-top: 50px;
  }

</style>

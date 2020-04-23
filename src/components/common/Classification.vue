<template>
  <body>
    <h2 class="fenlei">
      — 帖子分类 —
    </h2>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">


      <el-submenu index="1">
        <template slot="title"  >
          <i class="el-icon-monitor" @click="gotoYouXuanhaowu()" ></i>
          <span slot="title">电脑 手机 办公</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">手机通讯</el-menu-item>
          <el-menu-item index="1-2">摄影摄像</el-menu-item>
          <el-menu-item index="1-3">数码配件</el-menu-item>
          <el-menu-item index="1-4">软件游戏</el-menu-item>
          <el-menu-item index="1-5">虚拟产品</el-menu-item>
          <el-menu-item index="1-6">存储设备</el-menu-item>
          <el-menu-item index="1-7">影音播放</el-menu-item>
          <el-menu-item index="1-8">电脑整机</el-menu-item>
          <el-menu-item index="1-9">游戏设备</el-menu-item>
          <el-menu-item index="1-10">电脑外设</el-menu-item>
          <el-menu-item index="1-11">网络设备</el-menu-item>
          <el-menu-item index="1-12">电脑配件</el-menu-item>
          <el-menu-item index="1-13">智能设备</el-menu-item>
          <el-menu-item index="1-14">电脑数码包</el-menu-item>
          <el-menu-item index="1-15">办公仪器</el-menu-item>
          <el-menu-item index="1-16">文具用品</el-menu-item>

        </el-menu-item-group>

      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-refrigerator"></i>
          <span slot="title">大家电 生活电器</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">大家电</el-menu-item>
          <el-menu-item index="2-2">厨卫大电</el-menu-item>
          <el-menu-item index="2-3">生活电器</el-menu-item>
          <el-menu-item index="2-4">厨房小电</el-menu-item>
          <el-menu-item index="2-5">个护健康</el-menu-item>
        </el-menu-item-group>

      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-suitcase"></i>
          <span slot="title">床垫 家纺 厨具</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">宠物用品</el-menu-item>
          <el-menu-item index="3-2">厨房用具</el-menu-item>
          <el-menu-item index="3-3">生活用品</el-menu-item>
          <el-menu-item index="3-4">成人用品</el-menu-item>
          <el-menu-item index="3-5">家居清洁</el-menu-item>
          <el-menu-item index="3-6">宠物用品</el-menu-item>
          <el-menu-item index="3-7">家装主材</el-menu-item>
          <el-menu-item index="3-8">五金电工</el-menu-item>
          <el-menu-item index="3-9">住宅家具</el-menu-item>
          <el-menu-item index="3-10">灯具灯饰</el-menu-item>
          <el-menu-item index="3-12">家纺布艺</el-menu-item>
          <el-menu-item index="3-12">家居饰品</el-menu-item>
          <el-menu-item index="3-13">园艺用品</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span slot="title">服饰 运动</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">运动服饰</el-menu-item>
          <el-menu-item index="4-2">户外服饰</el-menu-item>
          <el-menu-item index="4-3">户外装备</el-menu-item>
          <el-menu-item index="4-4">体育项目</el-menu-item>
          <el-menu-item index="4-5">运动鞋袜</el-menu-item>
          <el-menu-item index="4-6">运动器材</el-menu-item>
          <el-menu-item index="4-7">户外鞋袜</el-menu-item>
          <el-menu-item index="4-8">男装</el-menu-item>
          <el-menu-item index="4-9">女装</el-menu-item>
          <el-menu-item index="4-10">男鞋</el-menu-item>
          <el-menu-item index="4-12">女鞋</el-menu-item>
          <el-menu-item index="4-12">男包</el-menu-item>
          <el-menu-item index="4-13">女包</el-menu-item>
          <el-menu-item index="4-14">服装配饰</el-menu-item>
          <el-menu-item index="4-15">功能箱包</el-menu-item>
          <el-menu-item index="4-16">家居内衣</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-watch"></i>
          <span slot="title">个护美妆 服饰腕表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">面部护理</el-menu-item>
          <el-menu-item index="5-2">身体护理</el-menu-item>
          <el-menu-item index="5-3">女性护理</el-menu-item>
          <el-menu-item index="5-4">男性护理</el-menu-item>
          <el-menu-item index="5-5">彩妆产品</el-menu-item>
          <el-menu-item index="5-6">口腔护理</el-menu-item>
          <el-menu-item index="5-7">美发护发</el-menu-item>
          <el-menu-item index="5-8">眼睛护理</el-menu-item>
          <el-menu-item index="5-9">钟</el-menu-item>
          <el-menu-item index="5-10">手表</el-menu-item>
          <el-menu-item index="5-11">珠宝首饰</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-coordinate"></i>
          <span slot="title">奶粉 尿裤 玩具乐器</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">奶粉</el-menu-item>
          <el-menu-item index="6-1">童车童床</el-menu-item>
          <el-menu-item index="6-1">营养辅食</el-menu-item>
          <el-menu-item index="6-1">婴儿家纺</el-menu-item>
          <el-menu-item index="6-1">尿裤湿巾</el-menu-item>
          <el-menu-item index="6-1">婴儿安全用品</el-menu-item>
          <el-menu-item index="6-1">喂养用品</el-menu-item>
          <el-menu-item index="6-1">童装</el-menu-item>
          <el-menu-item index="6-1">洗护用品</el-menu-item>
          <el-menu-item index="6-1">婴儿服饰</el-menu-item>
          <el-menu-item index="6-1">婴儿玩具</el-menu-item>
          <el-menu-item index="6-1">孕产妇用品</el-menu-item>

        </el-menu-item-group>
      </el-submenu>


      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-goblet-square-full"></i>
          <span slot="title">生鲜 酒水 粮油</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">大家电</el-menu-item>
          <el-menu-item index="3-2">厨卫大电</el-menu-item>
          <el-menu-item index="3-3">生活电器</el-menu-item>
          <el-menu-item index="3-4">厨房小电</el-menu-item>
          <el-menu-item index="3-5">个护健康</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">图文 文娱 游戏</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">大家电</el-menu-item>
          <el-menu-item index="3-2">厨卫大电</el-menu-item>
          <el-menu-item index="3-3">生活电器</el-menu-item>
          <el-menu-item index="3-4">厨房小电</el-menu-item>
          <el-menu-item index="3-5">个护健康</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="9">
        <template slot="title">
          <i class="el-icon-truck"></i>
          <span slot="title">旅游 汽车 金融</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">大家电</el-menu-item>
          <el-menu-item index="3-2">厨卫大电</el-menu-item>
          <el-menu-item index="3-3">生活电器</el-menu-item>
          <el-menu-item index="3-4">厨房小电</el-menu-item>
          <el-menu-item index="3-5">个护健康</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


      </el-menu>
  </body>
</template>

<script>

    export default {
      name: "Classification",
      data() {
        return {
          isCollapse: false
        };
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        gotoYouXuanhaowu(){
          this.$router.push({path:'/youXuanHaoWuPage'})
        }


      }
    }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    min-height: 400px;
  }
  .fenlei{
    font-size: 29px;
    height: 30px;
    width: available;
  }
  body{
    position: relative;
    top: 40px;
    background-image: url("/static/picture/4.png")

  }




</style>

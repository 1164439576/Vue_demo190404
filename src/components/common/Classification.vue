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

        <el-menu-item-group >
          <el-menu-item  v-for="(item ,i) in options[0].children" :key="i"   @click="gotoYouXuanhaowu(options[0].value,item.value)" >{{item.label}}</el-menu-item>
        </el-menu-item-group>

        <!--<el-menu-item-group >
          <el-menu-item index="1-1" @click="gotoYouXuanhaowu()">手机通讯</el-menu-item>
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

        </el-menu-item-group>-->

      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-refrigerator"></i>
          <span slot="title">大家电 生活电器</span>
        </template>

        <el-menu-item-group >
          <el-menu-item  v-for="(item ,i) in options[1].children" :key="i"   @click="gotoYouXuanhaowu(options[1].value,item.value)" >{{item.label}}</el-menu-item>
        </el-menu-item-group>
       <!-- <el-menu-item-group>
          <el-menu-item index="2-1">大家电</el-menu-item>
          <el-menu-item index="2-2">厨卫大电</el-menu-item>
          <el-menu-item index="2-3">生活电器</el-menu-item>
          <el-menu-item index="2-4">厨房小电</el-menu-item>
          <el-menu-item index="2-5">个护健康</el-menu-item>
        </el-menu-item-group>-->

      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-suitcase"></i>
          <span slot="title">床垫 家纺 厨具</span>
        </template>
        <el-menu-item-group >
          <el-menu-item  v-for="(item ,i) in options[2].children" :key="i"   @click="gotoYouXuanhaowu(options[2].value,item.value)" >{{item.label}}</el-menu-item>
        </el-menu-item-group>
        <!--<el-menu-item-group>
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
        </el-menu-item-group>-->
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span slot="title">服饰 运动</span>
        </template>
        <el-menu-item-group >
          <el-menu-item  v-for="(item ,i) in options[3].children" :key="i"   @click="gotoYouXuanhaowu(options[3].value,item.value)" >{{item.label}}</el-menu-item>
        </el-menu-item-group>
        <!--<el-menu-item-group>
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
        </el-menu-item-group>-->
      </el-submenu>


      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-watch"></i>
          <span slot="title">个护美妆 服饰腕表</span>
        </template>
        <el-menu-item-group >
          <el-menu-item  v-for="(item ,i) in options[4].children" :key="i"   @click="gotoYouXuanhaowu(options[4].value,item.value)" >{{item.label}}</el-menu-item>
        </el-menu-item-group>
        <!--<el-menu-item-group>
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
        </el-menu-item-group>-->
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-coordinate"></i>
          <span slot="title">奶粉 尿裤 玩具乐器</span>
        </template>
        <el-menu-item-group >
          <el-menu-item  v-for="(item ,i) in options[5].children" :key="i"   @click="gotoYouXuanhaowu(options[5].value,item.value)" >{{item.label}}</el-menu-item>
        </el-menu-item-group>
       <!-- <el-menu-item-group>
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

        </el-menu-item-group>-->
      </el-submenu>


      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-goblet-square-full"></i>
          <span slot="title">生鲜 酒水 粮油</span>
        </template>
        <el-menu-item-group >
          <el-menu-item  v-for="(item ,i) in options[6].children" :key="i"   @click="gotoYouXuanhaowu(options[6].value,item.value)" >{{item.label}}</el-menu-item>
        </el-menu-item-group>
        <!--<el-menu-item-group>
          <el-menu-item index="2-1">大家电</el-menu-item>
          <el-menu-item index="3-2">厨卫大电</el-menu-item>
          <el-menu-item index="3-3">生活电器</el-menu-item>
          <el-menu-item index="3-4">厨房小电</el-menu-item>
          <el-menu-item index="3-5">个护健康</el-menu-item>
        </el-menu-item-group>-->
      </el-submenu>

      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">图文 文娱 游戏</span>
        </template>
        <el-menu-item-group >
          <el-menu-item  v-for="(item ,i) in options[7].children" :key="i"   @click="gotoYouXuanhaowu(options[7].value,item.value)" >{{item.label}}</el-menu-item>
        </el-menu-item-group>
        <!--<el-menu-item-group>
          <el-menu-item index="2-1">大家电</el-menu-item>
          <el-menu-item index="3-2">厨卫大电</el-menu-item>
          <el-menu-item index="3-3">生活电器</el-menu-item>
          <el-menu-item index="3-4">厨房小电</el-menu-item>
          <el-menu-item index="3-5">个护健康</el-menu-item>
        </el-menu-item-group>-->
      </el-submenu>

     <!-- <el-submenu index="9">
        <template slot="title">
          <i class="el-icon-truck"></i>
          <span slot="title">旅游 汽车 金融</span>
        </template>
        <el-menu-item-group >
          <el-menu-item  v-for="(item ,i) in options[7].children" :key="i"   @click="gotoYouXuanhaowu(options[7].value,item.value)" >{{item.label}}</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="2-1">大家电</el-menu-item>
          <el-menu-item index="3-2">厨卫大电</el-menu-item>
          <el-menu-item index="3-3">生活电器</el-menu-item>
          <el-menu-item index="3-4">厨房小电</el-menu-item>
          <el-menu-item index="3-5">个护健康</el-menu-item>
        </el-menu-item-group>
      </el-submenu>-->


      </el-menu>
  </body>
</template>

<script>
  import Qs from 'qs'
    export default {
      name: "Classification",
      data() {
        return {
          isCollapse: false,
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

          class:[
            {

            },
            {},
            {},
            {},
            {},
            {},
            {},
            {},

          ],


        };
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        //带参 到 优选好物列表页面
        gotoYouXuanhaowu(code1,code2){
          console.log(code1);
          console.log(code2);

          this.$router.push({
            path:"/youXuanHaoWuPage/",

            //使用query传值--地址栏可见  params传值在地址栏不可见
            query:{
              codeone:code1,
              codetwo:code2
            }

          })
        }

      },

      created() {



      },//created

      mounted(){
        // console.log("mounted");
      },


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
    /*background-image: url("/static/picture/4.png")*/

  }




</style>

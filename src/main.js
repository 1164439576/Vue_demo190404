// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App'
import axios from 'axios'
import VueRouter from 'vue-router'
import router from './router'
import Vuex from 'vuex'
import store from './store'
// import qs from 'qs'
// 富文本编辑器
import  VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)
// Vue.use(qs)

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(router);


Vue.use(ElementUI);


Vue.prototype.axios = axios;



// 在跳转前执行
router.beforeEach((to, form, next) => {
  // 获取用户登录状态
  let isLogin = sessionStorage.getItem('isLogin');
  // 注销
  if (to.path == '/logout') {
    // 清空
    sessionStorage.clear();
    // 跳转到登录
    next({path: '/Login'});
  }
  // 如果请求的是登录页
  else if (to.path == '/Login') {
    if (isLogin != null) {
      // 跳转到首页
      next({path: '/home'});
    }
  }
  // 如果为非登录状态
  else if (isLogin == null) {
    // 跳转到登录页
    next({path: '/Login'});
  }
  // 下一个路由
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

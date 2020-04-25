import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../components/Login'
import Cart from  '../components/Cart'
import  Home from '../components/Home'
import  RegistPage from '../components/RegistPage'
import  YouXuanHaoWuPage from '../components/YouXuanHaoWuPage'
import  DetailsPage from '../components/DetailsPage'
import  ReleasePost from '../components/ReleasePost'
import  SearchPage from '../components/SearchPage'
import  SettingPage from '../components/SettingPage'
import  GiftPage from '../components/GiftPage'
import  PersonalCenter from '../components/PersonalCenter'
import MyPostsList from "../components/common/MyPostsList"
import MyFavoriteList from "../components/common/MyFavoriteList"
import CommentList from "../components/common/CommentList"
import UserListConcerns from "../components/common/UserListConcerns"
import UserListFans from "../components/common/UserListFans"



Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/Login',
      name:'Login',
      component:Login
    },
    {
      path:'/cart',
      name:'Cart',
      component:Cart
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path:'/registPage',
      name:'RegistPage',
      component:RegistPage
    },
    {
      path:'/youXuanHaoWuPage',
      name:'YouXuanHaoWuPage',
      component:YouXuanHaoWuPage
    },
    {
      path:'/detailsPage',
      name:'DetailsPage',
      component:DetailsPage
    },
    {
      path:'/releasePost',
      name:'ReleasePost',
      component:ReleasePost
    },
    {
      path:'/searchPage',
      name:'SearchPage',
      component:SearchPage
    },
    {
      path:'/personalCenter',
      name:'PersonalCenter',
      component:PersonalCenter,
      redirect:'/personalCenter/MyPostsList',
      children:[
        {path:'/personalCenter/MyPostsList',component:MyPostsList},
        {path:'/personalCenter/MyFavoriteList',component:MyFavoriteList},
        {path:'/personalCenter/CommentList',component:CommentList},
        {path:'/personalCenter/UserListConcerns',component:UserListConcerns},
        {path:'/personalCenter/UserListFans',component:UserListFans},

      ]
    },
    {
      path:'/settingPage',
      name:'SettingPage',
      component:SettingPage
    },
    {
      path:'/giftPage',
      name:'GiftPage',
      component:GiftPage
    }


  ]

})

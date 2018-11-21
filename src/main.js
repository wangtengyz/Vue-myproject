// 入口文件
import Vue from 'vue'

// //配置vuex步骤
// //1.运行yarn add vuex -S
// //2.导入包
// import vuex from "vuex"
// //3.注册vuex到vue中
// Vue.use(vuex)
//4.new Vuex.Store()实例，得到一个数据仓库
// var store = new Vue.Store({
//     state: {
//         count: 0
//     },
//     mutation: {}
// })

//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

//导入 vue-resource
import VueResource from 'vue-resource'
// 安装Vueresource
Vue.use(VueResource)

//按需导入Mint-UI的组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入mui.css
import "./lib/mui/css/mui.min.css"
//导入 字体图标样式
import "./lib/mui/css/icons-extra.css"

//导入自己的router.js模块
import router from "./router.js"


//导入App根组件
import App from './App.vue'
var vm = new Vue({
    el: "#app",
    date: {

    },
    methods: {

    },
    render: c => c(App),
    router //5.将vuex创建的store挂在到vm实例上
})
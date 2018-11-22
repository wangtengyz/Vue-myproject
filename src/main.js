// 入口文件
import Vue from 'vue'
//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
    //导入格式化时间插件
import moment from "moment"
//定义全局过滤器
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

//导入 vue-resource
import VueResource from 'vue-resource'
// 安装Vueresource
Vue.use(VueResource)
    //设置请求的根路径
Vue.http.options.root = "http://www.lovegf.cn:8899"
    //按需导入Mint-UI的组件
import { Header, Swipe, SwipeItem, Button }
from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

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
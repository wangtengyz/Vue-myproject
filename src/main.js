// 入口文件
import Vue from 'vue'
//按需导入Mint-UI的组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)
    // 导入mui.css
import "../libs/mui/css/mui.min.css"


//导入App根组件
import App from './App.vue'

var vm = new Vue({
    el: "#app",
    date: {

    },
    methods: {

    },
    render: c => c(App)
})
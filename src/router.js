import VueRouter from 'vue-router'
import HomeContainer from "./components/tabbar/HomeContainer.vue"
import MemberContainer from "./components/tabbar/MemberContainer.vue"
import SearchContainer from "./components/tabbar/SearchContainer.vue"
import ShopcarContainer from "./components/tabbar/ShopcarContainer.vue"
import NewsList from "./components/news/NewsList.vue"
import Newsinfo from "./components/news/Newsinfo.vue"
// 3. 创建路由对象
var router = new VueRouter({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: HomeContainer
    }, {
        path: '/home/newslist',
        component: NewsList
    }, {
        path: '/home/newsinfo/:id',
        component: Newsinfo
    }, {
        path: '/member',
        component: MemberContainer
    }, {
        path: '/search',
        component: SearchContainer
    }, {
        path: '/shopcar',
        component: ShopcarContainer
    }],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类 默认的类叫做link-active-class
})

// 把路由对象暴露出去
export default router
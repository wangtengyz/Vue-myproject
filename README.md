#  这是第一个Vue项目

## 项目比较简单

### 主要用Mint-UI 和Mui移动端组件库

### 还是有很多不足之处

# 用命令行方式将修改后的代码上传github

## 1. git add.

## 2. git commit -m "提交信息"

## 3. git push

## 制作首页App组件
1.完成Header区域，使用的是Mint-UI中的Header组件
2.制作底部的Tabbar区域，使用的是MUI的Tabbar.html
 + 在制作 购物车 小图标 的时候操作繁琐
 + 先把 扩展图标的 css样式 ，拷贝到项目中
 + 拷贝 扩展字体库 ttf 文件 到项目中
 + 为 购物车 小图标 ，添加如下样式 "mui-icon mui-icon-extra mui-icon -extra-cart"
3. 要在中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 tabbar为router-link

## 设置路由高亮

## 点击tabbar中的路由连接，展示对应的路由组件

## 制作首页轮播图

## 加载首页轮播图数据
1.获取数据，如何获取，使用vue-resource
2.使用Vue-resource的this.$http.get获取数据
3.将获取到的数据要保存到data上
4.使用v-for（:key）循环渲染每个item

## 改造页面九宫格

## 改造新闻链接

## 新闻资讯 页面 制作
1.绘制界面 使用MUI中media-list样式 运用flex属性中justify-content:space-between;进行文字布局
2.使用vue-reasource获取数据
3.渲染真实数据

## 实现 新闻资讯列表 点击跳转到新闻详情
1.把列表的每一项改造为"router-link"，同时，在跳转的时候应该提供唯一的id标示符
2.创建新闻详情的组件页面 NewsInfo.vue
3.在路由模块中，将新闻详情页的路由地址和组件页面对应起来

## 实现 新闻详情的页面布局和数据渲染

## 单独封装一个comment.vue评论组件
1.先创建一个单独的comment.vue组件模板
2.在需要使用comment组件的页面中，先动手导入comment组件+‘import comment from "./comment.vue"’
3.在父组件中，使用“components”属性，将刚才导入comment组件，注册为自己的子组件
4.将注册子组件时候的，注册名称，以标签的形式，在页面中引用即可

## 获取所有的评论数据显示到页面中

## 实现加载更多的评论功能
1.为加载更多按钮，绑定点击事件，在事件中，请求下一页
2.点击加载更多，让pageIndex++，然后重新调用this.getComments（）获取新一页的数据
3.为了防止新数据覆盖老数据的情况，我们在点击加载更多的时候，每当获取新数据的时候，应该让老数据调用数组的concat方法，拼接上新的数组


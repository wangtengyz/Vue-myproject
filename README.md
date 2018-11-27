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

## 发表评论 
1.把文本框做双向数据绑定
2.为发表按钮绑定一个事件
3.校验评论内容是否为空，如果为空，则提示用户评论内容为空
4.通过vue-resource发送一个请求，把评论内容交给服务器
5.当发表评论后，重新刷新列表，以查看最新的列表
+ 入股哦调用getComments方法刷新评论列表的话，可能只能得到最
后一页的评论，前几页的评论获取不到
+ 换一种思路：当评论成功后，在客户端，手动拼接出一个最新的评论对象，然后调用数组的unshift方法，把最新的评论追加到data中comments数组的开头

## 改造图片分析按钮为路由的链接并显示为对应的组件页面

## 绘制图片列表组件页面结构并美化样式
1.制作顶部的滑动条
2.制作底部的滑动列表
### 制作顶部滑动条的坑
1.需要借助MUI的tab-top-webview-main.html
2.需要把alider区域的mui-fullscreen类去掉
3.滑动条无法正常触发滑动，通过检查官方文档，发现这是js组件 需要被初始化一下
  + 导入mui.js
  + 调用官方提供的方式去初始化
  ...
  mui(".mui-scroll-wrapper").scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  })
  ...
4.我们在初始化滑动条的时候，导入mui.js，控制台报错：Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
  + mui.js中用到了“caller”，“callee”，and“arguments”东西，但是，webpack打包的bundle.js中，默认是启用严格模式 所以冲突了
  + 解决方案 1.把mui.js的非严格模式的代码除掉 不现实
  + 2.移除严格模式  babel-plugin-transform-remove-strict-mode
5.刚进入 图片分享页面的时候，滑动条无法正常工作，如果要初始化，滑动条，必要等DOM元素加载完毕，所以要把初始化滑动条的代码，搬到了mounted生命周期函数中；
6.滑动条调试ok后，发现tabbar无法正常工作了，是“mui-tab-item”类名的问题，需要把每个tabbar按钮的样式中“mui-tab-item”重新改一下名字
7.获取所有分类，并渲染分页列表

### 制作图片列表区域
1.图片列表需要使用懒加载 使用Mint-UI提供现成的组件"lazy-load"
2.根据‘lazy-load’的使用文档，尝试使用
3.渲染图片列表数据
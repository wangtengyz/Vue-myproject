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



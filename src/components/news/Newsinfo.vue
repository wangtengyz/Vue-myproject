<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h1 class="title">{{newsinfo.title}}</h1>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{newsinfo.add_time}}</span>
      <span>点击：{{newsinfo.click}}次</span>
    </p>
    <hr>
    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.content"></div>
    <!-- 评论子组件区域 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
//导入评论子组件
import comment from "../subcomponents/comment.vue"
  export default {
    data(){
      return { 
        id:this.$route.params.id,
        newsinfo:[]
      }
    },
    created(){
      this.getNewsInfo()
    },
    methods:{
      getNewsInfo(){//获取新闻详情页
        this.$http.get('api/getnew/'+this.id).then(res=>{
          if(res.status==200){
            this.newsinfo=res.body.message[0]
          }else{
            Toast('获取新闻失败')
          }
        })
      }
    },
    components:{
      "comment-box":comment
    }

  }
</script>

<style lang="scss">
  .newsinfo-container{
    padding: 0 4px;
    .title{
      font-size: 16px;
      text-align: center;
      color: lightseagreen
    }
    .subtitle{
      font-size: 12px;
      color: lightcoral;
      display: flex;
      justify-content: space-between;
    }
    .content{
      img {
        width: 100%;//动态渲染的图片需要去除 style中scoped属性 才会生效
      }
    }
  }
</style>
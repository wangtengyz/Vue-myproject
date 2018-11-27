<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（要多吐槽120字）" maxlength='120' v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">提交评论</mt-button>
      <div class="cmt-list">
        <div class="cmt-item" v-for="(item,i) in comments" :key="i">
          <div class="cmt-title">
            第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time|dateFormat}}
          </div>
          <div class="cmt-body">
            {{item.content=="undefined"?"此用户很懒，嘛也没说":item.content}}
          </div>
        </div>

      </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import {Toast} from "mint-ui"
  export default {
    data(){
      return {
        pageIndex:1,//默认
        comments:[],//所有的评论数据
        msg:""//评论输入的内容
      }
    },
    created(){
      this.getComments()
    },
    methods:{
      getComments(){
        this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(res=>{
          if(res.body.status==0){
            //每当获取新评论数据时，要继续往老数据拼接
            this.comments=this.comments.concat(res.body.message)
          }else{
            Toast('获取评论失败')
          }
        })
      },
      getMore(){//加载更多
        this.pageIndex++;
        this.getComments();
      },
      postComment(){
        //校验是否为空内容
        if(this.msg.trim().length===0){
          return Toast("评论内容不能为空")
        }
        //发表评论
        //参数1:请求的URL地址
        //参数2：提交给服务器的数据对象
        //参数3：定义提交的时候，表单中数据格式{emulateJSON:true}
        this.$http.post("api/postcomment/"+this.$route.params.id,{
          content:this.msg.trim()
          })
          .then(function(res){
         
            if(res.body.status==0){
              //1.拼接出一个评论对象
              var cmt={
                user_name:"匿名用户", 
                add_time:Date.now(),
                content:this.msg.trim()//trim()清除行首尾的空格
              };
              this.comments.unshift(cmt);
              this.msg="";
            }
          })
      }
    },
    //子组件接受父组件传值定义
    props:["id"]
  }
</script>

<style lang="scss" scoped>
  .cmt-container{
    h3 {
      font-size: 18px;
    }
    textarea{
      font-size:14px;
      height:85px;
      margin:0;
    }
    .cmt-list {
      margin: 5px 0;
      .cmt-item {
        font-size: 13px;
        .cmt-title{
          padding-left: 5px;
          line-height: 30px;
          background: #ccc;

        }
        .cmt-body {
          line-height: 40px;
          text-indent: 2em;
        }
      }
    }
  }
  
</style>

<template>
  <div>
		<!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in cates" :key="item.id">
						{{item.title}}
					</a>
				</div>
			</div>
		</div>
		<!-- 图片列表区域 -->
		<ul>
  		<li v-for="item in list" :key="item.id">
    		<img v-lazy="item">
  		</li>
		</ul>
	</div>
</template>
<script>
//导入mui的js文件
  import mui from "../../lib/mui/js/mui.min.js"
		// mui(".mui-scroll-wrapper").scroll({
		// 	    deceleration: 0.0005 
  	// 	})
  export default {
    data(){
      return {
				cates:[],//所有分类列表的数组
				list:[]
      }
		},
		mounted(){//当组件doc结构被渲染好并放到页面中，会执行这个钩子函数
			//初始化滑动控件
			mui(".mui-scroll-wrapper").scroll({
			    deceleration: 0.0005 
  		})
		},
		created(){
			this.getAllCategory()
		},
    methods:{
			getAllCategory(){//获取所有的图片分类
				this.$http.get("api/getimgcategory").then(res=>{
					if(res.body.status===0){
						res.body.message.unshift({title:"全部",id:0})
						this.cates=res.body.message
					}
					
				})

			}
    }
  }
</script>
<style lang="scss" scoped>
 //接触滑动警告
  *{
     touch-action: pan-x; 
  }
	img[lazy=loading] {
  		width: 40px;
  		height: 300px;
  		margin: auto;
		}
</style>
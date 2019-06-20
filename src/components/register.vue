<template>
	<div class="bgm">
		<div class="register">
			<p class="title">使用星巴克App进行注册</p>
			<p>
				<span>现在就下载</span>
				<router-link to='/registerDetail'>星巴克App</router-link>
				<span>便可直接用手机进行注册、支付、查看消费记录及管理卡片。</span>
			</p>
		</div>
		<!--手机图片-->
		<div class="img">
			<img src="../assets/images/register-download-app-image-cn.png"/>
		</div>
		
		<!--星巴克APP-->
		 <div class="app">
		 	<img src="../assets/images/udp-starbucks-cn.png"/>
		 </div>
		<div class="show">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	
</script>
<style lang="less">
body {
		background-color: #FDFDFD;
	}
  .register{
  	width: 100%;
  	padding: 0 24/64rem;
  	box-sizing: border-box;
  	background-color: #FDFDFD;
  	.title{
  		font-size: 22/64rem;
  		line-height: 55/64rem;
  	}
  	p{
  		word-break:normal;
  		line-height: 30/64rem;
  		font-size: 18/64rem;
  		color: #212121;
  		a{
  			color: #0BAC69;
  			text-decoration: none;
  		}
  	}
  }
  .img{
  	width: 100%;
  	padding-top: 35/64rem;
  	text-align: center;
  	background-color: #FDFDFD;
  		img{
  			width: 210/64rem;
  		}
  	}
  	/*星巴克APP*/
  	.app{
  		position: fixed;
  		bottom: 60/64rem;
  		right: 24/64rem;
  		img{
  			width: 177/64rem;
  		}
  	}
</style>
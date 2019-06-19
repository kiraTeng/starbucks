<template>
	<div>
		<div class="one">
			<img src="../assets/images/starbuck-mobile-background-mobile.jpg"/>
			<div class="one_title">
				<p>下载星巴克App</p>
			</div>
			<div class="one_join">
				<p>加入星享俱乐部，积星星享好礼。轻松管理星礼卡，支付时即可加速积星，每消费40元获得一颗星星，比其他支付方式积星快25%。还能随时点咖啡，体验专星送™。</p>
			   <p class="card">在App内随心挑选和购买电子星礼卡, 随时查看余额，充值和管理卡片。</p> 
		 </div>
		 <!--视频-->
		 <div class="video">
		 	 <video id="example_video_1" class="video-js" controls preload="none" width="240" height="364"  data-setup="{}" poster="https://www.starbucks.com.cn/images/pages/apps-mobile-mockup-zh.png">
			    <source src="https://www.starbucks.com.cn/images/pages/apps-mobile-screens-cn.mp4" type="video/mp4">
			    <track kind="captions" src="../shared/example-captions.vtt" srclang="en" label="English">
			    <track kind="subtitles" src="../shared/example-captions.vtt" srclang="en" label="English">
			    <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>
         </video>
	 </div>
		</div>
		<div class="two"></div>		
		<!--第四部分-->
		<div class="four">
			<p class="tit">星巴克手机应用目前在<a href="#">App Store</a>和以下安卓平台均有下载</p>
			<ul>
				<li><a href="#">应用宝</a></li>
				<li class="line"><a href="#">|</a></li>
				<li><a href="#">小米商店</a></li>
				<li class="line"><a href="#">|</a></li>
				<li><a href="#">360手机助手</a></li>
				<li class="line"><a href="#">|</a></li>
				<li><a href="#">百度手机助手</a></li>
				<li class="line"><a href="#">|</a></li>
				<li><a href="#">魅族</a></li>
				<li class="line"><a href="#">|</a></li>
				<li><a href="#">豌豆荚安装</a></li>
				<li class="line"><a href="#">|</a></li>
				<li><a href="#">华为应用市场</a></li>
			</ul>
			
			<div class="chart">
				<img src="../assets/images/app_qr_20181112.jpg"/><br />
				<p class="contact">如果您有任何问题，请查看常见问题，也可以直接与我们联系</p>
			  <p class="btn"><button>常见问题</button><button>联系我们</button></p>
			</div>
		</div>	
		
		<div class="phone">
			<img src="../assets/images/aa.png"/>
		</div>
	</div>
	
</template>

 

<script>
	export default{
		
	}
</script>

<style lang="less">
	.one{
		width: 100%;
		max-width: 640px;
		box-sizing: border-box;
		position: relative;
		img{
			width: 100%;
			height: 600/64rem;
		}
		.one_title{
			position: absolute;
			top: 30/64rem;
			left: 50%;
			transform: translateX(-50%);
			font-size: 25/64rem;
			color: #fff;
			letter-spacing: .1em;
		}
		.one_join{
			position: absolute;
			top: 100/64rem;
			color: #fff;
			font-size: 15/64rem;
			padding: 0 40/64rem;
			line-height: 27/64rem;
			letter-spacing: .09em;
			.card{
				padding-top: 30/64rem;
			}
		}
	}
	.two{
		height: 300/64rem;
		width: 100%;
		background-color: #EFEBE8;
		margin-top: -2/64rem;
		border-bottom: solid 1px #ccc;
	}
	.four{
		height: 670/64rem;
		width: 100%;
		background-color: #EFEBE8;
		padding: 20/64rem 20/64rem;
		box-sizing: border-box;
		text-align: center;
		.tit{
			font-size: 20/64rem;
			text-align: center;
			line-height:30/64rem;
			letter-spacing:.09em;
			a{
				color: #00A862;
				text-decoration: none;
			}
		}
		ul{
			overflow: hidden;
			li{
				float: left;
				list-style: none;
				padding: 0 10/64rem;
				line-height: 26/64rem;
				a{
					color: #00A862;
					text-decoration: none;
				}
			}
			.line{
				a{
					color: #A5A2A0;
				}
			}
		}
		.chart{
			width: 100%;
			margin-top: 30/64rem;
			text-align: center;
			img{
				width: 200/64rem;
				
			}
			.contact{
				margin-top: 50/64rem;
				line-height: 30/64rem;
				font-size: 18/64rem;
			}
			.btn{
				text-align: center;
				margin-top: 20/64rem;
				button{
					padding: 10/64rem 20/64rem;
					border: none;
					border: solid 1px #00A862;
					margin-right: 10/64rem;
					color: #00A862;
					border-radius: 20/64rem;
					background-color: transparent;
					font-size: 16/64rem;
				}
			}
		}
	}
	.phone{
		position: fixed;
		bottom: 70/64rem;
		right: 0;
		img{
			width: 150/64rem;
		}
	}
	
	
	/*视频*/
	.video{
		position: absolute;
		top: 310/64rem;
		left: 50%;
		transform: translateX(-50%);
	}
	#example_video_1{
		height: 500/64rem;
		width: 250/64rem;
		position: relative;
	}
</style>
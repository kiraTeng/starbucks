<template>
	<div class="myderess" >
		<div class="showderss">
			<h2>深圳华强广场酒店店</h2>
		<p class="dz">福田区 华强广场酒店大堂 华强北路</p>
		<p class="color"><img src="../assets/map/icon-contact.svg"/> 0755-83226283</p>
		<p class="color"><img src="../assets/map/icon-directions.svg"/> 获取路线</p>
		<p class="ystime">营业时间</p>
		</div>
		<ul class="time">
			<li>今天<span class="day">07:30上午至23:00下午</span></li>
			<li>明天<span class="day">07:30上午至23:00下午</span></li>
			<li>星期四<span class="day">07:30上午至23:00下午</span></li>
			<li>星期五<span class="day">07:30上午至23:00下午</span></li>
			<li>星期六<span class="day">07:30上午至23:00下午</span></li>
			<li>星期日<span class="day">07:30上午至23:00下午</span></li>
			<li>星期一<span class="day">07:30上午至23:00下午</span></li>
			<li>门店特色</li>
		</ul>
		<div class="sepsic">
			<p><img src="../assets/map/delivery.png"/> <span>专星送™</span></p>
			<p><img src="../assets/map/icon-origami.svg"/> <span>Origami™便携式滴滤咖啡™</span></p>
			
		
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="less">
	.myderess{
		width: 100%;
		height: 700/64rem;
		position: absolute;
		overflow: hidden;
		top: 0;
		background: #fff;
		z-index: 999999;
		box-sizing: border-box;
			padding: 40/64rem 20/64rem;
		
		.showderss{
				
			margin: 0 10/64rem;

			border-bottom:1px solid #E0E0E0;
			
			p{
				padding-top:14/64rem ;

			}
			.color{
				color: #00A862;
				font-size: 18/64rem;
			}
			.ystime{
				padding-top: 26/64rem;
				color:rgba(0, 0, 0, 0.87) ;
			}
		}
		.dz{
			padding-top:14/64rem ;
			font-size: 18/64rem;
		}
		.time{
			border-bottom: 1px solid#E0E0E0;
			li{
				list-style: none;
				font-size: 16/64rem;
				position: relative;
				padding:5/64rem 0;
				span{
					position: absolute;
					right: 20/64rem;
				}
			}
		   li:last-child{
		   	font-size:19/64rem;
		   	padding: 20/64rem 0;
		   }
		}
		.sepsic{
			display: flex;
			justify-content: space-between;
			padding-top: 10/64rem;
			img{
				height: 24/64rem;
				width: 24/64rem;
			}
		}
	}
</style>
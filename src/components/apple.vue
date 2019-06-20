<template>
	<div>
		<div class="a_part1">
			<div class="title">
				<p>美妙咖啡随时相伴</p>
			</div>
			<div class="a_con">
				<p>现在您可以在您的Apple Watch上打开星巴克移动应用，使用
					<a href="#">星享俱乐部会员</a>功能，以及查找附近门店。</p>
			</div>
			<div class="a_img">
				<img src="../assets/images/apple-watch.gif" />
			</div>
		</div>

		<!--第二部分-->
		<AppleItem>
			<p class="header" slot='header'>积星享好礼</p>
			<p class="color" slot='color'>随时关注您的星享俱乐部好礼，扫一扫我的二维码累积星星兑换好礼。</p>
			<img src="../assets/images/apple-watch-rewards@2x.png" slot='rightImg' class="right" />
		</AppleItem>
		<AppleItem>
			<p class="header" slot='header'>移动支付</p>
			<p class="color" slot='color'>扫一扫星礼卡完成支付，查看卡内余额，Apple Watch轻松搞定。</p>
			<img src="../assets/images/apple-watch-pay@2x.png" slot='rightImg' class="right" />
		</AppleItem>
		<AppleItem>
			<p class="header" slot='header'>查找门店</p>
			<p class="color" slot='color'>快速发现离您最近的星巴克门店，为您指引路线并显示所需时间。</p>
			<img src="../assets/images/apple-watch-stores@2x.png" slot='rightImg' class="right" />
		</AppleItem>

		<!--第三部分-->
		<div class="a_pat3">
			<p>为了能正常使用，请确认您IPhone中的
				<a href="#">星巴克移动应用版本为4.1.8或以上</a>。 苹果公司标志及iPhone是苹果公司在美国及其他国家的注册商标。Apple Watch是苹果公司的注册商标，苹果应用商店是苹果公司的服务商标。
			</p>
			<div class="apps">
				<img src="../assets/images/aa.png" />
			</div>
		</div>

		<!--第四部分-->

	</div>
</template>

<script>
	import AppleItem from './appleItem'
	export default {
		components: {
			AppleItem
		}
	}
</script>

<style lang="less">
	.a_part1 {
		height: 455/64rem;
		width: 100%;
		background-color: #E8E8E8;
		box-sizing: border-box;
		padding: 0 20/64rem;
		.title {
			font-size: 26/64rem;
			text-align: center;
			color: #000;
			padding-top: 30/64rem;
		}
		.a_con {
			font-size: 17/64rem;
			padding: 15/64rem;
			letter-spacing: .1em;
			p {
				margin: 12/64rem auto 24/64rem auto;
				line-height: 27/64rem;
			}
			a {
				text-decoration: none;
				color: #00A862;
			}
		}
		.a_img {
			width: 100%;
			text-align: center;
			img {
				width: 300/64rem;
			}
		}
	}
	/*第三部分*/
	
	.a_pat3 {
		width: 100%;
		height: 270/64rem;
		background-color: #F7F7F7;
		padding: 0 25/64rem;
		font-size: 17/64rem;
		box-sizing: border-box;
		line-height: 27/64rem;
		letter-spacing: .1em;
		text-indent: 1em;
		padding-top: 50/64rem;
		border-top: solid 1px #999;
		a {
			color: #00A862;
			text-decoration: none;
		}
	}
	
	.apps {
		position: fixed;
		bottom: 65/64rem;
		right: 0;
		img {
			width: 190/64rem;
		}
	}
</style>
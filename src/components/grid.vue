<template>
	<div class="grid">
		<div>
			<h2>星享俱乐部</h2>
			<p>
				开启您的星享之旅，星星越多、会员等级越高、好礼越丰富。
				<a href="#" class="button-link">了解更多 ›</a>
			</p>
			<p class="lastP">
				<a href="#">注册</a>
				<a href="#">登陆</a>
			</p>
		</div>
		<div class="imgae">
			<img src="../assets/home/logo-msr-new.png" alt="" />
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
	.grid {
		box-sizing: border-box;
		padding: 0 16/50rem;

		h2 {
			text-align: center;
			font-weight: normal;
			margin-bottom: 12/50rem;
			padding-top: 20/50rem;
		}

		p {
			margin: 0 0 24/50rem;
			padding: 0 24/50rem;
			font-size: 16/50rem;
			letter-spacing: 0.4px;
			line-height: 24/50rem;
			text-align: center;
			color: rgba(0, 0, 0, 0.56);

			a {
				text-decoration: none;
				color: #C2A661;
				text-align: center;
				margin-top: 10/50rem;
				display: block;
			}
		}

		.lastP {
			a {
				display: inline-block;
				margin-right: 6/50rem;
				background: none;
				border: 1px solid #00A862;
				border-radius: 48px;
				box-sizing: border-box;
				padding: 6/50rem 18/50rem;
				color: #00A862;
			}
		}

		.imgae {
			display: flex;
			justify-content: center;
			height: 130/50rem;

			img {
				width: 236/50rem;
				height: 72/50rem;
			}
		}
	}
</style>

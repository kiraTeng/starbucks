<template>
	<div class="starVip">
		<h2>星巴克精选</h2>
		<p>在星巴克天猫旗舰店发现更多咖啡心意</p>
		<ul>

			<li>

				<img src="../assets/home/tmall-card-01.png" alt="">
				<p class="title-1"><strong>会员星礼包</strong></p>
				<p class="margin2">
					星享卡新升级<br>
					更多心意好礼
				</p>
				<p class="caption">了解更多 ›</p>

			</li>
			<li>

				<img src="../assets/home/tmall-card-02.png" alt="">
				<p class="title-1"><strong>星礼卡</strong></p>
				<p class="margin2">
					用一份心礼<br>
					让心意相随
				</p>
				<p class="caption">了解更多 ›</p>

			</li>
			<li>

				<img src="../assets/home/tmall-eticket.png" alt="">
				<p class="title-1"><strong>电子产品券</strong></p>
				<p class="margin2">
					心意<br>
					从这一杯开始
				</p>
				<p class="caption">了解更多 ›</p>

			</li>
			<li>

				<img src="../assets/home/tmall-reserve.png" alt="">
				<p class="title-1"><strong>咖啡生活</strong></p>
				<p class="margin2">
					星巴克<br>
					用心制作
				</p>
				<p class="caption">了解更多 ›</p>

			</li>
		</ul>
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
	.starVip {
		background: #f7f7f7;
		padding-top: 36/50rem;
		padding-left: 16/50rem;
		padding-right: 16/50rem;
		box-sizing: border-box;
		width: 100%;

		h2 {
			text-align: center;
			font-weight: normal;
			margin-bottom: 12/50rem;
		}

		strong {
			font-size: 14/50rem;
		}

		p {
			padding-left: 24/50rem;
			padding-right: 24/50rem;
			letter-spacing: 0.4px;
			text-align: center;
			color: rgba(0, 0, 0, 0.56);
			line-height: 30/50rem;
		}

		.title-1 {
			margin-top: 37/50rem;
		}

		ul {
			margin-top: 48/50rem;
			list-style: none;
			display: flex;
			justify-content: space-around;
			width: 100%;
			flex-wrap: wrap;

			li {
				background: #fff;
				box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12);
				margin: 0 5px;
				width: 130/50rem;
				font-size: 12/50rem;
				box-sizing: border-box;
				position: relative;
				height: 180/50rem;
				margin-bottom: 48/50rem;

				.caption {
					font-size: 12/50rem;
					color: #C2A661;
					font-weight: 400;
					opacity: 0.7;
					text-transform: none
				}

				img {
					width: 101/50rem;
					height: 72/50rem;
					position: absolute;
					top: -35/50rem;
					left: 50%;
					transform: translateX(-50%);
					z-index: 999;

				}
			}
		}
	}
</style>

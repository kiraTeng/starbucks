<template>
	<div class="bannerWrap">
		<div class="swiper-container" :class="swiperid">
			<div class="swiper-wrapper">
				<slot name="swiper-con"></slot>
			</div>
			<!-- 如果需要分页器 -->
			<!-- <div class="swiper-pagination"></div> -->
			
			<!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
			<div class="swiper-button-next swiper-button-white"></div>
			<!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
		</div>

		<div class="poster">广告 </div>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';
	export default {
		data() {
			return {};
		},
		props: {
			swiperid: {
				type: String,
				default: ''
			}, //唯一标识
			paginationshow: {
				type: Boolean,
				default: true
			}, //是否显示分页器
			paginationtype: {
				type: String,
				default: 'bullets'
			}, //分页器的样式
			//切换效果
			myEffect: {
				type: String,
				default: 'slide'
			},
			//是否自动播放
			myAuto: {
				type: Boolean,
				default: true
			},
			//循环模式
			myLoop: {
				type: Boolean,
				default: true
			}
		},
		mounted: function() {
			var mySwiper = new Swiper('.' + this.swiperid, {
				autoplay: this.myAuto,
				loop: this.myLoop, // 循环模式选项
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
					type: this.paginationtype
				},
				 navigation: {
      nextEl: '.swiper-button-next',
     
    },
				effect: this.myEffect //slide cube fade coverflow
			});
		}
	};
</script>

<style lang="less">
	.bannerWrap {
		width: 100%;
		height: 350/50rem;
		background-color: #ccc;
		position: relative;
		.swiper-container {
			height: 100%;
			img {
				width: 100%;
				height: 350/50rem;
			}
		}
		.poster {
			position: absolute;
			top: 10px;
			right: 10px;
			padding: 0px 6px;
			color: #fff;
			background-color: #000;
			font-size: 12/50rem;
			line-height: 180%;
			opacity: 0.6;
			border-radius: 2px;
			z-index: 200;
		}
	}
 
 

	
</style>

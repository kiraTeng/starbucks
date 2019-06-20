<template>
	<div class="bannerCon">
		<slot name='imgSrc'></slot>
		<slot name='title'></slot>
		<div :class="{txtShow:bol}">
			<slot name='desc'></slot>
			<div ><i @click="txtShow()"></i></div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bol:false
			};
		},
		methods:{
			txtShow(){
				this.bol=!this.bol
			}
		}
	}
</script>

<style lang="less">
div.bannerCon{
	text-align: center;
	color: black;
	padding-bottom: 50/50rem;
	font-size: 16/50rem;
	line-height: 25.6/50rem;
	letter-spacing:0.4px;
	
	background-color: #ffffff;
	&:first-of-type{
		i{
			display: none;
		}
	}
	.txtShow{
		p{
			height: 100% !important;
		}
		&:after{
			opacity: 0 !important;
		}
		i{
			transform: translateX(-50%) rotate(180deg);
			top: 0;
		}
	}
	&:not(:first-of-type){
		padding-top: 12/50rem;
		>div{
			position: relative;
			p{
				height: 48/50rem;
				transition:height 0.4s ease-in-out;
				box-shadow:inset 0 -5px 20px #fff;
				margin-bottom: 24/50rem;
			}
			div{				
				position: relative;
				z-index: 1;
				width: 100%;
			}
			&:after{
				background:linear-gradient(rgba(255, 255, 255, 0) 24px, #fff);
				height: 100%;
				opacity: 1;
				position: absolute;
				transition-duration:.1S;
				transition-property:opacity;
				width: 100%;
				content: '';
				display: block;
				left: 0;
				top: 0;
			}
		}
	}
	
	>img{
		width: 320/50rem;
		height: 320/50rem;
	}
	h3{
		margin-top: 30/50rem;
		font-size: 20/50rem;
		line-height: 28/50rem;
		margin-bottom: 12/50rem;
		font-weight: normal;
	}
	>div{
		p{
		  padding: 0 20/50rem;
		  overflow: hidden;
		  
		}
		i{
			display: block;
			width: 24/50rem;
			height: 24/50rem;
			margin: 0 auto;
			background-image: url(../../assets/menu/featured/icon-chevron-down.png);
			transition:transform 0.3s ease-in-out;
			position: absolute;
			z-index: 10;
			left: 50%;
			transform: translateX(-50%);
			top: -24/50rem;
			background-repeat: no-repeat;
		}
		
	}
}
</style>

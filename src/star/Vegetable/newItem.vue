<template>
	<li>
		<img :src="imgSrc" alt="">
		<p>{{product}}</p>
	</li>
	
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['imgSrc','product']
	}
</script>

<style lang="less">
ul.newArrival{
	margin-bottom: 50/50rem !important;
	display: flex;
	padding: 0 16/50rem;
	list-style: none;
	flex-flow: wrap;
	li{
		width:144/50rem;
		img{
			display: block;
			padding: 12/50rem;
			width: 144/50rem;
			height: 144/50rem;
			box-sizing: border-box;
		}
		p{
			line-height: 25.6/50rem;
			font-size: 16/50rem;
			text-align: center;
			margin-bottom: 24/50rem;
		}
	}
}
</style>

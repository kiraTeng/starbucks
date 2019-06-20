<template>
	<div class="container1">
		
		<div class="more-header"><img src="../../assets/more/logo.png" alt=""></div>
		<MoreBD></MoreBD>
		<Moreft></Moreft>
	</div>
</template>

<script>

	import MoreBD from '@/components/moreBD';
	import Moreft from '@/components/more-footer';
	export default {
		components: {
			MoreBD,Moreft
		}
	}

</script>

<style lang="less">
	.container1{
		
		.more-header{
			box-sizing: border-box;
			display: block;
			height: 68/50rem;
			padding: 16/50rem;
			img{
				float: left;
				width: 36/50rem;
			}
		}
	}
</style>
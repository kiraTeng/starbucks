<template>
	<div :class="{'container1':true}" v-show="isShow">
		
		<div class="more-header"><img src="../../assets/more/logo.png" alt=""><i class="fa fa-close" @click="close"></i></div>
		<MoreBD></MoreBD>
		<Moreft></Moreft>
	</div>
</template>

<script>
	import MoreBD from '@/components/moreBD';
	import Moreft from '@/components/more-footer';
	export default {
		data(){
			return{
				isShow:true
			}
		},
		components: {
			MoreBD,Moreft
		},
		methods:{
			close(){
				console.log(111)
				this.isShow= false;
				this.$router.push("/home")
			}
		
		
		},
		computed:{
			
		},
// 		methods:{
// 			closeMore(){
// 				this.$store.commit('moreShow')
// 			}
		
	
	}
</script>

<style lang="less">
// 	.moreIsShow{
// 		display: block !important;
// 	}
	.container1{
		position: fixed;
		z-index: 9999;
		background: #fff;
		width: 320/50rem;
		height: 569/50rem;
		top: 0;
		overflow-y: scroll;
		.more-header{
			box-sizing: border-box;
			display: block;
			height: 68/50rem;
			padding: 16/50rem;
			img{
				float: left;
				width: 36/50rem;
			}
			i{
				float: right;
				font-size: 30/50rem;
			}
		}
	}
</style>
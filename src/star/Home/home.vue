<template>
	<div >
		<Header title="心情惬意，来杯咖啡吧 ☕"></Header>
		<Banner swiperid="homeswiper123" paginationtype="fraction" myEffect="slide">
			<div slot="swiper-con" class="swiper-slide"><img src="../../assets/home/banner1.jpg" alt="" /></div>
			<div slot="swiper-con" class="swiper-slide"><img src="../../assets/home/banner2.jpg" alt="" /></div>
			<div slot="swiper-con" class="swiper-slide"><img src="../../assets/home/banner3.jpg" alt="" /></div>
			<div slot="swiper-con" class="swiper-slide"><img src="../../assets/home/banner4.jpg" alt="" /></div>
			<div slot="swiper-con" class="swiper-slide"><img src="../../assets/home/banner5.gif" alt="" /></div>
		</Banner>
		<Poster>

		</Poster>
		<Grid></Grid>
		<Starvip></Starvip>
		<Scroll></Scroll>
		
		

	</div>
</template>
<script>
	import Header from '../../components/header';
	import Banner from '@/components/banner1.vue';
	import Poster from '@/components/poster.vue';
	import Grid from '@/components/grid.vue';
	import Starvip from '@/components/starVip.vue';
	import Scroll from '@/components/scroll.vue';
	
	export default {
		components: {
			Header,
			Banner,
			Poster,
			Grid,
			Starvip,
			Scroll
			
		},
		beforeCreate() {
			window.scrollTo(0,0);
		},
		computed:{
			moreShow(){
				return this.$store.state.moreShow
			}
		},
		methods:{
			test(){
				this.$store.state.moreShowt
			}
		}
			
		
		}
</script>

<style>
	
</style>

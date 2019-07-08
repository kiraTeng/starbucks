<template>
	<div>
		<!--<router-view></router-view>-->
		<Map></Map>
		<list title='芜湖银泰城店' num='1' desc='芜湖市 弋江区 芜湖银泰城地上一层1-019号铺位 利民西路189号' km='1063.8 km' :selected='selected' @change='getVal' mark='mine' >
			<img src="../../assets/map/delivery.png" slot='img' />
			<img src="../../assets/map/icon-pin-solid-grey.svg" class="rightImg" slot='greenImg' />
			<img src="../../assets/map/icon-pin-solid-green.svg" class="activeImg" slot='rightImg' />
			<img src="../../assets/map/icon-info-green.svg" slot='leftImg' class="leftImg" @click="checked" />
			
		</list>
		<list title='深圳易思博软件大厦店' num='2' desc='深圳市 南山区 易思博软件大厦首层01单元 海天二路' km='413 m' :selected='selected' @change='getVal' mark='more' >
			<img src="../../assets/map/delivery.png" slot='img' />
			<img src="../../assets/map/icon-pin-solid-grey.svg" class="rightImg" slot='greenImg' />
			<img src="../../assets/map/icon-pin-solid-green.svg" class="activeImg" slot='rightImg' />
			<img src="../../assets/map/icon-info-green.svg" slot='leftImg' class="leftImg"  @click="checked"/>
		</list>
		<list title='深圳海岸城店' num='3' desc='深圳市 南山区 海岸城购物中心２层291号店铺 海德一道' km='690 m' :selected='selected' @change='getVal' mark='haian' >
			<img src="../../assets/map/delivery.png" slot='img' />
			<img src="../../assets/map/icon-pin-solid-grey.svg" class="rightImg" slot='greenImg' />
			<img src="../../assets/map/icon-pin-solid-green.svg" class="activeImg" slot='rightImg' />
			<img src="../../assets/map/icon-info-green.svg" slot='leftImg' class="leftImg"  />
		</list>
		<list title='深圳学府路店' num='4' desc='深圳市 南山区 中润大厦一层C商铺 南油大道西、学府路南' km='748 m' :selected='selected' @change='getVal' mark='xuefu' >
			<img src="../../assets/map/delivery.png" slot='img' />
			<img src="../../assets/map/icon-pin-solid-grey.svg" class="rightImg" slot='greenImg' />
			<img src="../../assets/map/icon-pin-solid-green.svg" class="activeImg" slot='rightImg' />
			<img src="../../assets/map/icon-info-green.svg" slot='leftImg' class="leftImg" />
		</list>
		<list title='深圳海岸城2店' num='5' desc='深圳市 南山区 海岸城购物中心4楼432号铺 文心5路33号' km='758 m' :selected='selected' @change='getVal' mark='anhan2' >
			<img src="../../assets/map/delivery.png" slot='img' />
			<img src="../../assets/map/icon-pin-solid-grey.svg" class="rightImg" slot='greenImg' />
			<img src="../../assets/map/icon-pin-solid-green.svg" class="activeImg" slot='rightImg' />
			<img src="../../assets/map/icon-info-green.svg" slot='leftImg' class="leftImg" />
		</list>
		<Dress >
			
		</Dress>
	</div>
</template>

<script>
	import Map from '../../components/map'
	import list from '../../components/list'
	import Dress from '../../components/desc'
	export default {
		components: {
			Map,
			list,
			Dress,
			
		},
		data() {
			return {
				currentIndex: 0,
				isShow: false,
				selected:'',
				
				
			}
		},
		
		methods: {
			getVal(val) {
				this.selected = val
			},
			checked(){
				this.$store.commit('map')
			}
			
		},
		

	}
</script>

<style lang="less">

</style>
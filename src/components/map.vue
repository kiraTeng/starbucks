<template>
	<div>
		<div class="header"><img src="../assets/map/icon-locator-green.svg" /> <span>广东</span>
			<span>深圳</span> <span>南山</span>
			<img src="../assets/map/icon-locator-arrow.svg" v-on:click='change' />

			<div class="search">
				<input type="text" class="search-input" placeholder="输入地址查找门店" />
				<img src="../assets/map/icon-search.svg" />
				<span class="filter" @click="change2">筛选</span>
			</div>
		</div>

		<el-amap vid='amapdemo' :center='center' :zoom='zoom' style='height: 300px;'></el-amap>
		<div class="dress" v-show='isShow'>
			<p class="now">当前定位：</p>
			<p class="check">广东 深圳 福田</p>
			<p class="other">选择其他 <span>省份</span> > 城市 > 县区</p>
			<div class="a-z">
				<p>
					<span>A-G</span>
					<span>北京</span>
					<span>安徽</span>
					<span>福建</span>
					<span>广东</span>
					<span>广西</span>
					<span>重庆</span>
				</p>
				<p><span>贵州</span> <span>甘肃</span></p>
				<p>
					<span>H-K</span>
					<span>河北</span>
					<span>内蒙古</span>
					<span>吉林</span>
					<span>黑龙江</span>
					<span>江苏</span>

				</p>
				<p><span>江西</span> <span>河南</span>
					<span>湖北</span> <span>湖南</span>
					<span>海南</span>
				</p>
				<p>
					<span>L-S</span>
					<span>山西</span>
					<span>辽宁</span>
					<span>上海</span>
					<span>山东</span>
					<span>四川</span>
					<span>陕西</span>
				</p>
				<p><span>青海</span> <span>宁夏</span></p>
				<p>
					<span>T-Z</span>
					<span>天津</span>
					<span>浙江</span>
					<span>云南</span>
					<span>西藏</span>
					<span>新疆</span>

				</p>
			</div>

			<p class="only">仅可搜索中国大陆地区门店 <span>确认</span></p>
		</div>

		<div class="filter-box" v-show='showis'>
			<img src="../assets/map/icon-close.svg" class="close" @click='showtime' />
			<h2>筛选</h2>
			<div class="border">
				<p class="click">点击筛选出含一下商品的门店 <span v-show="clear">清除</span></p>

			</div>

			<ul class="filter-list">
				<li  v-for="(item,index) in checkList" :class="{active:item.check}" @click="show(item)">
					<img :src="item.url" /> {{item.name}}
					<img :src="item.url2" class="checkgo" v-show="item.check" />
				</li>
			</ul>
			 <span class="yes" @click="showtime" >确认</span>
		</div>

	</div>
</template>

<script>
	export default {

		data() {
			return {
				isShow: false,
				showis: false,
				show3: true,
				zoom: 16,
				center: [116.397428, 39.90923],
				resizeEnable: true,
				currentInde: '-1',
				clear:false,
				checkList: [{
						name: '星巴克臻选™',
						url: require('../assets/map/icon-star.svg'),
						url2: require('../assets/map/icon-checked-green.svg'),
						check: false,
						num:0
					},
					{
						name: '星巴克臻选™特调饮品™',
						url: require('../assets/map/icon-black-eagle.svg'),
						url2: require('../assets/map/icon-checked-green.svg'),
						check: false,
						num:0
					},
					{
						name: '星巴克冰淇淋系列™',
						url:require( '../assets/map//icon-coffee-meet-icecream.svg'),
						url2:require( '../assets/map/icon-checked-green.svg'),
						check: false,
						num:0
					},
					{
						name: '气致™冷萃咖啡™',
						url: require('../assets/map//icon-nitro-coldbrew.svg'),
						url2: require('../assets/map/icon-checked-green.svg'),
						check: false,
						num:0
					},
					{
						name: '啡快™ – 在线点 到店取™',
						url: require('../assets/map/icon-pour-over.svg'),
						url2:require ('../assets/map/icon-checked-green.svg'),
						check: false,
						num:0
					},
					{
						name: '专星送™',
						url: require('../assets/map/delivery.png'),
						url2: require('../assets/map/icon-checked-green.svg'),
						check: false,
						num:0
					}

				]
			}
		},
		methods: {
			change() {
				this.isShow = !this.isShow
			},
			change2() {
				this.showis = !this.showis
			},
			showtime() {
				this.showis = !this.showis
			},
			show(item) {
				
				item.check=!item.check;
				
			}

		}

	}
</script>

<style lang="less">
	.header {
		height: 100/64rem;
		/*line-height: 20/64rem;*/
		/*border-bottom: 2px solid #F0F0F0 ;*/
		padding-left: 10/64rem;
		position: relative;
		padding-top: 10/64rem;
		img {
			height: 20/64rem;
			position: absolute;
			top: 50%;
			transform: translateY(-167%);
		}
		img:nth-of-type(2) {
			width: 10/64rem;
			padding-left: 10/64rem;
		}
		span {
			font-size: 14/64rem;
			display: inline-block;
			margin-top: 12/64rem;
		}
		span:nth-of-type(1) {
			font-size: 14/64rem;
			padding-left: 16/64rem;
		}
	}
	
	.dress {
		padding: 10/64rem;
		padding-bottom: 50/64rem;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.38);
		background: #ffff;
		position: absolute;
		top: 50/64rem;
		width: 100%;
		
		z-index: 9999;
		.now {
			padding-bottom: 10/64rem;
			font-size: 12/64rem;
			color: rgba(0, 0, 0, 0.56);
		}
		.check {
			display: inline-block;
			color: #00A862;
			font-size: 14/64rem;
			cursor: pointer;
			border: 1px solid #00A862;
			border-radius: 2px;
			padding: 3/64rem 10/64rem;
		}
		.other {
			padding-top: 20/64rem;
			color: rgba(0, 0, 0, 0.56);
			font-size: 12/64rem;
			span {
				color: #00A862;
				padding: 0 8/64rem;
			}
		}
	}
	
	.a-z {
		font-size: 14/64rem;
		color: #212121;
		padding: 20/64rem 0;
		p {
			padding: 10/64rem 0;
			span {
				padding: 0 10/64rem;
			}
		}
		p:nth-child(2n) {
			padding-left: 48/64rem;
		}
	}
	
	.only {
		color: rgba(0, 0, 0, 0.56);
		font-size: 13/64rem;
		position: relative;
		span {
			font-size: 14/64rem;
			display: inline-block;
			background: #F7F7F7;
			position: absolute;
			left: 70%;
			width: 40/64rem;
			text-align: center;
			padding: 4/64rem 10/64rem;
			border-radius: 40%;
		}
	}
	
	.search {
		padding: 10/64rem;
		position: relative;
		/*z-index: -1;*/
		.search-input {
			border: none;
			outline: none;
			border-bottom: 1px solid rgba(0, 0, 0, 0.12);
			width: 82%;
			font-size: 18/64rem;
			padding-bottom: 10/64rem;
			padding-top: 6/64rem;
		}
		img {
			position: absolute;
			top: 1.3125rem;
			right: 78/64rem;
			height: 22/64rem;
			width: 22/64rem;
			padding-bottom: 10/64rem;
		}
		.filter {
			font-size: 18/64rem !important;
			color: #00A862;
		}
	}
	
	.filter-box {
		position: absolute;
		/*margin: 20/64rem;*/
		box-sizing: border-box;
		top: 0;
		width: 100%;
		height:700/64rem;
		overflow-y: hidden;
		background: #fff;
		z-index: 999;
		.close {
			position: absolute;
			right: 20/64rem;
			top: 20/64rem;
			width: 24/64rem;
			height: 20/64rem;
		}
		h2 {
			padding-top: 60/64rem;
			padding-left: 20/64rem;
		}
		.click {
			display: block;
			/*width: 375/64rem;*/
			box-sizing: border-box;
			padding: 20/64rem 0;
			color: rgba(0, 0, 0, 0.56);
			font-size: 16/64rem;
			padding-left: 20/64rem;
			position: relative;
			border-bottom: 1px solid #E0E0E0;
			span {
				position: absolute;
				right: 10/64rem;
			}
		}
		li {
			list-style: none;
			font-size: 17/64rem;
			color: rgba(0, 0, 0, 0.56);
			padding: 20/64rem 10/64rem;
			position: relative;
			img {
				width: 24/64rem;
				height: 24/64rem;
			}
		}
		li.active {
			background: #e0e0e0;
		}
		.filter-list {
			/*padding-left: 10/64rem;*/
		}
		.checkgo {
			position: absolute;
			right: 20/64rem;
		}
	}
	
	.container {
		width: 100%;
		height: 300/64rem;
	}
	.yes{
		width: 70/64rem;
		border-radius: 20/64rem;
		text-align: center;
		display: inline-block;
		height: 30/64rem;
		line-height: 30/64rem;
		font-size:16/64rem;
	    color: #fff;
	    background: #00A862;
	    margin-left: 300/64rem;
	    margin-top: 10/64rem;
	}
</style>
<template>
	<div :class="{menu:true,searchPage:menuShow}">
		<h1>菜单</h1>
		<ul>
			<li :class="{active:currentIndex==1}" @click="currentIndex=1">
				<router-link to="/vegetable">季度精选</router-link>
			</li>
			<li :class="{active:currentIndex==2}" @click="currentIndex=2">
				<router-link to="/vegetable/drinks">饮料</router-link>
			</li>
			<li :class="{active:currentIndex==3}" @click="currentIndex=3">
				<router-link to="/vegetable/foods">美食</router-link>
			</li>
			<li :class="{active:currentIndex==4}" @click="currentIndex=4">
				<router-link to="/vegetable/coffee">咖啡产品</router-link>
			</li>
			<li :class="{active:currentIndex==5}" @click="currentIndex=5">
				<router-link to="/vegetable/product">商品</router-link>
			</li>
		</ul>
		<div>
			<router-view></router-view>
		</div>
		<Advertisement></Advertisement>
		<div class="con">
			<Banneritem>
				<img slot='imgSrc' src="../../assets/menu/featured/banner-1-mobile.jpg" alt="">
				<h3 slot='title'>玩味冰调™ 夏天自造</h3>
				<p slot='desc'>窗外蝉鸣声响起，那是夏天又来到的信号。<br>这次，我们将用玩味冰调™致敬夏天，用焕然一新的沁爽活力，赶走夏日的沉闷，自在享受夏日时光。富于层次感的口感，带来不一样的味蕾体验。零脂、真材实料、不添加化学合成色素和甜味剂，让这一杯带你轻盈一“夏”。</p>

			</Banneritem>
			<Banneritem>
				<img slot='imgSrc' src="../../assets/menu/featured/banner-2-mobile.jpg" alt="">
				<h3 slot='title'>一口轻盈 清爽一夏</h3>
				<p slot='desc'>星轻盈系列，蛋糕也可以清爽一夏无负担。<br>采用风味酸奶为原料，搭配大颗真实果粒，清新轻甜，满足想吃甜点的小心思。<br>这一季还加入新品夏日趣玩西小瓜蛋糕，夏日风味，轻盈无负担，可爱又好吃，还可以很好玩哦~</p>
			</Banneritem>
			<Banneritem>
				<img slot='imgSrc' src="../../assets/menu/featured/banner-3-mobile.jpg" alt="">
				<h3 slot='title'>趣玩一夏</h3>
				<p slot='desc'>从玩味冰杯设计中精心挑选出三款设计作为星礼卡卡面设计，每款搭配上不同形象的卡套挂件，同时背面可自由DIY你的活力与张扬，让这个夏天充满新奇与乐趣。<br></p>
			</Banneritem>
			<Banneritem>
				<img slot='imgSrc' src="../../assets/menu/featured/banner-4-mobile.jpg" alt="">
				<h3 slot='title'>盛夏甜心</h3>
				<p slot='desc'>在这个夏天，我们又迎来了一群新的小伙伴！它们是羊驼、树懒、浣熊和小松鼠。这群可爱的小伙伴们善良、温和，喜欢交朋友。这次它们来到了彩虹奇幻乐园，希望能够与我们来一次亲密的接触，让我们一起徜徉在咖啡的奇妙世界里吧！<br></p>
			</Banneritem>
			<Banneritem>
				<img slot='imgSrc' src="../../assets/menu/featured/banner-5-mobile.jpg" alt="">
				<h3 slot='title'>“泰”美好</h3>
				<p slot='desc'>“MUAN
					JAI”它的名字在泰国北方方言中有“全心全意寻找幸福”之意。这些产自泰国的咖啡豆有着厚重和圆润的口感，并伴有香料般的风味。这一次，我们选择它和亚太其他产区的高醇度咖啡豆拼合，每一口弥漫着胡椒般风味和森林般的清香。<br></p>
			</Banneritem>
			<Banneritem>
				<img slot='imgSrc' src="../../assets/menu/featured/banner-6-mobile.jpg" alt="">
				<h3 slot='title'>属于盛夏的咖啡香气</h3>
				<p slot='desc'>口感无可挑剔而层次丰富的精选咖啡豆，令人期待又愉悦。<br>轻尝尽享独特风味，盈盈果香与清甜花香平衡而完美的绽放于味蕾<br>薰衣草香气与樱桃可乐同多汁柠檬的相遇，唤起仲夏美梦。</p>
			</Banneritem>
			<h2>所有新品</h2>
			<ul class="newArrival">
				<Newitem v-for="(item,index) in newArrivalData" :key='index' :imgSrc='item.img_url' :product='item.topic_title'></Newitem>
			</ul>
		</div>
		<button class="searchMenu" v-show="btnShow" @click="showMenu()">搜索菜单</button>
		<Searchmenu v-show="menuShow"></Searchmenu>
	</div>

</template>

<script>
	import Banneritem from './bannerItem'
	import Advertisement from '../../components/advertisement.vue'
	import Newitem from './newItem'
	import Searchmenu from '@/star/Vegetable/searchMenu.vue'
	export default {
		data() {
			return {
				currentIndex: '1',
				newArrivalData: []
			}
		},
		computed:{
			menuShow(){
				return this.$store.state.menuShow
			},
			btnShow(){
				return this.$store.state.btn
			}
			
		},
		components: {
			Banneritem,
			Advertisement,
			Newitem,
			Searchmenu
		},
		mounted() {
			this.getNewData()
		},
		beforeCreate() {
			window.scrollTo(0,0);
		},
		methods: {
			getNewData() {
				this.$axios.get('../../../static/data/new.json')
					.then(res => {
						this.newArrivalData = res.data.group
					})
			},
			showMenu(){
				this.$store.commit('show')
			}
		}
	}
</script>

<style lang="less">
	button.searchMenu {
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.38);
		border-radius: 20px;
		position: fixed;
		right: 16/50rem;
		bottom: 71/50rem;
		background: #00A862;
		color: #fff;
		font-weight: 700;
		font-size: 16/50rem;
		padding: 12/50rem 24/50rem;
		border: 1px solid #00A862;
		outline: none;			
	}
	div.searchPage{
		&::-webkit-scrollbar {
			display: none;
		}
		height:500/50rem;
		overflow-y:hidden;
	}
	.menu {
		

		padding-top: .32rem;
		position: relative;

		>h1 {
			font-size: 24/64rem;
			margin-bottom: .24rem;
			padding-left: .32rem;
		}

		>ul {
			display: flex;
			width: 100%;
			overflow-x: scroll;
			overflow-y: hidden;
			white-space: nowrap;
			box-sizing: border-box;
			padding-left: .36rem;
			padding-right: .4rem;

			&::-webkit-scrollbar {
				display: none;
			}

			li {
				list-style: none;

				a {
					display: inline-block;
					text-decoration: none;
					color: #707070;
					padding-bottom: .06rem;
					border-bottom: 3px solid #fff;
					padding-top: .24rem;
					font-size: .32rem;
					margin-right: .50rem;
				}
			}

			.active {
				a {
					color: #212121;
					font-weight: bold;
					border-bottom: 3px solid #00A862;
				}
			}
		}
	}

	.bannerCon:nth-of-type(6) {
		position: relative;
		top: -30/50rem;
		padding-bottom: 25/50rem;
		margin-bottom: 0;
	}

	.con {
		background-color: #f7f7f7;

		>h2 {
			text-align: center;
			font-weight: normal;
			color: #000;
			font-size: 20/50rem;
			line-height: 28/50rem;
		}
	}	
	
	@keyframes pop {
		0% {
			transform: scale(0.1);
		}
	
		100% {
			transform: scale(1);
		}
	}
</style>

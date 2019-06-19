<template>
	<div class="drinks">
		<nav>
			<div>
				<router-link to="/vegetable"><img src="../../assets/menu/featured/icon-chevron-left.png" alt=""></router-link>
				<h2>饮料</h2>
			</div>
			<ul>
				<li :class="{active:isChosen==1}" @click="isChosen=1"><router-link to="/vegetable/drinks/drinkAll">全部</router-link></li>
				<li :class="{active:isChosen==2}" @click="isChosen=2"><a href="#">星巴克玩味冰调™</a></li>
				<li :class="{active:isChosen==3}" @click="isChosen=3"><a href="#">手工调制浓缩咖啡</a></li>
				<li :class="{active:isChosen==4}" @click="isChosen=4"><a href="#">星冰乐®</a></li>
				<li :class="{active:isChosen==5}" @click="isChosen=5"><a href="#">茶瓦纳™</a></li>
				<li :class="{active:isChosen==6}" @click="isChosen=6"><a href="#">经典巧克力饮品</a></li>
				<li :class="{active:isChosen==7}" @click="isChosen=7"><a href="#">咖啡融合冰淇淋</a></li>
				<li :class="{active:isChosen==8}" @click="isChosen=8"><a href="#">星巴克冷萃咖啡系列</a></li>
				<li :class="{active:isChosen==9}" @click="isChosen=9"><a href="#">气致™冷萃咖啡</a></li>
			</ul>
		</nav>
		<Advertisement></Advertisement>
		<div class="drinkCon">
			<router-view></router-view>
		</div>
		<button class="searchMenu" v-show="btnShow" @click="showMenu()">搜索菜单</button>
		<Searchmenu v-show="menuShow"></Searchmenu>
	</div>
	
</template>

<script>
	import Advertisement from '../../components/advertisement.vue'
	import Searchmenu from '@/star/Vegetable/searchMenu.vue'
	export default {
		data() {
			return {
				isChosen:1
			};		
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
			Advertisement,
			Searchmenu
		},
		beforeCreate() {
			this.$router.push('/vegetable/drinks/drinkAll')
		},
		methods:{
			showMenu(){
				this.$store.commit('show')
			}
		}
	}
</script>

<style lang="less">
div.drinks{
	position: relative;
	// margin-bottom: 24/50rem;
	nav{
		padding: 16/50rem 0 0 16/50rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		
		>div{
			display: flex;
			a{
				width:28/50rem;
				height: 28/50rem;
				padding: 3/50rem;
				background: rgba(0, 0, 0, 0.05);
				margin: 1/50rem 8/50rem 1/50rem 0;
				box-sizing: border-box;
				img{
					margin: 2/50rem 0 2/50rem 6/50rem;
					width: 18/50rem;
				}
			}
			h2{
				font-size: 22/50rem;
				line-height: 30.8/50rem;
				margin-bottom: 7/50rem;
				height: 30.8/50rem;
			}
		}
		>ul{
			display:flex;
			list-style: none;
			flex-flow: nowrap;
			overflow-x: scroll;
			overflow-y:hidden;
			white-space: nowrap;
			padding-left: 4/50rem;
			&::-webkit-scrollbar {
				display: none;
			}
			li{				
				a{
					color: #707070;
					border-bottom: 3px solid #fff;
					display: block;
					text-decoration: none;
					padding: 12/50rem 0 3/50rem;
					margin:0 18/50rem 0 0;
					font-size: 16/50rem;
					line-height: 25.6/50rem;
					letter-spacing: .4px;
				}
			}
			.active{
				a{
					color:#212121;
				border-bottom: 3px solid #00a862;				
				font-weight: bold;
				}
			}
		}
	}
	div.drinkCon{
		background-color: #f7f7f7;	
		padding: 19/50rem 16/50rem 80/50rem 16/50rem;
		margin-bottom: 24/50rem;
		margin-top: 5/50rem;
	}
}
</style>
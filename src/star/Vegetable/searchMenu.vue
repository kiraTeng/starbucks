<template>
	<div class="searchMenuCon" >
		<div class="conHeader"><span @click='closeMenu()'></span></div>
		<div class="conMain">
			<div class="searchZon">
				<input type="text" placeholder="搜索菜单">
				<img src="../../assets/menu/searchMenu/search.png" alt="">
			</div>
			<p class="tips">大家都在搜</p>
			<ul class="searchList">
				<li v-for="(item,index) in searchData" :key='index'>
					<a href="#">
						<img :src="item.img_url" alt="">
						<strong>{{item.title}}</strong>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				searchData:[]
			};
		},
		computed:{
			menuShow(){
				return this.$store.state.menuShow
			}
		},
		mounted() {
			this.getSearchData()
		},
		methods:{
			getSearchData(){
				this.$axios.get('../../static/data/searchMenu.json')
				.then(res=>{
					// console.log(res.data.group[0].group_list)
					this.searchData=res.data.group[0].group_list
				}).catch(err=>{
					console.log(err)
				})
			},
			closeMenu(){
				this.$store.commit('hide')
			}
		}
	}
</script>

<style lang="less">
	div.searchMenuCon {
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 10;
		height: 568/50rem;
		background-color: #fff;
		overflow-y: scroll;

		div.conHeader {
			padding: 24/50rem;

			&:after {
				content: '';
				display: block;
				clear: both;
			}

			span {
				width: 48px;
				height: 48px;
				float: right;
				background-image: url(../../assets/menu/searchMenu/close.png);
				background-repeat: no-repeat;
				background-position: center;
				margin: -12/50rem;
			}
		}

		div.conMain {
			padding: 24/50rem 24/50rem 80/50rem 24/50rem;
			div.searchZon {
				position: relative;
				input {
					width: 100%;
					box-sizing: border-box;
					padding: 4/50rem 0;
					border: none;
					border-bottom: 1px solid rgba(0, 0, 0, 0.12);
					outline: none;
					font-size: 16/50rem;
					height: 34/50rem;
					&::-webkit-input-placeholder {
						color: #a9a9a9;
						font-weight: bold;
						font-size: 17/50rem;
						letter-spacing: 0;
					}
				}
				img {
					position: absolute;
					right: 0;
					top: 4/50rem;
				}
			}
			p.tips{
				margin: 18/50rem 0;
				font-size: 14/50rem;
				color: #fff;
				background-color: #00A862;
				padding: 2/50rem 12/50rem;
				display: inline-block;
				line-height: 25.6/50rem;
			}
			ul.searchList{
				list-style: none;
				display: flex;
				flex-flow: wrap;
				li{
					padding:12/50rem;
					padding-left: 0;
					&:nth-of-type(even){
						padding-left: 12/50rem;
						padding-right: 0;
					}
					a{
						margin-right:16/50rem;
						text-decoration: none;
						display: block;
						img{
							display: block;
							width: 108/50rem;
							height: 108/50rem;
							margin-bottom:6/50rem ;
							
						}
						strong{
							display: block;
							text-align: center;
							width: 108/50rem;
							color: #272727;
						}
					}
				}
			}
		}
	}
	
	input[type=text]:active,
	input[type=text]:hover {
		border-color: #00A862 !important;
		outline: none;
	}
</style>

<template>
	<div>
		<Header title="星巴克移动应用" class="he"></Header>
		
		<!--头部导航-->
		<ul class="tab">
			<li :class="{active:currIndex==0}" @click="currIndex=0">
				<router-link to='/mobile'>星巴克移动应用</router-link>
			</li>
			<li :class="{active:currIndex==1}" @click="currIndex=1">
				<router-link to='/apple'>星巴克 Apple Watch</router-link>
			</li>
		</ul>
		
		<div class="show">
		   <router-view></router-view>	
		</div>
		
	</div>
</template>

<script>
	import Header from './header'
	export  default{
		components:{
			Header
		},
		data(){
			return {
				currIndex:0
			}
		},
		beforeCreate(){
			this.$router.push('/mobile')
		}
	}
</script>

<style lang="less">
	.he{
		padding-left: 10/64rem;
	}
	.tab{
		width: 100%;
		padding: 10/64rem 10/64rem;
		box-sizing: border-box;
		height: 50/64rem;
		background-color: #fff;
		li{
			list-style: none;
			float: left;
			margin-right: 20/64rem;
			padding-bottom: 10/64rem;
			border-bottom: solid 3px transparent;
			a{
				color: #707070;
				text-decoration: none;
				font-size: 18/64rem;
			}
		}
		li.active{
			border-bottom: solid 3px #00A862;
			a{
				color: #000;
				font-weight: bold;
			}
		}
	}
</style>
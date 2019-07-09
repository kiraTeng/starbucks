<template>
	<div>
		<Header title="登录或创建一个新帐户 🌟"></Header>
		<ul class="nav">
			<li :class="{active:number==0}"  @click="changeNum(0)">
				<router-link to='/mine/login'>登录</router-link>
			</li>
			<li :class="{active:number==1}"  @click="changeNum(1)">
				<router-link to='/mine/register'>注册</router-link>
			</li>
			<li :class="{active:number==2}"  @click="changeNum(2)">
				<router-link to='/mine/club'>关于星享俱乐部</router-link>
			</li>
		</ul>
		<div class="show">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	import Header from '../../components/header'
	import Login from '../../components/login'
	export default{
		computed:{
			number(){
				return this.$store.state.index
			}
		},
	
		components:{
			Header,Login
		},
		methods:{
			changeNum(index){
				this.$store.state.index=index;
			}
		},
	}
</script>
<style lang="less">
	.nav{
		width: 100%;
		height: 55/64rem;
		padding: 15/64rem;
		box-sizing: border-box;
		background-color: #fff;
		border-bottom: solid 2px #F2F2F2;
		li{
			float: left;
			list-style: none;
			margin-right: 20/64rem;
			padding-bottom: 8/64rem;
			border-bottom: transparent 3px solid;
			a{
				color: #6F6F6F;
				text-decoration: none;
				font-size: 20/64rem;
				box-sizing: border-box;
			}
		}
		li.active {
			border-bottom: solid 3px #00A862;
			box-sizing: border-box;
			a{
				color: #272727;
				font-weight: bold;
			}
		}
	}
</style>
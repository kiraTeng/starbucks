<template>
	<div>
		<Header title="登录或创建一个新帐户 🌟"></Header>
		<ul class="nav">
			<li :class="{active:currentIndex==0}"  @click="currentIndex=0">
				<router-link to='/mine/login'>登录</router-link>
			</li>
			<li :class="{active:currentIndex==1}"  @click="currentIndex=1">
				<router-link to='/mine/register'>注册</router-link>
			</li>
			<li :class="{active:currentIndex==2}"  @click="currentIndex=2">
				<router-link to='/mine/club'>关于星享俱乐部</router-link>
			</li>
		</ul>
		<div class="show">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Header from '../../components/header'
	import Login from '../../components/login'
	export default{
		data(){
			return {
				currentIndex:0
			}
		},
		beforeCreate(){
			this.$router.push('/mine/login')
		},
		components:{
			Header,Login
		}
	}
</script>
<style lang="less">
	.nav{
		width: 100%;
		height: 55/64rem;
		padding: 15/64rem;
		box-sizing: border-box;
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
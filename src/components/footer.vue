<template>
  <div class="footer" >
    <Footer title="主页" mark='home' :selected='selected' @change='getVal'>
    	<img src="../assets/images/icon-home.png" slot='normalImg'/>
    	<img src="../assets/images/icon-home-active.png" slot='activeImg'/>
    </Footer>
    <Footer title="门店" mark='house' :selected='selected'  @change='getVal'>
    	<img src="../assets/images/icon-stores.png" slot='normalImg'/>
    	<img src="../assets/images/icon-stores-active.png" slot='activeImg'/>
    </Footer>
    <Footer title="我的账户" mark='mine' :selected='selected' @change='getVal'>
    	<img src="../assets/images/icon-account.png" slot='normalImg'/>
    	<img src="../assets/images/icon-account-active.png" slot='activeImg'/>
    </Footer>
    <Footer title="菜单" mark='vegetable' :selected='selected'  @change='getVal'>
    	<img src="../assets/images/icon-menu.png" slot='normalImg'/>
    	<img src="../assets/images/icon-menu-active.png" slot='activeImg'/>
    </Footer>
    <Footer title="更多" @e="temp"  mark='more' :selected='selected' @change='getVal'>
		<More></More>
    	<img src="../assets/images/icon-more.png" slot='normalImg'/>
    	<img src="../assets/images/icon-more-active.png" slot='activeImg'/>
    </Footer>
  </div>
</template>


<script>
	import Footer from './footerItem';
	import More from '@/star/More/more.vue';
  export default {
	data(){
		return {
				selected:'home',
				b:true
		}
	},
	computed:{
		
	},
	 components:{
	 	 Footer,More
	 },
	methods:{
		 getVal(val){
		 	this.selected=val			
		 },
		temp(val){
			console.log(val)
		},
		a(){
			
		}
	},
	watch:{
		$route(v){
			let path = v.path.split('/')[1]
			this.selected = path
			this.$store.commit('myClose',v.path)
		}
	}
}
</script>

<style lang="less">
 .footer{
	 max-width: 640px;
 	height: 50/64rem;
 	width: 100%;
 	background-color: #fff;
 	position: fixed;
 	bottom: 0;
	z-index: 999;
 	display: flex;
 	justify-content: center;
 	align-items: center;
 	padding: 5/64rem 0;
 }
 .item{
		width: 20%;
		text-align: center;
		color: #707070;
		font-size: 12/64rem;
	}
	.active{
		color: green;
	}
</style>

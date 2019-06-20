<template>
	<div class="">
		<div class="list" :class="{active1:bol}" @click="click" >
		<h3>{{title}} <slot name='img'></slot></h3>
		<p class="desc"><span class="num">{{num}}</span>
			<span v-show='bol'><slot name='rightImg' ></slot></span>
			<span v-show='!bol'><slot name='greenImg' ></slot></span>
			
			
			{{desc}} <slot name='leftImg'></slot> </p>
		<p class="km">{{km}}</p>
		</div>
			
		
	</div>	
</template>
<script>
	
	export default{
		props:['title','num','desc','km','mark','selected'],
		computed:{
			bol(){
				if(this.mark == this.selected){
					return true;
				}
				return false;
			}
		},
		methods:{
			click(){
				this.$emit('change',this.mark)
			}
		}
		
	}
</script>

<style lang="less">
.list{
	height: 140/64rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.12) ;
	padding-bottom: 10/64rem;
	h3{padding: 10/64rem 40/64rem;
		img{
			padding-left: 10/64rem;
			width: 24/64rem;
			height: 24/64rem;
		}
	}
	.desc{
		width:84% ;box-sizing: border-box;
		padding: 10/64rem 40/64rem;
		position: relative;
		font-size: 16/64rem;
		color: rgba(0, 0, 0, 0.56);
		.rightImg{
			width:24/64rem;
			height: 32/64rem;
			position: absolute;
			left: 10/64rem;
			top: 10/64rem;
			
		}
		.leftImg{
			width:22/64rem;
			height: 22/64rem;
			position: absolute;
			    right: -35px;
			top: 10/64rem;
			
		}
	}
	.km{
	padding: 10/64rem 40/64rem;
		color: rgba(0, 0, 0, 0.56);
	
		
	}
	.num{
		    position: absolute;
    left: 14px;
    z-index: 20;
    font-size: 19px;
    color: #fff;
	}
	.activeImg{
		width:24/64rem;
			height: 32/64rem;
			position: absolute;
			left: 10/64rem;
			top: 10/64rem;
	}
	
}
.active1{
	background: rgba(0, 0, 0, 0.12);
}
</style>
<template>
	<div class="item" @click="click">
		<span v-show="!bol"><slot name='normalImg'></slot></span>
		<span v-show="bol"><slot name='activeImg'></slot></span>
		<br />
		<span :class="{active:bol}">{{title}}</span>
	</div>
</template>

<script>
	export  default{
		props:['title','mark','selected','footerShow'],
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
<<<<<<< HEAD
				this.$emit('change',this.mark)
=======
				this.$emit('change',[this.mark,this.footerShow])
>>>>>>> 42881b44b362adec9560b65fbb9156346767ef8b
				this.$router.push('../../'+this.mark)
			}
		}
	}
</script>

<style>
	
</style>
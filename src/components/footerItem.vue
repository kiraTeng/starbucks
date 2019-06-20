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
				this.$emit('change',this.mark)
				this.$router.push('../../'+this.mark)
			}
		}
	}
</script>

<style>
	
</style>
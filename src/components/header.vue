<template>
	<div class="black">
		<h2>{{title}}</h2>
	</div>
</template>

<script>
	export default{
		props:['title']
	}
</script>

<style lang="less">
  .black{
	width: 100%;
	padding: 15/64rem 10/64rem;
	background-color: #FFFFFF;
	/*border: dashed 1px red;*/
	padding-left: 15/50rem;
	height: 62/50rem;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	h2{
		
	}
 }	
</style>
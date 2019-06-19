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
	box-sizing: border-box;
 }	
</style>
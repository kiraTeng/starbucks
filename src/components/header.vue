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

<style>
  .black{
	width: 100%;
	/*border: dashed 1px red;*/
	padding-left: 50/64rem;
	box-sizing: border-box;
	h2{
		text-indent: 1em;
	}
 }	
</style>
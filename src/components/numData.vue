<template>
	<div class="container" >
		<slot name='question'></slot>
		<slot name='con'></slot>
	</div>
</template>

<script>
	export default{
		props:['question','con']
	}
</script>

<style lang="less">
	
</style>
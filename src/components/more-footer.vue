<template>
	<div class="moreFt">
		<div class="motrFt-c">
			<p class="p1">English | 隐私政策 | 使用条款</p>
		     <p class="p2"> <img src="../assets/more/icpicon.png" alt=""> 沪公网安备 31010402000318号 | &nbsp;沪ICP备17003747号</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
	.moreFt{
	    margin-top: 16/50rem;
		overflow: hidden;
		.motrFt-c{
			float: left;
			margin:16/50rem 16/50rem 4/50rem 16/50rem;
			padding-right:60/50rem;
			div{
				float: left;
			}
			img{
				width: 10/50rem;
			}
			.p1{
				font-size: 14/50rem;
				color: #ccc;
			}
			.p2{
				font-size: 9/50rem;
				color: #ccc;
			}
		}
	}

</style>

<template>
	<div class="searchMenuCon">
		<div class="conHeader"><span></span></div>
		<div class="conMain">
			<div class="searchZon">
				<input type="text" placeholder="搜索菜单">
				<img src="../../assets/menu/searchMenu/search.png" alt="">
			</div>
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
	div.searchMenuCon{
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 10;
		height: 568/50rem;
		background-color: #fff;
		overflow-y: scroll;
		div.conHeader{
			padding: 24/50rem;
			&:after{
				content: '';
				display: block;
				clear: both;
			}
			span{
				width: 48px;
				height: 48px;
				float:right;
				background-image: url(../../assets/menu/searchMenu/close.png);
				background-repeat: no-repeat;
				background-position: center;
				margin: -12/50rem;
			}		
		}
		div.conMain{
			padding: 24/50rem 24/50rem 80/50rem 24/50rem;
			div.searchZon{
				
			}
		}
	}
</style>

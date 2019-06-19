<template>
	<div>
		<ul class="a_part2">
			<li>
				<div class="left">
					<slot name='header'></slot>
					<slot name='color'></slot>
				</div>
				<div class="right">
					<slot name='rightImg'></slot>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style lang="less">
	/*第二部分*/
	.a_part2{
		width: 100%;
		background-color: #F7F7F7;
		overflow: hidden;
		li{
			list-style: none;
			height: 60/64rem;
			padding-top: 30/64rem;
			padding-left: 20/64rem;
			padding-right: 20/64rem;
			padding-bottom: 40/64rem;
			display: flex;
			margin-bottom: 140/64rem;
			div{
				width: 50%;
				margin-right: 20/64rem;
				img{
					
					width: 90%;
				}
				.color{
					color: #6C6C6C;
					line-height: 30/64rem;
				}
				.header{
					color: #000;
					line-height: 60/64rem;
					font-size: 23/64rem;
				}
			}
			.right{
				text-align: center;
			}
			
		}
	
	}
</style>
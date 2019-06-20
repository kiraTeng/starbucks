<template>
	<div>
		<div class="eight">
			<ul>
				<li>
					<div class="title">
						<slot name='app'></slot>{{title}}
						<i class="fa fa-chevron-down after" @click="showToggle" :style="{transform:'rotateZ('+deg+'deg)'}"></i>
					</div>
					<div class="container" v-show="isShow">
						<slot name='data'></slot>
					</div>
				</li>
			</ul>
		</div>
	</div>

</template>
<script>
	export default {
		props: ['title'],
		data() {
			return {
				isShow: false,
				deg: 0
			}
		},
		methods: {
			showToggle() {
				console.log(11)
				this.isShow = !this.isShow
				this.isShow ? this.deg = 180 : this.deg = 0;
			}
		}
	}
</script>

<style lang="less">
	/*第八部分*/
	.eight {
		width: 100%;
		background-color: #fff;
		ul {
			width: 100%;
			max-width: 640px;
			box-sizing: border-box;
			li {
				width: 100%;
				padding: 20/64rem 20/64rem;
				box-sizing: border-box;
				img {
					height: 60/64rem;
					vertical-align: middle;
				}
				.before {
					margin-right: 15/64rem;
				}
				.after {
					position: absolute;
					right: 20/64rem;
				}
			}
			li.active {
				background-color: #EFEEEC;
				color: #000000;
			}
		}
	}	
	.container {
		padding: 20/64rem 10/64rem;
		line-height: 25/64rem;
		.question {
			padding-bottom: 20/64rem;
		}
		.con {
			padding-bottom: 15/64rem;
			text-indent: 2em;
		}
	}
</style>
<template>
	<div class="moreBD">
		<div class="more">
			<ul>
				<li>门店</li>
				<li >星享俱乐部</li>
				<li >菜单</li>
				<li class="line"></li>
				<li>星巴克移动应用</li>
				<li>星礼卡</li>
				<li>星巴克臻选</li>
				<li>啡快™ － 在线点 到店取</li>
				<li>专星送™</li>
				<li>咖啡星讲堂</li>
				<li>上海烘焙工坊</li>
				<li>关于星巴克</li>
				<li>帮助中心</li>
				<li class="line"></li>
			</ul>
			<div class="moreFt-con">
				<a href="#"><img src="../assets/home/icon-account.png" alt=""></a>
				<span >登录</span>
				<div class="zhuce">注册</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		
	}
</script>

<style lang="less">
	.moreBD {
		.more {
			padding-left: 16/50rem;
			padding-right: 16/50rem;

			ul {
				box-sizing: border-box;

				hr {
					margin: 12/50rem 0;
					background: rgba(0, 0, 0, 0.12);
					height: 1px !important;
					border: 0;

				}

				font-size: 18/50rem;

				li {
					box-sizing: border-box;
					color: inherit;
					padding: 5/50rem 0;
					font-weight: bold;
					list-style: none;
					height: 31/50rem;
					line-height: 31/50rem;

				}

				.line {
					height: 1px !important;
					padding: 0;
					border-bottom: 1px solid rgba(0, 0, 0, 0.12);
					margin: 14/50rem 0;

				}
			}

			.moreFt-con {
				overflow: hidden;

				a {
					float: left;
				}

				span {
					float: left;
					display: inline-block;
					height: 30/50rem;
					line-height: 30/50rem;
					margin-right: 24/50rem;
					color: #00A862;
				}
                 img{
					 margin-right: 4/50rem;
				 }
				.zhuce {
					background: none;
					border: 1px solid #00A862;
					border-radius: 48px;
					box-sizing: border-box;
					color: #00A862;
					display: inline-block;
					font-weight: 500;
					outline: none;
					overflow: hidden;
					width: 58/50rem;
					height: 31/50rem;
					line-height: 31/50rem;
					text-align: center;
				}
			}
		}
	}
</style>

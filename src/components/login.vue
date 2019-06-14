<template>
	<div class="form">
		<form action="#">
			<input type="text" placeholder="用户名或者电子邮箱" /><br />
			<input :type="pwdType" placeholder="密码" v-model="newpsd" />
			<img src="../assets/images/icon-hide-password.png" class="eye" v-if="eye" @click='showPassword()' />
			<img src="../assets/images/icon-show-password.png" class="eye" v-else @click='showPassword()' />
		</form>
		<ul class="login">
			<li>
				<span :class="{'green':isActive}" @click="change()">√</span>下次自动登录
			</li>
			<li>
				<a href="#">忘记密码？</a>
			</li>
		</ul>
		<div class="code">
			<div class="coder">
				<p>请您输入下图中的验证码:</p>
				<!--验证码-->
				<form action="#">
					<div class="left">
						<input type="button" id="code" v-model="checkCode" class="verification1" />
					</div>
					<input type="text" placeholder="请输入验证码" @blur="check" v-model="idCode" />
					<span class="tishixiaoxi" v-show="isShow">{{text}}</span>
				</form>
				<ul>
					<li><i class="fa fa-refresh" @click="createCode"></i></li>
					<li><i class="fa fa-info-circle"></i></li>
					<li class="btn"><input type="button" value="验证" /></li>
				</ul>
			</div>
		</div>
		<div class="bottom">
			<button>登录</button>
		</div>
	</div>
</template>

<script>
	var code; //在全局定义验证码
	export default {
		data() {
			return {
				isActive: false, //是否显示记住登录密码
				isShow: false, //是否显示验证码提示框
				text: '' ,//验证码提示框内容
				newpsd: '', //input 双向数据绑定
				pwdType: 'password',
				eye: true, //是否显示密码
				checkCode: '',
				idCode: ''
			}
		},
		mounted() {
			this.createCode()
			console.log(code)
		},
		methods: {
			showPassword() {
				if(this.eye) {
					this.eye = false
					this.pwdType = 'text'
				} else {
					this.eye = true
					this.pwdType = 'password'
				}
			},
			change() {
				this.isActive == false ? this.isActive = true : this.isActive = false;
			},
			//获取验证码
			createCode() {
				code = "";
				var codeLength = 4; //验证码的长度   
				var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
					'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数   
				for(var i = 0; i < codeLength; i++) { //循环操作   
					var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）   
					code += random[index]; //根据索引取得随机数加到code上   
					console.log(code)
				}
				this.checkCode = code; //把code值赋给验证码   
			},
			//失去焦点 验证图和密码
			check() {
				this.idCode.toUpperCase(); //取得输入的验证码并转化为大写         
				if(this.idCode == '') {
					this.text = '请输入验证码!';
					this.isShow = true
				} else if(this.idCode.toUpperCase() != this.checkCode) {
					this.text = '验证码输入有误!';
					this.isShow = true;
					this.createCode(); //刷新验证码
					this.idCode = ''; //验证码输入内容清空
				} else {
					this.isShow = false;  //隐藏验证码提示框
					this.text = '请输入验证码!';
					return true;
				}
			}
		}
	}
</script>

<style lang="less">
	body {
		background-color: #F7F7F7;
	}
	
	.form {
		margin: 15/64rem;
		position: relative;
		form {
			width: 100%;
			position: relative;
			input {
				height: 60/64rem;
				width: 100%;
				border: none;
				border-bottom: solid 1px #DADADA;
				background-color: transparent;
				font-size: 18/64rem;
				outline: none;
			}
			.eye {
				position: absolute;
				right: 10/64rem;
				top: 80/64rem;
			}
			.tishixiaoxi {
				position: absolute;
				left: 160/64rem;
				top: 55/64rem;
				font-size: 12/64rem;
				width: 130/64rem;
				height: 25/64rem;
				line-height: 25/64rem;
				text-indent: 1em;
				border: solid 1px #ccc;
				border-radius: 5/64rem;
				color: red;
				z-index: 0;
				&:before {
					content: '';
					display: inline-block;
					height: 5/64rem;
					width: 5/64rem;
					border: solid 1px #ccc;
					position: absolute;
					top: -5/64rem;
					left: 8/64rem;
					transform: rotateZ(-45deg);
					border-bottom-color: transparent;
					border-left-color: transparent;
					z-index: 5;
					background: #fff;
				}
			}
		}
		.login {
			width: 100%;
			height: 50/64rem;
			overflow: hidden;
			margin-top: 10/64rem;
			li {
				list-style: none;
				height: 50/64rem;
				line-height: 50/64rem;
				float: left;
				color: #6C6C6C;
				span {
					color: #fff;
					height: 30/64rem;
					width: 30/64rem;
					display: inline-block;
					line-height: 30/64rem;
					text-align: center;
					border-radius: 7/64rem;
					margin-right: 8/64rem;
					border: solid 1px #00A862;
				}
			}
			li:nth-of-type(2) {
				float: right;
				a {
					text-decoration: none;
					color: #00A862;
				}
			}
		}
	}
	
	.green {
		background-color: #00A862;
	}
	
	 ::-webkit-input-placeholder {
		color: #9A9A9A;
	}
	
	.code {
		height: 200/64rem;
		width: 100%;
		background-color: #fff;
		margin-top: 10/64rem;
		box-shadow: 0px 0px 1px 1px #ccc;
		.coder {
			padding: 20/64rem 25/64rem;
		}
		p {
			color: #000;
			font-size: 13/64rem;
		}
	}
	
	.coder {
		form {
			display: flex;
			height: 60/64rem;
			width: 300/64rem;
			border: solid 1px #E5E5E5;
			margin-top: 15/64rem;
			.left {
				width: 150/64rem;
				background-color: #F5F7F4;
			}
			input {
				width: 150/64rem;
				outline: none;
				border: none;
				height: 60/64rem;
				padding-left: 10/64rem;
				font-size: 15/64rem;
			}
		}
		ul {
			width: 100%;
			margin-top: 25/64rem;
			li {
				float: left;
				list-style: none;
				padding-right: 20/64rem;
				i {
					color: #999;
					font-size: 25/64rem;
				}
			}
			.btn {
				float: right;
				input {
					padding: 10/64rem 30/64rem;
					background-color: #00A862;
					color: #fff;
					border: none;
					border-radius: 5/64rem;
				}
				float: right;
			}
		}
	}
	
	#code {
		font-size: 25px;
		letter-spacing: 3px;
		color: #053d84;
		background: #f2f2f5;
	}
	
	.verification1 {
		vertical-align: middle;
		transform: translate(-15px, 0);
		color: red;
	}
	
	.disappear {
		visibility: hidden;
	}
</style>
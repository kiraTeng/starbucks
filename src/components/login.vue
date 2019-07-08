<template>
	<div class="loginpage">
		<div class="login-form">
			<!--用户名密码框-->
			<div class="form-box">
				<form action="#">
					<div class="user-box">
						<label :class="{one_label:true,look:showUser}">用户名或者电子邮箱</label>
						<input type="text" @focus="empty()" @blur="show()" @input="wrong" v-model="textUser" />
						<span class="msg" v-show="isMsg"><img src="../assets/images/red.png"/>此栏不可为空</span>
					</div>
					<div class="pwd-box">
						<label :class="{one_label:true,look:showPwd}">密码</label>
						<input type="password" @focus="empty1()" @blur="show1()" :type="pwdType" @input="wrong1" v-model="textPwd" />
						<span class="msg1" v-show="isMsg1"><img src="../assets/images/red.png"/>此栏不可为空</span>
						<img src="../assets/images/icon-hide-password.png" class="eye" v-if="eye" @click='showPassword()' />
						<img src="../assets/images/icon-show-password.png" class="eye" v-else @click='showPassword()' />
					</div>
				</form>
			</div>
			<!--忘记密码和下次登录-->
			<ul class="login">
				<li>
					<span :class="{'green':isActive}" @click="change()">√</span>下次自动登录
				</li>
				<li>
					<a href="#">忘记密码？</a>
				</li>
			</ul>
			<!--验证码区域-->
			<div class="code-box">
				<div class="code">
					<p>请您输入下图中的验证码:</p>
					<!--验证码-->
					<form action="#">
						<div class="left">
							<input type="button" class="sport" v-model="checkCode" />
						</div>
						<div class="right">
							<input type="text" placeholder="请输入验证码" v-model="idCode" />
						</div>
						<span class="message" v-show="isText">{{text}}</span>
					</form>
					<ul>
						<li><i class="fa fa-refresh" @click="createCode"></i></li>
						<li><i class="fa fa-info-circle"></i></li>
						<li class="btn"><input type="button" value="验证" @click="check" /></li>
					</ul>
				</div>
			</div>

			<!--登录按钮-->
			<div class="bottom">
				<button>登录</button>
			</div>
		</div>
	</div>
</template>

<script>
	var code; //在全局定义验证码
	export default {
		data() {
			return {
				textUser: '', //动态用户绑定
				textPwd: '', //动态密码绑定
				showUser: false, //用户上移动
				showPwd: false, //密码向上移动
				isMsg1: false,
				isMsg: false, //是否为空提示
				isMove: false,
				isText: false, //是否显示验证框
				isActive: false, //是否显示记住登录密码
				isShow: true,
				pwdtext: '密码', //密码框提示
				eye: true, //是否显示密码
				text: '', //验证码提示框内容
				pwdType: 'password', //密码显示类型默认看不见
				checkCode: '', //动态绑定验证码
				idCode: ''
			}
		},
		mounted() {
			this.createCode()
		},
		methods: {
			wrong() { //用户输入框监听
				if(this.textUser.length == 0) { //用户框输入长度判断
					this.isMsg = true //用户框提示消息
				} else {
					this.isMsg = false
					this.showUser = true //用户框向上移动
				}
			},
			wrong1() { //密码输入框监听
				if(this.textUser.length == 0) { //密码框输入长度判断
					this.isMsg1 = true //密码提示消息
				} else {
					this.isMsg1 = false
					this.showPwd = true //密码框向上移动
				}
			},
			empty() { //用户输入框聚焦
				this.showUser = true
			},
			show() { //用户输入框失焦
				this.showUser = !this.showUser
				if(this.textUser.length == '') {
					this.showUser = false
					this.isMsg = true
				} else {
					this.showUser = true
					this.isMsg = false
				}
			},
			empty1() { //密码输入框聚焦
				this.showPwd = true
			},
			show1() { //密码输入框失焦
				this.showPwd = !this.showPwd
				if(this.textPwd.length == '') {
					this.showPwd = false
					this.isMsg1 = true
				} else {
					this.showPwd = true
					this.isMsg1 = false
				}
			},
			showPassword() { //眼睛点击切换显示
				if(this.eye) {
					this.eye = false
					this.pwdType = 'text'
					console.log('eyeShow')
				} else {
					this.eye = true
					this.pwdType = 'password'
					console.log('eyeHide')
				}
			},
			change() { //是否记住密码背景颜色
				this.isActive == false ? this.isActive = true : this.isActive = false;
			},
			createCode() { //验证码
				code = "";
				var codeLength = 4; //验证码的长度   
				var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
					'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数   
				for(var i = 0; i < codeLength; i++) { //循环操作   
					var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）   
					code += random[index]; //根据索引取得随机数加到code上   
				}
				this.checkCode = code; //把code值赋给验证码   
			},
			//点击  验证码
			check() {
				this.idCode.toUpperCase(); //取得输入的验证码并转化为大写     
				if(this.idCode == '') {
					this.isText = true
					this.text = '请输入验证码'
					setTimeout(() => {
						this.isText = false
					}, 1000);
				} else if(this.idCode.toUpperCase() != this.checkCode) {
					this.isText = true
					this.text = '输入有误，请重新输入'
					this.createCode()
					this.idCode = ''
					setTimeout(() => {
						this.isText = false
					}, 1000);
				} else {
					this.isText = false
					return true;
				}
			}
		}
	}
</script>

<style lang="less">
	/*用户名动画效果*/
	
	.look {
		opacity: 1!important;
		top: -10/64rem !important;
		font-size: 14px !important;
		color: #6C6C6C !important;
	}
	
	.one_label {
		position: absolute;
		top: 16/64rem;
		left: 10/64rem;
		font-size: 20/64rem;
		color: #999;
		transition: all .5s;
	}
	/* 输入内容为空   */
	
	.msg {
		position: absolute;
		top: 60/64rem;
		left: 0;
		width: 150/64rem;
		color: #6C6C6C;
		letter-spacing: .1em;
		height: 25/64rem;
		display: inline-block;
		img {
			width: 35/64rem;
			vertical-align: middle;
		}
	}
	
	.msg1 {
		position: absolute;
		top: 60/64rem;
		left: 0;
		width: 150/64rem;
		color: #6C6C6C;
		letter-spacing: .1em;
		height: 50/64rem;
		display: block;
		img {
			width: 35/64rem;
			vertical-align: middle;
		}
	}
	
	.sport {
		vertical-align: middle;
		transform: translate(-15px, 0);
		font-size: 30/64rem;
		letter-spacing: .1em;
		color: #053d84;
		padding-left: 18/64rem;
		text-align: center;
	}
	
	.change {
		/*label标签样式*/
		color: #6c6c6c;
		font-size: 12/64rem;
		margin-top: -40/64rem;
	}
	
	.eye {
		/*密码眼睛样式*/
		position: absolute;
		right: 10/64rem;
		top: 20/64rem;
		z-index: 10;
	}
	
	.green {
		/*是否记住密码样式*/
		background-color: #00A862;
	}
	/*form样式*/
	
	.loginpage {
		background-color: #F7F7F7;
		width: 100%;
		height: 620/64rem;
		.login-form {
			width: 400/64rem;
			padding: 20/64rem 20/64rem;
			height: 500/64rem;
			box-sizing: border-box;
			.form-box {
				form {
					input {
						height: 60/64rem;
						line-height: 60/64rem;
						width: 100%;
						background-color: transparent;
						padding-left: 10/64rem;
						font-size: 20/64rem;
						outline: none;
						border: none;
						color: #9D9D9D;
						position: absolute;
						z-index: 1;
					}
					div {
						border-bottom: solid 1px #DADADA;
						height: 60/64rem;
						width: 100%;
						margin-top: 20/64rem;
						position: relative;
						label {
							position: absolute;
							top: 16/64rem;
							left: 10/64rem;
							font-size: 20/64rem;
						}
					}
				}
			}
		}
	}
	/*记住密码样式*/
	
	.login {
		width: 100%;
		height: 50/64rem;
		overflow: hidden;
		margin-top: 20/64rem;
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
	/*验证码样式*/
	
	.code-box {
		width: 100%;
		max-width: 640px;
		padding: 20/64rem 20/64rem;
		box-sizing: border-box;
		background-color: #fff;
		margin-top: 15/64rem;
		height: 185/64rem;
		box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, .1);
		.code {
			padding: 0 10/64rem;
			box-sizing: border-box;
			color: #000;
			p {
				font-size: 16/64rem;
			}
			form {
				width: 100%;
				height: 60/64rem;
				overflow: hidden;
				border: solid 1px #EAEAEA;
				margin-top: 15/64rem;
				position: relative;
				div {
					float: left;
					width: 50%;
					height: 60/64rem;
				}
				.left {
					background-color: #FEF5EC;
					input {
						width: 100%;
						height: 60/64rem;
						line-height: 60/64rem;
						text-align: center;
						border: none;
						outline: none;
						background-color: #FEF5EC;
					}
				}
				.right {
					height: 60/64rem;
					input {
						background-color: transparent;
						outline: none;
						border: none;
						height: 60/64rem;
						line-height: 60/64rem;
						padding-left: 10/64rem;
					}
				}
				.message {
					position: absolute;
					top: 0;
					left: 50%;
					transform: translateX(-50%);
					height: 35/64rem;
					width: 170/64rem;
					color: #fff;
					line-height: 35/64rem;
					background-color: rgba(0, 0, 0, .3);
					border-radius: 3/64rem;
					text-align: center;
					font-size: 14/64rem;
				}
			}
			ul {
				width: 100%;
				margin-top: 18/64rem;
				height: 60/64rem;
				position: relative;
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
					position: absolute;
					right: -20/64rem;
					top: -10/64rem;
					input {
						padding: 10/64rem 40/64rem;
						background-color: #00A862;
						color: #fff;
						border: none;
						border-radius: 5/64rem;
						outline: none;
					}
				}
			}
		}
	}
	/*登录按钮样式*/
	
	.bottom {
		position: relative;
		width: 100%;
		box-sizing: border-box;
		padding: 30/64rem 25/64rem;
		button {
			position: absolute;
			right: 0;
			height: 60/64rem;
			width: 100/64rem;
			border-radius: 28/64rem;
			box-shadow: 0 2/64rem 4/64rem 0 rgba(0, 0, 0, 0.38);
			background: #f7f7f7;
			border-color: #f7f7f7;
			color: rgba(0, 0, 0, .38);
			border: none;
			font-size: 18/64rem;
			font-weight: bold;
			text-align: center;
		}
	}
</style>
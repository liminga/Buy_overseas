<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>xjp智库登陆</title>
	<link rel="stylesheet" type="text/css" href="iconfont/iconfont.css" />
	<link rel="stylesheet" type="text/css" href="css/base.css">
	<link rel="stylesheet" type="text/css" href="css/login.css">
	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="js/vue.js"></script>
	<script type="text/javascript" src="js/jQuery.checkForm.js"></script>
	
</head>
<body>

	<!-- this is header -->
	<header>
		<h1 class="document-msg">

			<a href="index.html"><img class="logo" src="img/xiaojinping.png" alt=""></a>
			<span>我是肖金平，大家的肯定是我最大的满意，希望能与大家的一起携手共行</span>
			
		</h1>
	</header>
	<!-- End header -->
	<!-- this is content -->
	<div class="content">
		<div class="login" id="login">
			<div class="title">
				<ul>
					<li v-for = "value in xjp_form.patternItem" v-on:click="patternChange(value)" v-bind:class="{active:value['isActive']}">{{value.title}}</li>
				</ul>
			</div>
			<form action="<?php echo $_SERVER['PHP_SELF'] ?>" name="xjp_form"  method="post" id="xjp_form"  v-on:submit.prevent="vSubmit()" >
			<!-- v-on:submit.prevent="vSubmit()" -->
				<div class="form-group">
					<!-- tel select  -->
					<!-- <input type="text" > -->
					<div class="country-select" id="country_select" v-if = "xjp_form.isbool">
						<h3 id="country_select_val" v-on:click="countrySelect()" > {{xjp_form.state}} </h3>
						<ul class="select-options"  v-if="xjp_form.countrySelectVisible">
							<li  v-for="stateoptionsValue in xjp_form.stateOptions" v-on:click="selectOptions(stateoptionsValue)" >{{stateoptionsValue}} </li>
						</ul>
					</div>
					<!--End tel select  -->
					<input type="hidden" name="loginKeyName" v-model="xjp_form.loginName" >
					<input v-bind:class="{vJsInputerror:xjp_form.nameTipClass}" v-for="value in xjp_form.inputPatternItem" type="text" v-bind:name="value['inputName']" v-bind:id="value['inputId']" v-if="value['isvisible']" class="user-name"  v-bind:placeholder="value['inputPlaceholder']"  v-on:blur="formkeyNameBlur()" v-on:focus="formkeyNameFocus()" v-model="xjp_form.loginNameValue"> 
					<!-- 验证正确的标识 -->
					<i class="input-correct iconfont icon-correct"  v-show="xjp_form.loginPattern[0]"></i>
				</div>
				<div class="input-tip" v-html="xjp_form.nameTip" v-bind:class="{vjsTiperror:xjp_form.nameTipClass}"></div>
				<div class="form-group">
					<input type="password" value="" name="password" id="password" class="password" v-bind:class="{vJsInputerror:xjp_form.passwordTipClass}" placeholder="密码" v-on:blur="formpasswordBlur()" v-on:focus="formpasswordFocus()" v-model="xjp_form.pdValue">
					<!-- 验证正确的标识 -->
					<!-- <i class="input-correct iconfont icon-correct" v-show="xjp_form.loginPattern[1]"></i> -->
				</div>
				<div class="input-tip" v-html="xjp_form.passwordTip" v-bind:class="{vjsTiperror:xjp_form.passwordTipClass}" ></div>
				<div id="clone_node" class="clone-node">
					<div>
						<label>
							<input type="checkbox" name="loging" >
							<span>两周内自动登陆</span>
						</label>
						<a href="">忘记密码？</a>
					</div>
					<div>
						<input type="submit" name="" value="立即登陆" >
					</div>
					<div class="new-login clearfix">
						<a href="">无需注册即可登陆</a>
						<a href="registry.php">新用户注册</a>
					</div>
					
					<div>
						<!-- <span class="qq-login"></span>
						<span class="weixin-login"></span>
						<span class="weibo-login"></span> -->
					</div>
				</div>
			</form>			
			<div class="dialog" v-if="xjp_form.dialog">
			<div class="dialog-header"><h1>登陆成功</h1></div>
			<div class="dialog-body">
				<div class="dialog-body-title">
					尊敬的<span class="">{{xjp_form.loginNameValue}}</span>
					<span>{{xjp_form.userSex}}</span>
					
				</div>
				<div class="dialog-body-content">
					
					<p>本页面将在 <time class="time" >5</time>秒 后跳转到 首页  是否 <button type="button" id="post_btn">取消</button></p>
					
				</div>
			</div>
			<div class="dialog-footer">
				<p >
						<a href="index.html">首页</a>
				</p>
			</div>
		</div>
		<div class="dialog-bg" v-if="xjp_form.dialog"></div>
			
		</div>
	</div>
	<!-- End this is content -->
	<script src="js/login.js"></script>

	
		<script type="text/javascript">
			// 

		</script>

	<!-- <script>
		document.getElementsByClassName("input-tip")[0].innerHTML = "登陆名或者密码不正确";
	</script> -->

</body>
</html>
$(function(){
	var formatCheckOptions = [
			{
				"idname":"#tel",
				"reg":/^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/,
				"error":"<i class='register-icon iconfont icon-Errorpromptt i-error'></i>格式错误",
				"default":'<i class="register-icon iconfont icon-tipIcon i-def"></i>完成验证后，你可以用该手机登录和找回密码',
				"dataCheck":false,
				"dataCheckError":"<i class='register-icon iconfont icon-Errorpromptt i-error'></i>该手机号码已注册，是否需要找回帐号"
			},
			{
				"idname":"#password",
				"reg":/(^[\w-_]{6,20}$)/,
				"error":"<i class='register-icon iconfont icon-Errorpromptt i-error'></i>格式错误",
				"default":'<i class="register-icon iconfont icon-tipIcon i-def"></i>完成验证后，你可以用该手机登录和找回密码',
				"dataCheckError":"<i class='register-icon iconfont icon-Errorpromptt i-error'></i>该手机号码已注册，是否需要找回帐号"
			},
			{
				"idname":"#passwordture",
				"reg":/(^[\w-_]{6,20}$)/,
				"error":"<i class='register-icon iconfont icon-Errorpromptt i-error'></i>格式错误",
				"default":'<i class="register-icon iconfont icon-tipIcon i-def"></i>完成验证后，你可以用该手机登录和找回密码',
				"dataCheckError":"<i class='register-icon iconfont icon-Errorpromptt i-error'></i>该手机号码已注册，是否需要找回帐号"
			}
		];
	var dataCheckOptions = [];
	$("#user").checkForm({
		"formatCheck":formatCheckOptions,
		"xhrURL":"admin/isvalue.php"
	})



})
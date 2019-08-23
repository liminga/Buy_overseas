$(function(){
	var abc= [
			{
				//用户名
				"idname":"#username",
				"reg":/^[A-Za-z]\w{5,19}$/,
				"error":"<i class='register-icon iconfont icon-Errorpromptt i-error'>s</i>格式错误",
				"default":"<i class='register-icon iconfont icon-tipIcon i-def'></i>支持字母、数字、\“_\”的组合，首字符不能是数字,长度必须是6-20",
				"dataCheck":false,
				"dataCheckError":"<i class='register-icon iconfont icon-Errorpromptt i-error'></i>用户名已存在"
			},
			{
				//密码
				"idname":"#password",
				"reg":/(^[\w-_]{6,20}$)/,
				"error":"<i class='register-icon iconfont icon-Errorpromptt i-error'></i>格式错误",
				"default":"<i class='register-icon iconfont icon-tipIcon i-def'></i>建议使用字母、数字和符号两种及以上的组合，6-20个字符"
			},
			{
				//确认密码
				"idname":"#confirm_password",
				"reg":/(^[\w-_]{6,20}$)/,
				"error":"<i class='register-icon iconfont icon-Errorpromptt i-error'></i>格式错误",
				"default":"<i class='register-icon iconfont icon-tipIcon i-def'></i>建议使用字母、数字和符号两种及以上的组合，6-20个字符"
			},
			{
				// 手机验证
				"idname":"#tel",
				"reg":/^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/,
				"error":"<i class='register-icon iconfont icon-Errorpromptt i-error'></i>格式错误",
				"default":'<i class="register-icon iconfont icon-tipIcon i-def"></i>完成验证后，你可以用该手机登录和找回密码',
				"dataCheck":false,
				"dataCheckError":"<i class='register-icon iconfont icon-Errorpromptt i-error'></i>该手机号码已注册，是否需要找回帐号"
			},
			{
				// 邮箱验证  邮箱已注册 ，是否通过邮箱找回帐号
				"idname":"#email",
				"reg":/^[a-zA-Z0-9_-]+@([a-zA-Z0-9_-])+\.([a-zA-Z0-9_-])+$/,
				"error":"<i class='register-icon iconfont icon-Errorpromptt i-error'></i>格式错误",
				"default":'<i class="register-icon iconfont icon-tipIcon i-def"></i>完成验证后，你可以用该邮箱登录和找回密码',
				"dataCheck":false,
				"dataCheckError":"<i class='register-icon iconfont icon-Errorpromptt i-error'></i>邮箱已注册 ，是否通过邮箱找回帐号"
			}

		];
	
	$("#liming_form").checkForm({
		"formatCheck":abc,
		"xhrURL":"admin/isvalue.php"
	});

})
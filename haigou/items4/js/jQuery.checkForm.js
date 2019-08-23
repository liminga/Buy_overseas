 ;

(function($){
	$.fn.extend ({
		"checkForm":function(options){
			options = $.extend({
				/*
					formatCheck:[{
						//格式验证
						"idname":"",
						"reg":"",
						default:"",
						error:"",
						type
						补充
						dataCheck：注册写false 登陆为true;
						dataCheckError:数据库验证结果为false时，给出的提示；

						后期优化：把错误提示与reg结合，根据不同的reg输出不同的提示
					}],
					//下面的应该与格式验证结合起来。
					dataCheck:[
						//数据验证，检测该项数据是否存在于数据库
						{数据验证1},
						{数据验证2},
						例如：
						{
							"idname":"",
							"eventType":"",//触发事件的类型
							"name":"",
							url:"向谁发出请求,string"
							bool:false,//请求成功后，返回一个布尔值；
						}
	
					]
				*/
				"formatCheck":[{"idname":"name","reg":"","default":"","error":"","":""}],
				"dataCheck":[{"idname":"name","reg":"","default":"","error":"","":""}],
				"xhrURL":false
			},options);
			// 焦点事件 
			for(var i=0;i<options.formatCheck.length;i++ ){
				(function(num){
					$(options.formatCheck[num].idname).focus(function(){
						var defaultmsg = options.formatCheck[num].default;
						$(this).next().hide();
						$(this).parent().css({
							"border":"solid 1px #ddd"
						})
						$(this).parent().next().css({
							"color":" rgb(153, 153, 153)"
						}).html(defaultmsg)
					});
				})(i)

			}
			// 失焦事件 
			// 根据传递参数的数量 需要 n 个变量,或者说需要有 n 个值。
				// 创建一个数组。
			var formatCheckItemBoolean = [];
			// 验证
			
			var ThisObj = $(this);
			// 失焦 格式验证
			formatCheckfun()
			function formatCheckfun(){
				for(var i=0;i<options.formatCheck.length;i++ ){
					formatCheckItemBoolean[i] = null;
					(function(num){
						var inputType = $(options.formatCheck[num].idname).attr('type');
				
						switch(inputType){
							case "checkbox":
								typeCheckbox();
								break;
							case "password":
								typeDefault();
								typePassWord();
							
								break;
							case "radio":
								// typeCheckbox();
							
								typeRadio()
								break;
							default :
								typeDefault();
								break;
						};
						function typeDefault(){
							$(options.formatCheck[num].idname).blur(function(){
								var obj = $(this);
								var val = $(this).val();
								var reg = options.formatCheck[num].reg;
								var error =options.formatCheck[num].error;
								var boon = reg.test(val);
								var flan =  true;
								if(inputType == "password"){
									
									var pwd = ThisObj.find("input[type=password]");
									var pwd1Val = pwd.eq(0).val();
									var pwd2Val = pwd.eq(1).val();
									
									if(pwd.eq(1)[0] == this){
										if(pwd2Val == pwd1Val && pwd1Val != ""){
											flan = true;
										}else{
											flan = false;
										}
									}
									
								}
								if(boon == true ){
									$(this).next().show();
									obj.parent().next().html("");
									formatCheckItemBoolean[num] = true;

								}else{
									$(this).next().hide();
									$(this).parent().css({
										"border":"1px solid red"
									})
									obj.parent().next().css({
										"color":"red"
									}).html(error);
									formatCheckItemBoolean[num] = false;
								}
								
								if (options.formatCheck[num].dataCheck != undefined && options.formatCheck[num].dataCheck != null   && options.xhrURL !== false && boon ==true){
									// 建立ajax请求
									var xhr = new XMLHttpRequest();
									xhr.open("post",options.xhrURL,true);
									var sendStr = "keyName="+this.id+"&keyValue="+this.value+"";
									xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
									// 发送请求
									xhr.send(sendStr);
									// 响应请求
									xhr.onreadystatechange=function(){
										if (xhr.readyState == 4 && xhr.status == 200) {
											var str = xhr.responseText;
											var xhrbool = JSON.parse(str);
											// formatCheckItemBoolean[num] = xhrbool;
											/*
												验证传递的值是否存在，存在，返回true,否则返回false;
												注册表单，需要的是一个不存在的值，那么，我在传递参数的时候，我需要的是一个false
												options.formatCheck[num].dataCheck:注册表单设置成false 登陆表单设置成true;
												if(false(传递进来的值) === xhrbool)，//  true 表示值在数据库不存在。用作注册 
												if(true(传递进来的值)=== xhrbool)，//  true 表示值在数据库存在。用作登陆 
												
												options.formatCheck[num].dataCheck === false
											*/
											if (options.formatCheck[num].dataCheck === xhrbool){
												obj.next().show();
												obj.parent().next().html("");
												formatCheckItemBoolean[num] = true;
											}else{
												obj.next().hide();
												obj.parent().css({
													"border":"1px solid red"
												})
												obj.parent().next().css({
													"color":"red"
												}).html(options.formatCheck[num].dataCheckError);
												formatCheckItemBoolean[num] = false;
											}
										}
									}
									
								}
							})
						}
						function typeCheckbox(){
							var objNames = $(options.formatCheck[num].idname)[0].name;
							var objs = $("input[name = "+objNames+"]");//
							$(objs).click(function(){
								if (this.checked) {
									formatCheckItemBoolean[num] = true;
								}else{
									
								}
								
							})
						}
						function typeRadio(){
							var objNames = $(options.formatCheck[num].idname)[0].name;
							var objs = $("input[name = "+objNames+"]");//
							$(objs).click(function(){
								formatCheckItemBoolean[num] = true;
							})
						}
						function typePassWord(){
							var pwd = ThisObj.find("input[type=password]");
							var pwd2Val = pwd.eq(1).val();
							var pwd1Val = pwd.eq(0).val();
							if(pwd.length == 2){
								pwd.eq(1).blur(function(){
									pwd2Val = pwd.eq(1).val();
									pwd1Val = pwd.eq(0).val();
									
									var obj = $(this);
									var val = $(this).val();
									var reg = options.formatCheck[num].reg;
									var  error =options.formatCheck[num].error;
									var boon = reg.test(val);
									
										if(boon == true && (pwd2Val == pwd1Val)){
											$(this).next().show();
											obj.parent().next().html("");
											formatCheckItemBoolean[num] = true;

										}else{
											$(this).next().hide();
											$(this).parent().css({
												"border":"1px solid red"
											})
											.next().css({
												"color":"red"
											}).html(error);
											formatCheckItemBoolean[num] = false;
										}

										if(pwd1Val == ""){ // 【设置密码框】不为空，确认密码才生效。
											$(this).val("")
											pwd.eq(0).focus();
										}
								
									
								})
								
								// 值改变之后  确认密码立即获得焦点
								pwd.eq(0).change(function(){
									pwd.eq(1).focus()
								})
							}
						}
						
					})(i)
				}

			}
			// 失焦 格式验证结束
			
			// 数据验证开始
			
			var dataCheckItemBoolean=true;
			if (options.dataCheck !== false){
				// dataCheck();
			}
			
			function dataCheck(){
				dataCheckItemBoolean = [];
				for (var i=0,len=options.dataCheck.length;i<len;i++) {
					dataCheckItemBoolean[i] = false;
					(function(num){
						$(options.dataCheck[num].idname).blur(function(){
							var xhr = new XMLHttpRequest();
							xhr.open("post",options.xhrURL,true);
							var sendStr = "keyName="+this.id+"&keyValue="+this.value+"";
							
							xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
							xhr.send(sendStr);
							xhr.onreadystatechange=function(){
								if (xhr.readyState == 4 && xhr.status == 200) {
									var str = xhr.responseText;
									var xhrbool = JSON.parse(str);
									dataCheckItemBoolean[num] = xhrbool;
								}
							}
						})
					})(i);
				}
			}
			// 数据验证结束


			// 表单提交 事件
			$(this).submit(function(){
				var len = options.formatCheck.length;
				formatCheckBoolean = false;
				dataCheckBoolean = true;
				console.log(formatCheckItemBoolean)
				for(var i=0;i<len;i++){
					if(formatCheckItemBoolean[i] !== true ){
						formatCheckBoolean = false;
						$(options.formatCheck[i].idname).focus();
						break;
					}else{
						formatCheckBoolean = true;
					}
				}

				// if (options.dataCheck !== false){
				// 	for (var i=0;i<options.dataCheck.length;i++) {
				// 			if (dataCheckItemBoolean[i] !== true){
				// 				dataCheckBoolean = false;
				// 				break;
				// 			}

				// 	}
				// }
				
				console.log(formatCheckBoolean)
				return formatCheckBoolean;
			
				if (formatCheckBoolean==true && dataCheckBoolean==true) {
					return true;
				}else{
					return false;
				}
			})
			return this
		}
	})
})(jQuery)
;
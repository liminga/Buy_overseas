 $(function(){
	var vm = new Vue({
		el:"#login",
		data:{
			
			xjp_form:{
				dialog:false,
				loginName:"username",
				loginNameValue:"",
				userSex:"",
				pdValue:"",
				defaultIndex:0,
				defaultPattern:"普通登陆",
				patternItem:[
					{"title":"普通登陆","isActive":true},
					{"title":"手机登陆","isActive":false},
					{"title":"邮箱登陆","isActive":false}
					],

				loginPattern:[false,false],
				isbool:false,
				inputPatternItem:[
					{
						islabel:false,
						inputType:"text",
						inputName:"username",
						inputId:"username",
						value:"",
						inputPlaceholder:"用户名登陆",
						isvisible:true,
						reg:/^[A-Za-z]\w{5,19}$/,
						error:"<i class='register-icon iconfont icon-Errorpromptt i-error'></i>格式错误",
						default:"<i class='register-icon iconfont icon-tipIcon i-def'></i>温馨提示：用户名一般为6-20个字符"

					},
					{
						islabel:true,
						inputType:"text",
						inputName:"tel",
						inputId:"tel",
						value:"",
						inputPlaceholder:"手机号登陆",
						isvisible:false,
						reg:/^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/,
						error:"<i class='register-icon iconfont icon-Errorpromptt i-error'></i>格式错误",
						default:"<i class='register-icon iconfont icon-tipIcon i-def'></i>温馨提示:没有"
					},
					{
						islabel:false,
						inputType:"emil",
						inputName:"emil",
						inputId:"emil",
						value:"",
						inputPlaceholder:"邮箱登陆",
						isvisible:false,
						reg:/^[a-zA-Z0-9_-]+@([a-zA-Z0-9_-])+\.([a-zA-Z0-9_-])+$/,
						error:"<i class='register-icon iconfont icon-Errorpromptt i-error'></i>格式错误",
						default:"<i class='register-icon iconfont icon-tipIcon i-def'></i>温馨提示：请使用完整的邮件格式"
					}
				],
				countrySelectVisible:false,
				state:"中国",
				stateOptions:["中国","美国","北京","长沙","武汉"],
				password:[
					{
						reg:/(^[\w-_]{6,20}$)/,
						error:"<i class='register-icon iconfont icon-Errorpromptt i-error'></i>格式错误"
					}
				],
				nameTip:"",
				passwordTip:"",
				nameTipClass:false,
				passwordTipClass:false,
				xhrurl:"admin/isvalue.php",
				xhrReturnValue:false,//数据返回的结果；
				xhrSendStr:""

			}
			
		},
		methods:{
			// 登陆方式的切换
			patternChange:function(patternItemIndex){
				// 第一步：点击谁，让defaultPattern等于谁的title;

				this.xjp_form.defaultPattern = patternItemIndex['title'];
				this.xjp_form.loginNameValue = "";//清空输入框的值
				this.xjp_form.pdValue = "";
				// 第二步： 遍历所有的li元素(tab)。控制表单的登陆方式 
				for (var i=0;i<this.xjp_form.patternItem.length;i++){
					
					if (this.xjp_form.defaultPattern == this.xjp_form.patternItem[i]['title'] ) {
						this.xjp_form.defaultIndex = i;//设置了一个索引值，以备不时之需。
						this.xjp_form.inputPatternItem[i].isvisible = true;//控制对应的input显示、隐藏
						// this.xjp_form.loginName = this.xjp_form.inputPatternItem[i].inputId;//对应的登陆方式名称
						this.xjp_form.patternItem[i].isActive = true;//控制li元素(tab)的border,
					}else{
						this.xjp_form.inputPatternItem[i].isvisible = false;
						this.xjp_form.patternItem[i].isActive = false;
					}
				}
				// 如果点击手机登陆时，显示另外一个模块 
				if (this.xjp_form.defaultPattern == "手机登陆" ) {
					this.xjp_form.isbool = true;
				}else{
					this.xjp_form.isbool = false;
				};
				// 第三步 
				this.xjp_form.loginPattern = [false,false];
			},
			// 手机登陆时，二级拉菜单的模拟
			countrySelect:function(){
				this.xjp_form.countrySelectVisible = !this.xjp_form.countrySelectVisible;
			},
			// 二级菜单的点击事件 
			selectOptions:function(val){
				this.xjp_form.state = val;
				this.countrySelect();
				console.log(this.xjp_form.loginNameValue)

			},
			// 用户名验证
			formkeyNameBlur:function(){
				// var e = window.event || event;
				// var obj = e.srcElement ? e.srcElement:e.target;
				
				// alert("111")
				// 登陆名失去焦点时的的验证；
				// var val = event.target.value;
			
				// console.log(val)
				var val = this .xjp_form.loginNameValue;
				var index = this.xjp_form.defaultIndex;
			
				var reg = this.xjp_form.inputPatternItem[index].reg;
				var tip = this.xjp_form.inputPatternItem[index].error;
				this.xjp_form.loginName = this.xjp_form.inputPatternItem[index].inputId;//对应的登陆方式名称

				var bool = reg.test(val);
				this.xjp_form.loginPattern[0] = bool;//让一个数组中的某个值==false，


				// 提示信息作出相应改变 并且以红色显示，对应input输入框border 变色
				if (bool == false) {
					this.xjp_form.nameTip = tip;
					this.xjp_form.nameTipClass = true;// 对应的提示信息颜色变色。 
				}else{
					this.xjp_form.nameTip = "";
					this.xjp_form.nameTipClass = false;// 复位 
					// 与数据库比对，是否存在这个值。
					var sendStr = "keyName="+this.xjp_form.loginName+"&keyValue="+this.xjp_form.loginNameValue+"";
					 this.xjp_form.xhrSendStr = sendStr;
					this.XHR("用户名不存在",0);
					
				}
				
			},
			formkeyNameFocus:function(){
				// 登陆名获取焦点时的提示
				var tip = this.xjp_form.inputPatternItem[this.xjp_form.defaultIndex].default;
				this.xjp_form.nameTip = tip;
				this.xjp_form.nameTipClass = false;// 复位 
				this.xjp_form.nameinputClass = false;// 复位
			},
			// 密码验证 
			formpasswordBlur:function(){
				var reg = /(^[\w-_]{6,20}$)/;
				var error = "<i class='register-icon iconfont icon-Errorpromptt i-error'></i>格式错误";
				// var val = event.target.value;
				var val = this.xjp_form.pdValue;
				var bool = reg.test(val);
				this.xjp_form.loginPattern[1] = bool;
				if (bool == false) {
					this.xjp_form.passwordTip = error;
					this.xjp_form.passwordTipClass = true;// 对应的提示信息颜色变色。 
					this.xjp_form.passwordinputClass = true;//对应的input输入框发生变化
				}else{
					this.xjp_form.passwordTip = "";
					this.xjp_form.passwordTipClass = false;// 复位 
					this.xjp_form.passwordinputClass = false;// 复位
					var sendStr = "keyName=password&keyValue="+val+"";
					this.xjp_form.xhrSendStr = sendStr;
					// this.XHR("用户名与密码不匹配",1);
				}
				// console.log(this.xjp_form.pdValue)

			},
			formpasswordFocus:function(){
				var def = "温馨提示的：密码为6-20位字符";
				this.xjp_form.passwordTip = def;
				this.xjp_form.passwordTipClass = false;// 复位 
				this.xjp_form.passwordinputClass = false;// 复位
			},
			XHR:function(errorStr,colIndex){
				var xhr = new XMLHttpRequest();
				var url = this.xjp_form.xhrurl
				xhr.open("post",url,true);
				var sendStr = this.xjp_form.xhrSendStr;
				xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				xhr.send(sendStr);
				console.log(sendStr)
				xhr.onreadystatechange=function(){
					if (xhr.readyState == 4 && xhr.status == 200) {
						var str = xhr.responseText;
						console.log(str)
						console.log(typeof str)
						var xhrbool = JSON.parse(str);
						console.log(xhrbool);
						console.log(typeof xhrbool)
					
						vm.xjp_form.xhrReturnValue = xhrbool
						
						if (vm.xjp_form.xhrReturnValue == true) {

							vm.xjp_form.nameTip = ""
							vm.xjp_form.nameTipClass = false;
							vm.xjp_form.loginPattern[colIndex] = true;
							
						}else{
							vm.xjp_form.nameTip = errorStr;
							vm.xjp_form.nameTipClass = true;
							vm.xjp_form.loginPattern[colIndex] = false;
							// vm.xjp_form.loginNameValue = ""
						}
						
					}
				}
				
				
			},
			vSubmit:function(){
				
				var bool = false;
				// console.log(this.xjp_form.loginPattern == false);
				for (var i=0,len=this.xjp_form.loginPattern.length;i<len;i++) {
					if (this.xjp_form.loginPattern[i] == false) {
						bool = false;
						break;
					}else{
						bool = true;
					}
				};
				if(bool == true){
					var xhr = new XMLHttpRequest();
					xhr.open("post","admin/login.json",true);
					xhr.send();
					xhr.onreadystatechange = function (){
						if ( xhr.readyState == 4 && xhr.status ==200 ) {
							var str = xhr.responseText;
							var obj = JSON.parse(str);
						
							for (var i=0;i<obj.length;i++) {
								if (obj[i][vm.xjp_form.loginName] == vm.xjp_form.loginNameValue ) {
									if (obj[i]['password'] == vm.xjp_form.pdValue) {
										console.log("成功");
										vm.xjp_form.nameTip = "";
										vm.xjp_form.nameTipClass = false;
										vm.xjp_form.loginPattern[0] = true;
										vm.xjp_form.loginPattern[1] = true;
										vm.xjp_form.dialog = true;
										vm.xjp_form.loginNameValue = obj[i]['username'];
										var sex = obj[i]['sex'];
										if(sex == 'man'){
											vm.xjp_form.userSex =  '先生';
										}else if (sex == 'woman') {
											vm.xjp_form.userSex =  '女士';
										}
										vm.endTime(5,".time");
										// 创建一个localStorage 和一个 sessionStorage
										vm.setLoacalStorage({
											"xjpFormUsername":vm.xjp_form.loginNameValue,
											"xjpFormPassword":vm.xjp_form.pdValue,
											"xjpFormSex":vm.xjp_form.userSex
										});
										break;
									}else{
										console.log()
										vm.xjp_form.nameTip = "用户名与密码不匹配";
										vm.xjp_form.nameTipClass = true;
										vm.xjp_form.loginPattern[0] = false;
										vm.xjp_form.loginPattern[1] = false;
										vm.xjp_form.dialog = false;
									}
									break;
								}
							}
						}
					};

				}
				
				// return false;
			},
			endTime:function(time,obj){
				var s = time;
				var interval =null;
				interval = setInterval(function(){
					s--;
					$(obj).text(s);
					console.log(s)
					if (s == 0){
						clearInterval(interval);
						location.assign("index.html?"+vm.xjp_form.loginNameValue)
					}
				},1000);

				$("#post_btn").click(function(){
					clearInterval(interval);
				});


				
			},
			setLoacalStorage:function(options){
				for (var item in options) {
					localStorage.setItem(item,options[item]);
				}
			}
		}
	});

// submit 
	 // document.getElementById("xjp_form").onsubmit = function () {
	 // 	event.preventDefault;
	 // 	return vm.vSubmit();
	 // }

})
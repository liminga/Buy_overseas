window.onload=function(){
	var $=function(id){
		return document.getElementById(id);
	}
	var pas=$("password");
	var past=$("passwordture");
	var str=$("str");
	var cho=$("choice_c");
	var coun=$("country");
	var ver=$("verify");
	var check=$("checkbox");
	cho.onfocus=function(){
		cho.placeholder="";
	}
	pas.onfocus=function(){
		pas.placeholder="";
	}
	past.onfocus=function(){
		past.placeholder="";
	}
	str.onfocus=function(){
		str.placeholder="";
	}
	var n=60;
	ver.onclick=function(){
		ver.disabled=true;
		var set=setInterval(function(){
			n--;
			ver.value=n+"s获取验证码";
			if (n==0) {
				ver.disabled=false;
				clearInterval(set);
				n=60;
				ver.value="点击获取验证码";
			}
		},500)
	}
	
	var sub=$("submit");
	console.log(pas.value);
	sub.onclick=function(){
		if (parseInt(cho.value.length)!=11 || cho.value.length==null) {
			alert("手机号码输入有误");
		}else if (parseInt(pas.value.length)<8 || parseInt(pas.value.length)==null) {
			alert("请重新输入密码");
		}else if(pas.value!=past.value){
			alert("两次密码输入不一致");
		}else if(ver.value==null){
			alert("请输入验证码");
		}else{
			document.write("注册成功")
		}
	}
}
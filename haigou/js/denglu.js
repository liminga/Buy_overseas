window.onload=function(){
	var $=function(id){
		return document.getElementById(id);
	}
	var med1=$("method_1");
	var med2=$("method_2");
	var med3=$("method_3");
	var med4=$("method_4");
	var med5=$("method_5");
	var dis1=$("display1");
	var dis2=$("display2");
	var dis3=$("display3");



	med1.onclick=function(){
		dis1.style.display="block";
		dis2.style.display="none";
		dis3.style.display="none";

	}
	med2.onclick=function(){
		dis1.style.display="none";
		dis2.style.display="none";
		dis3.style.display="block";

	}
	med3.onclick=function(){
		dis1.style.display="none";
		dis2.style.display="block";
		dis3.style.display="none";
	}
	med4.onclick=function(){
		dis1.style.display="none";
		dis2.style.display="block";
		dis3.style.display="none";
	}
	med5.onclick=function(){
		dis1.style.display="none";
		dis2.style.display="none";
		dis3.style.display="block";
	}

	var gets=$("getpassw");
	var click=$("get_paswd");
	var m=60;
	click.onclick=function(){
		click.disabled=true;
		var time=setInterval(function(){
			m--;
			gets.innerHTML=m+"s后重新获取验证码";
			if (m==0) {
				click.disabled=false;
				clearInterval(time);
				m=60;
				gets.innerHTML="获取手机动态密码";
			}
		},1000)
	}
}

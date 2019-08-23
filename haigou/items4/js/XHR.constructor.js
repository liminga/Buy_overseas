
function XJP_XHR(){
	this.url = url ;
	this.str = str;
	this.returnValue=null;
}
XJP_XHR.prototype.xhr=function(){
	var xhr = new XMLHttpRequest();
	xhr.open("post",this.url,true);
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhr.send(this.str);
	xhr.onreadystatechange=function(){
		if (xhr.readyState == 4 && xhr.status == 200) {
			var str = xhr.responseText;
			var xhrbool = JSON.parse(str);
			dataCheckItemBoolean[num] = xhrbool;
		}

	}
}
function XHR(url,str){
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
}

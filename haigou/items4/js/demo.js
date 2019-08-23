var xhr = new XMLHttpRequest();
		xhr.open("get","js/isvalue.php",true);
		xhr.send();
		xhr.onreadystatechange=function(){
			if (xhr.readyState == 4 && xhr.status == 200) {
				console.log("123")
			}
		}
$(function(){

	var vm = new Vue({
		el:"#main",
		data:{
			username:"缘是圆",
			gridItem:[]
		},
		methods:{
			gridItemOnload:function(){
				alert("123");
				$div.css({
					"position":"absolute",
					"width":"100%",
					"height":$("#isolayer").find(".grid").height()+600
				});
				$("#isolayer").before($div);
			},
			getlocalStorage:function(key,value){
				this.username = "缘来是你 ( "+localStorage.getItem(key)+" )";
				console.log(this.username)
			}
		}
	})
	vm.getlocalStorage("xjpFormUsername");
	// 0 页面加载时的初始化状态 
	var $div = $("<div></div>")
	init();
	$(window).resize(function(){
		init();
	})
	function init() {
		/*if ($row[$keyName] == $keyValue && $row['password'] == $form_password) {
		0-1 滚动条高度回到 0 的位置。
		0-2 追加一个块级元素，该元素位于isolayer之前，高度必须 宽度 百分比等于ul的高度;
		0-3 创建ajax对象，请求数据。
		0-4 前10个li元素，显示，然后后面所有的元素都根据滚动位置来显示
		*/
		// 0-1
		$(window).scrollTop(0);

		// 0-3
		var xhr = new XMLHttpRequest();
		xhr.open("get","index.json",true);
		xhr.send();
		
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				var str = xhr.responseText;
				var obj = JSON.parse(str);
				vm.$data.gridItem = obj.gridItem;
				console.log(obj.gridItem.length)
			
			}
		}


		var temporary=null;
		temporary = setInterval(function(){
			if(vm.gridItem.length > 0){
				$div.css({
					"position":"absolute",
					"width":"100%",
					"height":$("#isolayer").find(".grid").height()+600
				});
				$("#isolayer").before($div);
				clearInterval(temporary);
				temporary = null;
			}
			
		},1)
		// 0-2
		
	}
	// 0 End 页面加载时的初始化状态 

	// 一 滚动条滚动需要完成的事情 
	$(window).scroll(function(){
		//1-0 ul元素 translateY+=滚动条的高度。
		var top = ($(window).scrollTop());
		$(".grid").css({
			"transform":"translate3d(0px,"+(-top)+"px,0px)"
		})
		//  1-1 最后一个可见元素距离底部只有多少的时候显示。
		// var lastShowItem = $(".onshow:last")[0];

		// if (($(lastShowItem).offset().top)-top < 440) {
		// 	$(lastShowItem)
		// 	.next().addClass("onshow")
		// 	.next().addClass("onshow")
		// 	.next().addClass("onshow");
		// }
	});
	//End 一 滚动条滚动需要完成的事情 
	// 判断个人介绍模块的状态，如果是隐藏的，则将导航栏固定在最底下，如果是显示的，复原。
	$(window).resize(function(){
		if ($("footer").is(":hidden")) {
			$(".cn-button").addClass("cn-button-toggle");
			$(".csstransforms .cn-wrapper").addClass("toggle");
		}else{
			$(".cn-button").removeClass("cn-button-toggle");
			$(".csstransforms .cn-wrapper").removeClass("toggle");
		}
		$(".cn-button").click();
		
	})
	$(".button-menu").click(function(){
		$("footer").toggle();
		$(".header-info").toggle();

		$(".cn-button").toggleClass("cn-button-toggle");
		$(".csstransforms .cn-wrapper").toggleClass("toggle");
		
		// $("aside").toggle();
		// $("#isolayer").toggleClass("resetlayer");
		// $div.toggle();
	})
	// 调用粒子效果
	new CanvasConstructor("projector");
// this is bottom nav
(function(){
	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper'),
    overlay = document.getElementById('cn-overlay');

	// open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);
	wrapper.addEventListener('click', cnhandle, false);

	function cnhandle(e){
		e.stopPropagation();

	}
	var count=0;
	function handler(e){
		if (!e) var e = window.event;
	 	e.stopPropagation();//so that it doesn't trigger click event on document

	  	if(!open){
	    	openNav();
	  	}
	 	else{
	    	closeNav();
	  	}
	  	count++;
	  	css(button,{
	  		"transform":"rotate("+(count*360)+"deg)",
	  		"-webkit-transform":"rotate("+(count*360)+"deg)",
	  		"-moz-transform":"rotate("+(count*360)+"deg)",
	  		"-o-transform":"rotate("+(count*360)+"deg)",
	  		"-ms-transform":"rotate("+(count*360)+"deg)",
	  		"transition":"all .3s"
	  	})
	  	
	}
	function openNav(){
		open = true;
	    // classie.add(overlay, 'on-overlay');
	    classie.add(wrapper, 'opened-nav');
	}
	function closeNav(){
		open = false;
		// classie.remove(overlay, 'on-overlay');
		classie.remove(wrapper, 'opened-nav');
	}
	document.addEventListener('click', closeNav);

	$(window).resize(function(){
		handler();
		// css(wrapper,{
	 //  		"transform":"scale(0)",
	 //  		"-webkit-transform":"scale(0)",
	 //  		"-moz-transform":"scale(0)",
	 //  		"-o-transform":"scale(0)",
	 //  		"-ms-transform":"scale(0)",
	 //  		"transition":"all .3s"
	 //  	})
		console.log("222")
	})
	function css(obj,options){
		for (var item in options) {
			obj.style[item] = options[item];
		}
	}

})();
// End this is bottom nav

});


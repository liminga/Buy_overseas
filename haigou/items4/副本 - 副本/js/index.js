$(function(){
	// 0 页面加载时的初始化状态 
	/*
	0-1 滚动条高度回到 0 的位置。
	0-2 追加一个块级元素，该元素位于isolayer之前，高度必须 宽度 百分比等于ul的高度;
	0-3 创建ajax对象，请求数据。
	0-4 前10个li元素，显示，然后后面所有的元素都根据滚动位置来显示

	*/
	// 0-1
	$(window).scrollTop(0);
	// 0-2
	var $div = $("<div></div>")
	$div.css({
		"position":"absolute",
		"width":"100%",
		"height":450+$("#isolayer").find(".grid").height()
	})
	$("#isolayer").before($div)
	// 0-4
	$(".grid-item").each(function(index,obj){
		if($(this).index() <10){
			$(this).addClass("onshow");
		}else{
			
		}
	})

	// 0-3
	// var xhr = new XMLHttpRequest();
	// xhr.open("get","json/index.json",true);
	// xhr.send();
	// xhr.onreadystatechange = function(){
	// 	if(xhr.readyState == 4 && xhr.status == 200){
	// 		var str = xhr.responseText;

	// 		console.log(str)
	// 	}
	// }
	// 0 End 页面加载时的初始化状态 



	// 一 滚动条滚动需要完成的事情 
	$(window).scroll(function(){
		// 1-0 ul元素 translateY+=滚动条的高度。
		var top = ($(window).scrollTop());
		$(".grid").css({
			"transform":"translate3d(0px,"+(-top)+"px,0px)"
		})
		//  1-1 最后一个可见元素距离底部只有多少的时候显示。
		var lastShowItem = $(".onshow:last")[0];
		if ($(lastShowItem).offset().top-top < 440) {
			$(lastShowItem)
			.next().addClass("onshow")
			.next().addClass("onshow")
			.next().addClass("onshow");
		}
	})
	// End 一 滚动条滚动需要完成的事情 
	
})
$(function(){
	var vm=new Vue({
		el:"#app",
		data:{
			arrlie:[],
			img:[],
		},
		methods:{
			
		}
	})
	// console.log(arrlie.n)
	// 鼠标样式开始
	function bg(){
		var arr=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
		var bgN="#";
		for(var i=0; i<6; i++){
			bgN+=arr[Math.floor(Math.random()*16)];
		}
		return bgN;
	}
	var num3=0;
	var q=0;
	$(document).on("mousemove",function(e){
		if(q>4){
			$("body").append('<div class="ap'+num3+" "+'wh"></div>')
			$(".ap"+num3).css("left",e.pageX+10+"px").css("top",e.pageY+10+"px").css("background",bg());
			$(".ap"+num3).fadeOut(500);
			if(num3>30){
				$(".ap"+(num3-30)).remove();
			}
			num3++;
		}
		q++;
	})
	// 鼠标样式结束
	// 导航a标签的hover事件开始
	$(".nav1>li>a").hover(function(){
		$(this).find(".xiegang").html("");
		$(this).css({
			"paddingRight":".4rem",
			"background":"#f5f5f5",
			"color":color,
		});
		$(".nav1>li>a").eq(0).css("paddingRight","0rem");
	},function(){
		$(".xiegang").html("/");
		$(this).css({
			"paddingRight":"0rem",
			"background":"#f5f5f5",
			"color":"#777",
		});
	})
	$(".ac>ul> li > a").hover(function(){
		$(this).css({"color":color});
	},function(){
		$(this).css({"color":"#777"});
	})
	$(".nav1>li>a").eq(0).hover(function(){
		$(this).find(".xiala")[0].className="icon-caret-up xiala";
		$(this).css({"color":color});
	},function(){
		$(this).find(".xiala")[0].className="icon-caret-down xiala";
		$(this).css({"color":"#999"});
	})
	$(".nav1>li>a").eq(2).hover(function(){
		$(this).css("paddingRight",".2rem");
	},function(){
		$(this).css("paddingRight","0rem");
	})
	$(".nav1>li>a").eq(5).hover(function(){
		$(this).find(".xiala2")[0].className="icon-caret-up xiala2";
		$(this).css({
			"color":color,
			"paddingRight":".46rem",
		});
	},function(){
		$(this).find(".xiala2")[0].className="icon-caret-down xiala2";
		$(this).css({
			"color":"#999",
			"paddingRight":"0rem",
		});
	})
	$(".nav1>li>a").eq(6).hover(function(){
		$(this).find(".xiala2")[0].className="icon-caret-up xiala2";
		$(this).css({
			"color":color,
			"paddingRight":".46rem",
		});
	},function(){
		$(this).find(".xiala2")[0].className="icon-caret-down xiala2";
		$(this).css({
			"color":"#999",
			"paddingRight":"0rem",
		});
	})
	$(".nav1>li>a").eq(7).hover(function(){
		$(this).find(".xiala2")[0].className="icon-caret-up xiala2";
		$(this).css({
			"color":color,
			"paddingRight":".46rem",
		});
	},function(){
		$(this).find(".xiala2")[0].className="icon-caret-down xiala2";
		$(this).css({
			"color":"#999",
			"paddingRight":"0rem",
		});
	})

	$(".menu-1>li>a>span").hover(function(){
		$(this).css({"color":color});
	},function(){
		$(this).css({"color":"#333"});
	})

	$(".menu-1>li").eq(0).find("a").hover(function(){
		$(this).css({"color":color});
	},function(){
		$(this).css({"color":"#333"});
	})

	$(".menu-2>li>a>p>span").hover(function(){
		$(this).css({"color":color});
	},function(){
		$(this).css({"color":"#333"});
	})

	$(".menu-6 > li > a").hover(function(){
		$(this).css({"color":color});
	},function(){
		$(this).css({"color":"#333"});
	})
	// 导航a标签的hover事件结束
	// 导航a标签的click事件开始
	$(".nav1>li>a").on("click",function(){
		$(this).css("background","#f5f5f5");
	})
	// 导航a标签的click事件结束

	// banner图开始
	$("#mycarousel").carousel({
		interval:2000,
		pause:"hover",
		wrap:true,
	})
	// // banner图结束
	// 列表的hover事件结束
	// var colorli="#";
	// Math.
	$("#nav2>ul>li>ul>li>a").hover(function(){
		$(this).css({"color":color})
	},function(){
		$(this).css({"color":"#000"})
	});

	// 列表的hover事件开始
	// 列表追加内容开始
	// var arrfirstli1=[ 
	// 		["当季流行&gt;","夏季新品","商场同款","气质连衣裙","印花衬衫","牛仔单品","百搭休闲裤","无痕文胸","运动文胸","超柔内裤","潮流家居服","百搭船袜"],
	// 		["精选上装&gt;","T恤衬衫","针织衫","短外套","小西装","风衣","卫衣","毛衣"],
	// 		["浪漫裙装&gt;","连衣裙","蕾丝连衣裙","真丝连衣裙","印花连衣裙","半身裙","蕾丝半身裙",'百褶裙',"牛仔裙","背心裙","a字裙","棉麻连衣裙","包臀裙长袖","连衣裙"],
	// 		["女士下装&gt;","短裤牛仔裤","休闲裤","小脚裤","哈伦裤","背带裤","西装裤","阔腿裤","打底裤"],
	// 		['特色女装&gt;',"时尚套装","休闲套装","精选妈妈装","大码女装","职业套装","优雅旗袍","精致礼服","婚纱唐装","小码女装"],
	// 		["文胸塑身&gt;","光面文胸",'运动文胸',"美背文胸","聚拢文胸","大杯文胸","轻薄塑身"],
	// 		["家居服&gt;","春夏家居服","纯棉家居服","莫代尔家居服","真丝家居服","春夏睡裙","男士家居服","情侣家居服","性感睡裙"],
	// 		["内裤背心&gt;","男士内裤","女式内裤","男士内裤多条装","女士内裤多条装","莫代尔内裤","吊带背心"] 
	// 	];
	// var arrfirstli2=[
	// 	["当季流行","秋季新品","商场同款","短袖T恤","POLO衫","短袖衬衫","棉麻质感牛仔衬衫","修身夹克","潮流卫衣","长袖衬衫","束脚裤","九分裤","破洞牛仔裤","健身套装","划船机泳衣","跑步鞋","自行车","平衡车","篮球鞋","帆布鞋","休闲鞋"],
	// 	["男士外套","夹克","单西棒球服","棉衣","大衣","风衣","西服套装","羽绒服","皮衣运动服","工装外套","针织开衫马甲"],
	// 	["男士内搭","短袖T恤","POLO衫","长袖T恤","短袖衬衫","长袖衬衫","卫衣针织衫/毛衣背心"],
	// 	["男士裤装","休闲裤","牛仔裤","西裤","小脚裤","运动裤","针织裤","工装裤","9分裤","短裤"],
	// 	["特色男装","潮牌中老年加大码","职场精英","中国风情侣装"],
	// 	["运动服","短袖t恤","运动裤","运动内衣","速干t恤运动","Polo运动","卫衣运动套装","运动短裤","健身服运动茄克"],
	// 	["户外用品","钓竿双肩背包","防晒衣","户外包","帐篷","手电筒刀具"],
	// 	["运动用品","跑步机","瑜伽垫泳衣","瑜伽服","羽毛球拍","自行车","电动车","篮球","足球","运动护具","健身器械","网球拍"],
	// ];
	// var arrlastli1=[
	// 	["images/tubiao/nvzhuang/T1gRqVXk4fXXb1upjX.jpg_170x120q30.jpg"],
	// 	["images/tubiao/nvzhuang/TB1B_DcJpXXXXXWXFXXSutbFXXX.jpg_170x120q30.jpg"],
	// 	["images/tubiao/nvzhuang/TB1dSYULVXXXXXlXXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg"],
	// 	["images/tubiao/nvzhuang/TB1fETUHpXXXXbmapXXwu0bFXXX.png_170x120q30.jpg"],
	// 	["images/tubiao/nvzhuang/TB1FfxjHFXXXXbWaXXXSutbFXXX.jpg_170x120q30.jpg"],
	// 	["images/tubiao/nvzhuang/TB1gWxjFFXXXXcEaFXXSutbFXXX.jpg_170x120q30.jpg"],
	// 	["images/tubiao/nvzhuang/TB1HMfoHpXXXXclXXXXwu0bFXXX.png_170x120q30.jpg"],
	// 	["images/tubiao/nvzhuang/TB1SvLzLVXXXXaKXVXXXXXXXXXX-1000-500.jpg_170x120q30.jpg"],
	// 	["images/tubiao/nvzhuang/TB1UJIfJXXXXXctaXXXSutbFXXX.jpg_170x120q30.jpg"],
	// 	["images/tubiao/nvzhuang/TB1w472LFXXXXXwXVXXSutbFXXX.jpg_170x120q30.jpg"],
	// 	["images/tubiao/nvzhuang/TB1wNJAHFXXXXc7XpXXSutbFXXX.jpg_170x120q30.jpg"],
	// 	["images/tubiao/nvzhuang/TB1wzzFLVXXXXbXXFXXXXXXXXXX-400-200.jpg_170x120q30.jpg"],
	// 	["images/tubiao/nvzhuang/TB17DDrLVXXXXbOaXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg"],
	// 	["images/tubiao/nvzhuang/TB18nTOLVXXXXc5XXXXXXXXXXXX-1000-500.jpg_170x120q30.jpg"],
	// 	["images/tubiao/nvzhuang/TB18XAnIVXXXXclXXXXSutbFXXX.jpg_170x120q30.jpg"],
	// 	["images/tubiao/nvzhuang/TB1xPvNLVXXXXXDXpXXXXXXXXXX-1000-500.jpg_170x120q30.jpg"],
	// 	["images/tubiao/nvzhuang/TB1xnkQKVXXXXaJXXXXXXXXXXXX-378-174.jpg"],
	// ];
	// var $ullie=$("<ul class='ul1ie1'></ul>");
	// var $firstli1;
	// // var $lis;
	// // var liindex;
	// // for(var i=0;i<$("#ul-lie-title>li").length;i++){
	// // 	$("#ul-lie-title>li").eq(i).on("mousemove",function(){
	// // 			liindex=$(this).index();
	// // 		// console.log(liindex);
	// // 			// return liindex;
	// // 	})
	// // }
	// // console.log(liindex);
	// for(var i=0;i<arrfirstli1.length;i++){
	// 	$firstli1=$("<li></li>");
	// 	for(var j=0;j<arrfirstli1[i].length;j++){
	// 		$firstli1.append("<a href='javascript:void(0);'>"+arrfirstli1[i][j]+"</a>");
	// 	}
	// 	$ullie.append($firstli1);
	// }
	// $(".lie-li").append($ullie);
	// var $ulliee=$("<ul class='ul1iee1'></ul>");
	// var $lastli1;
	// for(var i=0;i<arrlastli1.length;i++){
	// 	$lastli1=$("<li></li>");
	// 	for(var j=0;j<arrlastli1[i].length;j++){

	// 		$lastli1.append("<a href='javascript:void(0);'>"+"<img src="+arrlastli1[i][j]+">"+"</a>");
	// 	}
	// 	$ulliee.append($lastli1);
	// }
	// $(".lie-li").append($ulliee);
	// $(".lie-li>.ul1iee1>li>a>img").css({"width":"25%","float":"left"});
	// $(".lie-li>.ul1iee1>li>a>img").last().css({"width":"50%","float":"left"});

	// 摸上去二级菜单显示开始
	$(".lie-li").on("mousemove",function(event){
		event.stopPropagation();
		$(this).find("ul").css("display","block").is($(this).siblings().find("ul").css("display","none"));
	}).on("mouseout",function(){
		$(this).find("ul").css("display","none");
	});
	$(".ul1iee1>li").bind("mousemove",function(){
		$(this).parent("ul").css("display","block").is($(this).siblings().find("ul").css("display","none"));
		// $(this).find("a").attr("href","http://www.tmall.com");
	}).on("mouseout",function(){
		$(this).parent("ul").css("display","none");
	});
	$(document).click(function(){
		$(".lie-li").find("ul").css("display","none");
	})
		// 摸上去二级菜单显示结束
	// 列表追加内容结束
	$(".lie-li").on("mousemove",function(){
		// console.log(location.search)
			var xhr=new XMLHttpRequest();
			xhr.open('post','admin/leibiao.php',true);
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
			xhr.send();
			// alert("1");
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4 && xhr.status==200){
					var str = xhr.responseText;
					var val=JSON.parse(str);
					for (var i=0;i<val.length;i++) {
						vm.$data.arrlie=val;
						vm.$data.img=val[6];
						// vm.$data.arrlie2=val[1];

						// console.log(val[6]);
						// console.log(vm.$data.arrlie[i]);
					}
					
					// console.log(val[0][0])
					// console.log(val)
				}
			}
			
		})
		// 海购秒杀下的图片切换开始
		// 海购秒杀下的图片切换开始1
		// $("#box").width(650*4);
		var num=0;
		// .span3左键点击
		var divwidth;
		$(".gt").bind("click",function(){
			divwidth=$(".img-box>ul").parent().width();
			num++;
			if(num>2){
				num=0;
			}
			$(".img-box>ul").stop().animate({
				left:-divwidth*num+"px",
			})
		})
		// .span4右键点击
		$(".lt").bind("click",function(){
			num--;
			if(num<0){
				num=2;
			}
			$(".img-box>ul").stop().animate({
				left:-divwidth*num+"px",
			})
		})
		// 海购秒杀下的图片切换开始2
		$(".img-boxright>ul>li").eq(0).fadeIn();
		$(".btn-liright").find("a").eq(0).css("background","red").siblings().css("background","#ccc");
		var timer;
		function startTime(){
			timer=setInterval(fun,3000);
		}
		startTime();
		function stopTime(){
			clearInterval(timer);
		}
		var num2=0;
		function fun(){
			if(num2>0){
				num2=0;
			}else{
				num2++
			}
			// console.log(num2);
			$(".img-boxright>ul>li").hide();
			// console.log(num2);
			$(".btn-liright").find("a").eq(num2).css("background","red").siblings().css("background","#ccc");
			$(".img-boxright>ul>li").eq(num2).fadeIn().siblings().fadeOut();

		}
		$(".btn-liright").find("a").bind("click",function(){
			// stopTime();
			var i=$(this).index();
			num2=i;
			$(".img-boxright>ul>li").hide();
			$(this).css("background","red").siblings().css("background","#ccc");
			$(".img-boxright>ul>li").eq(num2).fadeIn().siblings().fadeOut();
			// startTime();

		})
		$(".btn-liright").hover(function(){
			stopTime();
		},function(){
			startTime();
		})
		// 海购秒杀下的图片切换开始3
		$(".div-con>ul").eq(0).fadeIn();
		$(".btnsco").find("a").eq(0).css("background","#e01222").siblings().css("background","#c8c8c8");
		var timer2;
		function startTime2(){
			timer2=setInterval(fun2,3000);
		}
		startTime2();
		function stopTime2(){
			clearInterval(timer2);
		}
		var num5=-1;
		function fun2(){
			if(num5>=2){
				num5=0;
			}else{
				num5++
			}
			// console.log(num5);
			$(".div-con>ul").hide();
			// console.log(num5);
			$(".btnsco").find("a").eq(num5).css("background","#e01222").siblings().css("background","#c8c8c8");
			$(".div-con>ul").eq(num5).fadeIn().siblings("ul").fadeOut();

		}
		$(".conlt").hover(function(){
			stopTime2();
		},function(){
			startTime2();
		})
		$(".congt").hover(function(){
			stopTime2();
		},function(){
			startTime2();
		})
		$(".conlt").on("click",function(){
			// stopTime2();
			if(num<=0){
				num=2;
			}else{
				num--;	
			}
			$(".div-con>ul").hide();
			$(".btnsco").find("a").eq(num).css("background","#e01222").siblings().css("background","#c8c8c8");
			$(".div-con>ul").eq(num).fadeIn().siblings("ul").fadeOut();
			// startTime2();
		})
		$(".congt").on("click",function(){
			// stopTime2();
			if(num>=2){
				num=0;
			}else{
				num++;	
			}
			$(".div-con>ul").hide();
			$(".btnsco").find("a").eq(num).css("background","#e01222").siblings().css("background","#c8c8c8");
			$(".div-con>ul").eq(num).fadeIn().siblings("ul").fadeOut();
			// startTime2();
		})
		$(".btnsco").find("a").bind("click",function(){
			// stopTime2();
			var i=$(this).index();
			num5=i;
			$(".div-con>ul").hide();
			$(this).css("background","#e01222").siblings().css("background","#c8c8c8");
			$(".div-con>ul").eq(num5).fadeIn().siblings("ul").fadeOut();
			// startTime2();

		})
		$(".btnsco").hover(function(){
			stopTime2();
		},function(){
			startTime2();
		})

		// li的index点击事件开始
		$(".img-tit>li").on("click",function(){
			var i=$(this).index();
			console.log(i)
			$(".rightimg-div>ul").eq(i).show().siblings("ul").hide();
		})


		// li的index点击事件结束

		// 海购秒杀图片切换结束
		// 女装开始
		for(var i=0;i<$('.con_top_Img').length;i++){
			// console.log(i)
			var Dw=$('.con_top_Img')[i];
			var btn=$('.con_top_btn')[i];
			imgs(Dw,btn)
		}
		function imgs(Dw,btn){
			btn.style.left = 21+'rem';
			Dw.style.width = 21+'rem';
			//定义一个变量，用来判断鼠标滑动事件，刚开始是false状态
			var open=false;     
			       //鼠标按下执行
			       btn.onmousedown = function(event){
			           event = event || window.event;
			           //变量为true
			           open=true;    
			           var x=btn.offsetLeft;
			           var mouse_x=event.pageX;
			           //鼠标滑动事件
			           $(document).on("mousemove",function(event){
			               event = event || window.event;
			               //如果open为true,那么继续执行，否则
			               if (open) {
			                   var move_x=event.pageX;
			                   var moveDistance=x+(move_x-mouse_x);
			                   if (moveDistance >=0 && moveDistance<=490) {
			                       btn.style.left = moveDistance+'px';
			                       Dw.style.width = moveDistance+'px';
			                   };
			                }
			           })
			       }
			       //鼠标离开事件
			       $(document).on("mouseup",function(){
			           open=false;
			       })
	      }
		// 女装结束
		// 鞋包开始
		$(document).ready(function(){
			$(".div-img").bind("mouseover",function(){
				$(this).find(".spanxiabiao").stop().slideDown();
			}).bind("mouseout",function(){
				$(this).find(".spanxiabiao").stop().slideUp();
			})
		})
		// 鞋包结束
		// 运动开始角度判断开始
		$(".divv").mouseenter(function(e){
					var direct=getDirect(this,e);
					switch(direct){
						case "上":
						$(this).find("a").css({
							top:0,
							left:0,
							width:this.offsetWidth,
							height:0,
						}).stop().animate({
							height:this.offsetHeight+"px"
						},200)
						break;
						case "下":
						$(this).find("a").css({
							top:this.offsetHeight+"px",
							left:0,
							width:this.offsetWidth,
							height:0,
						}).stop().animate({
							top:0,
							height:this.offsetHeight+"px",
						},200)
						break;
						case "左":
						$(this).find("a").css({
							top:0,
							left:0,
							height:this.offsetHeight,
							width:0
						}).stop().animate({
							width:this.offsetWidth
						},200)
						break;
						case "右":
						$(this).find("a").css({
							top:0,
							left:this.offsetWidth+"px",
							height:this.offsetHeight,
							width:0
						}).stop().animate({
							left:0,
							width:this.offsetWidth
						},200)
						break;
					}
				}).mouseleave(function(e){
					var direct=getDirect(this,e);
					switch(direct){
						case "上":
						$(this).find("a").stop().animate({
							height:0,
						},200)
						break;
						case "下":
						$(this).find("a").stop().animate({
							top:this.offsetHeight+"px",
							height:0,
						},200)
						break;
						case "左":
						$(this).find("a").stop().animate({
							width:0,
						},200)
						break;
						case "右":
						$(this).find("a").stop().animate({
							left:this.offsetWidth,
							width:0,
						},200)
						break;
					}
				})
				function getDirect(obj,event){
					var x=obj.offsetLeft+obj.offsetWidth/2;
					var y=obj.offsetTop+obj.offsetHeight/2;
					var maxX=x-event.pageX;
					var maxY=y-event.pageY;
					// console.log(y);
					// console.log(event.pageY);
					var angle=Math.atan(maxY/maxX)*180/Math.PI;
					// console.log(angle);
					var direct;
					if(event.pageY<y){
						if(angle>=35||angle<=-35){
							direct="上";
							// console.log(direct);
						}
						if(angle<35&&angle>0){
							direct="左";
							// console.log(direct);
						}
						if(angle>-35&&angle<0){
							direct="右";
							// console.log(direct);
						}
					}else{
						if(angle>=35||angle<=-35){
							direct="下";
							// console.log(direct);
						}
						if(angle>-35&&angle<0){
							direct="左";
							// console.log(direct);
						}
						if(angle<35&&angle>0){
							direct="右";
							// console.log(direct);
						}
					}
					return direct;
				}

		// 角度判断结束运动结束

		// 左侧导航栏开始
		// var a=$(".item").eq(0).scrollTop();
		// var a=$(".it").eq(0).offset().top;
		// console.log(a);
		// 滚动到指定楼层图片，显示指定楼层的导航
		// 1、每层楼的高度，存储在数组
		var arr=[];
		// var bh=$("#banner").height();
		var bh=$(".it").eq(0).offset().top;
		arr.push(bh);
		$(".it").each(function(index,obj){
			// $(obj).height();
			bh=bh+$(obj).height();
			arr.push(bh);
		})
		//console.log(arr)
		// 2、根据窗口的垂直滚动距离，判断是否达到指定楼层，显示指定楼层的导航
		$(window).scroll(function(){
			for(var i=0; i<arr.length; i++){
				if($(this).scrollTop()>arr[i]){
					$(".asidenav").show();
					$(".asidenav li").eq(i).find(".word").show().css("display","block");
					$(".asidenav li").eq(i).find(".num").hide();
					$(".asidenav li").eq(i).siblings().find(".num").show();
					$(".asidenav li").eq(i).siblings().find(".word").hide();
				}else if($(this).scrollTop()<arr[0]){
					$(".asidenav").hide();
				}					
			}
		})

		// 点击楼层导航，显示指定楼层
		$(".asidenav li").click(function(event){
			event.preventDefault();
			// arr[$(this).index()]
			// arr[j]
			var j=$(this).index();
			$(".asidenav li").eq(j).find(".word").show().css("display","block");
			$(".asidenav li").eq(j).find(".num").hide();
			$(".asidenav li").eq(j).siblings().find(".num").show();
			$(".asidenav li").eq(j).siblings().find(".word").hide();
			$(window).scrollTop(arr[j]+j*35);	
		})

		// 左侧导航栏结束

		// 登录li标签摸上去时效果开始
		$("#uid>li").hover(function(){
			$(this).find("a,span").addClass("title");
		},function(){
			$(this).find("a,span").removeClass("title");
		})
		$("#uid>li").hover(function(){
			$(this).find("a,span").addClass("title");
		},function(){
			$(this).find("a,span").removeClass("title");
		})

		// 登录li标签摸上去时效果结束
		// colse点击开始
		$(".colse").on("click",function(){
			$(this).parent().css("right","-12rem");
		})
		// colse点击结束

		// 颜色本地存储开始
		// var colorbox="";
		var color;
		$(".ulcolor>li>a").on("click",function(){
			// 获取元素样式
			var w =getComputedStyle(this, null); 
			// 设置本地localStorage的值
			localStorage.setItem('color',w.backgroundColor);
			// 获取本地localStorage的值
			color=localStorage.getItem('color');
			$(".title").css("cssText", "color:"+color+" !important;");
			$(".title-bg").css("cssText", "background:"+color+" !important;");
			$(".title-border").css("cssText", "border-color:"+color+"!important;");
			if($(window).scrollTop()<100){
				$(".title-contai2").hide();
			}
		})
		// 获取本地localStorage的值
			color=localStorage.getItem('color');
			// console.log(color);
			$(".title").css("cssText", "color:"+color+" !important;");
			$(".title-bg").css("cssText", "background:"+color+" !important;");
			$(".title-border").css("cssText", "border-color:"+color+" !important;");
		// 颜色本地存储结束

		// 左边color定位开始
		$(".colorbox>.glyphicon-cog").hover(function(){
			$(".colorbox").css({"left":"0"});
		},function(){
			$(".colorbox").css({"left":"-8.8rem"});
		})
		$(".colorbox").on("mousemove",function(){
			$(this).css({"left":"0"});
		}).on("mouseout",function(){
			$(this).css({"left":"-8.8rem"});
		})
		// 左边color定位结束
		// 右边导航条背景设置开始
		$(".right-daohang>span:not('.rigspan3')").hover(function(){
			$(this).css("backgroundColor",color);
			$(".rigspan1").css("backgroundColor","#f5af7e");
		},function(){
			$(this).css("backgroundColor","#262626");
			$(".rigspan1").css("backgroundColor","#f5af7e");
		})

			// ul下的span，hover事件
			$(".ul-denlu>li").hover(function(){
				$(this).find("a,span").css("cssText", "color:"+color+" !important;");
				// $(this).find("a").css("color",color);
			},function(){
				$(this).find("a,span").css("color","#c4c4c4");
			})
		// 右边导航条背景设置结束



		$(window).scroll(function(){
			if($(this).scrollTop()>70){
				$(".title-contai2").show();
			}else{
				$(".title-contai2").hide();
			}	
			
		})


		// top滚动开始
		top($(".top2").parent());
		top($(".Top"));
		function top(objj){
			objj.on("click",function(){
				var scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
				var timer=setInterval(function(){
					if(scrolltop>=1){
						scrolltop-=50;
						document.documentElement.scrollTop=document.body.scrollTop=scrolltop;
					}else{
						document.documentElement.scrollTop=document.body.scrollTop=0;
						clearInterval(timer);
					}
				window.onmousedown=function(){
					clearInterval(timer);
					}	
				},1)
			})
		}
		// top滚动结束










})
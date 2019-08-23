// // this is bottom nav
// (function(){
// // this is nfte
// 	var button = document.getElementById('cn-button'),
//     wrapper = document.getElementById('cn-wrapper'),
//     overlay = document.getElementById('cn-overlay');

// 	// open and close menu when the button is clicked
// 	var open = false;
// 	button.addEventListener('click', handler, false);
// 	wrapper.addEventListener('click', cnhandle, false);

// 	function cnhandle(e){
// 		e.stopPropagation();

// 	}
// 	var count=0;
// 	function handler(e){
// 		if (!e) var e = window.event;
// 	 	e.stopPropagation();//so that it doesn't trigger click event on document

// 	  	if(!open){
// 	    	openNav();
// 	  	}
// 	 	else{
// 	    	closeNav();
// 	  	}
// 	  	count++;
// 	  	css(button,{
// 	  		"transform":"rotate("+(count*360)+"deg)",
// 	  		"-webkit-transform":"rotate("+(count*360)+"deg)",
// 	  		"-moz-transform":"rotate("+(count*360)+"deg)",
// 	  		"-o-transform":"rotate("+(count*360)+"deg)",
// 	  		"-ms-transform":"rotate("+(count*360)+"deg)",
// 	  		"transition":"all .3s"
// 	  	})
	  	
// 	}
// 	function openNav(){
// 		open = true;
// 	    // classie.add(overlay, 'on-overlay');
// 	    classie.add(wrapper, 'opened-nav');
// 	}
// 	function closeNav(){
// 		open = false;
// 		// classie.remove(overlay, 'on-overlay');
// 		classie.remove(wrapper, 'opened-nav');
// 	}
// 	document.addEventListener('click', closeNav);

// 	$(window).resize(function(){
// 		handler();
// 		// css(wrapper,{
// 	 //  		"transform":"scale(0)",
// 	 //  		"-webkit-transform":"scale(0)",
// 	 //  		"-moz-transform":"scale(0)",
// 	 //  		"-o-transform":"scale(0)",
// 	 //  		"-ms-transform":"scale(0)",
// 	 //  		"transition":"all .3s"
// 	 //  	})
// 		console.log("222")
// 	})
// 	function css(obj,options){
// 		for (var item in options) {
// 			obj.style[item] = options[item];
// 		}
// 	}

// })();
// // End this is bottom nav

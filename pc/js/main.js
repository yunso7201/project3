$(function(){
	var n=0;
	var t=0;
	var firstFlag=false;

	// var timer=setTimeout(function(){
	// 	$("html").animate({scrollTop:0}, 400, function(){
	// 		firstFlag=true;
	// 	});
	// }, 100);

	$(window).scroll(function(){
		t=$(window).scrollTop();

		if(t > 80){
			$(".fixed_upper").addClass("show");
		}
		else{
			$(".fixed_upper").removeClass("show");
		}

		if(t < $("#service").offset().top){
			n=0;
		}
		else if(t < $("#portfolio").offset().top-200){
			n=0;
		}
		else if(t < $("#about").offset().top-200){
			n=1;
		}
		else if(t < $("#team").offset().top-200){
			n=2;
		}
		else if(t < $("#contact").offset().top-200){
			n=3;

			if(t == $(document).height()-$(window).height()){
				n=4;
			}
		}
		else {
			n=4;
		}
		// console.log(n);

		$(".GNB li a").removeClass("active");
		$(".GNB li").eq(n).find("a").addClass("active");
		$(".fixed_GNB li a").removeClass("active");
		$(".fixed_GNB li").eq(n).find("a").addClass("active");

		$("section").eq(n).find(".title").addClass("active");
		$("section").eq(n).find(".cont").addClass("active");
	});

	$(window).trigger("scroll");

	var targety=0;

	$(".GNB li, .fixed_GNB li").click(function(e){
		e.preventDefault();

		n=$(this).index();
		targety=$("section").eq(n).offset().top;
		console.log(targety);

		$("html").animate({"scrollTop" : targety}, 800);
	});

	$(".tab").click(function(){
		$("body").addClass("static");
		$(".mobile").addClass("active");
		$(".dim").addClass("active");
	});
	$(".close").click(function(){
		$("body").removeClass("static");
		$(".mobile").removeClass("active");
		$(".dim").removeClass("active");
	});

	var w=0;

	$(window).resize(function(){
		w=$(window).width();
		if(w > 720){
			$(".close").trigger("click");
		}
	});
});

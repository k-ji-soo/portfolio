//배경 별
$(document).ready(function(){
	var stars=800;
	var $stars=$(".stars");
	var r=800;
	
	for(var i=0;i<stars;i++){
		var $star=$("<div/>").addClass("star");
		$stars.append($star);
	}
		
	$(".star").each(function(){
		var cur=$(this);
		var s=0.2+(Math.random()*1);
		var curR=r+(Math.random()*300);
		
		cur.css({ 
		transformOrigin:"0 0 "+curR+"px",
		transform:" translate3d(0,0,-"+curR+"px) rotateY("+(Math.random()*360)+"deg) rotateX("+(Math.random()*-50)+"deg) scale("+s+","+s+")"
		})
	})
});

$(function(){
	//글자 움직이는 것
	$('.main-title').typed({
		strings:['Hello, I am Jisoo Kang, a new web publisher.','안녕하세요. 저는 신입 웹퍼블리셔 강지수입니다.','노력하는 모습을 보여드리겠습니다.'],
		typeSpeed:150,
		backSpeed:80,
		smartBackspace:true, // this is a default
		loop:true //반복 그만하고 싶으면 false
	});

	//메뉴
	var menu=$('.menu-wrap>ul>li');
	var content=$('#content>div');
	
	menu.click(function(e){
		e.preventDefault();
        
		var tg=$(this);
		var i=tg.index();
		var section=content.eq(i); //eq : 0 1 2 3 4
		var tt=section.offset().top;

		menu.removeClass('on');
		menu.eq(i).addClass('on');

		$('html,body').stop().animate({scrollTop:tt});
	});

	//스크롤메뉴
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		content.each(function(){
			var tg=$(this);
			var i=tg.index();
			
			if(tg.offset().top<=sct){
				menu.removeClass('on');
				menu.eq(i).addClass('on');
			}
		});
	});
});




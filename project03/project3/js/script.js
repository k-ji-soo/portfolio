//2depth
$('#nav>ul>.depth2').hover(function(){
    $(this).addClass('active');
},function(){
    $(this).removeClass('active');
});

// function headObj(){
// 	$('#header .gnb').on('mouseenter focusin', function(){
// 		$(this).find('.depth2').stop().slideDown(200).parents('#header').addClass('active').find('.gnbBg').stop().slideDown(200);
// 	});
// 	$('#header .gnb').on('mouseleave focusout', function(){
// 		$(this).find('.depth2').stop().slideUp(200).parents('#header').removeClass('active').find('.gnbBg').stop().slideUp(200);
// 	});
	
// 	$('#header .langs').on('mouseenter focusin', function(){
// 		$(this).find('.lang_box').stop().fadeIn(200);
// 	});
// 	$('#header .langs').on('mouseleave focusout', function(){
// 		$(this).find('.lang_box').stop().fadeOut(200);
// 	});
// }


//mobile

//main banner
var banner=$('.slides li');
var current=0;

setInterval(function(){
   var prev=banner.eq(current);
    current++;
    move(prev,1,0);
    if(current==banner.size()){current=0}
    var next=banner.eq(current);
    move(next,0,1);
},3000);


function move(tg,start,end){
    tg.css('opacity', start).stop().animate({opacity:end},500);
}

//숫자 증가
const numAnimation=document.querySelectorAll('.num');
		//console.log(numAnimation);
		function changeNum(idx){
			let num=400;
			let intervalTime=10;
			let targetNum=numAnimation[idx].getAttribute('data-rate');
            
			const timer=setInterval(function(){ 
				++num;
				numAnimation[idx].innerText=num;
				if(num==targetNum){
					clearInterval(timer);
				    }
			    },intervalTime);
		}

        for(let i=0; i<numAnimation.length; i++){
            changeNum(i); 
        }
        

//scroll
$('.scroll-down a').click(function(){
    var offset = $('#section1').offset(); //선택한 태그의 위치를 반환
    $('html').animate({scrollTop:offset.top},400); //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정부드럽게 해당 위치로 이동
});

//슬라이드

//family site


//top
$(window).scroll(function() {
    if ($(this).scrollTop() > 500){
        $('.top-btn').fadeIn();
    }else{
        $('.top-btn').fadeOut();
    }
});

$(".top-btn").click(function(){
    $('html, body').animate({
        scrollTop:0
    },400);
    return false;
});


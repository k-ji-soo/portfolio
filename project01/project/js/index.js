$(function(){
    //변수지정
    let banner=$('.slides>li'), //배너이미지를 변수에 참조
        button=$('.pager>li'), //배너버튼
        current=0,
        timer=undefined;

    //슬라이드
    function imgslide(){
        timer=setInterval(function(){
            const prev=banner.eq(current);
            const prevBtn=button.eq(current);
            move(prev,0,'-100%');
            prevBtn.removeClass('on');
            current++;
            if(current==banner.size()){
                    current=0;
            }
            const next=banner.eq(current);
            const nextBtn=button.eq(current);
            move(next,'100%',0);
            nextBtn.addClass('on');
        },2000);
    }
    function move(tg,start,end){
        tg.css('left',start).stop().animate({left:end},700);
    }
	imgslide();
	
	
	
	//nav - hover - 이미지 변경

	
});
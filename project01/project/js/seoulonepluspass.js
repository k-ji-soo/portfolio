$(function(){
	$(".btnFaqMore").click(function(){
		$(".more:hidden").slice(0,3).show();
	});
   
	$(".btnFaqless").click(function(){
		$(".more").hide();
	});
});

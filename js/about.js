$(window).scroll(function () {
    var sct = $(window).scrollTop(),
      skill = $('#about').offset();
    if (sct > skill.top - 150) {
      var leftMain = $('.graph-cont>div');
  
      leftMain.each(function () {
        var progressWrap = $(this).find('.progress_bar');
        var progressBar = progressWrap.find('.bar');
        var progressText = progressWrap.find('.num');
        var progressNum = progressText.attr('data-num');
  
        //움직일대상.animate({속성:속성값},시간); - 애니메이트주는방법
        progressBar.animate({
          width: progressNum + "%"
        }, 2000);
  
        //setInterval(할일, 시간);
        // % = 움직일려고 하는 넓이/전체넓이 * 100
        setInterval(textNum, 1000 / 10);
  
        function textNum() {
          var currentWidth = progressBar.width() / progressWrap.width() * 100;
          progressText.text(Math.ceil(currentWidth) + "%");
        }
  
      });
    }
  });
  
   
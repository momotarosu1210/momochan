/*200以上進んだらtopまで戻るボタンを表示
  それ以下、または戻ったら非表示にする*/
$(function() {
  $(window).on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 150 ) {
      $('#pagetop').fadeIn(1000);
    } else {
      $('#pagetop').fadeOut(1000);
    }
  });
});

//クリックしたらトップまで戻る
$(function() {
  $("#pagetop").click(function() {
    // ページの一番上までスクロールさせます。
    $('body, html').animate({scrollTop:0});//animateで囲うことで、ぬるっと上まで上がる。
  });
});

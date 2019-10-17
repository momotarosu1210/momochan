$(function() {
 $('.Toggle,li > a').click(function() {
  $('.Toggle').toggleClass('active');
  $('body').toggleClass('fixed')

 if ($('.Toggle').hasClass('active')) {
  $('.NavMenu').addClass('active'); //クラスを付与
 } else {
  $('.NavMenu').removeClass('active'); //クラスを外す
 }
 });
});

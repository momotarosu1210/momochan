$(function() {
 $('.Toggle,li > a,.bg-black').click(function() {
  $('.Toggle').toggleClass('active');
  $('body').toggleClass('fixed');
  $('.bg-black').toggleClass('active');

 if ($('.Toggle').hasClass('active')) {
  $('.NavMenu').addClass('active'); //クラスを付与
 } else {
  $('.NavMenu').removeClass('active'); //クラスを外す
 }
 });
});

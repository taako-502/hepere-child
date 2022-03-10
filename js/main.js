/**
 * JavaScript
 */
 jQuery(document).ready(function($) {
  (function($) {
    //spヘッダーメニューの開閉
    $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
        $('.globalMenuSp').addClass('active');
        $('.globalMenuSp').removeClass('hidden');
      } else {
        $('.globalMenuSp').removeClass('active');
        $('.globalMenuSp').addClass('hidden');
      }
    });
  })(jQuery);

  //ヘッダー、スクロールの移動先を指定
  (function($) {
    $('#scroll-pc').click(function() {
      $(window).scrollTop($('#top-2-message').position().top);
    });
    $('#scroll-sp').click(function() {
      $(window).scrollTop($('#top-2-message').position().top);
    });
    $('#to_features').click(function() {
      $(window).scrollTop($('#features').position().top);
    });
    $('#to_function').click(function() {
      $(window).scrollTop($('#function').position().top);
    });
    $('#to_sitespeed').click(function() {
      $(window).scrollTop($('#sitespeed').position().top);
    });
    $('#to_demosite').click(function() {
      $(window).scrollTop($('#demosite').position().top);
    });
    $('#to_QA').click(function() {
      $(window).scrollTop($('#QA').position().top);
    });
  })(jQuery);

  //機能紹介部分の「詳しく」「閉じる」ボタン
  jQuery('.detail_content').toggle();
  jQuery('.detail_button_close').toggle();

  var functionsHeight =  jQuery('.functions').height();

  jQuery('.detail_button_open').click(function() {
    $(this).toggle();
    $(this).parent().prev().children().toggle();
    $(this).parent().parent().next('.wp-block-columns').toggle();
    var functionsHeight =  $('.functions').height();
    var redHeight =  functionsHeight - 150;
    $('.bg-red-left').css('height', redHeight);
    $('.bg-red-right').css('height', redHeight);
  });

  jQuery('.detail_button_close').click(function() {
    $(this).toggle();
    $(this).parent().next().children().toggle();
    $(this).parent().parent().next('.wp-block-columns').toggle();
    var functionsHeight =  $('.functions').height();
    var redHeight =  functionsHeight - 150;
    $('.bg-red-left').css('height', redHeight);
    $('.bg-red-right').css('height', redHeight);
  });

  //スライドショー部分の設定
  jQuery('.features-boxes-sp').slick({
    responsive: [{
      breakpoint: 800,
      settings: {
        variableWidth: true,
        centerMode: true,
        centerPadding: '100px',
        infinite: false,
        initialSlide: 1,
        dots: true,
        arrow: true,
        autoplay: true
      }
    }],
  });
});

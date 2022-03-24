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
  jQuery(document).ready(function($) {
    jQuery('#scroll-pc').click(function() {
      $(window).scrollTop($('#top-2-message').position().top);
    });
    jQuery('#scroll-sp').click(function() {
      $(window).scrollTop($('#top-2-message').position().top);
    });
    jQuery('#to_features').click(function() {
      $(window).scrollTop($('#features').position().top);
    });
    jQuery('#to_function').click(function() {
      $(window).scrollTop($('#function').position().top);
    });
    jQuery('#to_sitespeed').click(function() {
      $(window).scrollTop($('#sitespeed').position().top);
    });
    jQuery('#to_demosite').click(function() {
      $(window).scrollTop($('#demosite').position().top);
    });
    jQuery('#to_QA').click(function() {
      $(window).scrollTop($('#QA').position().top);
    });
  });

  //機能紹介部分の「詳しく」「閉じる」ボタン
  jQuery(document).ready(function() {
    jQuery('.detail_content').toggle();
    jQuery('.detail_button_close').toggle();
  });

  var functionsHeight =  jQuery('.functions').height();

  jQuery(document).ready(function() {
    jQuery('.detail_button_open').click(function() {
    jQuery(this).toggle();
    jQuery(this).parent().prev().children().toggle();
    jQuery(this).parent().parent().next('.wp-block-columns').toggle();
    var functionsHeight =  $('.functions').height();
    var redHeight =  functionsHeight - 150;
    jQuery('.bg-red-left').css('height', redHeight);
    jQuery('.bg-red-right').css('height', redHeight);
    });
  });  

  jQuery(document).ready(function() {
    jQuery('.detail_button_close').click(function() {
    jQuery(this).toggle();
    jQuery(this).parent().next().children().toggle();
    jQuery(this).parent().parent().next('.wp-block-columns').toggle();
    var functionsHeight =  jQuery('.functions').height();
    var redHeight =  functionsHeight - 150;
    jQuery('.bg-red-left').css('height', redHeight);
    jQuery('.bg-red-right').css('height', redHeight);
    });
  });

  //スライドショー部分の設定
  jQuery(document).ready(function() {
    jQuery('.features-boxes-sp').slick({
      responsive: [{
       breakpoint: 900,
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
 });


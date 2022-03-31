/**
 * JavaScript
 */
 jQuery(document).ready(function(jQuery) {
  (function(jQuery) {
    //spヘッダーメニューの開閉
    jQuery('.hamburger').click(function() {
      jQuery(this).toggleClass('active');

      if (jQuery(this).hasClass('active')) {
        jQuery('.globalMenuSp').addClass('active');
        jQuery('.globalMenuSp').removeClass('hidden');
      } else {
        jQuery('.globalMenuSp').removeClass('active');
        jQuery('.globalMenuSp').addClass('hidden');
      }
    });
  })(jQuery);

  //ヘッダー、スクロールの移動先を指定
  jQuery(document).ready(function(jQuery) {
    jQuery('#scroll-pc').click(function() {
      jQuery(window).scrollTop(jQuery('#top-2-message').position().top);
    });
    jQuery('#scroll-sp').click(function() {
      jQuery(window).scrollTop(jQuery('#top-2-message').position().top);
    });
    jQuery('#to_features').click(function() {
      jQuery(window).scrollTop(jQuery('#features').position().top);
    });
    jQuery('#to_function').click(function() {
      jQuery(window).scrollTop(jQuery('#function').position().top);
    });
    jQuery('#to_sitespeed').click(function() {
      jQuery(window).scrollTop(jQuery('#sitespeed').position().top);
    });
    jQuery('#to_demosite').click(function() {
      jQuery(window).scrollTop(jQuery('#demosite').position().top);
    });
    jQuery('#to_QA').click(function() {
      jQuery(window).scrollTop(jQuery('#QA').position().top);
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
    var functionsHeight =  jQuery('.functions').height();
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


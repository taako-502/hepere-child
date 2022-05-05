/**
 * JavaScript
 */
 jQuery(document).ready(function($) {
  (function($) {
    /* ヘッダー、スクロールの移動先を指定 */
    jQuery('#scroll-pc').click(function() {
      let scrollPosition = jQuery('#top-2-message').offset().top;
      jQuery('html, body').animate({
        scrollTop: scrollPosition - 150
      });
    });
    jQuery('#scroll-sp').click(function() {
      let scrollPosition = jQuery('#top-2-message').offset().top;
      jQuery('html, body').animate({
        scrollTop: scrollPosition - 160
      });
    });

    /* 機能紹介部分の「詳しく」「閉じる」ボタン部分 */
    //機能紹介の「閉じる」ボタンおよび詳細内容を初めに非表示にする
    jQuery('.detail_content').toggle();
    jQuery('.detail_button_close').toggle();

    //「詳しく」ボタンをクリックした際に詳細内容を表示し、「詳しく」ボタンを非表示にさせ、「閉じる」ボタンを表示させる
    jQuery('.detail_button_open').click(function() {
      //「詳しく」ボタンを非表示にさせる
      jQuery(this).toggle('slow');
      //「閉じる」ボタンを表示させる
      jQuery(this).parent().prev().children().toggle('slow');
      //詳細内容を開く
      jQuery(this).parent().parent().next('.wp-block-columns').toggle('slow');
      //赤い帯部分の長さを調整
      let functionsHeight = jQuery('.functions').height() - 300;
      let functionsPadding = Number(jQuery('#features-boxes-sp').css('padding-bottom').replace('px', ''));
      let functionsMargin = Number(jQuery('.bg-red-left').css('margin-top').replace('px', ''));
      let minusMarginPC = Number(jQuery('.features-boxes-pc').css('margin-top').replace('px', ''));
      let minusMarginMD = Number(jQuery('#features-boxes-md').css('margin-top').replace('px', ''));
      let minusMarginSP = Number(jQuery('#features-boxes-sp').css('margin-top').replace('px', ''));
      let greyHeightPC = Number(jQuery('.bg-grey-pc').css('height').replace('px', ''));
      let greyHeightMD = Number(jQuery('.bg-grey-md').css('height').replace('px', ''));
      let greyHeightSP = Number(jQuery('.bg-grey-sp').css('height').replace('px', ''));

      //「詳しく」ボタンをクリックした際に、画面幅に応じて赤い帯の部分と背景のグレー部分を調整
      let clicked = function() {
        let windowSize = jQuery(window).width();
        //spビューの場合
        if (windowSize < 600){
          jQuery('.bg-red-left-sp, .bg-red-right-sp').animate({
            'height': functionsHeight + 150,
            'margin-top': functionsMargin - 450,
          }, 600);
          jQuery('.bg-red-left-md, .bg-red-right-md').animate({
            'height': functionsHeight + 150,
            'margin-top': functionsMargin - 450,
          }, 600);
          jQuery('.bg-red-left, .bg-red-right').animate({
            'height': functionsHeight + 150,
            'margin-top': functionsMargin - 450,
          }, 600);
          jQuery('.bg-grey-sp').animate({
            'height': greyHeightSP + 455,
          }, 600);
          jQuery('.bg-grey-md').animate({
            'height': greyHeightMD + 330,
          }, 600);
          jQuery('.bg-grey-pc').animate({
            'height': greyHeightPC + 280,
          }, 600);
          jQuery('#features-boxes-sp').animate({
            'margin-top': minusMarginSP - 455,
          }, 600);
          jQuery('#features-boxes-md').animate({
            'margin-top': minusMarginMD - 330,
          }, 600);
          jQuery('.features-boxes-pc').animate({
            'margin-top': minusMarginPC - 280,
          }, 600);
          //mdビューの場合
        } else if (windowSize < 900) {
          jQuery('.bg-red-left-sp, .bg-red-right-sp').animate({
            'height': functionsHeight + 150,
            'margin-top': functionsMargin - 450,
          }, 600);
          jQuery('.bg-red-left-md, .bg-red-right-md').animate({
            'height': functionsHeight + 150,
            'margin-top': functionsMargin - 450,
          }, 600);
          jQuery('.bg-red-left, .bg-red-right').animate({
            'height': functionsHeight + 150,
            'margin-top': functionsMargin - 450,
          }, 600);
          jQuery('.bg-grey-sp').animate({
            'height': greyHeightSP + 455,
          }, 600);
          jQuery('.bg-grey-md').animate({
            'height': greyHeightMD + 330,
          }, 600);
          jQuery('.bg-grey-pc').animate({
            'height': greyHeightPC + 280,
          }, 600);
          jQuery('#features-boxes-sp').animate({
            'margin-top': minusMarginSP - 455,
          }, 600);
          jQuery('#features-boxes-md').animate({
            'margin-top': minusMarginMD - 330,
          }, 600);
          jQuery('.features-boxes-pc').animate({
            'margin-top': minusMarginPC - 280,
          }, 600);
        } else {
          //PCビューの場合
          jQuery('.bg-red-left-sp, .bg-red-right-sp').animate({
            'height': functionsHeight + 150,
            'margin-top': functionsMargin - 450,
          }, 600);
          jQuery('.bg-red-left-md, .bg-red-right-md').animate({
            'height': functionsHeight + 150,
            'margin-top': functionsMargin - 450,
          }, 600);
          jQuery('.bg-red-left, .bg-red-right').animate({
            'height': functionsHeight + 150,
            'margin-top': functionsMargin - 450,
          }, 600);
          jQuery('.bg-grey-sp').animate({
            'height': greyHeightSP + 455,
          }, 600);
          jQuery('.bg-grey-md').animate({
            'height': greyHeightMD + 330,
          }, 600);
          jQuery('.bg-grey-pc').animate({
            'height': greyHeightPC + 280,
          }, 600);
          jQuery('#features-boxes-sp').animate({
            'margin-top': minusMarginSP - 455,
          }, 600);
          jQuery('#features-boxes-md').animate({
            'margin-top': minusMarginMD - 330,
          }, 600);
          jQuery('.features-boxes-pc').animate({
            'margin-top': minusMarginPC - 280,
          }, 600);
        }
      };
      clicked();
    });

    /* 「閉じる」ボタンをクリックした際に詳細内容を非表示にし、「詳しく」ボタンを表示させ、「閉じる」ボタンを非表示にする */
    jQuery('.detail_button_close').click(function() {
      //「閉じる」ボタンを非表示
      jQuery(this).toggle('slow');
      //「詳しく」ボタンを表示
      jQuery(this).parent().next().children().toggle('slow');
      //詳細内容を開く
      jQuery(this).parent().parent().next('.wp-block-columns').toggle('slow');
      //赤い帯部分の長さを調整
      let functionsHeight = jQuery('.functions').height() - 300;
      let functionsPadding = Number(jQuery('#features-boxes-sp').css('padding-bottom').replace('px', ''));
      let functionsMargin = Number(jQuery('.bg-red-left').css('margin-top').replace('px', ''));
      let minusMarginPC = Number(jQuery('.features-boxes-pc').css('margin-top').replace('px', ''));
      let minusMarginMD = Number(jQuery('#features-boxes-md').css('margin-top').replace('px', ''));
      let minusMarginSP = Number(jQuery('#features-boxes-sp').css('margin-top').replace('px', ''));
      let greyHeightPC = Number(jQuery('.bg-grey-pc').css('height').replace('px', ''));
      let greyHeightMD = Number(jQuery('.bg-grey-md').css('height').replace('px', ''));
      let greyHeightSP = Number(jQuery('.bg-grey-sp').css('height').replace('px', ''));

      //「閉じる」ボタンをクリックした際に、画面幅に応じて赤い帯の部分と背景のグレー部分を調整
      let unclicked = function() {
        let windowSize = jQuery(window).width();
        if (windowSize < 600){
          //spビューの場合
          jQuery('.bg-red-left-sp, .bg-red-right-sp').animate({
            'height': functionsHeight - 283,
            'margin-top': functionsMargin + 450,
          }, 600);
          jQuery('.bg-red-left-md, .bg-red-right-md').animate({
            'height': functionsHeight - 200,
            'margin-top': functionsMargin + 450,
          }, 600);
          jQuery('.bg-red-left, .bg-red-right').animate({
            'height': functionsHeight - 150,
            'margin-top': functionsMargin + 450,
          }, 600);
          jQuery('.bg-grey-sp').animate({
            'height': greyHeightSP - 455,
          }, 600);
          jQuery('.bg-grey-md').animate({
            'height': greyHeightMD - 330,
          }, 600);
          jQuery('.bg-grey-pc').animate({
            'height': greyHeightPC - 280,
          }, 600);
          jQuery('#features-boxes-sp').animate({
            'margin-top': minusMarginSP + 455,
          }, 600);
        } else if (windowSize < 900) {
          //mdビューの場合
          jQuery('.bg-red-left-sp, .bg-red-right-sp').animate({
            'height': functionsHeight - 283,
            'margin-top': functionsMargin + 450,
          }, 600);
          jQuery('.bg-red-left-md, .bg-red-right-md').animate({
            'height': functionsHeight - 200,
            'margin-top': functionsMargin + 450,
          }, 600);
          jQuery('.bg-red-left, .bg-red-right').animate({
            'height': functionsHeight - 150,
            'margin-top': functionsMargin + 450,
          }, 600);
          jQuery('.bg-grey-md').animate({
            'height': greyHeightMD - 330,
          }, 600);
          jQuery('#features-boxes-md').animate({
            'margin-top': minusMarginMD + 350,
          }, 600);
        } else {
        //PCビューの場合
          jQuery('.bg-red-left-sp, .bg-red-right-sp').animate({
            'height': functionsHeight - 283,
            'margin-top': functionsMargin + 450,
          }, 600);
          jQuery('.bg-red-left-md, .bg-red-right-md').animate({
            'height': functionsHeight - 200,
            'margin-top': functionsMargin + 450,
          }, 600);
          jQuery('.bg-red-left, .bg-red-right').animate({
            'height': functionsHeight - 150,
            'margin-top': functionsMargin + 450,
          }, 600);
          jQuery('.bg-grey-pc').animate({
            'height': greyHeightPC - 280,
          }, 600);
          jQuery('.features-boxes-pc').animate({
            'margin-top': minusMarginPC + 280,
          }, 600);
        }
      };
      unclicked();
    });

    //画面幅を変更した際に、画面幅に応じて機能紹介部分のsp/md/pcビューを切り替え
    jQuery(window).resize(function() {
      let windowSize = jQuery(window).width();
      if ( windowSize > 899.5 ) {
        let resizeFunctionsHeight = jQuery('.functions').height();
        //spとmdの赤い帯を非表示
        jQuery('.bg-red-left-sp, .bg-red-right-sp, .bg-red-left-md, .bg-red-right-md').css('display', 'none');
        //pcの赤い帯を表示
        jQuery('.bg-red-left, .bg-red-right').css('display', 'block');
        //pcの赤い帯の長さを調整
        jQuery('.bg-red-left, .bg-red-right').css('height', resizeFunctionsHeight - 150);
        //spとmdの背景のグレー部分を非表示
        jQuery('.bg-grey-sp, .bg-grey-md').css('display', 'none');
        //pcの背景のグレー部分を表示
        jQuery('.bg-grey-pc').css('display', 'block');
        //margin-topを調整
      } else if ( windowSize > 600 && windowSize < 899.5 ) {
        let resizeFunctionsHeight = jQuery('.functions').height();
        //spとpcの赤い帯を非表示
        jQuery('.bg-red-left-sp, .bg-red-right-sp, .bg-red-left, .bg-red-right').css('display', 'none');
        //mdの赤い帯を表示
        jQuery('.bg-red-left-md, .bg-red-right-md').css('display', 'block');
        //mdの赤い帯の長さを調整
        jQuery('.bg-red-left-md, .bg-red-right-md').css('height', resizeFunctionsHeight - 200);
        //spとpcの背景のグレー部分を非表示
        jQuery('.bg-grey-sp, .bg-grey-pc').css('display', 'none');
        //mdの背景のグレー部分を表示
        jQuery('.bg-grey-md').css('display', 'block');
      } else {
       let resizeFunctionsHeight = jQuery('.functions').height();
        //mdとpcの赤い帯を非表示
        jQuery('.bg-red-left-md, .bg-red-right-md, .bg-red-left, .bg-red-right').css('display', 'none');
        //spの赤い帯を非表示
        jQuery('.bg-red-left-sp, .bg-red-right-sp').css('display', 'block');
        //spの赤い帯の長さを調整
        jQuery('.bg-red-left-sp, .bg-red-right-sp').css('height', resizeFunctionsHeight - 150);
        //mdとpcの背景のグレー部分を非表示        
        jQuery('.bg-grey-md, .bg-grey-pc').css('display', 'none');
        //spの背景のグレー部分を表示
        jQuery('.bg-grey-sp').css('display', 'block');

      }
    });

    /* スライドショー部分の設定 */
    jQuery('#features-boxes-sp').slick({
      responsive: [{
        breakpoint: 900,
        settings: {
          variableWidth: true,
          centerMode: true,
          centerPadding: '100px',
          initialSlide: 1,
          dots: true,
          arrow: true,
          autoplay: true
        }
      }],
    });
    jQuery('#features-boxes-md').slick({
      responsive: [{
        breakpoint: 900,
        settings: {
          variableWidth: true,
          centerMode: true,
          centerPadding: '100px',
          initialSlide: 1,
          dots: true,
          arrow: true,
          autoplay: true
        }
      }],
    });
  })(jQuery);

});

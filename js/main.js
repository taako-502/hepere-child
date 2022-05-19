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
    
    //特徴〜機能紹介部分の灰色の背景部分の位置を事前に調整

      //WordPress側で設定されたコンテンツ幅を取得
      let maxContentWidth = parseInt(jQuery('.contents').css('max-width'));
      //ブラウザ側の画面幅を取得
      let windowWidth = jQuery(window).width();
      //灰色の背景部分の位置を調整するための値を取得
      let bgGreyMarginLeft = (Math.abs((maxContentWidth - windowWidth)) * -1 / 2) -12.5;
      //画面幅が900〜1180pxの場合、背景部分のmargin-leftを固定して余白やはみだしが生じないようにする
      if (windowWidth > 899.9 && windowWidth < 1179.9){
        jQuery('.bg-grey-pc').css('margin-left', '-80px');
      //画面幅がWordPress側で設定されたコンテンツ幅よりも広い場合、コンテンツ幅に応じてmargin-leftを調整
      } else if (windowWidth > maxContentWidth){
        jQuery('.bg-grey-pc').css('margin-left', bgGreyMarginLeft);
      } else {
        jQuery('.bg-grey-pc').css('margin-left', '-12.5px');
      }

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
      //赤い帯部分の位置（margin-top）を取得
      let functionsMargin = Number(jQuery('.bg-red-left').css('margin-top').replace('px', ''));
      //特徴のスライダー部分の位置（margin-top）を取得
      let minusMarginPC = Number(jQuery('.features-boxes-pc').css('margin-top').replace('px', ''));
      let minusMarginMD = Number(jQuery('#features-boxes-md').css('margin-top').replace('px', ''));
      let minusMarginSP = Number(jQuery('#features-boxes-sp').css('margin-top').replace('px', ''));
      //灰色の背景部分の高さを取得
      let greyHeightPC = Number(jQuery('.bg-grey-pc').css('height').replace('px', ''));
      let greyHeightMD = Number(jQuery('.bg-grey-md').css('height').replace('px', ''));
      let greyHeightSP = Number(jQuery('.bg-grey-sp').css('height').replace('px', ''));
      //「hepereの特徴」の文字部分のtopを取得
      let topChangeTopPC = Number(jQuery('#topchange-pc').css('top').replace('px', ''));
      let topChangeTopMD = Number(jQuery('#topchange-md').css('top').replace('px', ''));
      let topChangeTopSP = Number(jQuery('#topchange-sp').css('top').replace('px', ''));
      //「詳しく」ボタンの下にある詳細な内容部分の高さを取得
      let childDetailContentHeight = jQuery(this).parent().parent().next('.detail_content').height();

      //「詳しく」ボタンをクリックした際に、画面幅に応じて赤い帯の部分と背景のグレー部分を調整
      let clicked = function() {
        let windowSize = jQuery(window).width();
        //spビューの場合
        if (windowSize < 600){
          let bgRedHeightSP = jQuery('.bg-red-left-sp').height();
          jQuery('.bg-red-left-sp, .bg-red-right-sp').animate({
            //詳細な内容部分の高さに応じて赤い帯部分のheightを伸ばし、margin-topで位置を調整する
            'height': bgRedHeightSP + childDetailContentHeight + 28,
            'margin-top': functionsMargin - 450,
          }, 600);
          //灰色の背景の高さを高くする
          jQuery('.bg-grey-sp').animate({
            'height': greyHeightSP + 455,
          }, 600);
          jQuery('.bg-grey-md').animate({
            'height': greyHeightMD + 330,
          }, 600);
          jQuery('.bg-grey-pc').animate({
            'height': greyHeightPC + 310,
          }, 600);
          //特徴のスライダー部分の位置を上に上げる
          jQuery('#features-boxes-sp').animate({
            'margin-top': minusMarginSP - 455,
          }, 600);
          jQuery('#features-boxes-md').animate({
            'margin-top': minusMarginMD - 330,
          }, 600);
          jQuery('.features-boxes-pc').animate({
            'margin-top': minusMarginPC - 310,
          }, 600);
          //「HEPEREの特徴」の文字を上に上げる
          jQuery('#topchange-sp').animate({
            'top': topChangeTopSP - 450,
          }, 600);
          jQuery('#topchange-md').animate({
            'top': topChangeTopMD - 330,
          }, 600);
          jQuery('#topchange-pc').animate({
            'top': topChangeTopPC - 310,
          }, 600);
          //mdビューの場合
        } else if (windowSize < 900) {
          let bgRedHeightMD = jQuery('.bg-red-left-md').height();
          jQuery('.bg-red-left-md, .bg-red-right-md').animate({
            'height': bgRedHeightMD + childDetailContentHeight + 28,
            'margin-top': functionsMargin - 450,
          }, 600);
          //灰色の背景の高さを高くする
          jQuery('.bg-grey-sp').animate({
            'height': greyHeightSP + 455,
          }, 600);
          jQuery('.bg-grey-md').animate({
            'height': greyHeightMD + 330,
          }, 600);
          jQuery('.bg-grey-pc').animate({
            'height': greyHeightPC + 310,
          }, 600);
          //特徴のスライダー部分位置を上に上げる
          jQuery('#features-boxes-sp').animate({
            'margin-top': minusMarginSP - 455,
          }, 600);
          jQuery('#features-boxes-md').animate({
            'margin-top': minusMarginMD - 330,
          }, 600);
          jQuery('.features-boxes-pc').animate({
            'margin-top': minusMarginPC - 310,
          }, 600);
          //「HEPEREの特徴」の文字を上に上げる
          jQuery('#topchange-sp').animate({
            'top': topChangeTopSP - 450,
          }, 600);
          jQuery('#topchange-md').animate({
            'top': topChangeTopMD - 330,
          }, 600);
          jQuery('#topchange-pc').animate({
            'top': topChangeTopPC - 310,
          }, 600);
        } else {
          //PCビューの場合
          let bgRedHeightPC = jQuery('.bg-red-left').height();
          jQuery('.bg-red-left, .bg-red-right').animate({
            'height': bgRedHeightPC + childDetailContentHeight + 28,
            'margin-top': functionsMargin - 450,
          }, 600);
          //灰色の背景の高さを高くする
          jQuery('.bg-grey-sp').animate({
            'height': greyHeightSP + 455,
          }, 600);
          jQuery('.bg-grey-md').animate({
            'height': greyHeightMD + 330,
          }, 600);
          jQuery('.bg-grey-pc').animate({
            'height': greyHeightPC + 310,
          }, 600);
          //特徴のスライダー部分の位置を上に上げる
          jQuery('#features-boxes-sp').animate({
            'margin-top': minusMarginSP - 455,
          }, 600);
          jQuery('#features-boxes-md').animate({
            'margin-top': minusMarginMD - 330,
          }, 600);
          jQuery('.features-boxes-pc').animate({
            'margin-top': minusMarginPC - 310,
          }, 600);
          //「HEPEREの特徴」の文字を上に上げる
          jQuery('#topchange-sp').animate({
            'top': topChangeTopSP - 450,
          }, 600);
          jQuery('#topchange-md').animate({
            'top': topChangeTopMD - 330,
          }, 600);
          jQuery('#topchange-pc').animate({
            'top': topChangeTopPC - 310,
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
      //赤い帯部分の位置（margin-top）を取得
      let functionsMargin = Number(jQuery('.bg-red-left').css('margin-top').replace('px', ''));
      //特徴のスライダー部分の位置（margin-top）を取得
      let minusMarginPC = Number(jQuery('.features-boxes-pc').css('margin-top').replace('px', ''));
      let minusMarginMD = Number(jQuery('#features-boxes-md').css('margin-top').replace('px', ''));
      let minusMarginSP = Number(jQuery('#features-boxes-sp').css('margin-top').replace('px', ''));
      //灰色の背景部分の高さを取得
      let greyHeightPC = Number(jQuery('.bg-grey-pc').css('height').replace('px', ''));
      let greyHeightMD = Number(jQuery('.bg-grey-md').css('height').replace('px', ''));
      let greyHeightSP = Number(jQuery('.bg-grey-sp').css('height').replace('px', ''));
      //「hepereの特徴」の文字部分のtopを取得
      let topChangeTopPC = Number(jQuery('#topchange-pc').css('top').replace('px', ''));
      let topChangeTopMD = Number(jQuery('#topchange-md').css('top').replace('px', ''));
      let topChangeTopSP = Number(jQuery('#topchange-sp').css('top').replace('px', ''));
      //「閉じる」ボタンの下にある詳細な内容部分の高さを取得
      let childDetailContentHeight = jQuery(this).parent().parent().next('.detail_content').height();


      //「閉じる」ボタンをクリックした際に、画面幅に応じて赤い帯の部分と背景のグレー部分を調整
      let unclicked = function() {
        let windowSize = jQuery(window).width();
        if (windowSize < 600){
          //spビューの場合
          let bgRedHeightSP = jQuery('.bg-red-left-sp').height();
          jQuery('.bg-red-left-sp, .bg-red-right-sp').animate({
            //詳細な内容部分の高さに応じて赤い帯部分の高さを伸ばし、margin-topで位置を調整する
            'height': bgRedHeightSP - childDetailContentHeight - 28,
            'margin-top': functionsMargin + 450,
          }, 600);
          //灰色の背景の高さを低くする
          jQuery('.bg-grey-sp').animate({
            'height': greyHeightSP - 455,
          }, 600);
          jQuery('.bg-grey-md').animate({
            'height': greyHeightMD - 330,
          }, 600);
          jQuery('.bg-grey-pc').animate({
            'height': greyHeightPC - 310,
          }, 600);
          //特徴のスライダー部分の位置を下に下げる
          jQuery('#features-boxes-sp').animate({
            'margin-top': minusMarginSP + 455,
          }, 600);
          jQuery('#features-boxes-md').animate({
            'margin-top': minusMarginMD + 330,
          }, 600);
          jQuery('.features-boxes-pc').animate({
            'margin-top': minusMarginPC + 310,
          }, 600);
          //「HEPEREの特徴」の文字を下に下げる
          jQuery('#topchange-sp').animate({
            'top': topChangeTopSP + 450,
          }, 600);
          jQuery('#topchange-md').animate({
            'top': topChangeTopMD + 330,
          }, 600);
          jQuery('#topchange-pc').animate({
            'top': topChangeTopPC + 310,
          }, 600);
        } else if (windowSize < 900) {
          //mdビューの場合
          let bgRedHeightMD = jQuery('.bg-red-left-md').height();
          jQuery('.bg-red-left-md, .bg-red-right-md').animate({
            //詳細な内容部分の高さに応じて赤い帯部分の高さを伸ばし、margin-topで位置を調整する
            'height': bgRedHeightMD - childDetailContentHeight - 28,
            'margin-top': functionsMargin + 450,
          }, 600);
          //灰色の背景の高さを低くする
          jQuery('.bg-grey-sp').animate({
            'height': greyHeightSP - 455,
          }, 600);
          jQuery('.bg-grey-md').animate({
            'height': greyHeightMD - 330,
          }, 600);
          jQuery('.bg-grey-pc').animate({
            'height': greyHeightPC - 310,
          }, 600);
          //特徴のスライダー部分の位置を下に下げる
          jQuery('#features-boxes-sp').animate({
            'margin-top': minusMarginSP + 455,
          }, 600);
          jQuery('#features-boxes-md').animate({
            'margin-top': minusMarginMD + 330,
          }, 600);
          jQuery('.features-boxes-pc').animate({
            'margin-top': minusMarginPC + 310,
          }, 600);
          //「HEPEREの特徴」の文字を下に下げる
          jQuery('#topchange-sp').animate({
            'top': topChangeTopSP + 450,
          }, 600);
          jQuery('#topchange-md').animate({
            'top': topChangeTopMD + 330,
          }, 600);
          jQuery('#topchange-pc').animate({
            'top': topChangeTopPC + 310,
          }, 600);
        } else {
        //PCビューの場合
        let bgRedHeightPC = jQuery('.bg-red-left').height();
          jQuery('.bg-red-left, .bg-red-right').animate({
            //詳細な内容部分の高さに応じて赤い帯部分の高さを伸ばし、margin-topで位置を調整する
            'height': bgRedHeightPC - childDetailContentHeight - 28,
            'margin-top': functionsMargin + 450,
          }, 600);
          //灰色の背景の高さを低くする
          jQuery('.bg-grey-sp').animate({
            'height': greyHeightSP - 455,
          }, 600);
          jQuery('.bg-grey-md').animate({
            'height': greyHeightMD - 330,
          }, 600);
          jQuery('.bg-grey-pc').animate({
            'height': greyHeightPC - 310,
          }, 600);
          //特徴のスライダー部分の位置を下に下げる
          jQuery('#features-boxes-sp').animate({
            'margin-top': minusMarginSP + 455,
          }, 600);
          jQuery('#features-boxes-md').animate({
            'margin-top': minusMarginMD + 330,
          }, 600);
          jQuery('.features-boxes-pc').animate({
            'margin-top': minusMarginPC + 310,
          }, 600);
          //「HEPEREの特徴」の文字を下に下げる
          jQuery('#topchange-sp').animate({
            'top': topChangeTopSP + 450,
          }, 600);
          jQuery('#topchange-md').animate({
            'top': topChangeTopMD + 330,
          }, 600);
          jQuery('#topchange-pc').animate({
            'top': topChangeTopPC + 310,
          }, 600);
        }
      };
      unclicked();
    });

    /* 画面幅を変更した際に、画面幅に応じて機能紹介部分のsp/md/pcビューの切り替えを行い、要素の表示／非表示によるレイアウト崩れが生じないよう灰色の背景や赤い帯部分等の位置を調整
    */
    jQuery(window).resize(function() {
      let windowSize = jQuery(window).width();
      //WordPress側で設定されたコンテンツ幅を取得
      let maxContentWidth = parseInt(jQuery('.contents').css('max-width'));
      //ブラウザ側の画面幅を取得
      let windowWidth = jQuery(window).width();
      //灰色の背景部分の位置を調整するための値を取得
      let bgGreyMarginLeft = (Math.abs((maxContentWidth - windowWidth)) * -1 / 2) - 12.5;
      //画面幅が900〜1180pxの場合、背景部分のmargin-leftを固定して余白やはみだしが生じないようにする
      if (windowWidth > 899.9 && windowWidth < 1179.9){
        jQuery('.bg-grey-pc').css('margin-left', '-80px');
      } else if (windowWidth > maxContentWidth){
        jQuery('.bg-grey-pc').css('margin-left', bgGreyMarginLeft);
      } else {
        jQuery('.bg-grey-pc').css('margin-left', '-12.5px');
      }
      if ( windowSize > 899.5 ) {
        //変更された後のfunctionsの高さと「hepereの特徴」の文字部分のtopを取得
        let resizeFunctionsHeight = jQuery('.functions').height();
        let topChangePC = jQuery('#topchage-pc').css('top');
        //spとmdの赤い帯を非表示
        jQuery('.bg-red-left-sp, .bg-red-right-sp, .bg-red-left-md, .bg-red-right-md').css('display', 'none');
        //pcの赤い帯を表示
        jQuery('.bg-red-left, .bg-red-right').css('display', 'block');
        //変更された後のfunctionsの高さに応じて、pcの赤い帯の長さを調整
        jQuery('.bg-red-left, .bg-red-right').css('height', resizeFunctionsHeight - 150);
        //spとmdの背景のグレー部分を非表示
        jQuery('.bg-grey-sp, .bg-grey-md').css('display', 'none');
        //pcの背景のグレー部分を表示
        jQuery('.bg-grey-pc').css('display', 'block');
        //特徴部分の位置を調整
        jQuery('#topchange-pc').css('top', topChangePC);
      } else if ( windowSize > 600 && windowSize < 899.5 ) {
        let resizeFunctionsHeight = jQuery('.functions').height();
        //spとpcの赤い帯を非表示
        jQuery('.bg-red-left-sp, .bg-red-right-sp, .bg-red-left, .bg-red-right').css('display', 'none');
        //mdの赤い帯を表示
        jQuery('.bg-red-left-md, .bg-red-right-md').css('display', 'block');
        //変更された後のfunctionsの高さに応じて、mdの赤い帯の長さを調整
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
        //変更された後のfunctionsの高さに応じて、spの赤い帯の長さを調整
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


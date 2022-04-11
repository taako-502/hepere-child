/**
 * JavaScript
 */

  //ヘッダー、スクロールの移動先を指定
  jQuery(document).ready(function(jQuery) {

    jQuery('#scroll-pc').click(function() {

      jQuery(window).scrollTop(jQuery('#top-2-message').position().top);

    });

    jQuery('#scroll-sp').click(function() {

      jQuery(window).scrollTop(jQuery('#top-2-message').position().top + 100);

    });

  });

//機能紹介部分の「詳しく」「閉じる」ボタン部分

  //機能紹介の「閉じる」ボタンおよび詳細内容を初めに非表示にする
  jQuery(document).ready(function() {

    jQuery('.detail_content').toggle();

    jQuery('.detail_button_close').toggle();

  });


  //「詳しく」ボタンをクリックした際に詳細内容を表示し、「詳しく」ボタンを非表示にさせ、「閉じる」ボタンを表示させる
  jQuery(document).ready(function() {

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

      let minusMarginPC = Number(jQuery('#features-boxes-pc').css('margin-top').replace('px', ''));

      let minusMarginMD = Number(jQuery('#features-boxes-md').css('margin-top').replace('px', ''));

      let minusMarginSP = Number(jQuery('#features-boxes-sp').css('margin-top').replace('px', ''));
      
      let greyHeightPC = Number(jQuery('.bg-grey-pc').css('height').replace('px', ''));

      let greyHeightMD = Number(jQuery('.bg-grey-md').css('height').replace('px', ''));

      let greyHeightSP = Number(jQuery('.bg-grey-sp').css('height').replace('px', ''));

        

      jQuery('.bg-red-left').css('height', functionsHeight + 150);

      jQuery('.bg-red-left').css('margin-top', functionsMargin - 450);
      
      jQuery('.bg-red-right').css('height', functionsHeight + 150);

      jQuery('.bg-red-right').css('margin-top', functionsMargin - 450);


      jQuery('.bg-red-left-sp').css('height', functionsHeight + 150);

      jQuery('.bg-red-left-sp').css('margin-top', functionsMargin - 450);
      
      jQuery('.bg-red-right-sp').css('height', functionsHeight + 150);

      jQuery('.bg-red-right-sp').css('margin-top', functionsMargin - 450);

      jQuery('.bg-grey-pc').css('height', greyHeightPC + 250);

      jQuery('.bg-grey-md').css('height', greyHeightMD + 300);

      jQuery('.bg-grey-sp').css('height', greyHeightSP + 475);

      jQuery('#features-boxes-pc').css('margin-top', minusMarginPC - 250);

      jQuery('#features-boxes-md').css('margin-top', minusMarginMD - 300);

      jQuery('#features-boxes-sp').css('margin-top', minusMarginSP - 475);



  });


//「閉じる」ボタンをクリックした際に詳細内容を非表示にし、「詳しく」ボタンを表示させ、「閉じる」ボタンを非表示にする
  jQuery(document).ready(function() {

    jQuery('.detail_button_close').click(function() {
    
      //「閉じる」ボタンを非表示にさせる
      jQuery(this).toggle('slow');
      
      //「詳しく」ボタンを表示させる
      jQuery(this).parent().next().children().toggle('slow');
      
      //詳細内容を開く
      jQuery(this).parent().parent().next('.wp-block-columns').toggle('slow');
      
      //赤い帯部分の長さを調整

      let functionsHeight = jQuery('.functions').height() - 300;

      let functionsPadding = Number(jQuery('#features-boxes-sp').css('padding-bottom').replace('px', ''));

      let functionsMargin = Number(jQuery('.bg-red-left').css('margin-top').replace('px', ''));

      let minusMarginPC = Number(jQuery('#features-boxes-pc').css('margin-top').replace('px', ''));

      let minusMarginMD = Number(jQuery('#features-boxes-md').css('margin-top').replace('px', ''));

      let minusMarginSP = Number(jQuery('#features-boxes-sp').css('margin-top').replace('px', ''));

      let greyHeightPC = Number(jQuery('.bg-grey-pc').css('height').replace('px', ''));

      let greyHeightMD = Number(jQuery('.bg-grey-md').css('height').replace('px', ''));

      let greyHeightSP = Number(jQuery('.bg-grey-sp').css('height').replace('px', ''));


      jQuery('.bg-red-left').css('height', functionsHeight - 150);

      jQuery('.bg-red-left').css('margin-top', functionsMargin + 450);
      
      jQuery('.bg-red-right').css('height', functionsHeight - 150);

      jQuery('.bg-red-right').css('margin-top', functionsMargin + 450);


      jQuery('.bg-red-left-sp').css('height', functionsHeight - 250);

      jQuery('.bg-red-left-sp').css('margin-top', functionsMargin + 450);
      
      jQuery('.bg-red-right-sp').css('height', functionsHeight - 250);

      jQuery('.bg-red-right-sp').css('margin-top', functionsMargin + 450);

      jQuery('.functions').css('margin-top', functionsMargin - 450);

      jQuery('.bg-grey-pc').css('height', functionsMargin - 450);

      jQuery('.bg-grey-pc').css('height', greyHeightPC - 250);

      jQuery('.bg-grey-md').css('height', greyHeightMD - 300);

      jQuery('.bg-grey-sp').css('height', greyHeightSP - 475);


      jQuery('#features-boxes-pc').css('margin-top', minusMarginPC + 250);

      jQuery('#features-boxes-md').css('margin-top', minusMarginMD + 300);

      jQuery('#features-boxes-sp').css('margin-top', minusMarginSP + 475);

    });


  //スライドショー部分の設定
  jQuery(document).ready(function() {
    
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
  });


  });
});

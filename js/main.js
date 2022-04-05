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
    jQuery(this).toggle();

    //「閉じる」ボタンを表示させる
    jQuery(this).parent().prev().children().toggle();

    //詳細内容を開く
    jQuery(this).parent().parent().next('.wp-block-columns').toggle();

    //赤い帯部分の長さを調整
    let functionsHeight =  jQuery('.functions').height();
    
    jQuery('.bg-red-left').css('height', functionsHeight);
    
    jQuery('.bg-red-right').css('height', functionsHeight);
    });

  });  

//「閉じる」ボタンをクリックした際に詳細内容を非表示にし、「詳しく」ボタンを表示させ、「閉じる」ボタンを非表示にする
  jQuery(document).ready(function() {

    jQuery('.detail_button_close').click(function() {
    
    //「閉じる」ボタンを非表示にさせる
    jQuery(this).toggle();
    
    //「詳しく」ボタンを表示させる
    jQuery(this).parent().next().children().toggle();
    
    //詳細内容を開く
    jQuery(this).parent().parent().next('.wp-block-columns').toggle();
    
    //赤い帯部分の長さを調整
    let functionsHeight =  jQuery('.functions').height();
    jQuery('.bg-red-left').css('height', functionsHeight);
    jQuery('.bg-red-right').css('height', functionsHeight);
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
        initialSlide: 1,
        dots: true,
        arrow: true,
        autoplay: true
        }
      }],
    
    });
  });



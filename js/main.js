/**
 * JavaScript
 */

  <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
  
    $(function() {
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
});

    //ヘッダー、スクロールの移動先を指定
    $(function(){
      $('#scroll-pc').click(function(){
        $(window).scrollTop($('#top-2-message').position().top);
      });
      $('#scroll-sp').click(function(){
        $(window).scrollTop($('#top-2-message').position().top);
      });
      $('#to_features').click(function(){
        $(window).scrollTop($('#features').position().top);
      });
      $('#to_function').click(function(){
        $(window).scrollTop($('#function').position().top);
      });
      $('#to_sitespeed').click(function(){
        $(window).scrollTop($('#sitespeed').position().top);
      });
      $('#to_demosite').click(function(){
        $(window).scrollTop($('#demosite').position().top);
      });
      $('#to_QA').click(function(){
        $(window).scrollTop($('#QA').position().top);
      });
    });

    //機能紹介部分の「詳しく」「閉じる」ボタン
    $('.detail').toggle();

    $('.detail_button_open').click(function(){
        $(this).parent().parent().next().toggle(500);
        $(this).toggle(500);
        $(this).next('.detail_button_close').toggle(500);
    });
    $('.detail_button_close').click(function(){
        $(this).parent().parent().next().toggle(500);
        $(this).toggle(500);
        $(this).prev('.detail_button_open').toggle(500);
    });

    //スライドショー部分の設定
    $('#features-boxes-sp').slick({
      responsive: [
        {
          breakpoint: 800,
          settings: {
            variableWidth:true,
            centerMode: true,
            centerPadding: '100px',
            infinite: false,
            initialSlide: 1,
            dots: true,
            arrow: true,
            autoplay: true
          }
        }
      ]
    });
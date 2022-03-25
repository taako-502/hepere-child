<?php
/**
 * 子テーマのパス, URI
 */
define( 'HEPERE_CHILD_THEME_PATH', get_template_directory() );
//define( 'HEPERE_CHILD_THEME_URI', get_template_directory_uri() );
define( 'HEPERE_CHILD_THEME_URI', get_stylesheet_directory_uri() );

/**
 * フロント側にCSSをエンキュー
 */
add_action( 'wp_enqueue_scripts', function() {
  //CSS
  $dependency_style = array('font-awesome' , 'slick-theme', 'slick','hepere-app','hepere-style');
  wp_enqueue_style( 'hepere-child-app', HEPERE_CHILD_THEME_URI.'/style/app.css', $dependency_style);
  wp_enqueue_style( 'hepere-child-front', HEPERE_CHILD_THEME_URI.'/style/front.css', $dependency_style);
  wp_enqueue_style( 'hepere-child-style', HEPERE_CHILD_THEME_URI . '/style.css', $dependency_style);
  //JavaScript
  $dependency_script = array('jquery','hepere-main');
  wp_enqueue_script('slick-js', 'http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', $dependency_script, false, true);
  wp_enqueue_script('main-js',HEPERE_CHILD_THEME_URI . '/js/main.js', $dependency_script, false, true);

  if( is_front_page() ) {
    wp_enqueue_style( 'hepere-child-frontpage', HEPERE_CHILD_THEME_URI . '/style/frontpage.css', $dependency_style);
  } else if (is_page('hepere-download')){
    wp_enqueue_style( 'hepere-child-downloadpage', HEPERE_CHILD_THEME_URI . '/style/download.css', $dependency_style);
  } else {
    wp_enqueue_style( 'hepere-child-except-frontpage', HEPERE_CHILD_THEME_URI . '/style/except_frontpage.css', $dependency_style);
  }
});

/**
 * エディタ側にCSSをエンキュー
 */
add_action( 'enqueue_block_editor_assets', function() {
  wp_enqueue_style( 'hepere-child-editor', HEPERE_CHILD_THEME_URI.'/style/editor.css', array());
  wp_enqueue_style( 'hepere-child-front', HEPERE_CHILD_THEME_URI.'/style/app.css', array());
  wp_enqueue_style( 'hepere-child-style', HEPERE_CHILD_THEME_URI.'/style.css', array());
});

/**
 * トップページのヘッダー下に挿入
 */
add_action( 'hepere_page_under_header', function() {
  if ( ! is_front_page() ) {
    return;
  }
  ?>
  <div class="p-fv">
    <div class="p-fv__wrapper">
      <p class="p-fv__phrase">
        HEPEREは初めての<br>ブログ運営・個人ビジネスに最適な<br>WordPressテーマです
      </p>
      <div class="p-fv__box"></div>
    </div>
    <div id="scroll-pc">
      <p>scroll</p>
      <span>▽</span>
    </div>
  </div>


<div class="top">


  <!--sp用ヘッダー-->
<div class="header-sp">
  <div class="header-logo-sp">
    <h1 class="title-logo">HEPERE</h1>
  </div>
  <nav class="globalMenuSp hidden">
    <ul>
        <li><a href="/#features">特徴</a></li>
        <li><a href="/#function">機能紹介</a></li>
        <li><a href="/#sitespeed">サイトスピード</a></li>
        <li><a href="/#demosite">デモサイト</a></li>
        <li><a href="/#QA">Q&A</a></li>
        <li><a href="/#top-2-message">お問い合わせ</a></li>
    </ul>
  </nav>
  <nav class="header-menu-sp">
    <li class="to_features-sp">特徴</li>
    <li class="to_function-sp">機能紹介</li>
    <li class="to_sitespeed-sp">サイトスピード</li>
    <li class="to_demosite-sp">デモサイト</li>
    <li class="to_QA-sp">Q&A</li>
    <li class="contact-sp"  onclick="location.href='/#top-2-message'">お問い合わせ</li>
    <div class="header-button-sp" onclick="location.href='/hepere-download'">
      <p class="purchase">購入する</p>
    </div>
  </nav>
  <!--SP用ヘッダーボタン部分-->
  <div class="sp_header">
    <div class="sp_header_button">
      <a href="/hepere-download"><i class="fas fa-lg fa-shopping-cart fa-flip-horizontal"></i></a>
      <div class="hamburger" class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</div>
<div class="header-content">
  <div class="header_red">
  </div>
  <h2 class="header_h2">HEPEREは初めての
    <br>ブログ運営・個人ビジネスに最適な
    <br>WordPressテーマです。
  </h2>
</div>
<!--スクロール（SP）-->
<div id="scroll-sp">
  <p>scroll</p>
  <span>▽</span>
</div>
</div>
  <?php
});

/**
 * 全ページのヘッダー下に挿入
 */
add_action( 'hepere_under_header', function() {
  if ( is_front_page() ) {
    return;
  }
  echo '<hr class="c-under-header__hr">';
});

/**
 * 全ページのフッター上側に挿入
 */
add_action( 'hepere_on_footer', function() {
  ?>
    <!--pcフッター部分-->
    <div class="footer-pc">
    <h2 class="footer-pc-h2">はじめての有料テーマならHEPEREが最適です</h2>
    <div class="footer-pc-box1"></div>
    <div class="footer-pc-box2">
      <div class="footer-text-pc">
        <p>WordPressテーマ「HEPERE」
          <br>（Gutenberg対応）
          <br>価格　・・・　7980円
        </p>
        <div class="footer-button" onclick="location.href='/hepere-download'">
          <p>購入する</p>
        </div>
      </div>
      <div class="footer-image">
      <img class="footer-img" src="<?php echo get_stylesheet_directory_uri();?>/img/footer_cta_bg.png" alt="">
      </div>
    </div>
  </div>
  <!--spフッター部分-->
  <div class="footer-sp">
    <h2 class="footer-sp-h2">HEPERE</h2>
    <div class="footer-sp-box">
      <div class="footer-text">
        <p>あなたの個性をプログラミングなしで<br class="sp_more:hidden">表現できる
          <br>WordPressのテーマ
        </p>
        <div class="footer-sp-box-2">
          <div>
            <p>商品名</p>
            <p>販売価格</p>
            <p>販売元</p>
          </div>
          <div class="footer-sp-box3">
            <p class="text-white">WordPressテーマ HEPERE</p>
            <p>7,980円（税込）</p>
            <p>販売元</p>
          </div>
        </div>
        <div class="footer-button" onclick="location.href='/hepere-download'">
          <p>購入する</p>
        </div>
      </div>
    </div>

    </div>
    <div class="copyright">
      <p class="copyright-text">Copyright © 2021 HEPERE Powered by HEPERE.</p>
    </div>
  </div>
  <?php
});



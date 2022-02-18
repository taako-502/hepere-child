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
<<<<<<< HEAD
  } else if ( is_page('hepere-download') ){
    wp_enqueue_style( 'hepere-child-download', HEPERE_CHILD_THEME_URI . '/style/download.css', $dependency_style);
=======
  } else if ( is_page('hepere-download') ) {
    wp_enqueue_style( 'hepere-child-downloadpage', HEPERE_CHILD_THEME_URI . '/style/download.css', $dependency_style);
>>>>>>> cb979952465e11a9c18834dd95d4aea8cc0c423b
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
<<<<<<< HEAD
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
  </div>
  <?php
=======
>>>>>>> 7b164f3326780d752f29156d9da57431636ec5a8
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
  <div class="c-footer-cta">
    <div class="c-footer-cta__wrapper">
      <img class="c-footer-cta__img" src="<?php echo HEPERE_CHILD_THEME_URI.'/img/footer_cta_logo.png' ?>" alt="">
      <p class="c-footer-cta__p">
        HEPEREは初めての<br>ブログ運営・個人ビジネスに最適な<br>WordPressテーマです
      </p>
      <table>
        <tr>
          <td>商品名</td>
          <td class="u-font--white">WordPress テーマ HEPERE</td>
        </tr>
        <tr>
          <td>販売価格</td>
          <td>7,980円</td>
        </tr>
        <tr>
          <td>販売元</td>
          <td>---</td>
        </tr>
      </table>
    </div>
  </div>
  <?php
});



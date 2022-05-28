<?php
/**
 * 子テーマのパス, URI
 */
define( 'HEPERE_CHILD_THEME_PATH', get_stylesheet_directory() );
//define( 'HEPERE_CHILD_THEME_URI', get_template_directory_uri() );
define( 'HEPERE_CHILD_THEME_URI', get_stylesheet_directory_uri() );

//ファイル読み込み
require_once HEPERE_CHILD_THEME_PATH.'/functions/customizer.php';
require_once HEPERE_CHILD_THEME_PATH.'/functions/data.php';

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
  wp_enqueue_script('slick-js', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', $dependency_script, false, true);
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
 * カラーパレット追加
 */
add_action('after_setup_theme', function() {
  add_theme_support('editor-color-palette', array(
    array(
      'name'  => 'テーマカラー' ,
      'slug'  => 'hepere_main',
      'color' => '#F02700',
    ) ,
  ));
});


/**
 * カスタマイザー初期設定
 */
add_action('customize_register', function($wp_customize) {
  //会社情報
  \Hepere_Child_Theme\functions\customizer\register_company_section($wp_customize);
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
      <div class="l-header--serial">
        </div>
      <p class="p-fv__phrase">
        HEPEREは初めての<br>ブログ運営・個人ビジネスに最適な<br>WordPressテーマです
      </p>
      <div class="p-fv__box"></div>
    </div>
    <div id="scroll-pc">
      <p>scroll</p>
      <span>▽</span>
    </div>
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
<div class="c-footer-cta">
  <div class="c-footer-cta__wrapper">
    <h3 class="c-footer-cta-top">初めての有料テーマならHEPEREが最適です</h3>
    <div class="c-footer-cta__text">
      <p>WordPressテーマ「HEPERE」</p>
      <p>（Gutenberg対応）</p>
      <p>価格　・・・　<span id='price'><?php echo Hepere_Child_Theme\functions\data\get_customizer_setting('price'); ?>円</span></p>
    </div>
    <div id="footer-cta" class="footer-button" onclick="location.href='/hepere-download'">
      <p>購入する</p>
    </div>
  </div>
</div>
  <?php
});

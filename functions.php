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
  wp_enqueue_script('hepere-child-main',HEPERE_CHILD_THEME_URI . '/js/main.js', $dependency_script);
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
add_action( 'hepere_home_under_header', function() {
  ?>
  <div class="p-fv">
    <p class="p-fv__phrase">
      HEPEREは初めての<br>ブログ運営・個人ビジネスに最適な<br>WordPressテーマです
    </p>
    <div class="p-fv__box"></div>
  </div>
  <?php
});

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
  wp_enqueue_script( 'hepere-child-app', HEPERE_CHILD_THEME_URI.'/style/app.css', array(), "", true);
  wp_enqueue_script( 'hepere-child-front', HEPERE_CHILD_THEME_URI.'/style/front.css', array(), "", true);
  wp_enqueue_script( 'hepere-child-style', HEPERE_CHILD_THEME_URI.'/style.css', array(), "", true);
});

/**
 * エディタ側にCSSをエンキュー
 */
add_action( 'enqueue_block_editor_assets', function() {
  wp_enqueue_script( 'hepere-child-editor', HEPERE_CHILD_THEME_URI.'/style/editor.css', array(), "", true);
  wp_enqueue_script( 'hepere-child-front', HEPERE_CHILD_THEME_URI.'/style/app.css', array(), "", true);
  wp_enqueue_script( 'hepere-child-style', HEPERE_CHILD_THEME_URI.'/style.css', array(), "", true);
});

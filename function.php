<?php
/**
 * 子テーマのパス, URI
 */
define( 'HEPERE_CHILD_THEME_PATH', get_template_directory() );
define( 'HEPERE_CHILD_THEME_URI', get_template_directory_uri() );

/**
 * フロント側にCSSをエンキュー
 */
add_action( 'wp_enqueue_scripts', function() {
  wp_enqueue_script( 'app-child-style', HEPERE_CHILD_THEME_URI.'/app.css', array(), "", true);
});

/**
 * エディタ側にCSSをエンキュー
 */
add_action( 'enqueue_block_editor_assets', function() {
  wp_enqueue_script( 'editor-child-style', HEPERE_CHILD_THEME_URI.'/editor.css', array(), "", true);
});

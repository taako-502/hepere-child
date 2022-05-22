<?php
namespace Hepere_Child_Theme\functions\customizer;

use function Hepere_Child_Theme\functions\data\get_default_customizer_setting;
use const Hepere_Child_Theme\functions\data\DB_NAME;

/**
 * パネル ： 会社情報
 * @param WP_Customize_Manager $wp_customize カスタマイズの設定
 */
function register_company_section( $wp_customize ) {
  $section = 'hepere_child';

  $wp_customize->add_section(
    $section,
    array(
      'title'    => '子テーマ設定用',
      'priority' => 999,
    )
  );

  customizer_text($wp_customize, $section, 'price', '会社名', '#price');
}

/**
 * テキストを設定するカスタマイザー
 * @param  WP_Customize_Manager $wp_customize
 * @param  string               $section        セクション
 * @param  string               $id             wp_optionテーブルのoption_name
 * @param  string               $label          ラベル
 * @param  string               $selector       リンクを貼るセレクタ
 * @param  string               $priority       優先度
 */
function customizer_text($wp_customize, $section, $id, $label, $selector, $priority = 1) {
  $setting_key = DB_NAME.'['.$id.']';
  $wp_customize->add_setting($setting_key, array(
    'type'    => 'option',
    'default' => get_default_customizer_setting($id),
  ));
  $wp_customize->selective_refresh->add_partial($setting_key, array(
    'selector' => $selector,
  ));
  $wp_customize->add_control(
    new \WP_Customize_Control(
      $wp_customize,
      $setting_key,
      array(
        'label'    => $label,
        'section'  => $section,
        'settings' => $setting_key,
        'priority' => $priority,
      )
    )
  );
}

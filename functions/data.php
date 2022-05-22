<?php
namespace Hepere_Child_Theme\functions\data;

const DB_NAME = 'hepere_child_settings';

/**
 * カスタマイザーの設定値取得
 * @param  string $key キー
 * @return string デフォルト値
 */
function get_customizer_setting($key) {
  $settings = get_option(DB_NAME);
  return isset($settings[$key]) ? $settings[$key] : get_default_customizer_setting($key);
}

/**
 * デフォルト値取得
 * @param  string $key キー
 * @return string デフォルト値
 */
function get_default_customizer_setting($key) {
  return get_default_customizer_settings()[$key];
}

/**
 * デフォルト値リスト取得
 * @return array デフォルト値の連想配列
 */
function get_default_customizer_settings() {
  return array(
    //会社情報
    'price' => '0',
  );
}

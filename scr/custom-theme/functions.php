<?php
/**
 * Child Theme Functions cho Website Dac San Ben Tre (Bach Hoa Xanh Style)
 * Tac gia: Thach An Truong - MSSV: 170123678
 */

add_action('wp_enqueue_scripts', 'bhx_enqueue_styles');
function bhx_enqueue_styles() {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('child-style', get_stylesheet_uri(), array('parent-style'), '1.0.0');
}

// Cấu hình đơn vị tiền tệ VNĐ chuẩn định dạng
add_filter('woocommerce_currency_symbol', 'bhx_custom_currency_symbol', 10, 2);
function bhx_custom_currency_symbol($currency_symbol, $currency) {
    if ($currency === 'VND') {
        $currency_symbol = ' đ';
    }
    return $currency_symbol;
}

// Thêm huy hiệu OCOP Bến Tre vào danh sách sản phẩm
add_action('woocommerce_after_shop_loop_item_title', 'bhx_add_ocop_badge', 5);
function bhx_add_ocop_badge() {
    echo '<div class="bhx-ocop-badge">★ ĐẶC SẢN OCOP BẾN TRE</div>';
}

// Đổi nhãn nút Thêm vào giỏ thành "CHỌN MUA +"
add_filter('woocommerce_product_add_to_cart_text', 'bhx_custom_add_to_cart_text');
function bhx_custom_add_to_cart_text() {
    return 'CHỌN MUA +';
}

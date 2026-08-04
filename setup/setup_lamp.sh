#!/bin/bash
# ==============================================================================
# SCRIPT CÀI ĐẶT TỰ ĐỘNG LAMP STACK TRÊN UBUNTU SERVER 22.04 LTS
# Đồ án: Website TMĐT Đặc Sản Bến Tre (Mô hình Bách Hóa Xanh)
# Tác giả: Thạch An Trường - MSSV: 170123678
# SĐT: 0329886903 | Email: truongta150500@sv-onuni.edu.vn
# ==============================================================================

set -e

echo "[1/6] Cập nhật danh mục gói hệ thống..."
sudo apt-get update && sudo apt-get upgrade -y

echo "[2/6] Cài đặt Apache Web Server 2.4..."
sudo apt-get install -y apache2 apache2-utils
sudo a2enmod rewrite
sudo systemctl enable apache2
sudo systemctl restart apache2

echo "[3/6] Cài đặt MySQL Database Server 8.0..."
sudo apt-get install -y mysql-server
sudo systemctl enable mysql
sudo systemctl restart mysql

echo "[4/6] Cài đặt PHP 8.1 và các thư viện mở rộng cho WordPress..."
sudo apt-get install -y php8.1 libapache2-mod-php8.1 php8.1-mysql php8.1-curl \
    php8.1-gd php8.1-mbstring php8.1-xml php8.1-xmlrpc php8.1-soap php8.1-intl php8.1-zip

echo "[5/6] Khởi tạo cơ sở dữ liệu WordPress..."
sudo mysql -e "CREATE DATABASE IF NOT EXISTS thucpham_bentree CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
sudo mysql -e "CREATE USER IF NOT EXISTS 'bentre_user'@'localhost' IDENTIFIED BY 'Bentre@2026!';"
sudo mysql -e "GRANT ALL PRIVILEGES ON thucpham_bentree.* TO 'bentre_user'@'localhost';"
sudo mysql -e "FLUSH PRIVILEGES;"

echo "[6/6] Cấu hình quyền truy cập thư mục web..."
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html

echo "=============================================================================="
echo "CÀI ĐẶT LAMP STACK HOÀN TẤT THÀNH CÔNG!"
echo "Website URL: http://localhost:8080/thucpham/ (nếu dùng NAT port 8080)"
echo "Database: thucpham_bentree | User: bentre_user | Pass: Bentre@2026!"
echo "=============================================================================="

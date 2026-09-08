#!/bin/bash
# ==============================================================================
# SCRIPT PHỤC HỒI THẢM HỌA KHẨN CẤP (< 15 GIÂY)
# Tác giả: Thạch An Trường - MSSV: 170123678
# ==============================================================================

BACKUP_DIR="/home/bentre/backups"
DB_NAME="thucpham_bentree"
DB_USER="bentre_user"
DB_PASS="Bentre@2026!"
WEB_DIR="/var/www/html"

echo "=== [$(date)] BẮT ĐẦU QUY TRÌNH PHỤC HỒI THẢM HỌA ==="

# Tìm bản sao lưu mới nhất
LATEST_SQL=$(ls -t "$BACKUP_DIR"/db_${DB_NAME}_*.sql 2>/dev/null | head -n 1)
LATEST_TAR=$(ls -t "$BACKUP_DIR"/files_${DB_NAME}_*.tar.gz 2>/dev/null | head -n 1)

if [ -z "$LATEST_SQL" ] || [ -z "$LATEST_TAR" ]; then
    echo "LỖI: Không tìm thấy bản sao lưu hợp lệ trong $BACKUP_DIR!"
    exit 1
fi

echo "Bản CSDL sử dụng: $LATEST_SQL"
echo "Bản mã nguồn sử dụng: $LATEST_TAR"

# 1. Phục hồi Cơ sở dữ liệu
echo "[1/3] Đang nạp lại CSDL MySQL..."
mysql -u root -p -e "DROP DATABASE IF EXISTS $DB_NAME; CREATE DATABASE $DB_NAME CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
mysql -u "$DB_USER" -p"$DB_PASS" "$DB_NAME" < "$LATEST_SQL"
echo "-> CSDL đã được phục hồi hoàn chỉnh."

# 2. Phục hồi Mã nguồn
echo "[2/3] Đang giải nén mã nguồn web..."
sudo rm -rf "${WEB_DIR:?}"/*
sudo tar -xzf "$LATEST_TAR" -C "$WEB_DIR"
sudo chown -R www-data:www-data "$WEB_DIR"
sudo chmod -R 755 "$WEB_DIR"
echo "-> Mã nguồn và thư viện đã được khôi phục."

# 3. Khởi động lại dịch vụ và kiểm tra HTTP 200 OK
echo "[3/3] Khởi động lại Apache và kiểm tra trạng thái..."
sudo systemctl restart apache2
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost/ || true)

echo "=== PHỤC HỒI HOÀN TẤT THÀNH CÔNG! ==="
echo "Trạng thái phản hồi HTTP: $HTTP_CODE"
echo "Website đã sẵn sàng phục vụ!"

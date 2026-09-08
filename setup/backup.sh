#!/bin/bash
# ==============================================================================
# SCRIPT SAO LƯU TỰ ĐỘNG CƠ SỞ DỮ LIỆU VÀ MÃ NGUỒN WEBSITE
# Tác giả: Thạch An Trường - MSSV: 170123678
# ==============================================================================

BACKUP_DIR="/home/bentre/backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
DB_NAME="thucpham_bentree"
DB_USER="bentre_user"
DB_PASS="Bentre@2026!"
WEB_DIR="/var/www/html"

mkdir -p "$BACKUP_DIR"

echo "=== [$(date)] BẮT ĐẦU QUY TRÌNH SAO LƯU ==="

# 1. Trích xuất CSDL MySQL
DB_FILE="$BACKUP_DIR/db_${DB_NAME}_${TIMESTAMP}.sql"
echo "[1/2] Đang trích xuất CSDL: $DB_FILE..."
mysqldump -u "$DB_USER" -p"$DB_PASS" "$DB_NAME" > "$DB_FILE"
gzip -f -k "$DB_FILE"
echo "-> CSDL trích xuất thành công: $(du -sh ${DB_FILE}.gz | cut -f1)"

# 2. Nén mã nguồn Website WordPress
WEB_FILE="$BACKUP_DIR/files_${DB_NAME}_${TIMESTAMP}.tar.gz"
echo "[2/2] Đang nén mã nguồn web: $WEB_FILE..."
tar -czf "$WEB_FILE" -C "$WEB_DIR" .
echo "-> Mã nguồn nén thành công: $(du -sh $WEB_FILE | cut -f1)"

echo "=== SAO LƯU HOÀN TẤT VÀO THƯ MỤC: $BACKUP_DIR ==="
ls -lh "$BACKUP_DIR"

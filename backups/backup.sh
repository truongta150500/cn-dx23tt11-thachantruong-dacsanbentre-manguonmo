#!/bin/bash
BACKUP_DIR="/home/bentre/backups"
mkdir -p $BACKUP_DIR
DATE=$(date +%Y%m%d_%H%M%S)

echo "=== DANG SAO LUU CSDL MYSQL ==="
mysqldump -uwp_bentree -pBenTre@2026 thucpham_bentree > $BACKUP_DIR/db_thucpham_$DATE.sql
echo "CSDL da duoc sao luu thanh: $BACKUP_DIR/db_thucpham_$DATE.sql"

echo "=== DANG SAO LUU MA NGUON WEBSITE ==="
tar -czf $BACKUP_DIR/files_thucpham_$DATE.tar.gz -C /var/www/html thucpham
echo "Ma nguon da duoc sao luu thanh: $BACKUP_DIR/files_thucpham_$DATE.tar.gz"

echo "=== DANH SACH CAC BAN SAO LUU HIEN CO ==="
ls -lh $BACKUP_DIR

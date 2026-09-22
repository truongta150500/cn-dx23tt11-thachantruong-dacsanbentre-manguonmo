#!/bin/bash
BACKUP_DIR="/home/bentre/backups"
DB_FILE="$1"
FILES_FILE="$2"

if [ -z "$DB_FILE" ]; then
    DB_FILE=$(ls -t $BACKUP_DIR/db_thucpham_*.sql 2>/dev/null | head -1)
fi

if [ -z "$FILES_FILE" ]; then
    FILES_FILE=$(ls -t $BACKUP_DIR/files_thucpham_*.tar.gz 2>/dev/null | head -1)
fi

if [ -z "$DB_FILE" ] || [ -z "$FILES_FILE" ]; then
    echo "Loi: Khong tim thay ban sao luu de phuc hoi!"
    exit 1
fi

echo "=========================================================="
echo "    HE THONG PHUC HOI WEBSITE BACH HOA XANH - BEN TRE    "
echo "=========================================================="
echo "-> File CSDL duoc chon: $DB_FILE"
echo "-> File ma nguon duoc chon: $FILES_FILE"

echo "[1/3] Dang phuc hoi Co so du lieu MySQL..."
mysql -uwp_bentree -pBenTre@2026 thucpham_bentree < "$DB_FILE"
if [ $? -eq 0 ]; then
    echo "  >> CSDL MySQL da duoc phuc hoi thanh cong 100%!"
else
    echo "  >> Co loi xay ra khi phuc hoi CSDL!"
    exit 1
fi

echo "[2/3] Dang giai nen va phuc hoi ma nguon Website..."
echo Admin@2026 | sudo -S tar -xzf "$FILES_FILE" -C /var/www/html/
echo Admin@2026 | sudo -S chown -R www-data:www-data /var/www/html/thucpham
echo Admin@2026 | sudo -S chmod -R 755 /var/www/html/thucpham
echo "  >> Ma nguon da duoc giai nen va phan quyen chuan www-data!"

echo "[3/3] Khoi dong lai Web Server Apache..."
echo Admin@2026 | sudo -S systemctl reload apache2
echo "  >> Apache Web Server da duoc reload thanh cong!"

echo "=========================================================="
echo "  HOAN TAT PHUC HOI! WEBSITE DA SAN SANG HOAT DONG:"
echo "  URL: http://localhost:8080/thucpham/"
echo "=========================================================="

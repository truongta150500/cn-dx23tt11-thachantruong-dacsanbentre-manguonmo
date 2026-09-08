# HƯỚNG DẪN CÀI ĐẶT & TRIỂN KHAI HỆ THỐNG (SETUP GUIDE)

## 1. SƠ ĐỒ KIẾN TRÚC TRIỂN KHAI (DEPLOYMENT ARCHITECTURE)

```
+-----------------------------------------------------------------------------------+
|                            WINDOWS HOST MACHINE (MÁY THẬT)                        |
|                                                                                   |
|   +--------------------------+                     +--------------------------+   |
|   |  Google Chrome / Edge    |                     |  Xshell 7 / Xftp 7       |   |
|   |  http://localhost:8080/  |                     |  SSH / SFTP Cổng 2222    |   |
|   +------------+-------------+                     +------------+-------------+   |
+----------------|------------------------------------------------|-----------------+
                 |  (NAT Port 8080 -> 80)                         |  (NAT Port 2222 -> 22)
+----------------v------------------------------------------------v-----------------+
|                       VIRTUALBOX GUEST: UBUNTU SERVER 22.04 LTS                   |
|                                                                                   |
|   +---------------------------------------------------------------------------+   |
|   | Apache 2.4 Web Server (Port 80)                                           |   |
|   | + VirtualHost: /var/www/html (WordPress 6.8 & WooCommerce 9.8.5)          |   |
|   | + Mô-đun: mod_rewrite, mod_headers, PHP 8.1 Handler                       |   |
|   +-------------------------------------+-------------------------------------+   |
|                                         |                                         |
|   +-------------------------------------v-------------------------------------+   |
|   | MySQL Database Server 8.0 (Port 3306)                                     |   |
|   | + Database: thucpham_bentree (15 sản phẩm OCOP, danh mục, đơn hàng)       |   |
|   | + User: bentre_user | Pass: Bentre@2026!                                  |   |
|   +---------------------------------------------------------------------------+   |
|                                                                                   |
|   +---------------------------------------------------------------------------+   |
|   | Kịch Bản Tự Động Hóa Quản Trị Hệ Thống:                                   |   |
|   | + /home/bentre/backup.sh   (mysqldump + tar czf)                          |   |
|   | + /home/bentre/restore.sh  (drop & import DB + untar + HTTP 200 OK)       |   |
|   +---------------------------------------------------------------------------+   |
+-----------------------------------------------------------------------------------+
```

---

## 2. CÁC BƯỚC CÀI ĐẶT NHANH TRÊN UBUNTU SERVER 22.04 LTS

### Bước 1: Sao chép tệp kịch bản vào máy chủ
Dùng Xftp hoặc SCP chuyển thư mục `setup/` vào máy ảo Ubuntu:
```bash
cd /home/bentre/setup
chmod +x setup_lamp.sh backup.sh restore.sh
```

### Bước 2: Chạy kịch bản cài đặt LAMP tự động
```bash
sudo bash setup_lamp.sh
```

### Bước 3: Nạp cơ sở dữ liệu mẫu (15 sản phẩm OCOP & giao diện Bách Hóa Xanh)
```bash
mysql -u bentre_user -pBentre@2026! thucpham_bentree < db_thucpham_bentree.sql
```

### Bước 4: Kiểm tra kết nối Website
Mở trình duyệt trên máy thật và truy cập:
* **Trang chủ:** `http://localhost:8080/` (hoặc `http://localhost:8080/thucpham/`)
* **Trang quản trị Admin:** `http://localhost:8080/wp-admin/`
  - Tài khoản quản trị: `admin`
  - Mật khẩu: `Admin@2026!`

---

## 3. THỰC THI SAO LƯU & PHỤC HỒI THẢM HỌA

### Sao lưu hệ thống (Backup):
```bash
bash /home/bentre/backup.sh
```

### Phục hồi hệ thống khi gặp sự cố (Restore):
```bash
bash /home/bentre/restore.sh
```
*Thời gian phục hồi trung bình: dưới 15 giây!*

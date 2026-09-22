# BÁO CÁO ĐỒ ÁN
# XÂY DỰNG WEBSITE BÁN THỰC PHẨM CHẾ BIẾN
# "THỰC PHẨM SẠCH QUÊ HƯƠNG" — BẾN TRE
### Nền tảng: LAMP (Linux Ubuntu – Apache – MySQL – PHP) + WordPress

---

> **Sinh viên thực hiện:** [Họ và tên]  
> **Giảng viên hướng dẫn:** [Tên GVHD]  
> **Trường/Khoa:** [Tên trường]  
> **Năm học:** 2025 – 2026  

---

## MỤC LỤC

1. Tổng quan mô hình LAMP
2. Tổng quan CMS WordPress
3. Sản phẩm thực phẩm chế biến Bến Tre
4. Cài đặt LAMP trên Ubuntu Server (VirtualBox)
5. Cài đặt WordPress và WooCommerce
6. Xây dựng Website bán thực phẩm
7. Minh họa đặt hàng và thanh toán
8. Sao lưu & Phục hồi qua Xshell / Xftp
9. Kết luận và hướng phát triển

---

## CHƯƠNG 1 — TỔNG QUAN MÔ HÌNH LAMP

### 1.1 Giới thiệu

**LAMP** là tập hợp 4 phần mềm mã nguồn mở, được sử dụng rộng rãi để triển khai ứng dụng web động trên môi trường máy chủ Linux:

| Ký hiệu | Phần mềm | Phiên bản | Vai trò |
|:---:|---|---|---|
| **L** | Linux Ubuntu Server | 22.04 LTS | Hệ điều hành máy chủ |
| **A** | Apache HTTP Server | 2.4.x | Web Server — tiếp nhận và xử lý yêu cầu HTTP |
| **M** | MySQL Server | 8.0.x | Hệ quản trị CSDL quan hệ |
| **P** | PHP | 8.1.x | Ngôn ngữ lập trình phía server |

### 1.2 Kiến trúc hoạt động

```
┌─────────────────────────────────────────────────┐
│              NGƯỜI DÙNG (Browser)               │
│         http://thucpham.local/san-pham          │
└─────────────────────┬───────────────────────────┘
                      │ HTTP Request
                      ▼
┌─────────────────────────────────────────────────┐
│         APACHE WEB SERVER (Port 80)             │
│  Tiếp nhận request → chuyển file .php cho PHP  │
└─────────────────────┬───────────────────────────┘
                      │ Execute PHP
                      ▼
┌─────────────────────────────────────────────────┐
│              PHP INTERPRETER                    │
│   Xử lý logic → truy vấn MySQL → tạo HTML      │
└─────────────────────┬───────────────────────────┘
                      │ SQL Query
                      ▼
┌─────────────────────────────────────────────────┐
│            MySQL DATABASE SERVER                │
│   Lưu trữ: sản phẩm, đơn hàng, người dùng...  │
└─────────────────────┬───────────────────────────┘
                      │ Data Response
                      ▼
              HTML → Trình duyệt ✅
```

### 1.3 Ưu điểm mô hình LAMP

| # | Ưu điểm | Mô tả chi tiết |
|---|---|---|
| 1 | **Miễn phí hoàn toàn** | Tất cả 4 thành phần đều là mã nguồn mở, không chi phí bản quyền |
| 2 | **Ổn định, tin cậy** | Linux nổi tiếng về uptime cao, phù hợp môi trường production |
| 3 | **Bảo mật tốt** | Linux có hệ thống phân quyền chặt chẽ, ít bị tấn công hơn Windows |
| 4 | **Hiệu năng cao** | Xử lý được hàng nghìn request/giây với cấu hình phù hợp |
| 5 | **Cộng đồng lớn** | Hàng triệu tài liệu, forum, hỗ trợ trực tuyến |
| 6 | **Tương thích tốt** | WordPress, Joomla, Drupal, Laravel đều chạy tốt trên LAMP |

### 1.4 Nhược điểm mô hình LAMP

| # | Nhược điểm | Mô tả |
|---|---|---|
| 1 | **Cần kiến thức Linux** | Quản trị qua dòng lệnh, khó với người mới |
| 2 | **Cấu hình phức tạp** | Ban đầu mất nhiều thời gian cài đặt hơn WAMP (Windows) |
| 3 | **Không có GUI** | Ubuntu Server không có giao diện đồ họa mặc định |

---

## CHƯƠNG 2 — TỔNG QUAN CMS WORDPRESS

### 2.1 Giới thiệu WordPress

**WordPress** là hệ thống quản lý nội dung (Content Management System — CMS) phổ biến nhất thế giới, chiếm **43% tổng số website** toàn cầu tính đến năm 2024.

- **Ra đời:** Năm 2003
- **Ngôn ngữ:** PHP + MySQL
- **Giấy phép:** GPL (Mã nguồn mở miễn phí)
- **Website chính thức:** https://wordpress.org
- **Phiên bản hiện tại:** 6.x

### 2.2 Ưu điểm WordPress

| # | Ưu điểm | Mô tả |
|---|---|---|
| 1 | **Miễn phí** | Core WordPress 100% miễn phí |
| 2 | **Dễ sử dụng** | Dashboard trực quan, không cần biết code |
| 3 | **Plugin phong phú** | 60.000+ plugin trên kho chính thức |
| 4 | **Giao diện đa dạng** | Hàng nghìn theme miễn phí và trả phí |
| 5 | **WooCommerce** | Plugin thương mại điện tử mạnh mẽ, miễn phí |
| 6 | **SEO tốt** | Tích hợp Yoast SEO, tối ưu tìm kiếm |
| 7 | **Đa ngôn ngữ** | Hỗ trợ tiếng Việt đầy đủ |
| 8 | **Cộng đồng lớn** | Hàng triệu người dùng toàn cầu |
| 9 | **Responsive** | Hỗ trợ hiển thị tốt trên mobile |
| 10 | **Phân quyền** | Quản lý nhiều vai trò: Admin, Editor, Author... |

### 2.3 Nhược điểm WordPress

| # | Nhược điểm | Mô tả |
|---|---|---|
| 1 | **Bảo mật** | Nổi tiếng → là mục tiêu tấn công phổ biến nếu không cập nhật |
| 2 | **Hiệu năng** | Cần tối ưu cache nếu traffic lớn |
| 3 | **Plugin xung đột** | Quá nhiều plugin có thể gây lỗi tương thích |
| 4 | **Chi phí mở rộng** | Theme/plugin cao cấp có thể mất phí |
| 5 | **Phụ thuộc cập nhật** | Cần cập nhật thường xuyên để bảo mật |

### 2.4 Tính năng chính của WordPress

- **Gutenberg Block Editor** — Trình soạn thảo kéo thả hiện đại
- **Media Library** — Quản lý hình ảnh, video tập trung
- **User Management** — Phân quyền người dùng linh hoạt
- **Plugin System** — Mở rộng chức năng không giới hạn
- **Theme Customizer** — Tùy chỉnh giao diện trực tiếp
- **WooCommerce** — Giỏ hàng, thanh toán, quản lý đơn hàng
- **REST API** — Tích hợp với ứng dụng di động

### 2.5 Các bước cài đặt WordPress (tóm tắt)

```
Bước 1: Cài đặt môi trường LAMP (Linux + Apache + MySQL + PHP)
Bước 2: Tải WordPress từ https://wordpress.org
Bước 3: Giải nén vào thư mục web (/var/www/html/)
Bước 4: Tạo database MySQL cho WordPress
Bước 5: Cấu hình file wp-config.php
Bước 6: Cấu hình Apache VirtualHost
Bước 7: Hoàn tất cài đặt qua trình duyệt web
Bước 8: Cài đặt theme & plugin (WooCommerce)
```

---

## CHƯƠNG 3 — SẢN PHẨM THỰC PHẨM CHẾ BIẾN BẾN TRE

### 3.1 Giới thiệu đặc sản Bến Tre

Bến Tre — "Xứ dừa" của miền Tây Nam Bộ, nổi tiếng với những sản phẩm thực phẩm chế biến từ dừa và các nguyên liệu địa phương đặc trưng. Các sản phẩm mang đậm hương vị truyền thống, được ưa chuộng khắp cả nước và xuất khẩu ra thế giới.

### 3.2 Danh mục và Bảng sản phẩm

#### 🥥 NHÓM SẢN PHẨM TỪ DỪA

| STT | Tên sản phẩm | Giá (VNĐ) | Đơn vị | Mô tả |
|---|---|---|---|---|
| 1 | **Kẹo dừa Bến Tre** | 45.000 | Hộp 400g | Kẹo dừa mềm béo, nguyên liệu dừa tươi Bến Tre, nhãn hiệu Thanh Long. Hương thơm tự nhiên, không phẩm màu |
| 2 | **Kẹo dừa sầu riêng** | 55.000 | Hộp 400g | Kẹo dừa kết hợp sầu riêng Ri6 Bến Tre. Vị béo ngọt đặc trưng, thích hợp làm quà tặng |
| 3 | **Bánh tráng dừa** | 25.000 | Gói 10 cái | Bánh tráng giòn từ cơm dừa, nướng than hoa. Ăn kèm tương ớt hoặc mắm |
| 4 | **Mứt dừa non** | 40.000 | Hộp 250g | Mứt từ cơm dừa non, sấy khô giữ nguyên vị. Có 3 loại: tự nhiên, lá dứa, gấc |
| 5 | **Chuối khô dừa** | 35.000 | Gói 200g | Chuối sấy bọc dừa nạo, ngọt tự nhiên không đường. Đặc sản truyền thống Bến Tre |

#### 🍰 NHÓM BÁNH KẸO TRUYỀN THỐNG

| STT | Tên sản phẩm | Giá (VNĐ) | Đơn vị | Mô tả |
|---|---|---|---|---|
| 6 | **Bánh phồng Sơn Đốc** | 30.000 | Gói 10 cái | Bánh phồng nếp truyền thống làng Sơn Đốc, giòn xốp sau khi nướng. Đặc sản nổi tiếng nhất Bến Tre |
| 7 | **Bánh ít lá gai** | 20.000 | Gói 10 cái | Bánh ít nhân đậu xanh dừa, gói lá chuối xanh mướt. Hương vị dân dã truyền thống |
| 8 | **Kẹo lạc vừng** | 25.000 | Túi 300g | Kẹo giòn từ lạc rang và vừng đen, ngọt vừa. Thủ công 100%, không chất bảo quản |

#### 🌺 NHÓM MỨT & SẤY KHÔ

| STT | Tên sản phẩm | Giá (VNĐ) | Đơn vị | Mô tả |
|---|---|---|---|---|
| 9 | **Mứt me Bến Tre** | 30.000 | Túi 200g | Mứt me chua ngọt tự nhiên, me cây địa phương. Không phẩm màu, không chất bảo quản |
| 10 | **Mứt gừng** | 35.000 | Hộp 200g | Mứt gừng dẻo ngọt, nguyên liệu gừng tươi Bến Tre. Tốt cho tiêu hóa và ấm người |
| 11 | **Trái cây sấy thập cẩm** | 50.000 | Gói 300g | Hỗn hợp: xoài, khóm, ổi, dừa sấy dẻo. Không đường, giữ nguyên dưỡng chất |

#### 🥩 NHÓM THỰC PHẨM CHẾ BIẾN TỪ THỊT & HẢI SẢN

| STT | Tên sản phẩm | Giá (VNĐ) | Đơn vị | Mô tả |
|---|---|---|---|---|
| 12 | **Chả lụa Bến Tre** | 65.000 | Cây 500g | Chả lụa thịt heo tươi địa phương, gói lá chuối truyền thống. Không hàn the, an toàn |
| 13 | **Tôm khô Bình Đại** | 120.000 | Túi 200g | Tôm đất khô loại 1 từ vùng biển Bình Đại. Màu đỏ tươi, vị đậm ngọt tự nhiên |
| 14 | **Khô cá lóc** | 85.000 | Gói 300g | Cá lóc đồng khô một nắng, ướp gia vị truyền thống. Nướng hoặc chiên đều ngon |
| 15 | **Nem chua Bến Tre** | 30.000 | Gói 10 cái | Nem chua lên men tự nhiên, vị chua cay đặc trưng. Gói lá ổi và lá chuối tươi |

### 3.3 Phân loại danh mục

```
Thực Phẩm Sạch Quê Hương - Bến Tre
├── 🥥 Đặc sản từ Dừa (5 sản phẩm)
├── 🍰 Bánh & Kẹo truyền thống (3 sản phẩm)
├── 🌺 Mứt & Sấy khô (3 sản phẩm)
└── 🥩 Thịt & Hải sản chế biến (4 sản phẩm)
```

---

## CHƯƠNG 4 — CÀI ĐẶT LAMP TRÊN UBUNTU SERVER (VIRTUALBOX)

### 4.1 Chuẩn bị môi trường

**Yêu cầu phần cứng máy tính chủ:**
- RAM: tối thiểu 4GB (4GB RAM → cấp 1GB cho VM)
- Ổ cứng trống: 30GB
- Kết nối internet

**Phần mềm cần tải:**
- VirtualBox 7.x: https://download.virtualbox.org/virtualbox/7.0.22/VirtualBox-7.0.22-165102-Win.exe
- Ubuntu Server 22.04 LTS: https://ftp.fau.de/ubuntu-releases/22.04/ubuntu-22.04.5-live-server-amd64.iso

### 4.2 Tạo máy ảo VirtualBox

**Bước 1: Mở VirtualBox → New**
```
Name: Ubuntu-LAMP-BenTre
Type: Linux
Version: Ubuntu (64-bit)
```

**Bước 2: Cấu hình tài nguyên**
```
RAM:  1024 MB  (1GB — phù hợp máy 4GB RAM)
CPU:  1 core
HDD:  25 GB (VDI, Dynamically allocated)
```

**Bước 3: Cấu hình Network (quan trọng)**
```
Adapter 1: NAT          ← để VM kết nối internet
Adapter 2: Host-Only    ← để máy Windows kết nối vào VM
```

**Bước 4: Gắn ISO Ubuntu → Start → Cài đặt Ubuntu Server**
```
Ngôn ngữ     : English
Keyboard     : Vietnamese hoặc English
Network      : Cấu hình mặc định
Username     : admin
Password     : Admin@2026
SSH Server   : [✓] Tích chọn Install OpenSSH Server
```

### 4.3 Lấy địa chỉ IP của máy ảo

Sau khi Ubuntu Server khởi động, đăng nhập và chạy:
```bash
ip addr show
# Tìm dòng "inet xxx.xxx.xxx.xxx" của card enp0s8 (Host-Only)
# Ví dụ: 192.168.56.101
```

### 4.4 Cài đặt LAMP (Dùng script tự động)

**Kết nối qua Xshell trước, sau đó chạy:**
```bash
# Tải script lên server qua Xftp, sau đó:
sudo bash install_lamp.sh
```

**Hoặc chạy từng lệnh thủ công:**

```bash
# === APACHE ===
sudo apt update -y
sudo apt install apache2 -y
sudo systemctl start apache2
sudo systemctl enable apache2
sudo ufw allow 'Apache Full'
sudo ufw --force enable

# === MYSQL ===
sudo apt install mysql-server -y
sudo systemctl start mysql
sudo systemctl enable mysql
sudo mysql -e "CREATE DATABASE thucpham_bentree CHARACTER SET utf8mb4;"
sudo mysql -e "CREATE USER 'wp_bentree'@'localhost' IDENTIFIED BY 'BenTre@2026';"
sudo mysql -e "GRANT ALL PRIVILEGES ON thucpham_bentree.* TO 'wp_bentree'@'localhost';"
sudo mysql -e "FLUSH PRIVILEGES;"

# === PHP ===
sudo apt install php php-mysql php-curl php-gd php-mbstring \
  php-xml php-zip libapache2-mod-php -y
sudo systemctl restart apache2
```

**Kiểm tra LAMP hoạt động:**
```bash
# Kiểm tra Apache
sudo systemctl status apache2     # → Active: running ✅

# Kiểm tra MySQL
sudo systemctl status mysql       # → Active: running ✅

# Kiểm tra PHP
php -v                            # → PHP 8.1.x ✅

# Tạo file test PHP
echo "<?php phpinfo(); ?>" | sudo tee /var/www/html/info.php
# Mở trình duyệt: http://[IP_VM]/info.php → thấy trang PHP Info ✅
```

---

## CHƯƠNG 5 — CÀI ĐẶT WORDPRESS VÀ WOOCOMMERCE

### 5.1 Tải và cài đặt WordPress

```bash
cd /var/www/html
sudo wget https://wordpress.org/latest.tar.gz
sudo tar -xzf latest.tar.gz
sudo mv wordpress thucpham
sudo rm latest.tar.gz

# Cấu hình database
cd /var/www/html/thucpham
sudo cp wp-config-sample.php wp-config.php
sudo nano wp-config.php
```

Thay đổi trong wp-config.php:
```php
define( 'DB_NAME',     'thucpham_bentree' );
define( 'DB_USER',     'wp_bentree' );
define( 'DB_PASSWORD', 'BenTre@2026' );
define( 'DB_HOST',     'localhost' );
define( 'DB_CHARSET',  'utf8mb4' );
```

```bash
# Cấp quyền
sudo chown -R www-data:www-data /var/www/html/thucpham
sudo chmod -R 755 /var/www/html/thucpham

# Cấu hình VirtualHost
sudo tee /etc/apache2/sites-available/thucpham.conf > /dev/null <<'EOF'
<VirtualHost *:80>
    ServerName thucpham.local
    DocumentRoot /var/www/html/thucpham
    <Directory /var/www/html/thucpham>
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
EOF

sudo a2ensite thucpham.conf
sudo a2enmod rewrite
sudo a2dissite 000-default.conf
sudo systemctl reload apache2
```

### 5.2 Hoàn tất cài đặt WordPress qua trình duyệt

1. Mở trình duyệt → `http://[IP_VM]/thucpham`
2. Chọn ngôn ngữ: **Tiếng Việt**
3. Điền thông tin:

```
Tiêu đề website : Thực Phẩm Sạch Quê Hương
Tên đăng nhập   : admin
Mật khẩu        : [mật khẩu mạnh]
Email            : admin@thucpham.local
```

4. Bấm **"Cài đặt WordPress"**
5. Đăng nhập: `http://[IP_VM]/thucpham/wp-admin`

### 5.3 Cài đặt WooCommerce

```
Dashboard → Plugins → Thêm mới
→ Tìm kiếm: "WooCommerce"
→ Cài đặt → Kích hoạt
```

**Cấu hình WooCommerce Wizard:**
```
Quốc gia        : Việt Nam
Tỉnh/Thành      : Bến Tre
Địa chỉ         : [Địa chỉ cửa hàng]
Đơn vị tiền tệ  : Việt Nam Đồng (VND)
Đơn vị cân nặng : kg
Ngành hàng      : Thực phẩm & Đồ uống
```

### 5.4 Cài đặt Theme

```
Giao diện → Themes → Thêm mới
→ Tìm: "Astra"
→ Cài đặt → Kích hoạt
→ Astra là theme nhẹ, miễn phí, tương thích WooCommerce tốt nhất
```

---

## CHƯƠNG 6 — XÂY DỰNG WEBSITE BÁN THỰC PHẨM

### 6.1 Thêm danh mục sản phẩm

```
Sản phẩm → Danh mục → Thêm danh mục mới:

1. Đặc sản từ Dừa    (slug: dac-san-dua)
2. Bánh & Kẹo        (slug: banh-keo)
3. Mứt & Sấy khô     (slug: mut-say-kho)
4. Thịt & Hải sản    (slug: thit-hai-san)
```

### 6.2 Thêm sản phẩm (Ví dụ: Kẹo dừa Bến Tre)

```
Sản phẩm → Thêm mới:

Tên sản phẩm    : Kẹo Dừa Bến Tre Thanh Long
Mô tả ngắn      : Kẹo dừa mềm béo, nguyên liệu dừa tươi Bến Tre.
                  Hương thơm tự nhiên, không phẩm màu.
Mô tả đầy đủ    : [Chi tiết sản phẩm, thành phần, hướng dẫn bảo quản]
Giá thường       : 45000
Giá khuyến mãi  : 40000
Danh mục        : Đặc sản từ Dừa
Tags            : kẹo dừa, bến tre, đặc sản
Hình ảnh        : [Upload ảnh sản phẩm]
Tình trạng kho  : Còn hàng
```

### 6.3 Cấu hình Thanh toán

```
WooCommerce → Cài đặt → Thanh toán:

✅ Chuyển khoản ngân hàng (BACS):
   Ngân hàng    : Vietcombank
   Số TK        : 0123456789
   Chủ TK       : NGUYEN VAN A
   Chi nhánh    : Bến Tre

✅ Thanh toán khi nhận hàng (COD):
   Tiêu đề      : Thanh toán khi nhận hàng
   Mô tả        : Thanh toán bằng tiền mặt khi nhận hàng
```

### 6.4 Cấu hình Vận chuyển

```
WooCommerce → Cài đặt → Vận chuyển → Thêm vùng:

Vùng 1: Nội tỉnh Bến Tre
   → Phí cố định: 20.000 VND
   → Miễn phí cho đơn từ: 200.000 VND

Vùng 2: Toàn quốc
   → Phí cố định: 35.000 VND
   → Miễn phí cho đơn từ: 500.000 VND
```

---

## CHƯƠNG 7 — MINH HỌA ĐẶT HÀNG VÀ THANH TOÁN

### 7.1 Quy trình đặt hàng từ phía khách hàng

```
BƯỚC 1: Truy cập website
        http://[IP]/thucpham
        ↓
BƯỚC 2: Xem sản phẩm
        Trang chủ → Chọn danh mục → Xem chi tiết sản phẩm
        ↓
BƯỚC 3: Thêm vào giỏ hàng
        Chọn số lượng → "Thêm vào giỏ hàng"
        ↓
BƯỚC 4: Xem giỏ hàng
        Kiểm tra sản phẩm → Áp mã giảm giá (nếu có)
        ↓
BƯỚC 5: Tiến hành thanh toán
        Điền thông tin giao hàng:
        - Họ tên người nhận
        - Số điện thoại
        - Địa chỉ giao hàng
        - Tỉnh/Thành phố
        ↓
BƯỚC 6: Chọn phương thức thanh toán
        ○ Chuyển khoản ngân hàng
        ● Thanh toán khi nhận hàng (COD)
        ↓
BƯỚC 7: Đặt hàng
        Bấm "Đặt hàng" → Nhận mã đơn hàng
        → Email xác nhận tự động gửi về
```

### 7.2 Quy trình xử lý đơn hàng từ phía Admin

```
BƯỚC 1: Nhận thông báo đơn mới qua email
        ↓
BƯỚC 2: WooCommerce → Đơn hàng
        Xem chi tiết đơn hàng mới
        ↓
BƯỚC 3: Xác nhận đơn
        Trạng thái: "Đang chờ xử lý" → "Đang xử lý"
        ↓
BƯỚC 4: Chuẩn bị hàng + Giao hàng
        Trạng thái: "Đang xử lý" → "Đang giao hàng"
        ↓
BƯỚC 5: Hoàn tất
        Trạng thái: "Đang giao hàng" → "Hoàn thành"
        → Khách nhận được email xác nhận
```

---

## CHƯƠNG 8 — SAO LƯU VÀ PHỤC HỒI VỚI XSHELL / XFTP

### 8.1 Giới thiệu công cụ

| Công cụ | Chức năng | Tải tại |
|---|---|---|
| **Xshell** | Kết nối SSH để chạy lệnh trên server | netsarang.com |
| **Xftp** | Truyền file giữa máy tính và server | netsarang.com |

### 8.2 Kết nối Xshell đến Ubuntu Server

```
File → New Session:
  Protocol  : SSH
  Host      : 192.168.56.101  (IP Host-Only của VM)
  Port      : 22
  Username  : admin
  Auth      : Password → BenTre@2026
```

### 8.3 Kết nối Xftp đến Ubuntu Server

```
File → New Session:
  Protocol  : SFTP
  Host      : 192.168.56.101
  Port      : 22
  Username  : admin
  Auth      : Password → BenTre@2026
```

### 8.4 Thực hiện Sao lưu (Backup)

**Qua Xshell — chạy script:**
```bash
# Upload file backup_restore.sh lên server qua Xftp trước
# Sau đó chạy:
sudo bash backup_restore.sh backup
```

**Kết quả tạo ra 2 file:**
```
/home/admin/backups/db_thucpham_YYYYMMDD_HHMMSS.sql      ← Database
/home/admin/backups/files_thucpham_YYYYMMDD_HHMMSS.tar.gz ← Files
```

**Qua Xftp — tải file backup về máy:**
```
Xftp → Điều hướng đến: /home/admin/backups/
→ Chọn 2 file backup → Kéo sang thư mục máy tính (D:\Backup\)
```

### 8.5 Thực hiện Phục hồi (Restore)

**Bước 1: Upload file backup lên server qua Xftp**
```
Xftp → Upload từ D:\Backup\ → /home/admin/backups/
```

**Bước 2: Chạy script phục hồi qua Xshell**
```bash
sudo bash backup_restore.sh restore
# → Hệ thống hỏi xác nhận → nhập "yes" → phục hồi tự động
```

### 8.6 Sao lưu tự động hàng ngày (Cron Job)

```bash
# Thiết lập Cron Job chạy lúc 2:00 AM mỗi ngày
crontab -e

# Thêm dòng sau:
0 2 * * * sudo bash /home/admin/backup_restore.sh backup >> /home/admin/backup.log 2>&1
```

---

## CHƯƠNG 9 — KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN

### 9.1 Kết quả đạt được

| # | Nội dung | Kết quả |
|---|---|---|
| 1 | Cài đặt Ubuntu Server 22.04 trên VirtualBox | ✅ Hoàn thành |
| 2 | Triển khai LAMP (Apache + MySQL + PHP) | ✅ Hoàn thành |
| 3 | Cài đặt WordPress + WooCommerce | ✅ Hoàn thành |
| 4 | Thêm 15 sản phẩm đặc sản Bến Tre | ✅ Hoàn thành |
| 5 | Cấu hình thanh toán COD + Chuyển khoản | ✅ Hoàn thành |
| 6 | Cấu hình vận chuyển nội tỉnh + toàn quốc | ✅ Hoàn thành |
| 7 | Sao lưu/phục hồi qua Xshell & Xftp | ✅ Hoàn thành |
| 8 | Cron Job sao lưu tự động hàng ngày | ✅ Hoàn thành |

### 9.2 Hạn chế

- Chưa tích hợp SSL (HTTPS) — website chỉ chạy HTTP
- Chưa có cổng thanh toán online (VNPay, MoMo, ZaloPay)
- Đang chạy môi trường nội bộ, chưa triển khai VPS thực tế
- Chưa tối ưu hiệu năng cache và CDN

### 9.3 Hướng phát triển

| # | Hướng phát triển | Công nghệ |
|---|---|---|
| 1 | Tích hợp HTTPS bảo mật | Let's Encrypt (Certbot) |
| 2 | Thanh toán trực tuyến | VNPay, MoMo, ZaloPay |
| 3 | Tối ưu hiệu năng | WP Super Cache, Redis |
| 4 | Bảo mật nâng cao | Wordfence, 2FA |
| 5 | Triển khai thực tế | VPS DigitalOcean / Vultr |
| 6 | Ứng dụng di động | WordPress REST API + React Native |
| 7 | Email marketing | Mailchimp + WooCommerce |

---

## TÀI LIỆU THAM KHẢO

1. WordPress.org (2024). *WordPress Codex — Installing WordPress*. https://wordpress.org/documentation/
2. Ubuntu.com (2024). *Ubuntu Server Guide 22.04*. https://ubuntu.com/server/docs
3. WooCommerce.com (2024). *WooCommerce Documentation*. https://woocommerce.com/documentation/
4. Apache.org (2024). *Apache HTTP Server Documentation*. https://httpd.apache.org/docs/
5. MySQL.com (2024). *MySQL 8.0 Reference Manual*. https://dev.mysql.com/doc/
6. NetSarang.com (2024). *Xshell & Xftp User Guide*. https://www.netsarang.com/

---

*Báo cáo được thực hiện bởi: [Họ và tên sinh viên]*  
*Ngày hoàn thành: Tháng 9 năm 2026*

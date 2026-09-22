# 📊 NỘI DUNG 12 SLIDE THUYẾT TRÌNH
# Đề tài: Thực Phẩm Sạch Quê Hương — Bến Tre
# Nền tảng: LAMP + WordPress

---

## SLIDE 1 — TRANG BÌA
**Màu nền:** Xanh đậm #1a3c5e + Hình ảnh dừa Bến Tre mờ phía sau

```
🌴 THỰC PHẨM SẠCH QUÊ HƯƠNG
   Website Bán Thực Phẩm Chế Biến Bến Tre

   Nền tảng: LAMP + CMS WordPress

   ────────────────────────────────
   Sinh viên: [Tên]
   GVHD:      [Tên Giảng Viên]
   Lớp:       [Tên Lớp]
   Năm học:   2025 – 2026
```

---

## SLIDE 2 — MỤC TIÊU ĐỀ TÀI
**Layout:** Icon + text dạng timeline dọc

```
📌 MỤC TIÊU NGHIÊN CỨU

┌─────────────────────────────────────────────────────┐
│ 01 │ Tìm hiểu & cài đặt mô hình LAMP trên VM       │
│    │ Linux Ubuntu + Apache + MySQL + PHP            │
├─────────────────────────────────────────────────────┤
│ 02 │ Nghiên cứu CMS WordPress                       │
│    │ Ưu/nhược điểm, tính năng, WooCommerce          │
├─────────────────────────────────────────────────────┤
│ 03 │ Thu thập 15 sản phẩm đặc sản Bến Tre           │
│    │ Phân loại, hình ảnh, giá cả, mô tả             │
├─────────────────────────────────────────────────────┤
│ 04 │ Xây dựng Website bán hàng hoàn chỉnh           │
│    │ Đặt hàng, thanh toán COD + Chuyển khoản        │
├─────────────────────────────────────────────────────┤
│ 05 │ Sao lưu & Phục hồi hệ thống                    │
│    │ Xshell, Xftp, Cron Job tự động                 │
└─────────────────────────────────────────────────────┘
```

---

## SLIDE 3 — MÔ HÌNH LAMP
**Layout:** 4 khối lớn ngang, màu sắc khác nhau

```
📋 MÔ HÌNH LAMP — Phần mềm mã nguồn mở

┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
│    🐧    │   │    🌐    │   │    🗄️   │   │    🐘    │
│  LINUX   │ + │  APACHE  │ + │  MYSQL   │ + │   PHP    │
│          │   │          │   │          │   │          │
│Ubuntu    │   │Web Server│   │Database  │   │Language  │
│22.04 LTS │   │Port 80   │   │Port 3306 │   │8.1.x     │
│(Xanh lá) │   │(Cam)     │   │(Xanh)    │   │(Tím)     │
└──────────┘   └──────────┘   └──────────┘   └──────────┘

✅ Miễn phí    ✅ Ổn định    ✅ Bảo mật    ✅ Hiệu năng cao
```

**Chú thích dưới:** "LAMP chiếm 60% thị phần máy chủ web thế giới"

---

## SLIDE 4 — CMS WORDPRESS
**Layout:** Chia đôi: Ưu điểm | Nhược điểm

```
🌐 CMS WORDPRESS — Số 1 Thế Giới

  "WordPress chiếm 43% tổng số website toàn cầu (2024)"

┌─────────────────────┬─────────────────────┐
│    ✅ ƯU ĐIỂM       │    ❌ NHƯỢC ĐIỂM    │
├─────────────────────┼─────────────────────┤
│ • Miễn phí 100%     │ • Dễ bị tấn công    │
│ • Dễ sử dụng        │   nếu không cập nhật│
│ • 60.000+ plugin    │ • Plugin xung đột   │
│ • WooCommerce mạnh  │ • Cần tối ưu cache  │
│ • SEO tốt           │ • Theme cao cấp phí │
│ • Hỗ trợ tiếng Việt │                     │
│ • Cộng đồng lớn     │                     │
└─────────────────────┴─────────────────────┘
```

---

## SLIDE 5 — CÀI ĐẶT VIRTUALBOX + UBUNTU
**Layout:** Sơ đồ các bước với mũi tên

```
🖥️ CÀI ĐẶT MÁY ẢO UBUNTU SERVER

  MÁY TÍNH WINDOWS (Host)
  RAM: 4GB → Cấp 1GB cho VM
       │
       ▼
  ┌─────────────────────────────────┐
  │         VIRTUALBOX 7.x         │
  │                                 │
  │   VM: Ubuntu-LAMP-BenTre        │
  │   ├─ RAM:  1024 MB              │
  │   ├─ HDD:  25 GB                │
  │   └─ Network:                   │
  │      ├─ NAT (internet)          │
  │      └─ Host-Only (kết nối SSH) │
  └─────────────────────────────────┘
       │
       ▼
  Ubuntu Server 22.04 LTS
  Username: admin | SSH: Bật
```

---

## SLIDE 6 — CÀI ĐẶT LAMP (Các lệnh chính)
**Layout:** Code block + icon check màu xanh

```
⚙️ CÀI ĐẶT LAMP TRÊN UBUNTU SERVER

  [1] Cài Apache          [2] Cài MySQL
  ┌────────────────┐      ┌────────────────────┐
  │sudo apt install│      │sudo apt install     │
  │  apache2 -y   │      │  mysql-server -y    │
  │               │      │                    │
  │→ Port 80 ✅   │      │→ Tạo DB: ✅         │
  └────────────────┘      │  thucpham_bentree  │
                          └────────────────────┘

  [3] Cài PHP
  ┌──────────────────────────────────────────┐
  │sudo apt install php php-mysql php-curl   │
  │  php-gd php-mbstring php-xml php-zip -y  │
  │                                          │
  │→ PHP 8.1.x ✅                            │
  └──────────────────────────────────────────┘

  🌐 Kết quả: http://192.168.56.101/info.php → PHP Info ✅
```

---

## SLIDE 7 — CÀI ĐẶT WORDPRESS
**Layout:** 6 bước hình tròn dạng vòng tròn tiến trình

```
🔧 CÀI ĐẶT WORDPRESS

  ① Tải WordPress.org       ② Giải nén vào
    latest.tar.gz        →    /var/www/html/thucpham
         ↓                           ↓
  ⑥ Cài Theme Astra           ③ Cấu hình
    + WooCommerce        ←      wp-config.php
         ↑                           ↓
  ⑤ Hoàn tất qua          ④ Apache VirtualHost
    trình duyệt             thucpham.conf

  ────────────────────────────────────────────
  Database: thucpham_bentree
  User:     wp_bentree | Pass: BenTre@2026
  URL:      http://192.168.56.101/thucpham
```

---

## SLIDE 8 — 15 SẢN PHẨM ĐẶC SẢN BẾN TRE
**Layout:** Grid 5×3 ảnh sản phẩm + tên + giá

```
🥥 15 SẢN PHẨM ĐẶC SẢN BẾN TRE

┌─────────┬─────────┬─────────┬─────────┬─────────┐
│[Ảnh]   │[Ảnh]   │[Ảnh]   │[Ảnh]   │[Ảnh]   │
│Kẹo Dừa │Kẹo Dừa │Bánh    │Mứt     │Chuối   │
│Thanh Lng│Sầu Riêng│Tráng Dừa│Dừa Non │Khô Dừa │
│45.000₫  │55.000₫  │25.000₫ │40.000₫ │35.000₫ │
├─────────┼─────────┼─────────┼─────────┼─────────┤
│[Ảnh]   │[Ảnh]   │[Ảnh]   │[Ảnh]   │[Ảnh]   │
│Bánh    │Bánh Ít │Kẹo Lạc │Mứt Me  │Mứt Gừng│
│Phồng SD│Lá Gai  │Vừng    │        │        │
│30.000₫  │20.000₫  │25.000₫ │30.000₫ │35.000₫ │
├─────────┼─────────┼─────────┼─────────┼─────────┤
│[Ảnh]   │[Ảnh]   │[Ảnh]   │[Ảnh]   │[Ảnh]   │
│Trái Cây│Chả Lụa │Tôm Khô │Khô Cá  │Nem Chua│
│Sấy     │Bến Tre │Bình Đại│Lóc     │Bến Tre │
│50.000₫  │65.000₫  │120.000₫│85.000₫ │30.000₫ │
└─────────┴─────────┴─────────┴─────────┴─────────┘
```

---

## SLIDE 9 — DEMO WEBSITE (Screenshots)
**Layout:** 4 screenshot xếp 2×2

```
🌐 KẾT QUẢ — WEBSITE THỰC PHẨM SẠCH QUÊ HƯƠNG

┌─────────────────────┬─────────────────────┐
│   TRANG CHỦ         │   TRANG SẢN PHẨM    │
│   [Screenshot]      │   [Screenshot]      │
│   Banner + Slider   │   Grid 15 SP + giá  │
│   Menu Navigation   │   Filter danh mục   │
├─────────────────────┼─────────────────────┤
│   CHI TIẾT SP       │   GIỎ HÀNG &        │
│   [Screenshot]      │   THANH TOÁN        │
│   Ảnh + Giá + Mô tả │   [Screenshot]      │
│   "Thêm vào giỏ"    │   Form giao hàng    │
└─────────────────────┴─────────────────────┘
```

---

## SLIDE 10 — QUY TRÌNH ĐẶT HÀNG
**Layout:** Flowchart ngang 7 bước màu sắc

```
🛒 QUY TRÌNH ĐẶT HÀNG & THANH TOÁN

 [Xem SP] → [Thêm GH] → [Giỏ Hàng] → [Điền TT]
    🛍️           🛒           📋           ✍️
                                            ↓
 [Email XN] ← [Đặt Hàng] ← [Chọn TT] ← [Giao Hàng]
    📧              ✅          💳            🚚

 Thanh toán:
 ✅ Chuyển khoản: Vietcombank - 0123456789
 ✅ COD: Thanh toán khi nhận hàng
```

---

## SLIDE 11 — SAO LƯU & PHỤC HỒI
**Layout:** 2 cột Backup | Restore + Xshell screenshot

```
💾 SAO LƯU & PHỤC HỒI VỚI XSHELL / XFTP

┌──────────────────────┬──────────────────────┐
│   SAO LƯU (Backup)   │  PHỤC HỒI (Restore)  │
├──────────────────────┼──────────────────────┤
│ 1. Xshell → Server   │ 1. Xftp → Upload     │
│    SSH kết nối        │    file backup lên   │
│         ↓            │         ↓            │
│ 2. Chạy script:      │ 2. Xshell chạy:      │
│  bash backup.sh      │  bash restore.sh     │
│         ↓            │         ↓            │
│ 3. Tạo 2 file:       │ 3. Kết quả:          │
│  db_*.sql            │  DB phục hồi ✅      │
│  files_*.tar.gz      │  Files phục hồi ✅   │
│         ↓            │                      │
│ 4. Xftp → Download   │                      │
│    về D:\Backup\     │                      │
└──────────────────────┴──────────────────────┘

⏰ Tự động: Cron Job 2:00 AM mỗi ngày
```

---

## SLIDE 12 — KẾT LUẬN & HƯỚNG PHÁT TRIỂN
**Layout:** 2 cột màu xanh lá + xanh dương

```
🎯 KẾT LUẬN

┌──────────────────────┬──────────────────────┐
│   ✅ ĐẠT ĐƯỢC        │   🚀 PHÁT TRIỂN      │
├──────────────────────┼──────────────────────┤
│ ✅ LAMP trên Ubuntu  │ 🔒 HTTPS (SSL)        │
│ ✅ WordPress +       │ 💳 VNPay / MoMo       │
│    WooCommerce       │ ⚡ Cache tối ưu       │
│ ✅ 15 sản phẩm       │ 🛡️ Wordfence Security │
│    đặc sản Bến Tre   │ ☁️ VPS thực tế        │
│ ✅ Thanh toán        │ 📱 App di động        │
│    COD + CK Ngân hàng│                      │
│ ✅ Sao lưu tự động   │                      │
│    hàng ngày         │                      │
└──────────────────────┴──────────────────────┘

   "Ứng dụng thành công LAMP + WordPress
    xây dựng website thương mại điện tử
    bán đặc sản địa phương Bến Tre"
```

---

## SLIDE CUỐI — CẢM ƠN

```
🌴 XIN CẢM ƠN

   QUÝ THẦY CÔ VÀ CÁC BẠN ĐÃ LẮNG NGHE!

   ──────────────────────────────────────
   🌐 Website: http://thucpham.local
   👤 Thực hiện: [Tên sinh viên]
   📧 Email:     [email@example.com]
   ──────────────────────────────────────

   "Thực phẩm sạch — Hương vị quê hương
    Kết nối người dùng với đặc sản Bến Tre"
```

---

## 🎨 GỢI Ý THIẾT KẾ SLIDE

| Yếu tố | Gợi ý cụ thể |
|---|---|
| **Màu chủ đạo** | Xanh đậm `#1a3c5e` + Vàng lá dừa `#d4a017` |
| **Màu phụ** | Xanh lá `#2d7d46` + Trắng `#ffffff` |
| **Font tiêu đề** | **Montserrat Bold** cỡ 36–40pt |
| **Font nội dung** | Roboto Regular cỡ 18–22pt |
| **Hình nền** | Ảnh dừa Bến Tre mờ 15–20% opacity |
| **Icon** | Emoji hoặc tải tại Flaticon.com |
| **Công cụ** | PowerPoint / Google Slides / Canva.com |
| **Tổng slides** | 12 + 1 bìa + 1 cảm ơn = **14 slide** |
| **Thời gian** | 15–20 phút thuyết trình |

---

## 📌 THỨ TỰ NỘP BÀI

```
📁 Thư mục nộp:
   ├── 📄 BAO_CAO_THUCPHAM_BENTREE.docx   (Báo cáo Word)
   ├── 📊 SLIDE_THUYET_TRINH.pptx          (Slide PowerPoint)
   ├── 💻 install_lamp.sh                  (Script cài LAMP)
   ├── 💾 backup_restore.sh                (Script sao lưu)
   └── 📸 Screenshots/                     (Ảnh chụp màn hình)
```

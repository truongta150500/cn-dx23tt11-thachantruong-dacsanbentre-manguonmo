# ĐỒ ÁN CHUYÊN NGÀNH: XÂY DỰNG WEBSITE BÁN THỰC PHẨM CHẾ BIẾN ĐẶC SẢN BẾN TRE TRÊN MÁY CHỦ MÃ NGUỒN MỞ LAMP VÀ WORDPRESS
### (ỨNG DỤNG MÔ HÌNH BÁCH HÓA XANH & QUY TRÌNH SAO LƯU/PHỤC HỒI QUA XSHELL, XFTP)

---

## THÔNG TIN TÁC GIẢ & HỒ SƠ ĐỒ ÁN
* **Trường đào tạo:** Trường Đại học Trà Vinh (TVU)
* **Khoa:** Kỹ thuật và Công nghệ
* **Họ và tên sinh viên:** **THẠCH AN TRƯỜNG**
* **Mã số sinh viên (MSSV):** **170123678**
* **Số điện thoại liên hệ:** **0329886903**
* **Email liên hệ:** **truongta150500@sv-onuni.edu.vn**
* **Tên GitHub Repository chuẩn quy định:** `cn-da17tta-thachantruong-thucpham-bentree`

---

## 1. TỔNG QUAN ĐỀ TÀI
Đồ án xây dựng một hệ thống website thương mại điện tử chuyên cung cấp 15 mặt hàng thực phẩm chế biến đặc sản tỉnh Bến Tre (kẹo dừa sáp, nem chua lá ổi, bánh phồng tôm, mứt dừa non, cá khô Ba Tri...). Toàn bộ hệ thống được triển khai trên hạ tầng máy chủ mã nguồn mở LAMP Stack (Ubuntu 22.04 LTS, Apache 2.4, MySQL 8.0, PHP 8.1) kết hợp CMS WordPress 6.8 & WooCommerce 9.8.5.

### Điểm nổi bật của đồ án:
1. **Giao diện Bách Hóa Xanh:** Nhận diện xanh lá (#008848), giỏ vàng (#FCD535), khối Flash Sale đếm ngược thời gian thực, nút "CHỌN MUA +" nhanh chóng.
2. **Dữ liệu thực tế OCOP:** Đầy đủ 15 sản phẩm thực tế, có đóng dấu tem OCOP Bến Tre, minh bạch xuất xứ làng nghề truyền thống.
3. **Thanh toán COD & Ngân hàng:** Cấu hình đơn vị tiền tệ VNĐ chuẩn xác, phương thức nhận hàng trả tiền mặt (COD) tối ưu cho người Việt.
4. **Sao lưu & Phục hồi thảm họa tự động:** Kịch bản shell script `backup.sh` và `restore.sh` quản trị qua Xshell 7 (SSH cổng 2222) và truyền tệp ngoại vi an toàn qua Xftp 7 (SFTP), khôi phục thảm họa < 15 giây.

---

## 2. CẤU TRÚC CÂY THƯ MỤC REPOSITORY (THEO QUY ĐỊNH MỤC 4.3)

```
.
├── README.md                      # [Bắt buộc] Hướng dẫn tổng thể & Thông tin liên lạc tác giả
├── setup/                         # Chứa các tập tin cài đặt, kịch bản & CSDL thử nghiệm
│   ├── setup_lamp.sh              # Kịch bản cài đặt tự động LAMP Stack trên Ubuntu 22.04 LTS
│   ├── backup.sh                  # Kịch bản sao lưu CSDL và mã nguồn web
│   ├── restore.sh                 # Kịch bản phục hồi thảm họa tự động < 15 giây
│   ├── db_thucpham_bentree.sql    # Bản CSDL đầy đủ 15 sản phẩm OCOP & cấu hình hệ thống
│   └── HUONG_DAN_CAI_DAT_VA_TRIEN_KHAI.md # Sơ đồ triển khai và hướng dẫn setup chi tiết
├── scr/                           # Chứa mã nguồn, child theme và dữ liệu thử nghiệm
│   ├── custom-theme/              # Giao diện Child Theme Bách Hóa Xanh (style.css, functions.php)
│   ├── du_lieu_15_san_pham_ocop.json # Dữ liệu cấu trúc 15 sản phẩm OCOP
│   └── hinh_anh_giao_dien/        # 10 hình ảnh chụp màn hình thực tế hệ thống
├── progress-report/               # [Bắt buộc] Chứa báo cáo tiến độ thực tập hàng tuần
│   ├── Bao_Cao_Tien_Do_Tuan_01.md # Tuần 1: Khảo sát đề tài & Khởi tạo GitHub repo
│   ├── Bao_Cao_Tien_Do_Tuan_02.md # Tuần 2: Cài đặt máy chủ LAMP Stack
│   ├── Bao_Cao_Tien_Do_Tuan_03.md # Tuần 3: Triển khai WordPress & WooCommerce
│   ├── Bao_Cao_Tien_Do_Tuan_04.md # Tuần 4: Thiết kế giao diện Bách Hóa Xanh
│   ├── Bao_Cao_Tien_Do_Tuan_05.md # Tuần 5: Chuẩn hóa 15 sản phẩm OCOP
│   ├── Bao_Cao_Tien_Do_Tuan_06.md # Tuần 6: Hoàn thiện giỏ hàng & Thanh toán COD
│   ├── Bao_Cao_Tien_Do_Tuan_07.md # Tuần 7: Sao lưu & Phục hồi qua Xshell, Xftp
│   └── Bao_Cao_Tien_Do_Tuan_08.md # Tuần 8: Hoàn thành Báo cáo Word & Slide PPTX
├── thesis/                        # [Bắt buộc] Chứa tài liệu văn bản của Đồ án
│   ├── doc/                       # Chứa tài liệu báo cáo dạng Word (.DOCX)
│   │   ├── 265b35aca84ef16af3f71d878fd91f488bc99f03.docx # Báo cáo Word chuẩn của trường
│   │   └── BAO_CAO_DO_AN_THUCPHAM_BENTRE.docx
│   ├── pdf/                       # Chứa tài liệu báo cáo dạng PDF (.PDF)
│   │   └── BAO_CAO_DO_AN_THUCPHAM_BENTRE.pdf
│   ├── html/                      # Chứa tài liệu báo cáo dạng Web (.HTML)
│   │   └── index.html             # Bản báo cáo trực tuyến chuẩn đẹp
│   ├── abs/                       # Chứa báo cáo thuyết trình (.PPTX) và Tóm tắt
│   │   ├── SLIDE_THUYET_TRINH_DO_AN.pptx # 20 slide thuyết trình có hiệu ứng đồ họa
│   │   └── TOM_TAT_DO_AN.md       # Bản tóm tắt đồ án tiếng Việt & tiếng Anh
│   └── refs/                      # Chứa tài liệu tham khảo theo quy ước chuẩn IEEE
│       └── TAI_LIEU_THAM_KHAO.md
├── soft/                          # [Nếu có] Hướng dẫn phần mềm liên quan (Xshell, Xftp, VirtualBox)
│   └── HUONG_DAN_CAI_DAT_PHAN_MEM.md
└── docker/                        # [Nếu có] Triển khai nhanh ứng dụng trên Docker
    ├── Dockerfile
    ├── docker-compose.yml
    └── README.md
```

---

## 3. HƯỚNG DẪN CÀI ĐẶT & CHẠY LẠI CHƯƠNG TRÌNH

### Cách 1: Triển khai trên máy chủ LAMP Stack (Khuyến nghị)
1. Cài đặt Ubuntu Server 22.04 LTS trên VirtualBox. Cấu hình NAT Port Forwarding:
   * Port 8080 (Host) trỏ về Port 80 (Guest)
   * Port 2222 (Host) trỏ về Port 22 (Guest)
2. Truy cập SSH vào máy ảo qua Xshell: `ssh bentre@127.0.0.1 -p 2222`
3. Chạy kịch bản cài đặt tự động trong thư mục `setup/`:
   ```bash
   sudo bash setup/setup_lamp.sh
   mysql -u bentre_user -pBentre@2026! thucpham_bentree < setup/db_thucpham_bentree.sql
   ```
4. Mở trình duyệt truy cập: `http://localhost:8080/`

### Cách 2: Triển khai 1 chạm với Docker Compose
```bash
cd docker
docker compose up -d
```
Truy cập: `http://localhost:8080/`

---

## 4. HƯỚNG DẪN THỰC THI SAO LƯU & PHỤC HỒI QUA XSHELL / XFTP
1. **Sao lưu (Backup):** Chạy `bash /home/bentre/backup.sh` -> Tạo ra tệp `db_*.sql` và `files_*.tar.gz`.
2. **Lưu trữ ngoại vi qua Xftp:** Mở Xftp 7 kết nối port 2222 -> Kéo thả 2 tệp sao lưu về máy tính Windows.
3. **Phục hồi thảm họa (Restore):** Khi máy chủ gặp sự cố, chạy `bash /home/bentre/restore.sh` -> Hệ thống tự động khôi phục hoàn chỉnh trong vòng **15 giây**!

---

## 5. LIÊN HỆ TÁC GIẢ
* **Sinh viên:** Thạch An Trường
* **Điện thoại:** 0329886903
* **Email:** truongta150500@sv-onuni.edu.vn
* **Khoa Kỹ thuật và Công nghệ - Trường Đại học Trà Vinh**

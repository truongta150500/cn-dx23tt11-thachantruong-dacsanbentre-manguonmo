# ĐỒ ÁN CHUYÊN NGÀNH: XÂY DỰNG WEBSITE BÁN THỰC PHẨM CHẾ BIẾN ĐẶC SẢN TRÊN NỀN TẢNG MÃ NGUỒN MỞ LAMP VÀ WORDPRESS
### (ỨNG DỤNG MÔ HÌNH BÁCH HÓA XANH & SAO LƯU/PHỤC HỒI QUA XSHELL, XFTP)

---

## THÔNG TIN SINH VIÊN THỰC HIỆN
* **Trường đào tạo:** Trường Đại học Trà Vinh
* **Khoa:** Kỹ thuật và Công nghệ
* **Họ và tên:** **THẠCH AN TRƯỜNG**
* **Mã số sinh viên (MSSV):** **170123678**
* **Số điện thoại:** **0329886903**
* **Email:** **truongta150500@sv-onuni.edu.vn**
* **Lớp:** **DX23TT11**
* **GitHub Repository:** `cn-dx23tt11-thachantruong-dacsanbentre-manguonmo`
* **Giảng viên hướng dẫn:** Thầy Nguyễn Hoàng Duy Thiện (Email: thiennhd@tvu.edu.vn | GitHub: @thiennhd)

---

## NỘI DUNG VÀ MỤC TIÊU CỐT LÕI CỦA ĐỒ ÁN

Đồ án được thực hiện đầy đủ theo đúng 6 nội dung yêu cầu của đề tài:

1. **Tìm hiểu và cài đặt máy chủ ảo mã nguồn mở và các dịch vụ cần thiết theo mô hình LAMP:**
   - Hệ điều hành: Linux Ubuntu Server 22.04 LTS (chạy trên môi trường ảo hóa VirtualBox, mạng NAT Port Forwarding: Port 8080 cho Web, Port 2222 cho SSH/SFTP).
   - Máy chủ Web: Apache 2.4 (kích hoạt mô-đun mod_rewrite, VirtualHost).
   - Cơ sở dữ liệu: MySQL Server 8.0 (CSDL `thucpham_bentree`, phân quyền người dùng).
   - Trình thông dịch: PHP 8.1 cùng các extension `php-mysql`, `php-gd`, `php-curl`, `php-zip`, `php-mbstring`.

2. **Tìm hiểu CMS WordPress, mô tả các ưu khuyết điểm, tính năng, các bước cài đặt, vận hành:**
   - Đánh giá chi tiết ưu điểm (mã nguồn mở miễn phí, cộng đồng lớn, kho plugin WooCommerce mạnh mẽ, dễ quản trị) và khuyết điểm (cần tối ưu bảo mật và tài nguyên).
   - Triển khai WordPress 6.8 tiếng Việt và vận hành thực tế.

3. **Thu thập số liệu 10-15 sản phẩm thực phẩm chế biến tại địa phương:**
   - Thu thập 15 sản phẩm thực phẩm chế biến đặc sản (bánh, kẹo, mứt sấy, thủy sản khô: Kẹo dừa sáp, Nem chua lá ổi, Bánh phồng tôm Sơn Đốc, Bánh tráng sữa, Mứt dừa non, Tôm khô Ba Tri...).
   - Đầy đủ thông tin: Tên sản phẩm, hình ảnh thực tế tỉ lệ 1:1, phân loại ngành hàng, giá cả niêm yết, xuất xứ làng nghề truyền thống và chứng nhận OCOP.

4. **Cài đặt CMS WordPress lên máy chủ ảo, xây dựng Website bán thực phẩm chế biến, minh họa đặt hàng, thanh toán:**
   - Xây dựng giao diện phong cách siêu thị Bách Hóa Xanh: Header xanh lá (#008848), giỏ vàng (#FCD535), khối Flash Sale đếm ngược.
   - Minh họa quy trình khách hàng xem sản phẩm, chọn mua, giỏ hàng AJAX, điền form nhận hàng tại Việt Nam và thanh toán COD (nhận hàng trả tiền mặt) hoặc chuyển khoản.

5. **Thực hiện sao lưu và phục hồi Website, cơ sở dữ liệu qua các công cụ Xshell, Xftp:**
   - Kịch bản `backup.sh`: Trích xuất CSDL bằng `mysqldump` và nén mã nguồn web bằng `tar`.
   - Kịch bản `restore.sh`: Tự động nạp lại CSDL, giải nén mã nguồn, phân quyền và kiểm tra HTTP 200 OK (< 15 giây).
   - Kết nối dòng lệnh từ xa (CLI) bằng **Xshell 7** qua cổng SSH 2222.
   - Truyền tải tệp tin sao lưu ngoại vi an toàn (GUI) bằng **Xftp 7** qua cổng SFTP 2222.

6. **Viết báo cáo và thiết kế slide thuyết trình:**
   - Quyển Báo cáo Đồ án chuẩn mẫu quy định của trường (30+ trang, mục lục động TOC/TOF).
   - Bộ Slide thuyết trình PowerPoint 20 trang với hiệu ứng đồ họa, đổ bóng và đầy đủ hình ảnh minh họa.

---

## CẤU TRÚC THƯ MỤC TRÊN GITHUB (CHUẨN MỤC 4.3)

```
.
├── README.md                      # [Bắt buộc] Hướng dẫn tổng quan & Thông tin liên lạc tác giả
├── setup/                         # [Bắt buộc] Kịch bản cài đặt, sơ đồ triển khai & CSDL mẫu
│   ├── setup_lamp.sh              # Kịch bản cài đặt LAMP Stack trên Ubuntu Server 22.04 LTS
│   ├── backup.sh                  # Kịch bản sao lưu CSDL và mã nguồn
│   ├── restore.sh                 # Kịch bản phục hồi thảm họa tự động (< 15 giây)
│   ├── db_thucpham_bentree.sql    # CSDL mẫu đầy đủ 15 sản phẩm thực phẩm chế biến
│   └── HUONG_DAN_CAI_DAT_VA_TRIEN_KHAI.md # Sơ đồ triển khai và hướng dẫn vận hành chi tiết
├── scr/                           # [Bắt buộc] Mã nguồn, theme và dữ liệu thử nghiệm
│   ├── custom-theme/              # Giao diện Child Theme Bách Hóa Xanh (style.css, functions.php)
│   ├── du_lieu_15_san_pham_ocop.json # Số liệu 15 sản phẩm bánh kẹo đặc sản
│   └── hinh_anh_giao_dien/        # Bộ ảnh chụp màn hình minh họa hệ thống
├── progress-report/               # [Bắt buộc] Báo cáo tiến độ hàng tuần (Tuần 1 -> Tuần 8)
│   ├── Bao_Cao_Tien_Do_Tuan_01.md # Khảo sát đề tài & Khởi tạo GitHub repo
│   ├── Bao_Cao_Tien_Do_Tuan_02.md # Cài đặt máy chủ LAMP Stack
│   ├── Bao_Cao_Tien_Do_Tuan_03.md # Tìm hiểu WordPress & Cài đặt WooCommerce
│   ├── Bao_Cao_Tien_Do_Tuan_04.md # Thiết kế giao diện Bách Hóa Xanh
│   ├── Bao_Cao_Tien_Do_Tuan_05.md # Thu thập số liệu 15 sản phẩm bánh kẹo
│   ├── Bao_Cao_Tien_Do_Tuan_06.md # Hoàn thiện giỏ hàng & Đặt hàng, thanh toán COD
│   ├── Bao_Cao_Tien_Do_Tuan_07.md # Sao lưu & Phục hồi qua Xshell, Xftp
│   └── Bao_Cao_Tien_Do_Tuan_08.md # Hoàn thành Báo cáo Word & Slide thuyết trình
├── thesis/                        # [Bắt buộc] Tài liệu văn bản của Đồ án
│   ├── doc/                       # Quyển Báo cáo Đồ án dạng Word (.DOCX)
│   │   ├── 265b35aca84ef16af3f71d878fd91f488bc99f03.docx
│   │   └── BAO_CAO_DO_AN_THUCPHAM_BENTRE.docx
│   ├── pdf/                       # Quyển Báo cáo Đồ án dạng in (.PDF)
│   │   └── BAO_CAO_DO_AN_THUCPHAM_BENTRE.pdf
│   ├── html/                      # Báo cáo Đồ án dạng Web (.HTML)
│   │   └── index.html
│   ├── abs/                       # Slide thuyết trình (.PPTX) & Bản Tóm tắt đồ án
│   │   ├── SLIDE_THUYET_TRINH_DO_AN.pptx
│   │   └── TOM_TAT_DO_AN.md
│   └── refs/                      # Danh mục tài liệu tham khảo chuẩn IEEE
│       └── TAI_LIEU_THAM_KHAO.md
└── soft/                          # Hướng dẫn phần mềm Xshell 7, Xftp 7, VirtualBox
    └── HUONG_DAN_CAI_DAT_PHAN_MEM.md
```

---

## HƯỚNG DẪN CÀI ĐẶT & CHẠY LẠI CHƯƠNG TRÌNH

1. **Khởi động máy ảo Ubuntu Server 22.04 LTS trên VirtualBox:**
   - Cấu hình NAT Port: Host `8080` -> Guest `80` | Host `2222` -> Guest `22`.
2. **Cài đặt dịch vụ LAMP tự động:**
   ```bash
   sudo bash setup/setup_lamp.sh
   mysql -u bentre_user -pBentre@2026! thucpham_bentree < setup/db_thucpham_bentree.sql
   ```
3. **Truy cập Website:**
   - Trình duyệt: `http://localhost:8080/` (hoặc `http://localhost:8080/thucpham/`)
4. **Vận hành Sao lưu & Phục hồi:**
   - Sao lưu: `bash setup/backup.sh`
   - Phục hồi: `bash setup/restore.sh`

---

## THÔNG TIN LIÊN HỆ
* **Sinh viên:** Thạch An Trường - MSSV: 170123678
* **Điện thoại:** 0329886903 | **Email:** truongta150500@sv-onuni.edu.vn
* **Khoa Kỹ thuật và Công nghệ - Trường Đại học Trà Vinh**

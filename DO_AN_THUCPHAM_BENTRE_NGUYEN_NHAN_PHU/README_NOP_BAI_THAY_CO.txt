========================================================================================
BỘ GIÁO DỤC VÀ ĐÀO TẠO - KHOA CÔNG NGHỆ THÔNG TIN
BÁO CÁO ĐỒ ÁN MÔN HỌC: PHẦN MỀM MÃ NGUỒN MỞ (OPEN SOURCE SOFTWARE)
========================================================================================

ĐỀ TÀI:
XÂY DỰNG WEBSITE BÁN THỰC PHẨM CHẾ BIẾN ĐẶC SẢN BẾN TRE TRÊN NỀN TẢNG
MÃ NGUỒN MỞ LAMP STACK VÀ CMS WORDPRESS (PHONG CÁCH BÁCH HÓA XANH)
THỰC HIỆN SAO LƯU VÀ PHỤC HỒI QUA XSHELL, XFTP

Sinh viên thực hiện : NGUYỄN NHÂN PHÚ
Năm thực hiện       : 2026

----------------------------------------------------------------------------------------
CẤU TRÚC GÓI HỒ SƠ NỘP BÀI:
----------------------------------------------------------------------------------------
Thư mục bài nộp gồm có 4 phần chính:

1. Thư mục: 01_BAO_CAO_THUC_TAP_DO_AN/
   - BAO_CAO_DO_AN_THUCPHAM_BENTRE.docx : Bản Word hoàn chỉnh (~20 trang), đầy đủ bìa,
     mục lục, 7 chương nội dung và đã chèn sẵn toàn bộ 10 ảnh giao diện chất lượng cao.
   - BAO_CAO_DO_AN_THUCPHAM_BENTRE.md   : Bản Markdown nguồn.

2. Thư mục: 02_SLIDE_THUYET_TRINH_BAO_VE/
   - SLIDE_THUYET_TRINH_DO_AN.pptx      : Bản PowerPoint 14 slide chuẩn 16:9, tone màu
     Bách Hóa Xanh, có chèn sẵn ảnh từng giao diện và kịch bản thuyết trình (Speaker Notes).
   - SLIDE_THUYET_TRINH_DO_AN.md        : Bản Marp Markdown nguồn.

3. Thư mục: 03_SAO_LUU_VA_PHUC_HOI_XSHELL_XFTP/
   - db_thucpham_20260914_092100.sql    : Bản sao lưu CSDL MySQL sạch chứa 15 sản phẩm,
     cấu hình WooCommerce và giao diện Bách Hóa Xanh (1.4 MB).
   - files_thucpham_20260914_092100.tar.gz : Bản nén toàn bộ mã nguồn WordPress (/var/www/html/thucpham - 70 MB).
   - backup.sh                          : Kịch bản bash tự động sao lưu trên máy chủ Linux.
   - restore.sh                         : Kịch bản bash tự động khôi phục thảm họa (Disaster Recovery).
   - HUONG_DAN_SU_DUNG_XSHELL_XFTP.txt  : Hướng dẫn chi tiết từng câu lệnh và thao tác kéo thả file.

4. Thư mục: 04_HINH_ANH_GIAO_DIEN_MINH_HOA/
   - 01_trang_chu_bhx.png               : Giao diện Trang chủ Bách Hóa Xanh (Header xanh, Sale đỏ, Giỏ vàng).
   - 02_cua_hang_san_pham.png           : Giao diện Cửa hàng 15 sản phẩm OCOP Bến Tre.
   - 05_gio_hang_co_san_pham.png        : Giao diện Giỏ hàng (Cart).
   - 06_thanh_toan_dien_form.png        : Giao diện Thanh toán & Điền thông tin COD (Checkout).
   - 07_chi_tiet_nem_chua.png           : Giao diện Trang chi tiết sản phẩm & xuất xứ làng nghề.
   - 08_quan_tri_dashboard.png          : Bảng điều khiển Quản trị WordPress Dashboard.
   - 09_quan_tri_danh_sach_san_pham.png : Quản lý 15 sản phẩm trong Admin WooCommerce.
   - 10_quan_tri_don_hang.png           : Quản lý đơn hàng trực tuyến thời gian thực.
   - 11_xshell_sao_luu_phuc_hoi.png     : Màn hình thao tác dòng lệnh Xshell (CLI).
   - 12_xftp_truyen_file_sftp.png       : Màn hình thao tác truyền tệp SFTP Xftp (GUI).

----------------------------------------------------------------------------------------
THÔNG TIN TRUY CẬP VÀ MÔI TRƯỜNG MÁY CHỦ:
----------------------------------------------------------------------------------------
- Máy chủ ảo     : VirtualBox VM "Ubuntu-LAMP-BenTre" (Ubuntu 22.04 LTS, Apache 2.4, MySQL 8.0, PHP 8.1)
- Truy cập Web   : http://localhost:8080/thucpham/
- Quản trị Web   : http://localhost:8080/thucpham/wp-admin/
  * Tài khoản    : admin
  * Mật khẩu     : Admin@2026
- Kết nối SSH/SFTP (Xshell / Xftp):
  * Host         : 127.0.0.1
  * Port         : 2222
  * Username     : bentre
  * Password     : Admin@2026
- CSDL MySQL:
  * Database     : thucpham_bentree
  * DB User      : wp_bentree (Mật khẩu: BenTre@2026)
  * DB Root      : root (Mật khẩu: RootAdmin@2026)

========================================================================================

---
marp: true
theme: default
paginate: true
header: "Đồ Án: Website TMĐT Thực Phẩm Chế Biến Bến Tre (LAMP Stack & Bách Hóa Xanh)"
footer: "Báo Cáo Đồ Án Chuyên Đề Mã Nguồn Mở | 2026"
style: |
  section {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 30px 45px;
  }
  h1 {
    color: #008848;
  }
  h2 {
    color: #008848;
    border-bottom: 2px solid #fcd535;
    padding-bottom: 6px;
    margin-bottom: 15px;
  }
  .highlight {
    color: #ea1e25;
    font-weight: bold;
  }
  .badge {
    background-color: #008848;
    color: white;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.85em;
  }
  table {
    font-size: 0.72em;
    width: 100%;
  }
  th {
    background-color: #008848;
    color: white;
  }
  img {
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
---

# BÁO CÁO ĐỒ ÁN CHUYÊN ĐỀ
## XÂY DỰNG WEBSITE BÁN THỰC PHẨM CHẾ BIẾN TRÊN NỀN TẢNG MÃ NGUỒN MỞ (LAMP STACK)
### PHONG CÁCH GIAO DIỆN BÁCH HÓA XANH & VẬN HÀNH SAO LƯU/PHỤC HỒI QUA XSHELL, XFTP

* **Sinh viên thực hiện:** THẠCH AN TRƯỜNG
* **Mã số sinh viên:** 170123678
* **Số điện thoại:** 0329886903
* **Email:** truongta150500@sv-onuni.edu.vn
* **Trường:** Đại học Trà Vinh - Khoa Kỹ thuật & Công nghệ
* **Chuyên ngành:** Công nghệ Thông tin / Phần Mềm Mã Nguồn Mở
* **Nền tảng triển khai:** Ubuntu Server 22.04 LTS + Apache + MySQL + PHP + WordPress
* **Năm thực hiện:** 2026

---

## NỘI DUNG BÁO CÁO (AGENDA)

1. **Tổng quan đề tài & Kiến trúc hạ tầng LAMP Stack**
2. **Hệ quản trị CMS WordPress & Giải pháp WooCommerce**
3. **Danh mục 15 Sản phẩm Thực phẩm chế biến OCOP Bến Tre**
4. **GIỚI THIỆU CHI TIẾT TỪNG GIAO DIỆN HỆ THỐNG (UI SHOWCASE):**
   * *Giao diện Trang chủ chuẩn Bách Hóa Xanh*
   * *Giao diện Cửa hàng & Danh mục Ngành hàng*
   * *Giao diện Trang Chi tiết Sản phẩm & Tem OCOP*
   * *Giao diện Giỏ hàng & Điền thông tin Thanh toán COD*
   * *Giao diện Quản trị WordPress Dashboard & Đơn hàng*
   * *Giao diện Dòng lệnh Xshell (CLI Backup/Restore)*
   * *Giao diện Truyền tệp SFTP Xftp (GUI File Sync)*
5. **Quy trình Sao lưu & Phục hồi Thảm họa (Disaster Recovery)**
6. **Kết luận, Đánh giá & Hướng phát triển**

---

## 1. KIẾN TRÚC HẠ TẦNG MÃ NGUỒN MỞ (LAMP STACK)

```
+-------------------------------------------------------------------------+
| Client / Admin Workstation (Windows 11)                                 |
| - Chrome/Edge: http://localhost:8080/thucpham/                          |
| - Xshell 7 (SSH 2222)   |   Xftp 7 (SFTP 2222)                          |
+------------------------------------+------------------------------------+
                                     | NAT Port Forwarding (8080, 2222)
+------------------------------------v------------------------------------+
| Máy chủ ảo VirtualBox (Ubuntu Server 22.04 LTS - Headless)              |
| [L] Ubuntu 22.04 LTS - Kernel 5.15 bảo mật, ổn định                     |
| [A] Apache 2.4.52 - Xử lý điều hướng URL (mod_rewrite)                  |
| [M] MySQL 8.0.36 - Cơ sở dữ liệu quan hệ lưu trữ dữ liệu bán hàng      |
| [P] PHP 8.1.2 - Xử lý logic nghiệp vụ và kết nối CSDL                   |
| ----------------------------------------------------------------------- |
| CMS WordPress 6.8 + WooCommerce 9.8.5 + Astra Theme tùy biến BHX       |
+-------------------------------------------------------------------------+
```

<!--
SPEAKER NOTES:
Em xin trình bày về kiến trúc hạ tầng: Hệ thống được xây dựng trên máy chủ ảo hóa Ubuntu 22.04 LTS không GUI, giúp tiết kiệm tối đa tài nguyên và tăng độ ổn định. Cổng 8080 được NAT cho Web Apache và cổng 2222 được NAT cho dịch vụ OpenSSH.
-->

---

## 2. GIAO DIỆN TRANG CHỦ BÁCH HÓA XANH

![bg right:60% 95%](C:/Users/Admin/.gemini/antigravity/brain/5b5a3b16-c302-4446-a60e-5845fcb785ed/hinh_anh_giao_dien/01_trang_chu_bhx.png)

### Đặc điểm thiết kế nổi bật:
* **Màu sắc chủ đạo:** Xanh lá siêu thị (`#008848`), Nút Giỏ hàng vàng chanh (`#fcd535`), Khối Sale đỏ rực (`#ea1e25`).
* **Header thông minh:** Logo nổi bật, Ô tìm kiếm trung tâm lớn, Giỏ hàng hiển thị tiền & số lượng tức thời.
* **Ngành hàng (Category Chips):** 4 thẻ chọn nhanh bo tròn có biểu tượng trực quan.
* **Banner Flash Sale "Giờ Vàng Giá Sốc":** Đồng hồ đếm ngược thời gian thực kích thích chuyển đổi.
* **Lưới sản phẩm 4 cột:** Nút **`CHỌN MUA +`** màu xanh lá thao tác cực nhanh.

<!--
SPEAKER NOTES:
Đây là giao diện trang chủ được thiết kế hoàn toàn theo quy chuẩn của Bách Hóa Xanh. Các khối Flash Sale, đồng hồ đếm ngược và nút Chọn Mua màu xanh giúp người tiêu dùng có trải nghiệm mua sắm quen thuộc, tiện lợi nhất.
-->

---

## 3. GIAO DIỆN CỬA HÀNG & 15 SẢN PHẨM OCOP

![bg right:60% 95%](C:/Users/Admin/.gemini/antigravity/brain/5b5a3b16-c302-4446-a60e-5845fcb785ed/hinh_anh_giao_dien/02_cua_hang_san_pham.png)

### Quản lý danh mục khoa học:
* **Số lượng:** 15 sản phẩm đặc sản chế biến OCOP Bến Tre (Bánh tráng Mỹ Lồng, Bánh phồng Sơn Đốc, Kẹo dừa, Mứt dừa non, Tôm khô Cù Lao...).
* **Hình ảnh sắc nét:** Tỉ lệ vuông 1:1, ảnh thực phẩm thực tế bắt mắt, gắn tem OCOP Bến Tre.
* **Bộ lọc & Sắp xếp:** Dễ dàng tìm theo mức độ phổ biến, đánh giá cao, giá tăng/giảm dần.
* **Huy hiệu giảm giá:** Tem SALE đỏ góc trên thu hút sự chú ý.

<!--
SPEAKER NOTES:
Tại trang Cửa Hàng, toàn bộ 15 sản phẩm đặc sản chế biến của Bến Tre được phân bổ theo lưới cân đối, mỗi sản phẩm đều có gắn tem chứng nhận OCOP địa phương và hiển thị rõ mức giá khuyến mãi.
-->

---

## 4. GIAO DIỆN CHI TIẾT SẢN PHẨM

![bg right:60% 95%](C:/Users/Admin/.gemini/antigravity/brain/5b5a3b16-c302-4446-a60e-5845fcb785ed/hinh_anh_giao_dien/07_chi_tiet_nem_chua.png)

### Trải nghiệm sản phẩm chuyên sâu:
* **Ảnh zoom lớn:** Người mua quan sát rõ chất lượng thực phẩm và quy cách bao bì.
* **Thông tin minh bạch:**
  * Giá khuyến mãi màu đỏ kèm giá gốc gạch ngang.
  * Xuất xứ làng nghề truyền thống Bến Tre.
  * Chứng nhận vệ sinh an toàn thực phẩm.
* **Tương tác trực tiếp:** Tùy chỉnh số lượng mua, bấm **THÊM VÀO GIỎ HÀNG** tức thời.
* **Tabs chi tiết:** Thành phần, hạn sử dụng, hướng dẫn bảo quản và đánh giá của khách hàng.

<!--
SPEAKER NOTES:
Trang chi tiết sản phẩm cung cấp đầy đủ thông tin về làng nghề, thành phần, hạn sử dụng và hướng dẫn bảo quản, giúp người tiêu dùng an tâm tuyệt đối khi đặt mua đặc sản trực tuyến.
-->

---

## 5. GIAO DIỆN GIỎ HÀNG (SHOPPING CART)

![bg right:60% 95%](C:/Users/Admin/.gemini/antigravity/brain/5b5a3b16-c302-4446-a60e-5845fcb785ed/hinh_anh_giao_dien/05_gio_hang_co_san_pham.png)

### Tiện ích giỏ hàng hiện đại:
* **Bảng chi tiết rõ ràng:** Hình thu nhỏ, tên sản phẩm, đơn giá, ô cập nhật số lượng và tổng phụ.
* **Xóa & Cập nhật:** Khách hàng có thể tăng giảm số lượng hoặc loại bỏ sản phẩm chỉ với 1 click.
* **Mã giảm giá (Coupon):** Tích hợp khung áp dụng voucher khuyến mãi theo đợt.
* **Bảng tổng kết (Cart Totals):** Tự động tính phí vận chuyển và tổng tiền cần thanh toán.
* **Nút bấm hành động:** Nút "Tiến hành thanh toán" màu xanh nổi bật.

<!--
SPEAKER NOTES:
Giỏ hàng được thiết kế tinh gọn, hiển thị đầy đủ tổng tiền, hỗ trợ mã giảm giá và tính toán phí vận chuyển tự động trước khi bước vào khâu thanh toán.
-->

---

## 6. GIAO DIỆN THANH TOÁN (CHECKOUT COD)

![bg right:60% 95%](C:/Users/Admin/.gemini/antigravity/brain/5b5a3b16-c302-4446-a60e-5845fcb785ed/hinh_anh_giao_dien/06_thanh_toan_dien_form.png)

### Quy trình thanh toán nhanh chóng:
* **Biểu mẫu thông tin giao hàng:**
  * Họ tên, Số điện thoại người nhận tại Việt Nam.
  * Tỉnh / Thành phố, Địa chỉ chi tiết nhận hàng.
  * Ghi chú đơn hàng cho nhân viên giao vận.
* **Phương thức thanh toán linh hoạt:**
  * **COD (Cash on Delivery):** Thanh toán tiền mặt khi nhận hàng tận nhà.
  * **BACS:** Chuyển khoản qua ngân hàng Vietcombank.
* **Bảo mật & Xác nhận:** Kiểm tra lại giỏ hàng và nhấn **ĐẶT HÀNG** để hoàn tất đơn.

<!--
SPEAKER NOTES:
Quy trình thanh toán được tối giản theo văn hóa mua sắm Việt Nam, đặc biệt hỗ trợ phương thức COD giúp khách hàng yên tâm nhận hàng kiểm tra rồi mới thanh toán.
-->

---

## 7. GIAO DIỆN QUẢN TRỊ ADMIN DASHBOARD

![bg right:60% 95%](C:/Users/Admin/.gemini/antigravity/brain/5b5a3b16-c302-4446-a60e-5845fcb785ed/hinh_anh_giao_dien/08_quan_tri_dashboard.png)

### Trung tâm điều hành Website:
* **Bảng tổng quan WordPress 6.8:** Giám sát trạng thái máy chủ Apache 2.4, PHP 8.1 và MySQL.
* **Menu nghiệp vụ chuyên nghiệp:**
  * Quản lý sản phẩm, danh mục, kho hàng.
  * Quản trị đơn hàng WooCommerce.
  * Báo cáo doanh thu, lượt truy cập.
  * Tùy biến giao diện (Astra Child Theme).
* **Phân quyền bảo mật:** Đăng nhập an toàn với tài khoản Administrator.

<!--
SPEAKER NOTES:
Giao diện quản trị Admin giúp chủ cửa hàng dễ dàng theo dõi toàn diện hệ thống, từ tình trạng máy chủ cho đến quản lý danh mục sản phẩm và trạng thái kho hàng.
-->

---

## 8. GIAO DIỆN QUẢN LÝ ĐƠN HÀNG WOOCOMMERCE

![bg right:60% 95%](C:/Users/Admin/.gemini/antigravity/brain/5b5a3b16-c302-4446-a60e-5845fcb785ed/hinh_anh_giao_dien/10_quan_tri_don_hang.png)

### Xử lý đơn hàng trực tuyến theo thời gian thực:
* **Danh sách đơn hàng:** Hiển thị mã đơn (#ID), tên khách hàng, ngày giờ đặt, phương thức COD và tổng tiền.
* **Vòng đời trạng thái đơn hàng (Order Lifecycle):**
  * `Tạm giữ` (On-hold) $\rightarrow$ `Đang xử lý` (Processing) $\rightarrow$ `Đã hoàn thành` (Completed).
* **Chi tiết đơn & Xuất phiếu:** Xem địa chỉ giao nhận, ghi chú khách hàng và in phiếu đóng gói.

<!--
SPEAKER NOTES:
Khi khách hàng bấm Đặt hàng ngoài website, đơn hàng lập tức được ghi nhận vào bảng Quản lý Đơn hàng để nhân viên xử lý đóng gói và giao hàng.
-->

---

## 9. GIAO DIỆN SAO LƯU & PHỤC HỒI QUA XSHELL (CLI)

![bg right:60% 95%](C:/Users/Admin/.gemini/antigravity/brain/5b5a3b16-c302-4446-a60e-5845fcb785ed/hinh_anh_giao_dien/11_xshell_sao_luu_phuc_hoi.png)

### Tự động hóa quản trị qua dòng lệnh:
* **Kết nối SSH bảo mật:** `ssh bentre@127.0.0.1 -p 2222`.
* **Sao lưu tự động:** `bash /home/bentre/backup.sh`
  * Xuất CSDL: `mysqldump` xuất `db_thucpham_*.sql` (1.4 MB).
  * Đóng gói mã nguồn: `tar -czf` xuất `files_thucpham_*.tar.gz` (70 MB).
* **Phục hồi thảm họa tức thì:** `bash /home/bentre/restore.sh`
  * Tái tạo DB sạch, import SQL, xả nén web, phân quyền `www-data`, khởi động lại Apache trong **< 15 giây** (HTTP 200 OK).

<!--
SPEAKER NOTES:
Đây là màn hình Xshell thực tế em đã thực hiện: Kịch bản backup.sh và restore.sh giúp toàn bộ quá trình sao lưu và phục hồi thảm họa diễn ra tự động 100%, không bị phụ thuộc vào thao tác thủ công.
-->

---

## 10. GIAO DIỆN TRUYỀN TỆP QUA XFTP (GUI SFTP)

![bg right:60% 95%](C:/Users/Admin/.gemini/antigravity/brain/5b5a3b16-c302-4446-a60e-5845fcb785ed/hinh_anh_giao_dien/12_xftp_truyen_file_sftp.png)

### Lưu trữ ngoại vi an toàn (Offsite Storage):
* **Cửa sổ 2 bên trực quan:**
  * *Bên trái:* Thư mục máy tính Windows (`Profile_NhanPhu\backups\`).
  * *Bên phải:* Thư mục máy chủ Ubuntu (`/home/bentre/backups/`).
* **Kéo thả 2 chiều (Drag & Drop):**
  * **Download:** Tải bản sao lưu từ máy chủ về ổ cứng máy thật cất giữ an toàn.
  * **Upload:** Đẩy bản sao lưu lên máy chủ khi cần khôi phục sau sự cố.
* **Mã hóa SFTP:** Đảm bảo toàn vẹn dữ liệu qua cổng 2222.

<!--
SPEAKER NOTES:
Với Xftp 7, người quản trị có thể dễ dàng kéo thả các tệp sao lưu về máy tính cá nhân để lưu trữ an toàn, đáp ứng nguyên tắc sao lưu dữ liệu ngoại vi trong an ninh thông tin.
-->

---

## 11. ĐÁNH GIÁ KẾT QUẢ ĐẠT ĐƯỢC

| Mục Tiêu Đề Tài | Kết Quả Thực Tế | Tình Trạng |
|:---|:---|:---:|
| **Máy chủ ảo LAMP Stack** | Ubuntu 22.04 LTS, Apache 2.4, MySQL 8.0, PHP 8.1 hoạt động ổn định | <span class="badge">Đạt 100%</span> |
| **Hệ thống WordPress & WooCommerce** | Cấu hình tiền tệ VNĐ, giao hàng, 2 phương thức thanh toán | <span class="badge">Đạt 100%</span> |
| **Giao diện Bách Hóa Xanh** | Header xanh `#008848`, Giỏ vàng, Flash Sale, Countdown | <span class="badge">Đạt 100%</span> |
| **15 Sản phẩm Thực phẩm Bến Tre** | Đầy đủ ảnh thực phẩm thực tế, tem OCOP, giá khuyến mãi | <span class="badge">Đạt 100%</span> |
| **Sao lưu & Phục hồi (Xshell/Xftp)** | Tự động hóa bằng bash script, lưu trữ an toàn trên Windows host | <span class="badge">Đạt 100%</span> |
| **Bộ Hồ sơ Bàn giao** | Báo cáo chi tiết đồ án (20+ trang) & Slide thuyết trình | <span class="badge">Đạt 100%</span> |

---

## 12. HƯỚNG MỞ RỘNG TRONG TƯƠNG LAI

1. **Cổng thanh toán điện tử:** Tích hợp trực tiếp MoMo, VNPay, ZaloPay Sandbox.
2. **Bảo mật HTTPS:** Cài đặt chứng chỉ số SSL Let's Encrypt trên máy chủ tên miền thực.
3. **Mở rộng đa nền tảng:** Xây dựng ứng dụng di động Flutter kết nối qua WooCommerce REST API.
4. **Container hóa:** Đóng gói toàn bộ LAMP Stack vào Docker Compose để triển khai trên Cloud (AWS / Google Cloud).

---

# XIN CHÂN THÀNH CẢM ƠN
## QUÝ THẦY CÔ VÀ HỘI ĐỒNG ĐÃ THEO DÕI!

### Kính mời Quý Thầy Cô đặt câu hỏi và đóng góp ý kiến (Q&A)

* **Trang web đồ án:** `http://localhost:8080/thucpham/`
* **Trang quản trị:** `http://localhost:8080/thucpham/wp-admin/`
* **SSH Server:** `127.0.0.1:2222` (User: `bentre`)
* **Thư mục ảnh chụp:** `C:\Users\Admin\source\repos\Profile_NhanPhu\hinh_anh_giao_dien\`

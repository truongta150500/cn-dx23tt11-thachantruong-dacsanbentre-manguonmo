# TÓM TẮT ĐỒ ÁN (PROJECT ABSTRACT)

## THÔNG TIN TÁC GIẢ & ĐỀ TÀI
* **Tên đề tài:** Xây dựng Website bán thực phẩm chế biến đặc sản Bến Tre trên máy chủ mã nguồn mở LAMP và WordPress (Ứng dụng mô hình Bách Hóa Xanh & Sao lưu/Phục hồi qua Xshell, Xftp)
* **Sinh viên thực hiện:** Thạch An Trường
* **Mã số sinh viên (MSSV):** 170123678
* **Số điện thoại:** 0329886903
* **Email:** truongta150500@sv-onuni.edu.vn
* **Giảng viên hướng dẫn:** ThS. Nguyễn Hoàng Duy Thiện
* **Đơn vị đào tạo:** Khoa Kỹ thuật và Công nghệ - Trường Đại học Trà Vinh

---

## 1. TÓM TẮT TIẾNG VIỆT (VIETNAMESE ABSTRACT)

Đồ án tập trung nghiên cứu, thiết kế và triển khai giải pháp thương mại điện tử chuyên biệt cho ngành hàng thực phẩm chế biến và nông sản đặc sản tỉnh Bến Tre dựa trên nền tảng phần mềm mã nguồn mở hoàn toàn miễn phí bản quyền (LAMP Stack: Linux Ubuntu 22.04 LTS, Apache 2.4, MySQL 8.0, PHP 8.1 kết hợp WordPress 6.8 và WooCommerce 9.8.5).

Hệ thống giải quyết 3 bài toán trọng tâm:
1. **Quảng bá nông sản số:** Chuẩn hóa dữ liệu 15 sản phẩm thực phẩm chế biến OCOP Bến Tre (kẹo dừa sáp, nem chua lá ổi, bánh phồng tôm Sơn Đốc, mứt dừa non, thủy sản khô...), minh bạch nguồn gốc làng nghề truyền thống và tiêu chuẩn an toàn thực phẩm.
2. **Tối ưu trải nghiệm khách hàng:** Áp dụng phong cách nhận diện chuỗi siêu thị Bách Hóa Xanh với tông màu xanh lá tươi mới (#008848), khối Flash Sale đếm ngược thời gian thực, giỏ hàng AJAX trực quan và quy trình thanh toán COD nhận hàng trả tiền mặt tối ưu cho người tiêu dùng Việt Nam.
3. **An toàn dữ liệu & Quản trị hệ thống:** Xây dựng quy trình sao lưu định kỳ và phục hồi thảm họa tự động hóa bằng Shell Script (`backup.sh` và `restore.sh`), thực thi từ xa qua phần mềm Xshell 7 (cổng SSH 2222) và truyền tệp ngoại vi an toàn qua Xftp 7 (SFTP). Kết quả thực nghiệm cho thấy thời gian khôi phục toàn bộ hệ thống sau sự cố chỉ mất dưới 15 giây, đảm bảo tính sẵn sàng cao (High Availability) cho doanh nghiệp.

*Từ khóa:* LAMP Stack, WordPress, WooCommerce, Bách Hóa Xanh, OCOP Bến Tre, Xshell, Xftp, Sao lưu và Phục hồi, Shell Script.

---

## 2. ENGLISH ABSTRACT

This project focuses on researching, designing, and deploying a specialized e-commerce solution for processed food and traditional specialties of Ben Tre province based entirely on open-source software (LAMP Stack: Linux Ubuntu 22.04 LTS, Apache 2.4, MySQL 8.0, PHP 8.1 combined with WordPress 6.8 and WooCommerce 9.8.5).

The system addresses three core objectives:
1. **Digital Agriculture Promotion:** Standardizing data for 15 OCOP certified processed food products of Ben Tre (wax coconut candy, fermented pork rolls with guava leaves, Son Doc prawn crackers, young coconut jam, dried seafood), ensuring transparency regarding traditional craft village origins and food hygiene standards.
2. **User Experience Optimization:** Adopting the visual identity of the Bach Hoa Xanh supermarket chain featuring fresh green theme (#008848), real-time countdown Flash Sale modules, responsive AJAX shopping carts, and cash-on-delivery (COD) checkout tailored to Vietnamese consumers.
3. **Data Security & Disaster Recovery:** Developing automated backup and disaster recovery workflows using Bash shell scripts (`backup.sh` and `restore.sh`), executed remotely via Xshell 7 (SSH port 2222) and synchronized off-site via Xftp 7 (SFTP). Experimental results demonstrate complete system recovery in under 15 seconds, providing high availability and enterprise-grade reliability.

*Keywords:* LAMP Stack, WordPress, WooCommerce, Bach Hoa Xanh, Ben Tre OCOP, Xshell, Xftp, Backup and Disaster Recovery, Shell Script.

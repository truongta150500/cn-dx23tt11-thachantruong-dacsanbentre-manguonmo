# DANH MỤC CÁC PHẦN MỀM SỬ DỤNG TRONG ĐỒ ÁN

## 1. XSHELL 7 (SSH CLIENT)
* **Mục đích sử dụng:** Kết nối dòng lệnh từ xa (CLI) qua giao thức SSH an toàn tới máy chủ Linux Ubuntu Server.
* **Cấu hình kết nối đồ án:**
  - Host: `127.0.0.1` (hoặc `localhost`)
  - Port: `2222` (NAT từ port 22 của máy ảo)
  - User: `bentre`
* **Trang chủ tải phần mềm:** https://www.netsarang.com/en/xshell/

## 2. XFTP 7 (SFTP CLIENT)
* **Mục đích sử dụng:** Truyền tải tệp tin đồ họa hai chiều (GUI) giữa máy tính vật lý Windows và máy chủ ảo Linux để lưu trữ ngoại vi bản sao lưu (.sql, .tar.gz).
* **Cấu hình kết nối:**
  - Protocol: `SFTP`
  - Host: `127.0.0.1` | Port: `2222`
* **Trang chủ tải phần mềm:** https://www.netsarang.com/en/xftp/

## 3. ORACLE VM VIRTUALBOX 7.0
* **Mục đích sử dụng:** Môi trường ảo hóa cài đặt máy chủ Ubuntu Server 22.04 LTS.
* **Cấu hình mạng (Network):** NAT Port Forwarding:
  - Cổng Web HTTP: `Host Port 8080 -> Guest Port 80`
  - Cổng SSH/SFTP: `Host Port 2222 -> Guest Port 22`
* **Trang chủ:** https://www.virtualbox.org/

## 4. VISUAL STUDIO CODE
* **Mục đích sử dụng:** Soạn thảo mã nguồn Child Theme, kịch bản Shell Script và tài liệu kỹ thuật Markdown.
* **Trang chủ:** https://code.visualstudio.com/

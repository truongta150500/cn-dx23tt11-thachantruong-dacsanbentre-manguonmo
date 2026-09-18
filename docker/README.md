# TRIỂN KHAI NHANH HỆ THỐNG QUA DOCKER COMPOSE

Dành cho Thầy Cô và bạn bè muốn chạy thử nghiệm đồ án 1 chạm mà không cần cài đặt máy ảo:

## Yêu cầu môi trường
* Đã cài đặt Docker Desktop trên Windows/macOS hoặc Docker Engine trên Linux.

## Khởi chạy hệ thống
1. Mở terminal tại thư mục `docker/`:
```bash
docker compose up -d
```
2. Đợi khoảng 30 giây để MySQL và WordPress khởi động.
3. Truy cập Website tại: `http://localhost:8080/`
4. Để dừng hệ thống:
```bash
docker compose down
```

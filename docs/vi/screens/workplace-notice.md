# Tìm kiếm nơi làm việc (Thông báo)

## Hình ảnh màn hình

![Màn hình tìm kiếm nơi làm việc (Thông báo)](/images/workplace-notice-screenshot.png)

## Tổng quan

Màn hình quản lý tệp thông báo theo từng nơi làm việc.

## Điều kiện tìm kiếm

| Mục | Loại | Ghi chú |
|-----|------|---------|
| Phòng ban | Hộp chọn | Hiển thị phòng ban của nơi làm việc (loại bỏ trùng lặp) |

## Kết quả tìm kiếm

| No | Mục hiển thị | Điều kiện tìm kiếm | Chỉnh sửa | Định dạng | Liên kết | Mô tả |
|----|--------------|-------------------|-----------|-----------|----------|-------|
| 1 | Phòng ban | ○ | | Chuỗi ký tự | PDF | |
| 2 | Nơi làm việc | | | Chuỗi ký tự | | |
| 3 | Hóa chất đặc biệt | | ○ | ○ hoặc trống | PDF | Nếu có tệp PDF: ○ |
| 4 | Dung môi hữu cơ | | ○ | ○ hoặc trống | PDF | Nếu có tệp PDF: ○ |
| 5 | Bụi | | ○ | ○ hoặc trống | PDF | Nếu có tệp PDF: ○ |
| 6 | Chì | | ○ | ○ hoặc trống | PDF | Nếu có tệp PDF: ○ |

## Đường dẫn lưu PDF

| Mục | Đường dẫn lưu PDF |
|-----|-------------------|
| Hóa chất đặc biệt | `storage/workArea/特化物掲示/特化物掲示_[WorkArea!DEPT_NAME]_[WorkArea!WORK_NAME].pdf` |
| Dung môi hữu cơ | `storage/workArea/有機溶剤掲示/有機溶剤掲示_[WorkArea!DEPT_NAME]_[WorkArea!WORK_NAME].pdf` |
| Bụi | `storage/workArea/粉じん掲示/粉じん掲示_[WorkArea!DEPT_NAME]_[WorkArea!WORK_NAME].pdf` |
| Chì | `storage/workArea/鉛掲示/鉛掲示_[WorkArea!DEPT_NAME]_[WorkArea!WORK_NAME].pdf` |

## Cơ sở dữ liệu

| No | Mục hiển thị | Tên bảng (Logic) | Tên bảng (Vật lý) | Tên cột (Logic) | Tên cột (Vật lý) |
|----|--------------|------------------|-------------------|-----------------|------------------|
| 1 | Phòng ban | [Nơi làm việc](/vi/data/workarea) | WorkArea | Phòng ban | DEPT_NAME |
| 2 | Nơi làm việc | [Nơi làm việc](/vi/data/workarea) | WorkArea | Nơi làm việc | WORK_NAME |

## Thông số chế độ chỉnh sửa

### Hiển thị

- Nếu có tệp PDF: ○ (liên kết PDF) + Nút tải lên
- Nếu không có tệp PDF: Chỉ có nút tải lên

### Tải lên

- Tải lên vùng tạm thời của Laravel với tên tệp gốc
- Sau khi tải lên hoàn tất: Hiển thị tên tệp gốc + Nút ×
- Nút ×: Xóa tệp tạm thời

### Đăng ký

- Nút đăng ký: Sao chép tệp tạm thời đến đường dẫn lưu PDF
- Ghi đè nếu tệp đã tồn tại

## Thao tác

- Toggle Xem/Chỉnh sửa: Chuyển đổi chế độ
- Nút tìm kiếm: Thực hiện tìm kiếm
- Nút xóa: Xóa điều kiện tìm kiếm
- Xuất CSV: Tải xuống kết quả tìm kiếm dưới dạng CSV
- Nút đăng ký: Lưu nội dung chỉnh sửa (chỉ trong chế độ chỉnh sửa)

## Modal tải lên

![Modal tải lên](/images/workplace-notice-upload-modal.png)

- Hỗ trợ kéo và thả
- Nút chọn tệp
- Chỉ chấp nhận tệp PDF

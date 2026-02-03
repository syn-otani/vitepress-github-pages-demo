# Tìm kiếm sản phẩm

## Hình ảnh màn hình

![Màn hình tìm kiếm sản phẩm](/images/product-search-screenshot.png)

## Tổng quan

Màn hình tìm kiếm và hiển thị danh sách sản phẩm hóa chất.

## Điều kiện tìm kiếm

| Mục | Loại | Ghi chú |
|-----|------|---------|
| Tên sản phẩm | Văn bản | Tìm kiếm một phần |
| Ngày phát hành/cập nhật SDS | Hộp chọn (Từ〜Đến) | Chỉ định năm |

## Kiểm tra đầu vào

| Mục | Nội dung kiểm tra | Thông báo lỗi |
|-----|-------------------|---------------|
| Ngày phát hành/cập nhật SDS | Lỗi nếu Từ lớn hơn Đến | Vui lòng đặt năm Đến lớn hơn Từ. |

## Kết quả tìm kiếm

| No | Mục hiển thị | Định dạng | Liên kết | Mô tả |
|----|--------------|-----------|----------|-------|
| 1 | Tên sản phẩm | Chuỗi ký tự | PDF | |
| 2 | Công ty sản xuất | Chuỗi ký tự | | |
| 3 | Ngày phát hành/cập nhật SDS | YYYY năm MM tháng DD ngày | | |
| 4 | Nhãn | Có hoặc trống | PDF | Nếu có tệp PDF: Có |
| 5 | Đối tượng đánh giá rủi ro | ○ hoặc trống | Popup | Nếu không NULL thì ○　Nhấp ○ để hiển thị dữ liệu trong popup |
| 6 | Chất có giá trị nồng độ tiêu chuẩn | ○ hoặc trống | Popup | Nếu không NULL thì ○　Nhấp ○ để hiển thị dữ liệu trong popup |
| 7 | Hóa chất gây tổn thương da/Da | ○ hoặc trống | Popup | Nếu không NULL thì ○　Nhấp ○ để hiển thị dữ liệu trong popup |
| 8 | Hóa chất gây tổn thương da/Mắt | ○ hoặc trống | Popup | Nếu không NULL thì ○　Nhấp ○ để hiển thị dữ liệu trong popup |
| 9 | Ghi chép công việc | ○ hoặc trống | Popup | Nếu không NULL thì ○　Nhấp ○ để hiển thị dữ liệu trong popup |
| 10 | Kiểm tra sức khỏe đặc biệt | ○ hoặc trống | Popup | Nếu không NULL thì ○　Nhấp ○ để hiển thị dữ liệu trong popup |
| 11 | Đo môi trường làm việc | ○ hoặc trống | Popup | Nếu không NULL thì ○　Nhấp ○ để hiển thị dữ liệu trong popup |
| 12 | Phòng ban sử dụng | Chuỗi ký tự | PDF | Liên kết với SDS_NAME_001〜020 của nơi làm việc để lấy phòng ban. Hiển thị cách nhau bằng dấu cách |

## Đường dẫn lưu PDF

| Mục | Đường dẫn lưu PDF |
|-----|-------------------|
| Tên sản phẩm | `storage/sds/sds/[SDS_data!SDS_NAME]_[SDS_data!SDS_CoNAME]_[SDS_data!SDS_DATE].pdf` |
| Nhãn | `storage/sds/Label/LB_[SDS_data!SDS_NAME]_[SDS_data!SDS_CoNAME]_[SDS_data!SDS_DATE].pdf` |
| Phòng ban sử dụng | `storage/workArea/map/map_[WorkArea!DEPT_NAME].pdf` |

## Cơ sở dữ liệu

| No | Mục hiển thị | Tên bảng (Logic) | Tên bảng (Vật lý) | Tên cột (Logic) | Tên cột (Vật lý) |
|----|--------------|------------------|-------------------|-----------------|------------------|
| 1 | Tên sản phẩm | [Thông tin SDS](/vi/data/sds-data) | SDS_data | Tên sản phẩm | SDS_NAME |
| 2 | Công ty sản xuất | [Thông tin SDS](/vi/data/sds-data) | SDS_data | Công ty sản xuất | SDS_CoNAME |
| 3 | Ngày phát hành/cập nhật SDS | [Thông tin SDS](/vi/data/sds-data) | SDS_data | Ngày phát hành/cập nhật SDS | SDS_DATE |
| 5 | Đối tượng đánh giá rủi ro | [Thông tin SDS](/vi/data/sds-data) | SDS_data | Đối tượng đánh giá rủi ro | RISK_ASSESSMENT |
| 6 | Chất có giá trị nồng độ tiêu chuẩn | [Thông tin SDS](/vi/data/sds-data) | SDS_data | Chất có giá trị nồng độ tiêu chuẩn | CONCENT_SUBSTANCE |
| 7 | Hóa chất gây tổn thương da (Da) | [Thông tin SDS](/vi/data/sds-data) | SDS_data | Hóa chất gây tổn thương da | SKIN_SUBSTANCE |
| 8 | Hóa chất gây tổn thương da (Mắt) | [Thông tin SDS](/vi/data/sds-data) | SDS_data | Hóa chất gây tổn thương da (Mắt) | EYE_SUBSTANCE |
| 9 | Ghi chép công việc | [Thông tin SDS](/vi/data/sds-data) | SDS_data | Ghi chép công việc | WORKLOG_SUBSTANCE |
| 10 | Kiểm tra sức khỏe đặc biệt | [Thông tin SDS](/vi/data/sds-data) | SDS_data | Kiểm tra sức khỏe đặc biệt | MEDICAL_SUBSTANCE |
| 11 | Đo môi trường làm việc | [Thông tin SDS](/vi/data/sds-data) | SDS_data | Đo môi trường làm việc | WORKENV_SUBSTANCE |
| 12 | Phòng ban sử dụng | [Nơi làm việc](/vi/data/workarea) | WorkArea | Phòng ban | DEPT_NAME |

## Thao tác

- Nút tìm kiếm: Thực hiện tìm kiếm
- Nút xóa: Xóa điều kiện tìm kiếm
- Xuất CSV: Tải xuống kết quả tìm kiếm dưới dạng CSV

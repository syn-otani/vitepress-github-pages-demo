# Tìm kiếm nơi làm việc (Thông tin quản lý)

## Hình ảnh màn hình

![Màn hình tìm kiếm nơi làm việc (Quản lý)](/images/workplace-manager-search-screenshot.png)

## Tổng quan

Màn hình hiển thị danh sách quản lý và trưởng nhóm theo từng nơi làm việc.

## Điều kiện tìm kiếm

| Mục | Loại | Ghi chú |
|-----|------|---------|
| Phòng ban | Hộp chọn | Hiển thị phòng ban của nơi làm việc (loại bỏ trùng lặp) |

## Kết quả tìm kiếm

| No | Mục hiển thị | Điều kiện tìm kiếm | Định dạng | Liên kết | Mô tả |
|----|--------------|-------------------|-----------|----------|-------|
| 1 | Phòng ban | ○ | Chuỗi ký tự | PDF | Chỉ hiển thị liên kết nếu có file PDF |
| 2 | Nơi làm việc | | Chuỗi ký tự | | |
| 3 | Người quản lý hóa chất | | Chuỗi ký tự | | |
| 4 | Người chịu trách nhiệm thiết bị bảo hộ | | Chuỗi ký tự | | |
| 5 | Người quản lý vệ sinh | | Chuỗi ký tự | | |
| 6 | Trưởng nhóm dung môi hữu cơ | | Chuỗi ký tự | | |
| 7 | Trưởng nhóm hóa chất đặc biệt | | Chuỗi ký tự | | |
| 8 | Trưởng nhóm chì | | Chuỗi ký tự | | |

## Đường dẫn lưu PDF

| Mục | Đường dẫn lưu PDF |
|-----|-------------------|
| Phòng ban | `storage/workArea/map/map_[WorkArea!DEPT_NAME].pdf` |

## Cơ sở dữ liệu

| No | Mục hiển thị | Tên bảng (Logic) | Tên bảng (Vật lý) | Tên cột (Logic) | Tên cột (Vật lý) |
|----|--------------|------------------|-------------------|-----------------|------------------|
| 1 | Phòng ban | [Nơi làm việc](/vi/data/workarea) | WorkArea | Phòng ban | DEPT_NAME |
| 2 | Nơi làm việc | [Nơi làm việc](/vi/data/workarea) | WorkArea | Nơi làm việc | WORK_NAME |
| 3 | Người quản lý hóa chất | [Nơi làm việc](/vi/data/workarea) | WorkArea | Người quản lý hóa chất | CHEMICAL_MANAGER |
| 4 | Người chịu trách nhiệm thiết bị bảo hộ | [Nơi làm việc](/vi/data/workarea) | WorkArea | Người chịu trách nhiệm thiết bị bảo hộ | PROTECT_MANAGER |
| 5 | Người quản lý vệ sinh | [Nơi làm việc](/vi/data/workarea) | WorkArea | Người quản lý vệ sinh | HYGIENE_MANAGER |
| 6 | Trưởng nhóm dung môi hữu cơ | [Nơi làm việc](/vi/data/workarea) | WorkArea | Trưởng nhóm dung môi hữu cơ | OSOLVENT_MANAGER |
| 7 | Trưởng nhóm hóa chất đặc biệt | [Nơi làm việc](/vi/data/workarea) | WorkArea | Trưởng nhóm hóa chất đặc biệt | SPECHEMICAL_MANAGER |
| 8 | Trưởng nhóm chì | [Nơi làm việc](/vi/data/workarea) | WorkArea | Trưởng nhóm chì | LEAD_MANAGER |

## Thao tác

- Nút tìm kiếm: Thực hiện tìm kiếm
- Nút xóa: Xóa điều kiện tìm kiếm
- Nút hiển thị đối tượng kiểm tra sức khỏe đặc biệt: Chỉ hiển thị bản ghi có file 特健_部門.xlsx
- Nút hiển thị đối tượng ghi chép công việc: Chỉ hiển thị bản ghi có file 作業記録_部門.xlsx
- Xuất CSV: Tải xuống kết quả tìm kiếm dưới dạng CSV

## Đường dẫn lưu EXCEL

| Mục | Đường dẫn lưu EXCEL |
|-----|---------------------|
| Đối tượng kiểm tra sức khỏe đặc biệt | `storage/workArea/特健/特健_[WorkArea!DEPT_NAME].xlsx` |
| Đối tượng ghi chép công việc | `storage/workArea/作業記録/作業記録_[WorkArea!DEPT_NAME].xlsx` |

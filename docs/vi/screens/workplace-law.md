# Tìm kiếm nơi làm việc (Pháp luật)

## Hình ảnh màn hình

![Màn hình tìm kiếm nơi làm việc (Pháp luật)](/images/workplace-law-screenshot.png)

## Tổng quan

Màn hình tìm kiếm và chỉnh sửa thông tin pháp luật theo nơi làm việc và sản phẩm.

## Điều kiện tìm kiếm

| Mục | Loại | Ghi chú |
|-----|------|---------|
| Phòng ban | Hộp chọn | Hiển thị phòng ban của nơi làm việc (loại bỏ trùng lặp) |
| Nơi làm việc | Hộp chọn | Hiển thị nơi làm việc liên kết với phòng ban |
| Tên sản phẩm | Văn bản | Tìm kiếm một phần |
| Đối tượng đánh giá rủi ro | Hộp kiểm | |
| Chất có giá trị nồng độ tiêu chuẩn | Hộp kiểm | |
| Hóa chất gây tổn thương da | Hộp kiểm | |
| Ghi chép công việc | Hộp kiểm | |
| Kiểm tra sức khỏe đặc biệt | Hộp kiểm | |
| Đo môi trường làm việc | Hộp kiểm | |
| Mức rủi ro (Hít+Qua da) | Hộp kiểm | Ⅰ〜Ⅳ |
| Mức rủi ro (Nổ/Cháy) | Hộp kiểm | Ⅰ〜Ⅳ |
| Đánh giá nồng độ tiêu chuẩn | Hộp chọn | |
| Yêu cầu xem xét biện pháp giảm phơi nhiễm | Hộp kiểm | Cần/Không |

## Kết quả tìm kiếm

| No | Mục hiển thị | Điều kiện tìm kiếm | Chỉnh sửa | Định dạng | Liên kết | Mô tả |
|----|--------------|-------------------|-----------|-----------|----------|-------|
| 1 | Phòng ban | ○ | | Chuỗi ký tự | PDF | |
| 2 | Nơi làm việc | ○ | | Chuỗi ký tự | | |
| 3 | Trong nhà/Ngoài trời | | | Trong nhà/Ngoài trời | | |
| 4 | Tên sản phẩm | ○ | | Chuỗi ký tự | PDF | |
| 5 | Thường xuyên/Tạm thời | | | Thường xuyên/Tạm thời | | |
| 6 | Mục đích sử dụng | | | Chuỗi ký tự | | |
| 7 | Đối tượng đánh giá rủi ro | ○ | | ○ hoặc trống | Popup | Nếu không NULL thì ○　Nhấp ○ để hiển thị dữ liệu trong popup |
| 8 | Kết quả đánh giá rủi ro | | | ○ hoặc trống | PDF | Nếu có tệp PDF: ○ |
| 9 | Mức rủi ro/(Hít+Qua da) | ○ | ○ | Ⅰ/Ⅱ/Ⅲ/Ⅳ | | |
| 10 | Mức rủi ro/(Nổ/Cháy) | ○ | ○ | Ⅰ/Ⅱ/Ⅲ/Ⅳ | | |
| 11 | Xem xét biện pháp giảm phơi nhiễm/Cần・Không | | | Cần/Không | | Nếu mức rủi ro ≥Ⅲ: Cần, ≤Ⅱ: Không (tự động) |
| 12 | Báo cáo tình trạng phơi nhiễm | | ○ | ○ hoặc trống | PDF | Nếu có tệp PDF: ○ |
| 13 | Chất có giá trị nồng độ tiêu chuẩn | ○ | | ○ hoặc trống | Popup | Nếu không NULL thì ○　Nhấp ○ để hiển thị dữ liệu trong popup |
| 14 | Đánh giá nồng độ tiêu chuẩn | | ○ | Chuỗi ký tự (※1) | | |
| 15 | Hóa chất gây tổn thương da/Da | ○ | | ○ hoặc trống | Popup | Nếu không NULL thì ○　Nhấp ○ để hiển thị dữ liệu trong popup |
| 16 | Hóa chất gây tổn thương da/Mắt | ○ | | ○ hoặc trống | Popup | Nếu không NULL thì ○　Nhấp ○ để hiển thị dữ liệu trong popup |
| 17 | Ghi chép công việc | ○ | | ○ hoặc trống | Popup | Nếu không NULL thì ○　Nhấp ○ để hiển thị dữ liệu trong popup |
| 18 | Kiểm tra sức khỏe đặc biệt | ○ | | ○ hoặc trống | Popup | Nếu không NULL thì ○　Nhấp ○ để hiển thị dữ liệu trong popup |
| 19 | Đo môi trường làm việc | ○ | | ○ hoặc trống | Popup | Nếu không NULL thì ○　Nhấp ○ để hiển thị dữ liệu trong popup |

※1: Đánh giá nồng độ tiêu chuẩn chọn từ 3 mẫu (thiết lập từ màn hình ở chế độ chỉnh sửa)

## Đường dẫn lưu PDF

| Mục | Đường dẫn lưu PDF |
|-----|-------------------|
| Phòng ban | `storage/workArea/map/map_[WorkArea!DEPT_NAME].pdf` |
| Tên sản phẩm | `storage/sds/sds/[SDS_data!SDS_NAME]_[SDS_data!SDS_CoNAME]_[SDS_data!SDS_DATE].pdf` |
| Kết quả đánh giá rủi ro | `storage/workArea/リスクアセスメント結果/RA_[WorkArea!DEPT_NAME]_[WorkArea!WORK_NAME]_[SDS_data!SDS_NAME].pdf` |
| Báo cáo tình trạng phơi nhiễm | `storage/workArea/ばく露状況報告書/ばく露状況報告書_[WorkArea!DEPT_NAME]_[WorkArea!WORK_NAME]_[SDS_data!SDS_NAME].pdf` |

## Cơ sở dữ liệu

| No | Mục hiển thị | Tên bảng (Logic) | Tên bảng (Vật lý) | Tên cột (Logic) | Tên cột (Vật lý) |
|----|--------------|------------------|-------------------|-----------------|------------------|
| 1 | Phòng ban | [Nơi làm việc](/vi/data/workarea) | WorkArea | Phòng ban | DEPT_NAME |
| 2 | Nơi làm việc | [Nơi làm việc](/vi/data/workarea) | WorkArea | Nơi làm việc | WORK_NAME |
| 3 | Trong nhà/Ngoài trời | [Nơi làm việc](/vi/data/workarea) | WorkArea | Trong nhà/Ngoài trời | INOUTDOOR |
| 4 | Tên sản phẩm | [Nơi làm việc](/vi/data/workarea) | WorkArea | Sản phẩm sở hữu (Tên sản phẩm) | SDS_NAME_001〜020 |
| 5 | Thường xuyên/Tạm thời | [Nơi làm việc](/vi/data/workarea) | WorkArea | Sản phẩm sở hữu (Thường xuyên/Tạm thời) | (Chưa định nghĩa) |
| 6 | Mục đích sử dụng | [Nơi làm việc](/vi/data/workarea) | WorkArea | Sản phẩm sở hữu (Mục đích sử dụng) | USE_USAGE_001〜020 |
| 7 | Đối tượng đánh giá rủi ro | [Thông tin SDS](/vi/data/sds-data) | SDS_data | Đối tượng đánh giá rủi ro | RISK_ASSESSMENT |
| 9 | Mức rủi ro (Hít+Qua da) | [Dữ liệu mở rộng nơi làm việc](/vi/data/workarea-ex) | WorkAreaEx | Mức rủi ro (Hít+Qua da) | RISKLEVEL_SKIN_001〜100 |
| 10 | Mức rủi ro (Nổ/Cháy) | [Dữ liệu mở rộng nơi làm việc](/vi/data/workarea-ex) | WorkAreaEx | Mức rủi ro (Nổ/Cháy) | RISKLEVEL_FIRE_001〜100 |
| 13 | Chất có giá trị nồng độ tiêu chuẩn | [Thông tin SDS](/vi/data/sds-data) | SDS_data | Chất có giá trị nồng độ tiêu chuẩn | CONCENT_SUBSTANCE |
| 14 | Đánh giá nồng độ tiêu chuẩn | [Dữ liệu mở rộng nơi làm việc](/vi/data/workarea-ex) | WorkAreaEx | Đánh giá nồng độ tiêu chuẩn | CONCENT_JUDGE_001〜100 |
| 15 | Hóa chất gây tổn thương da (Da) | [Thông tin SDS](/vi/data/sds-data) | SDS_data | Hóa chất gây tổn thương da | SKIN_SUBSTANCE |
| 16 | Hóa chất gây tổn thương da (Mắt) | [Thông tin SDS](/vi/data/sds-data) | SDS_data | Hóa chất gây tổn thương da (Mắt) | EYE_SUBSTANCE |
| 17 | Ghi chép công việc | [Thông tin SDS](/vi/data/sds-data) | SDS_data | Chất đối tượng ghi chép công việc | WORKLOG_SUBSTANCE |
| 18 | Kiểm tra sức khỏe đặc biệt | [Thông tin SDS](/vi/data/sds-data) | SDS_data | Chất khám sức khỏe đặc biệt | MEDICAL_SUBSTANCE |
| 19 | Đo môi trường làm việc | [Thông tin SDS](/vi/data/sds-data) | SDS_data | Chất đo môi trường làm việc | WORKENV_SUBSTANCE |

## Thông số lưu tệp

| No | Tên dữ liệu | Định dạng | Đường dẫn lưu |
|----|-------------|-----------|---------------|
| 1 | SDS | PDF | `storage/sds/sds/[SDS_NAME]_[SDS_CoNAME]_[SDS_DATE].pdf` |
| 2 | Nhãn | PDF | `storage/sds/Label/LB_[SDS_NAME]_[SDS_CoNAME]_[SDS_DATE].pdf` |
| 3 | Phòng ban | PDF | `storage/workArea/map/map_[DEPT_NAME].pdf` |
| 4 | Đối tượng kiểm tra sức khỏe đặc biệt | Excel | `storage/workArea/特健/特健_[DEPT_NAME].xlsx` |
| 5 | Đối tượng ghi chép công việc | Excel | `storage/workArea/作業記録/作業記録_[DEPT_NAME].xlsx` |
| 6 | Kết quả đo môi trường làm việc | PDF | `storage/workArea/作業環境測定結果/作業環境測定結果_[DEPT_NAME]_[WORK_NAME].pdf` |
| 7 | Thông báo hóa chất đặc biệt | PDF | `storage/workArea/特化物掲示/特化物掲示_[DEPT_NAME]_[WORK_NAME].pdf` |
| 8 | Thông báo dung môi hữu cơ | PDF | `storage/workArea/有機溶剤掲示/有機溶剤掲示_[DEPT_NAME]_[WORK_NAME].pdf` |
| 9 | Thông báo bụi | PDF | `storage/workArea/粉じん掲示/粉じん掲示_[DEPT_NAME]_[WORK_NAME].pdf` |
| 10 | Thông báo chì | PDF | `storage/workArea/鉛掲示/鉛掲示_[DEPT_NAME]_[WORK_NAME].pdf` |
| 11 | Kết quả đánh giá rủi ro | PDF | `storage/workArea/リスクアセスメント結果/RA_[DEPT_NAME]_[WORK_NAME]_[SDS_NAME].pdf` |
| 12 | Báo cáo tình trạng phơi nhiễm | PDF | `storage/workArea/ばく露状況報告書/ばく露状況報告書_[DEPT_NAME]_[WORK_NAME]_[SDS_NAME].pdf` |

## Thông số chế độ chỉnh sửa

### Hiển thị

- Mức rủi ro (Hít+Qua da): Chọn từ Ⅰ/Ⅱ/Ⅲ/Ⅳ
- Mức rủi ro (Nổ/Cháy): Chọn từ Ⅰ/Ⅱ/Ⅲ/Ⅳ
- Đánh giá nồng độ tiêu chuẩn: Chọn từ 3 mẫu
- Báo cáo tình trạng phơi nhiễm: Nếu có tệp PDF hiển thị ○ + Nút tải lên, nếu không có chỉ hiển thị nút tải lên

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

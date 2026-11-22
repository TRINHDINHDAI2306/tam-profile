# 06 · Form đặt lịch

## Đã có gì

| Hạng mục | Chi tiết |
|---|---|
| Vị trí | Section `#contact` (`src/components/sections/Booking.tsx`) |
| Bố cục mobile | Liên hệ nhanh (Gọi · Zalo) → Form 2 bước → Cam kết + thông tin liên hệ |
| Bước 1 – Về chương trình | Loại chương trình* (dropdown), Ngày diễn ra* (icon lịch ở cuối ô, bấm cả ô mở lịch, không cho chọn ngày quá khứ), Thời gian (dropdown), Số khách (dropdown), Địa điểm |
| Bước 2 – Liên hệ | Họ tên*, Số điện thoại* (kiểm tra SĐT di động Việt Nam), Liên hệ qua (dropdown: Zalo/Gọi/Email), Email (bắt buộc nếu chọn Email), Lời nhắn (≤ 1.000 ký tự) |
| Dropdown | Dùng `<select>` gốc → trên điện thoại mở bánh xe chọn quen thuộc của iOS/Android; mũi tên tự vẽ màu hồng |
| Kiểm tra dữ liệu | Báo lỗi ngay dưới ô khi rời ô; bấm Tiếp tục/Gửi sẽ đưa con trỏ tới ô lỗi đầu tiên |
| Trạng thái | Đang gửi (spinner) · Thành công (tóm tắt yêu cầu + nút Zalo) · Lỗi (kèm link Zalo dự phòng) |
| Liên kết | Nút "Đặt lịch …" ở mỗi thẻ Dịch vụ tự chọn sẵn loại chương trình |
| Chống spam | Trường ẩn (honeypot) – bot điền vào sẽ bị bỏ qua |
| Mobile | Ô nhập 16px (iPhone không tự zoom), bàn phím số cho SĐT, vùng chạm ≥ 44px, thanh CTA đáy tự ẩn khi đang ở form |

Nguyên tắc thiết kế dựa trên nghiên cứu UX form: nhãn luôn hiển thị phía trên ô (không dùng placeholder thay nhãn),
một cột trên mobile, chỉ hỏi thông tin cần thiết, báo lỗi ngay tại ô.

## File liên quan

```
src/types/booking.ts              ← loại chương trình, kiểu dữ liệu form
src/lib/bookingValidation.ts      ← quy tắc kiểm tra (SĐT VN, email, ngày)
src/services/booking.ts           ← gửi dữ liệu (Formspree / Google Sheets)
src/components/booking/           ← BookingForm, Field, BookingSuccess, Booking.module.css
src/components/sections/Booking.tsx
src/data/profile.ts → contact     ← SĐT, Zalo, email, giờ làm việc, cam kết
```

## Kết nối nơi nhận dữ liệu (chọn 1)

Tạo file `.env.local` ở thư mục gốc (xem `.env.example`):

```
VITE_BOOKING_ENDPOINT=<địa chỉ endpoint>
```

Khi chưa cấu hình: chạy `npm run dev` sẽ **giả lập gửi thành công** (để thử giao diện); bản build thật sẽ báo lỗi và gợi ý khách nhắn Zalo.

### Cách A – Formspree (nhanh nhất, nhận qua email)

1. Đăng ký https://formspree.io → New form → copy endpoint dạng `https://formspree.io/f/xxxxxxx`.
2. Dán vào `VITE_BOOKING_ENDPOINT`, build lại.

### Cách B – Google Sheets (miễn phí, xem dạng bảng)

1. Tạo Google Sheet, hàng 1 đặt tiêu đề cột:
   `gui_luc | loai_chuong_trinh | ngay | buoi | dia_diem | so_khach | ho_ten | so_dien_thoai | email | kenh_lien_he | loi_nhan`
2. Extensions → Apps Script, dán:

```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const d = JSON.parse(e.postData.contents);
  const cols = ['gui_luc', 'loai_chuong_trinh', 'ngay', 'buoi', 'dia_diem', 'so_khach',
                'ho_ten', 'so_dien_thoai', 'email', 'kenh_lien_he', 'loi_nhan'];
  sheet.appendRow(cols.map((c) => d[c] || ''));
  // Tuỳ chọn: gửi email báo có lịch mới
  // MailApp.sendEmail('email-cua-ban@gmail.com', d._subject, JSON.stringify(d, null, 2));
  return ContentService.createTextOutput('ok');
}
```

3. Deploy → New deployment → Web app · Execute as: **Me** · Who has access: **Anyone** → copy URL `https://script.google.com/macros/s/.../exec`.
4. Dán vào `VITE_BOOKING_ENDPOINT`, build lại.

> Lưu ý: Google Apps Script không trả phản hồi đọc được từ trình duyệt (chế độ `no-cors`), nên form coi là thành công khi gửi đi được. Formspree thì kiểm tra được phản hồi.

## Thử nghiệm đã chạy (điện thoại giả lập 390px)

- Trang không bị cuộn xuống form khi vừa tải.
- Bấm "Đặt lịch MC Tiệc cưới" ở Dịch vụ → form chọn sẵn "Tiệc cưới · Đính hôn".
- Bấm Tiếp tục khi chưa điền → hiện lỗi, con trỏ nhảy tới ô lỗi.
- SĐT `012345` → báo sai; chọn liên hệ qua Email mà chưa nhập email → báo lỗi.
- Điền đúng → màn hình Cảm ơn kèm tóm tắt.
- Thanh CTA đáy: hiện ở các section khác, ẩn khi đang ở khu vực form.

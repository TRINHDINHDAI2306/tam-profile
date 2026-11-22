# 06 · Form đặt lịch

## Đã có gì

| Hạng mục | Chi tiết |
|---|---|
| Vị trí | Section `#contact` (`src/components/sections/Booking.tsx`) |
| Bố cục mobile | Liên hệ nhanh (Gọi · Zalo) → Form 2 bước → Cam kết + thông tin liên hệ |
| Bước 1 – Về chương trình | Loại chương trình* (dropdown), Ngày diễn ra* (icon lịch ở cuối ô, bấm cả ô mở lịch, không cho chọn ngày quá khứ), Thời gian (dropdown), Số khách (dropdown), Địa điểm |
| Bước 2 – Thông tin của bạn | Họ tên*, Số điện thoại* (kiểm tra SĐT di động Việt Nam), Lời nhắn (≤ 1.000 ký tự) → nút **Gửi qua Zalo** |
| Dropdown | Dùng `<select>` gốc → trên điện thoại mở bánh xe chọn quen thuộc của iOS/Android; mũi tên tự vẽ màu hồng |
| Kiểm tra dữ liệu | Báo lỗi ngay dưới ô khi rời ô; bấm Tiếp tục/Gửi sẽ đưa con trỏ tới ô lỗi đầu tiên |
| Sau khi bấm | Màn hình "Dán & gửi trên Zalo" – xem mục bên dưới |
| Liên kết | Nút "Đặt lịch …" ở mỗi thẻ Dịch vụ tự chọn sẵn loại chương trình |
| Mobile | Ô nhập 16px (iPhone không tự zoom), bàn phím số cho SĐT, vùng chạm ≥ 44px, thanh CTA đáy tự ẩn khi đang ở form |

Nguyên tắc thiết kế dựa trên nghiên cứu UX form: nhãn luôn hiển thị phía trên ô (không dùng placeholder thay nhãn),
một cột trên mobile, chỉ hỏi thông tin cần thiết, báo lỗi ngay tại ô.

## File liên quan

```
src/types/booking.ts              ← loại chương trình, kiểu dữ liệu form
src/lib/bookingValidation.ts      ← quy tắc kiểm tra (SĐT VN, email, ngày)
src/services/booking.ts           ← soạn tin nhắn Zalo + sao chép
src/components/booking/           ← BookingForm, Field, BookingSuccess, Booking.module.css
src/components/sections/Booking.tsx
src/data/profile.ts → contact     ← SĐT, Zalo, email, giờ làm việc, cam kết
```

## Gửi đặt lịch qua Zalo (không cần máy chủ, không gửi email)

Bước 2 có nút **"Gửi qua Zalo"** (thẻ `<a>` tới `https://zalo.me/<contact.zalo>`, mở tab mới → điện thoại mở thẳng app Zalo):

1. Kiểm tra dữ liệu bước 2 → hợp lệ thì **sao chép** tin nhắn đặt lịch soạn sẵn vào bộ nhớ tạm
   (`buildZaloMessage()` + `copyText()` trong `src/services/booking.ts`) và mở Zalo.
2. Trang web chuyển sang màn hình **"Dán & gửi trên Zalo"** (`BookingSuccess.tsx`): trạng thái sao chép,
   3 bước (mở chat → nhấn giữ → Dán → Gửi), ô xem nội dung tin nhắn (bấm là chọn hết), nút *Mở Zalo* / *Sao chép lại*,
   *Sửa thông tin* / *Đặt lịch khác*.

Vì sao phải dán: link `zalo.me` **không hỗ trợ điền sẵn tin nhắn** (khác WhatsApp `?text=`), nên sao chép + dán là cách
chắc chắn nhất. Sao chép cần trang chạy HTTPS (hoặc localhost) – có cách dự phòng `execCommand('copy')` cho trình duyệt cũ.

Ví dụ tin nhắn:

```
Chào MC Anh Tâm, tôi muốn đặt lịch MC cho chương trình:
📌 Chương trình: Gala Dinner & GEN Party
📅 Ngày: 24/12/2026 – Buổi tối
📍 Địa điểm: Hà Nội
👥 Số khách: 100 – 300 khách
👤 Họ tên: Nguyễn Văn A
📞 SĐT: 0912 345 678
💬 Lời nhắn: …
(Gửi từ website)
```

## Thử nghiệm đã chạy (điện thoại giả lập 390px)

- Trang không bị cuộn xuống form khi vừa tải.
- Bấm "Đặt lịch MC Tiệc cưới" ở Dịch vụ → form chọn sẵn "Tiệc cưới · Đính hôn".
- Bấm Tiếp tục khi chưa điền → hiện lỗi, con trỏ nhảy tới ô lỗi.
- SĐT `012345` → báo sai; chọn liên hệ qua Email mà chưa nhập email → báo lỗi.
- Điền đúng → màn hình Cảm ơn kèm tóm tắt.
- Thanh CTA đáy: hiện ở các section khác, ẩn khi đang ở khu vực form.

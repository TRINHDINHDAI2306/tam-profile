# 05 · Giao việc cho Gemini (Antigravity)

Mở thư mục `D:\Tam_profile` trong Antigravity. Mỗi task dưới đây là **một prompt độc lập** – copy nguyên khối vào agent Gemini.
Trước mọi task, Gemini cần đọc `AGENTS.md` ở thư mục gốc (quy tắc chung của dự án).

---

## G1 · Kiểm tra hiển thị trên nhiều màn hình

```
Đọc AGENTS.md. Chạy `npm run dev`, mở trang bằng trình duyệt tích hợp ở các độ rộng 360, 390, 768, 1280px.
Kiểm tra từng section theo docs/01-SPEC.md mục 3 và 7. Liệt kê lỗi hiển thị (chữ tràn, cuộn ngang, nút < 44px,
khoảng cách lệch). Chỉ sửa lỗi trong file *.module.css tương ứng, KHÔNG đổi bảng màu/font/bố cục.
Cuối cùng chạy `npm run build` phải pass.
```

## G2 · Đưa ảnh thật vào trang

```
Đọc AGENTS.md và docs/04-IMAGE-CHECKLIST.md. Ảnh gốc nằm trong thư mục `raw-images/`.
1) Chuyển sang WebP, cạnh dài 1600px, chất lượng ~80, đặt đúng thư mục trong public/images/.
2) Điền `src` và `alt` (mô tả tiếng Việt) cho từng ảnh trong src/data/profile.ts.
Không sửa component. Chạy `npm run build` phải pass.
```

## G3 · Cập nhật nội dung thật

```
Đọc AGENTS.md. Thay nội dung mẫu trong src/data/profile.ts bằng thông tin trong file `content.md`
(tên, chức danh, tiểu sử, thành tích, học vấn, dịch vụ, sự kiện, mạng xã hội). Giữ đúng kiểu dữ liệu
trong src/types/profile.ts. Cập nhật <title> và meta description trong index.html.
```

## G4 · Ảnh chia sẻ & SEO cơ bản

```
Đọc AGENTS.md. Thêm thẻ Open Graph (og:title, og:description, og:image 1200x630, og:url) và
favicon PNG 180x180 (apple-touch-icon) vào index.html. Ảnh OG đặt ở public/images/og/.
```

## G5 · Deploy

```
Đọc AGENTS.md. Hướng dẫn và cấu hình deploy dự án Vite này lên Vercel (build: `npm run build`,
output: `dist`). Không commit file .env.
```

## G6 · ~~Kết nối form đặt lịch với Google Sheets~~ (bỏ – form đã chuyển sang gửi qua Zalo, xem docs/06)

```
Đọc AGENTS.md và docs/06-BOOKING-FORM.md (form đã code xong, KHÔNG sửa giao diện form).
Hướng dẫn tôi từng bước tạo Google Sheet + Apps Script theo "Cách B", sau đó tạo file .env.local với
VITE_BOOKING_ENDPOINT. Chạy `npm run build && npm run preview`, gửi thử 1 yêu cầu và xác nhận dòng mới
xuất hiện trong Sheet.
```

## G7 · Lưu danh bạ (vCard) + mã QR

```
Đọc AGENTS.md. Trong src/components/sections/Booking.tsx, thêm nút "Lưu danh bạ" dưới khối thông tin liên hệ:
tạo file .vcf (vCard 3.0: FN, TEL, EMAIL, URL, TITLE) từ profile.contact và profile.brand, tải xuống bằng Blob.
Thêm mã QR (SVG, không dùng dịch vụ ngoài – có thể dùng thư viện `qrcode`) trỏ tới URL trang, chỉ hiện từ 1024px.
Giữ phong cách nút btn--ghost hiện tại. `npm run build` phải pass.
```

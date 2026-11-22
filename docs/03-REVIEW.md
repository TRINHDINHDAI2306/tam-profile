# 03 · REVIEW – Đánh giá kỹ thuật: React + TypeScript

## Kết luận

**Làm được, và phù hợp.** Trang one-page tĩnh, không cần backend → **Vite + React 18 + TypeScript (strict)** là lựa chọn nhẹ, build nhanh, deploy miễn phí (Vercel/Netlify). Bản build hiện tại: JS ≈ 55 KB gzip, CSS ≈ 6 KB gzip.

## Quyết định kỹ thuật

| Vấn đề | Lựa chọn | Lý do |
|---|---|---|
| Build tool | Vite 6 | Nhanh, cấu hình tối thiểu, hỗ trợ TS sẵn |
| Kiểu dữ liệu | `src/types/profile.ts` + `strict: true` | Sửa nội dung sai cấu trúc sẽ báo lỗi ngay khi build |
| Nội dung | 1 file `src/data/profile.ts` | Người không biết React vẫn sửa được chữ/ảnh |
| CSS | CSS Modules + biến CSS (`tokens.css`) | Không cần thư viện, không xung đột class, đổi tông màu tại 1 chỗ |
| Router | Không dùng | One-page, điều hướng bằng anchor `#id` |
| Thư viện UI/animation | Không dùng | Lightbox, scroll-spy, fade-up tự viết (< 150 dòng) → nhẹ |
| Ảnh | `SmartImage` + placeholder | Dựng bố cục trước, ảnh thật bổ sung sau không đổi code |

## Cấu trúc thư mục

```
src/
├─ data/profile.ts          ← NỘI DUNG (sửa ở đây)
├─ types/profile.ts         ← kiểu dữ liệu
├─ styles/tokens.css        ← màu, font, khoảng cách
├─ styles/base.css          ← reset, nút, .snap-row
├─ types/booking.ts         ← loại chương trình & dữ liệu form
├─ lib/bookingValidation.ts ← kiểm tra SĐT/email/ngày
├─ services/booking.ts      ← gửi form (Formspree / Google Sheets)
├─ hooks/                   ← useActiveSection (scroll-spy), useScrollLock
└─ components/
   ├─ common/               ← Section, SmartImage, Reveal, Lightbox
   ├─ layout/               ← Header, Footer, MobileCtaBar
   ├─ booking/              ← BookingForm, Field, BookingSuccess
   └─ sections/             ← Hero, Partners, About, Achievements, Services,
                               Events, Gallery, News, Booking
```

## Đã kiểm tra

- `npm run build`: không lỗi TypeScript.
- Chụp màn hình giả lập iPhone 390px và desktop 1280px: không có thanh cuộn ngang, menu mobile phủ toàn màn hình, lightbox mở/đóng/chuyển ảnh được.
- Form đặt lịch: thử đủ luồng trên điện thoại giả lập (lỗi bắt buộc, SĐT sai, email theo kênh liên hệ, gửi thành công, chọn sẵn từ Dịch vụ) – chi tiết ở docs/06.
- Đã sửa 1 lỗi: menu mobile bị "kẹt" trong header vì `backdrop-filter` của header làm `position: fixed` tính theo header → đã đưa menu ra ngoài `<header>`.

## Rủi ro & lưu ý

| Rủi ro | Cách xử lý |
|---|---|
| Ảnh nặng làm chậm trên 4G | Nén WebP ≤ 200 KB; ảnh hero ≤ 300 KB; luôn giữ `ratio` để không nhảy layout |
| Font Google tải chậm | Đã `preconnect` + `display=swap`; có thể tự host font sau |
| Trang dài (~10 màn hình trên điện thoại) | Thanh "Đặt lịch" nổi ở đáy giúp khách luôn có nút hành động; menu có scroll-spy |
| Form đặt lịch cần nơi nhận dữ liệu | Đã code sẵn Formspree / Google Sheets – chỉ cần điền `VITE_BOOKING_ENDPOINT` (docs/06) |
| Spam form | Honeypot; nếu vẫn bị spam có thể bật reCAPTCHA của Formspree |
| SEO cho trang SPA | Đủ cho trang cá nhân; nếu cần SEO mạnh hơn có thể thêm prerender (vite-plugin-prerender) |

## Lệnh

```bash
npm install
npm run dev        # chạy thử: http://localhost:5173 (mở trên điện thoại cùng wifi bằng IP máy)
npm run build      # kiểm tra TypeScript + build ra dist/
npm run preview    # xem bản build
```

# Website Profile – MC Anh Tâm

Trang giới thiệu cá nhân một trang (one-page) cho MC nữ: tông **hồng sang**, **ưu tiên điện thoại**, có **form đặt lịch**.

**Công nghệ:** Vite 6 · React 18 · TypeScript (strict) · CSS Modules. Không dùng backend.

## Chạy dự án

```bash
npm install
npm run dev        # http://localhost:5173 – xem trên điện thoại: http://<IP-máy-tính>:5173 (cùng wifi)
npm run build      # kiểm tra TypeScript + build ra thư mục dist/
npm run preview    # xem bản build
```

## Sửa nội dung & ảnh

Mọi chữ, ảnh, số điện thoại, Zalo… nằm trong **một file**: `src/data/profile.ts` (nội dung lấy từ `docs/source/PHẦN II.docx`).

- Ảnh: đặt vào `public/images/...`, điền `src: '/images/...'`. Để trống `src` sẽ hiện khung placeholder.
- Danh sách ảnh cần chụp: `docs/04-IMAGE-CHECKLIST.md`.

## Form đặt lịch

Cần cấu hình nơi nhận dữ liệu (Formspree hoặc Google Sheets) qua `VITE_BOOKING_ENDPOINT` – xem `docs/06-BOOKING-FORM.md`.

## Cấu trúc

```
src/
├─ data/profile.ts        nội dung
├─ types/                 kiểu dữ liệu (profile, booking)
├─ styles/tokens.css      màu, font, khoảng cách (bảng màu "hồng sang")
├─ lib/ services/         kiểm tra & gửi form đặt lịch
├─ hooks/                 scroll-spy, khóa cuộn
└─ components/
   ├─ common/             Section, SmartImage, Reveal, Lightbox
   ├─ layout/             Header, Footer, MobileCtaBar
   ├─ sections/           Hero, Partners, Story, About, Experience, HostingStyles, Values, Philosophy, Events, Booking
   └─ booking/            BookingForm, Field, BookingSuccess
```

## Tài liệu

| File | Nội dung |
|---|---|
| `docs/01-SPEC.md` | Yêu cầu, bảng màu, bố cục từng section |
| `docs/02-PLAN.md` | Kế hoạch & trạng thái |
| `docs/03-REVIEW.md` | Đánh giá kỹ thuật React + TypeScript |
| `docs/04-IMAGE-CHECKLIST.md` | Ảnh cần bổ sung |
| `docs/05-GEMINI-TASKS.md` | Prompt giao việc cho Gemini (Antigravity) |
| `docs/06-BOOKING-FORM.md` | Form đặt lịch & cách kết nối |
| `AGENTS.md` | Quy tắc chung cho AI agent |

## Deploy

Vercel / Netlify: build command `npm run build`, output `dist`, thêm biến môi trường `VITE_BOOKING_ENDPOINT`.

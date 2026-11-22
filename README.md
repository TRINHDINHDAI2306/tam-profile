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
- Video: khai báo trong `videos` của `src/data/profile.ts`. Hai cách:
  - **File MP4**: video gốc để trong `raw-videos/` (không đưa lên git/web), nén bằng ffmpeg sang
    `public/videos/*.mp4` (H.264 720p, `-movflags +faststart`), ảnh bìa WebP trong `public/images/videos/`,
    rồi điền `src` + `poster`. Video iPhone HDR (HLG) nên chuyển SDR trước bằng `avconvert` để màu không bị bạc.
  - **YouTube**: dán link vào `youtube`.
  `featured` phát ngay tại chỗ (nên là video ngang); video quay dọc đặt `orientation: 'portrait'`.
  Nút "Xem video dẫn chương trình" ở Hero tự hiện khi `featured` có nguồn.

## Form đặt lịch

Khách điền 2 bước rồi bấm **Gửi qua Zalo**: nội dung đặt lịch được sao chép sẵn và Zalo mở khung chat với MC – khách dán và gửi. Không cần máy chủ hay cấu hình – xem `docs/06-BOOKING-FORM.md`.

## Cấu trúc

```
src/
├─ data/profile.ts        nội dung
├─ types/                 kiểu dữ liệu (profile, booking)
├─ styles/tokens.css      màu, font, khoảng cách (bảng màu "hồng sang")
├─ lib/ services/         kiểm tra form, soạn tin nhắn Zalo
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

Vercel / Netlify: build command `npm run build`, output `dist` (cần HTTPS để nút sao chép tin nhắn hoạt động – Vercel/Netlify có sẵn).

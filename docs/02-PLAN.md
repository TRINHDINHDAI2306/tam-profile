# 02 · PLAN – Kế hoạch triển khai

Cột **Người làm**: `Claude` = đã/đang làm trong phiên này · `Gemini` = có thể giao cho Gemini trong Antigravity (xem `docs/05-GEMINI-TASKS.md`) · `Bạn` = cần bạn cung cấp.

## Giai đoạn 1 – Bố cục (Layout)

| Bước | Việc | Người làm | Trạng thái |
|---|---|---|---|
| 1.1 | Viết SPEC, PLAN, REVIEW | Claude | ✅ |
| 1.2 | Khởi tạo Vite + React 18 + TypeScript (strict) | Claude | ✅ |
| 1.3 | Design tokens (màu, font, spacing) – `src/styles/tokens.css` | Claude | ✅ |
| 1.4 | Kiểu dữ liệu `src/types/profile.ts` + dữ liệu mẫu `src/data/profile.ts` | Claude | ✅ |
| 1.5 | Component dùng chung: `Section`, `SmartImage`, `Reveal`, `Lightbox` | Claude | ✅ |
| 1.6 | Header + menu mobile, Hero, Partners marquee | Claude | ✅ |
| 1.7 | About, Achievements, Services | Claude | ✅ |
| 1.8 | Events (lọc), Gallery (tab + lightbox), News | Claude | ✅ |
| 1.9 | Contact placeholder, Footer, nút CTA nổi mobile | Claude | ✅ |
| 1.10 | Kiểm tra build, rà soát hiển thị 390/1280 | Claude | ✅ |
| 1.11 | Rà soát trực quan thêm 360/768 (task G1) | Gemini | ⏳ |

## Giai đoạn 2 – Ảnh & nội dung thật

| Bước | Việc | Người làm |
|---|---|---|
| 2.1 | Gửi ảnh theo `docs/04-IMAGE-CHECKLIST.md` | Bạn |
| 2.2 | Nén ảnh sang WebP (≤ 200KB/ảnh, hero ≤ 300KB), đặt vào `public/images` | Gemini |
| 2.3 | Điền đường dẫn ảnh + nội dung thật vào `src/data/profile.ts` | Gemini |
| 2.4 | Ảnh Open Graph 1200×630 cho chia sẻ Facebook/Zalo | Gemini |

## Giai đoạn 3 – Thành phần liên hệ & form đặt lịch

| Bước | Việc | Người làm | Trạng thái |
|---|---|---|---|
| 3.1 | Chốt kênh & điền SĐT, Zalo, email thật vào `contact` trong `src/data/profile.ts` | Bạn | ⏳ |
| 3.2 | Form đặt lịch 2 bước + kiểm tra dữ liệu + trạng thái gửi | Claude | ✅ |
| 3.3 | Gửi đặt lịch qua Zalo (sao chép tin nhắn soạn sẵn + mở chat) | Claude | ✅ |
| 3.4 | ~~Endpoint nhận form~~ – không cần nữa (đã chuyển sang Zalo) | – | – |
| 3.5 | Thanh CTA đáy mobile: Gọi · Zalo · Đặt lịch (tự ẩn khi ở form) | Claude | ✅ |
| 3.6 | Nút "Lưu danh bạ" (vCard `.vcf`) + mã QR (task G7) | Gemini | ⏳ |

## Giai đoạn 4 – Triển khai

| Bước | Việc |
|---|---|
| 4.1 | Deploy lên Vercel hoặc Netlify (miễn phí), gắn tên miền riêng |
| 4.2 | Chạy Lighthouse mobile, sửa đến khi đạt mục tiêu trong SPEC §4 |

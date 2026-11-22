# Quy tắc dự án – Website profile MC Anh Tâm

Dành cho mọi AI agent (Gemini/Antigravity, Claude…) làm việc trong repo này.

## Bối cảnh
- Trang one-page giới thiệu MC Anh Tâm, **ưu tiên điện thoại**, tông **hồng sang – nhẹ nhàng – chuyên nghiệp**.
- Nguồn nội dung: `docs/source/PHẦN II.docx` (giữ nguyên văn, không tự thêm số liệu/thành tích). Ảnh gốc: `raw-images/` → bản nén WebP trong `public/images/`.
- Không đặt file nguồn (docx, ảnh gốc, ảnh chụp màn hình) trong `public/` – mọi file ở đó đều bị đăng lên mạng.
- Tài liệu: `docs/01-SPEC.md` (yêu cầu), `docs/02-PLAN.md` (kế hoạch), `docs/03-REVIEW.md` (kỹ thuật),
  `docs/04-IMAGE-CHECKLIST.md` (ảnh), `docs/05-GEMINI-TASKS.md` (các task), `docs/06-BOOKING-FORM.md` (form đặt lịch).
- Form đặt lịch đã hoàn thiện: logic ở `src/lib`, `src/services`, giao diện ở `src/components/booking`. Không viết lại form.

## Stack
Vite 6 · React 18 · TypeScript strict · CSS Modules. Không thêm thư viện UI/CSS (Tailwind, MUI…) nếu chưa được đồng ý.

## Quy tắc bắt buộc
1. **Không đổi thiết kế đã chốt**: bảng màu, font (Playfair Display + Be Vietnam Pro), bo góc, bố cục section.
   Màu chỉ lấy từ biến trong `src/styles/tokens.css` – không hard-code màu mới.
2. **Nội dung chỉ sửa trong `src/data/profile.ts`**; khi thêm trường mới phải cập nhật `src/types/profile.ts`.
3. Viết CSS **mobile-first**: style mặc định cho 360–430px, mở rộng bằng `@media (min-width: 640px | 1024px)`.
4. Vùng chạm ≥ 44px; không tạo thanh cuộn ngang ở 360px; ảnh luôn có `alt` tiếng Việt.
5. Chữ nhỏ trên nền hồng dùng `--c-rose-deep` (không dùng `--c-rose`) để đủ độ tương phản.
6. Mỗi component một file `.tsx` + một file `.module.css` cùng tên.
7. Ngắt dòng tiếng Việt: nội dung đi qua `typeset()` trong `src/lib/typography.ts` để từ ghép không bị tách ở cuối dòng.
   Thấy chỗ ngắt chưa đẹp → thêm cụm vào `NAMES` (tên riêng, luôn liền) hoặc `WORDS` (từ ghép). Chữ viết cứng trong
   component bọc bằng `vn('...')`. Không gõ trực tiếp ký tự dấu cách không ngắt vào code.
8. Xong việc phải chạy `npm run build` (bao gồm kiểm tra TypeScript) và đảm bảo pass.

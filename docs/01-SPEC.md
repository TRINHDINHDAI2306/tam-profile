# 01 · SPEC – Website Profile cá nhân (nữ)

> Tham chiếu bố cục: https://nguyendangtinh.com (trang one-page của MC Đăng Tình).
> Mục tiêu: làm trang tương tự cho một **profile nữ**, với **nền hồng sang trọng**, **chuyên nghiệp**, **ưu tiên điện thoại (mobile-first)**.

## 1. Mục tiêu & phạm vi

| Hạng mục | Mô tả |
|---|---|
| Mục tiêu chính | Giới thiệu bản thân chuyên nghiệp, để khách hàng/đối tác xem nhanh năng lực và **đặt lịch / liên hệ** |
| Người xem chính | Người dùng điện thoại (≈ 80–90% lượt xem, thường đến từ link Facebook/Zalo/TikTok) |
| Dạng trang | One-page, cuộn dài, có điều hướng neo (anchor) tới từng mục |
| Giai đoạn 1 (hiện tại) | **Bố cục + nội dung mẫu + ảnh giữ chỗ (placeholder)** |
| Giai đoạn 2 | Thay ảnh thật, nội dung thật |
| Giai đoạn 3 | **Thành phần liên hệ**: form đặt lịch ✅ (xem `docs/06-BOOKING-FORM.md`), Gọi/Zalo ✅ · còn lại: Messenger, lưu danh bạ vCard, QR |

**Ngoài phạm vi giai đoạn 1:** backend, CMS, đa ngôn ngữ, gửi form thật, nhúng bài Facebook.

## 2. Định hướng thiết kế – "Hồng sang"

### 2.1 Bảng màu (design tokens)

| Token | Mã màu | Dùng cho |
|---|---|---|
| `--c-bg` | `#FBF3F2` | Nền chính – hồng ngà rất nhạt |
| `--c-bg-alt` | `#F6E3E3` | Nền section xen kẽ – hồng phấn |
| `--c-surface` | `#FFFFFF` | Thẻ (card) |
| `--c-rose` | `#B4536B` | Màu nhấn chính – hồng đất / rose |
| `--c-rose-deep` | `#7A2E45` | Hover, nút đậm |
| `--c-plum` | `#3B1F2B` | Chữ tiêu đề – nâu mận đậm (thay cho đen) |
| `--c-text` | `#5A4450` | Chữ nội dung |
| `--c-muted` | `#9A8590` | Chữ phụ |
| `--c-gold` | `#C9A27E` | Viền, đường kẻ, icon – vàng champagne / rose-gold |
| `--c-line` | `#EBD5D7` | Đường phân cách |

Nguyên tắc: **không dùng hồng neon/hồng cánh sen chói**. Sang trọng nhờ: nền nhạt + chữ mận đậm + điểm nhấn rose-gold mảnh + nhiều khoảng trắng.

### 2.2 Typography

- Tiêu đề: **Playfair Display** (serif, có nghiêng *italic* để nhấn tên) – hỗ trợ tiếng Việt.
- Nội dung: **Be Vietnam Pro** (sans-serif, dấu tiếng Việt đẹp).
- Thang chữ mobile: H1 40px · H2 30px · H3 20px · body 16px · small 13px. Desktop tăng ~1.25×.

### 2.3 Ngôn ngữ hình ảnh

- Ảnh chân dung bo góc lớn kiểu **vòm (arch)** cho hero – nét nữ tính, thanh lịch.
- Thẻ bo góc 20px, bóng đổ hồng rất nhẹ (`rgba(122,46,69,.08)`).
- Đường kẻ mảnh màu gold, chữ "eyebrow" in hoa giãn chữ phía trên tiêu đề section.
- Hiệu ứng: fade-up khi cuộn tới (tôn trọng `prefers-reduced-motion`).

## 3. Cấu trúc trang (thứ tự section)

Nội dung bám theo 9 trang của `docs/source/PHẦN II.docx` (hồ sơ năng lực **MC Anh Tâm**).

| # | Section | Anchor | Nội dung (trang docx) | Ảnh |
|---|---|---|---|---|
| 0 | Header | – | Monogram AT, menu 6 mục, nút Đặt lịch | – |
| 1 | Hero | `#hero` | Trang 1 – Bìa: tên, 3 vai trò, slogan, câu trích | Vest đen (hội nghị) |
| 2 | Dấu ấn tiêu biểu | – | Dải chữ chạy: Tốt Động, Rung Chuông Vàng, Voi Land… | – |
| 3 | Lời ngỏ | `#story` | Trang 2 – câu hỏi + 3 đoạn câu chuyện nghề | Chân dung hậu trường |
| 4 | Giới thiệu | `#about` | Trang 3 – đoạn giới thiệu, vai trò, 3 trụ cột | Dẫn lễ tốt nghiệp |
| 5 | Kinh nghiệm | `#experience` | Trang 4–5 – 7 không gian sự kiện, nút đặt lịch theo từng mảng | 4 ảnh thật + 3 ô chờ ảnh |
| 6 | Phong cách | `#style` | Trang 6 – 5 sắc thái dẫn | – |
| 7 | Giá trị | `#values` | Trang 7 – 6 điểm tựa | – |
| 8 | Triết lý & thơ | `#philosophy` | Trang 8–9 – khối trích dẫn hồng + bài thơ 2 khổ | – |
| 9 | Hình ảnh sự kiện | `#events` | 7 ảnh thật, lọc theo loại, phóng to (lightbox) | 7 ảnh |
| 10 | Đặt lịch | `#contact` | Gọi · Zalo, form 2 bước, cam kết, SĐT/email/Facebook | – |
| 11 | Footer | – | Tên, slogan, Facebook | – |
| ★ | Thanh CTA đáy (mobile) | – | Gọi · Zalo · Đặt lịch ngay, tự ẩn khi ở form | – |

## 4. Yêu cầu mobile-first

1. Viết CSS cho màn **360–430px trước**, mở rộng bằng `min-width` media query: `640px` (tablet), `1024px` (desktop).
2. Vùng chạm ≥ **44×44px**; khoảng cách lề ngang 20px.
3. Không có thanh cuộn ngang ngoài ý muốn ở 360px.
4. Hỗ trợ `safe-area-inset` (tai thỏ iPhone) cho header và thanh CTA đáy.
5. Ảnh `loading="lazy"` (trừ ảnh hero), có `width/height` hoặc `aspect-ratio` để không nhảy layout.
6. Lighthouse mobile mục tiêu: Performance ≥ 90, Accessibility ≥ 95.

## 5. Dữ liệu & ảnh

- **Toàn bộ nội dung** nằm trong một file `src/data/profile.ts` (có kiểu TypeScript) → chỉ sửa file này để đổi chữ/ảnh, không cần đụng component.
- Ảnh đặt trong `public/images/...`. Khi trường `src` để trống, component `SmartImage` hiển thị **khung placeholder hồng** kèm nhãn mô tả ảnh cần chụp.
- Danh sách ảnh cần bổ sung: xem `docs/04-IMAGE-CHECKLIST.md`.

## 6. Khả năng tiếp cận (a11y) & SEO

- Ngữ nghĩa HTML: `header / nav / main / section[aria-labelledby] / footer`.
- Độ tương phản chữ ≥ 4.5:1 (mận `#3B1F2B` trên nền `#FBF3F2` ≈ 14:1 ✔; rose `#B4536B` trên trắng ≈ 4.8:1 ✔, nhưng trên nền hồng ngà chỉ ≈ 4.4:1 → **chữ nhỏ trên nền hồng dùng `--c-rose-deep`**, `--c-rose` dành cho chữ lớn/nút/icon).
- Lightbox: đóng bằng `Esc`, khóa cuộn nền, focus vào nút đóng.
- Meta title/description, Open Graph (ảnh chia sẻ Facebook/Zalo) – bổ sung khi có ảnh.

## 7. Tiêu chí hoàn thành giai đoạn 1

- [ ] `npm run build` chạy không lỗi TypeScript.
- [ ] Đủ 10 section theo bảng mục 3, đúng thứ tự, anchor hoạt động.
- [ ] Hiển thị đẹp ở 360px, 390px, 768px, 1280px.
- [ ] Mọi ảnh đều có placeholder và nhãn mô tả.
- [ ] Đổi nội dung chỉ cần sửa `src/data/profile.ts`.

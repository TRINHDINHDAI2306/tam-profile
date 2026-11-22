# 04 · Ảnh

## Đã có (7 ảnh – nén WebP trong `public/images/`, ảnh gốc trong `raw-images/`)

| File | Nội dung | Dùng ở |
|---|---|---|
| `hero/vest-den-hoi-nghi.webp` | Vest đen, cầm micro trên sân khấu hội nghị | Bìa (hero), Hình ảnh sự kiện |
| `story/chan-dung-hau-truong.webp` | Chân dung bên bàn kịch bản | Lời ngỏ, Hình ảnh sự kiện |
| `about/dan-le-tot-nghiep.webp` | Dẫn Lễ tốt nghiệp – Học viện MC Văn Minh | Giới thiệu, Hình ảnh sự kiện |
| `events/le-tong-ket-phung-hieu-2026.webp` | Lễ tổng kết năm 2026 – Cty Sách & Giáo dục Phụng Hiếu | Kinh nghiệm: Hội nghị |
| `events/le-tot-nghiep-hv-mc-van-minh.webp` | Lễ tốt nghiệp Wedding K81 – Event K76 | Kinh nghiệm: Giáo dục |
| `events/gala-dinner-hv-mc-van-minh.webp` | Gala Dinner – Học viện MC Văn Minh | Kinh nghiệm: Gala |
| `events/ngay-hoi-dai-doan-ket.webp` | Áo dài hồng – Ngày hội Đại đoàn kết toàn dân tộc | Kinh nghiệm: Cộng đồng |

## Còn thiếu (đang hiện khung chờ ảnh)

| Vị trí | Ảnh cần | Tỉ lệ |
|---|---|---|
| Kinh nghiệm 01 – Văn hóa – Lịch sử | Chương trình Kỷ niệm 600 năm Chiến thắng Tốt Động | Ngang 4:3 |
| Kinh nghiệm 05 – Livestream | Phiên livestream quảng bá nông sản | Ngang 4:3 |
| Kinh nghiệm 06 – Cưới hỏi | Dẫn tiệc cưới / lễ gia đình | Ngang 4:3 |
| (Tuỳ chọn) Ảnh chia sẻ Facebook/Zalo | Ảnh bìa 1200×630 | Ngang |
| (Tuỳ chọn) Bìa studio | Chân dung bán thân, ánh sáng Rembrandt (theo gợi ý trang bìa trong docx) | Dọc 4:5 |

## Cách thêm ảnh

1. Bỏ ảnh gốc vào `raw-images/`.
2. Nén sang WebP (cạnh dài 1600px, chất lượng ~80) → đặt vào `public/images/<thư-mục>/`.
3. Trong `src/data/profile.ts`, thay `ph(...)` của mục tương ứng bằng
   `{ src: '/images/...webp', alt: '...', position: 'center 30%' }`
   (`position` = điểm lấy nét khi cắt ảnh, giữ khuôn mặt trong khung).

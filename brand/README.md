# Bộ nhận diện – Logo MC Anh Tâm

**Ý tưởng:** chữ **A** (hồng đậm `#7a2e45`) lồng với chữ **T** (vàng champagne `#c9a27e`). Nét đuôi uốn của chữ T
tạo vẻ nữ tính, còn nét chữ serif nghiêng giữ sự chuyên nghiệp. Vòng tròn mảnh và ngôi sao bốn cánh ở đỉnh tượng trưng
cho "ánh đèn sân khấu".
Font: Playfair Display Italic (tên) + Be Vietnam Pro (dòng phụ), cùng bộ font với website. Chữ đã chuyển thành nét
vector nên mở ở đâu cũng hiển thị đúng, không cần cài font.

| File | Dùng khi |
|---|---|
| `logo-ngang.svg` | Website, chữ ký email, banner ngang |
| `logo-doc.svg` | Ấn phẩm in, backdrop, standee, trang bìa profile |
| `logo-bieu-tuong.svg` | Ảnh đại diện mạng xã hội, watermark ảnh/video |
| `*-nen-toi.svg` | Các bản trên dành cho nền tối (tím than `#3b1f2b`, ảnh tối) |
| `icon-ung-dung.svg` | Favicon, biểu tượng trên màn hình điện thoại |
| `png/` | Bản PNG nền trong suốt, độ phân giải cao (Canva, Word, in nhanh) |

**Lưu ý khi dùng**
- Chừa khoảng trống quanh logo tối thiểu bằng chiều cao chữ "A".
- Không kéo méo, không đổi màu ngoài bảng màu, không thêm bóng đổ hay viền.
- Biểu tượng nhỏ hơn 32px thì dùng `icon-ung-dung.svg` (nét dày hơn, nền hồng).

Trên website, biểu tượng được vẽ bằng component `src/components/common/Logo.tsx` (màu lấy từ `tokens.css`).

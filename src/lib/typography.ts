/**
 * Ngắt dòng tiếng Việt: trình duyệt ngắt ở mọi dấu cách, nên từ ghép (ví dụ "sân khấu")
 * có thể bị tách đôi ở cuối dòng. `vn()` thay dấu cách bên trong các từ ghép / cụm cố định
 * bằng dấu cách không ngắt (U+00A0) để chúng luôn nằm trọn trên một dòng.
 *
 * Hai mức:
 *  - vn():      đầy đủ (NAMES + WORDS) – tiêu đề, trích dẫn, chú thích, đoạn văn ở cột rộng.
 *  - vnLight(): chỉ NAMES – đoạn mô tả trong thẻ hẹp. Dính quá nhiều cụm ở cột hẹp + căn đều
 *               hai bên sẽ làm khoảng trắng giữa các chữ giãn rất rộng.
 *
 * Thêm cụm mới vào NAMES / WORDS khi thấy chỗ ngắt dòng chưa đẹp (không phân biệt hoa/thường).
 */
const NBSP = String.fromCharCode(0xa0); // dấu cách không ngắt (U+00A0)

/** Tên riêng, chương trình, đơn vị, cụm số – luôn giữ liền. */
const NAMES = [
  'MC Anh Tâm', 'Anh Tâm', 'Voi Land', 'Rung Chuông Vàng', 'Chiến thắng Tốt Động', 'Tốt Động',
  'Học viện', 'MC Văn Minh', 'Văn Minh', 'Phụng Hiếu', 'Công ty', 'Đại đoàn kết', 'toàn dân tộc',
  'Gala Dinner', 'GEN Party', 'Ban tổ chức', 'tiếng Việt', 'Kỷ niệm 600 năm', '600 năm', 'Wedding K81',
  'Event K76', 'Lễ tổng kết', 'Chúc Động', 'Quảng Bị', 'Đại học Sư phạm Hà Nội', 'Sư phạm Hà Nội', 'Khoa Lịch sử',
  'tân sinh viên', 'Khóa 75', 'Trung tâm Văn hóa', 'Thể thao', 'Học tập cộng đồng', 'Phú La', 'Trăng rằm', 'cây cảnh',
  'Lễ ra mắt', 'Nhà giáo Việt Nam', 'Anh Thảo Group', 'Lễ khai trương',
  'Phụ nữ Việt Nam', 'Đại sứ Văn hóa đọc', 'Văn hóa đọc', 'Lễ phát động', 'Lễ thành hôn', 'Kết nối thịnh vượng',
  'Vững bước tương lai', 'Đêm hội', 'nhà xưởng', 'ghi hình',
];

/** Từ ghép thông dụng – giữ liền ở tiêu đề và đoạn văn cột rộng. */
const WORDS = [
  'tạo nên', 'làm nên', 'mang đến', 'biết đến',
  // Nghề MC & sự kiện
  'dẫn chương trình', 'chương trình', 'sân khấu', 'sự kiện', 'kịch bản', 'lời dẫn', 'khán giả',
  'khán phòng', 'khách mời', 'diễn giả', 'hội trường', 'hội nghị', 'tọa đàm', 'chuyên đề', 'kỷ niệm',
  'livestream', 'quảng bá', 'thương mại', 'nông sản', 'địa phương', 'đặc sản', 'quê hương',
  'cưới hỏi', 'gia đình', 'cộng đồng', 'hoạt động', 'học đường', 'học sinh', 'giáo dục', 'nhà giáo',
  'biên tập', 'biên tập viên', 'nội dung', 'cánh gà', 'ekip', 'âm thanh', 'ánh sáng', 'ánh đèn',
  'đạo diễn', 'nhạc hiệu', 'ra mắt', 'tri ân', 'nghệ thuật', 'chính thống', 'bữa tiệc', 'đêm tiệc',
  'tổng kết', 'tốt nghiệp', 'hậu trường', 'chuẩn bị', 'khách hàng', 'sản phẩm', 'người sản xuất',
  'người nông dân', 'nhân vật', 'tham dự', 'thời lượng', 'tiến độ', 'nhịp độ',
  // Từ ghép thường gặp trong nội dung
  'văn hóa', 'lịch sử', 'dân tộc', 'giao thoa', 'chuẩn mực', 'chuẩn xác', 'tư duy', 'cảm xúc',
  'hành trình', 'kinh nghiệm', 'phong cách', 'phong thái', 'giao tiếp', 'ngôn từ', 'ngôn ngữ',
  'chỉn chu', 'sắc sảo', 'ấm áp', 'tâm huyết', 'màu sắc', 'riêng biệt', 'bản sắc', 'bản chất',
  'nhất quán', 'đa sắc màu', 'sắc thái', 'linh hoạt', 'thấu hiểu', 'không gian', 'phù hợp',
  'trân trọng', 'thanh âm', 'công sức', 'thầm lặng', 'phút giây', 'hiện diện', 'khoảnh khắc',
  'câu chuyện', 'đơn thuần', 'cầu nối', 'vô hình', 'trái tim', 'sinh thể', 'nhịp đập', 'lắng đọng',
  'trang nghiêm', 'tôn vinh', 'giá trị', 'bùng nổ', 'rộn rã', 'gắn kết', 'tâm hồn', 'đời thường',
  'mộc mạc', 'chân thành', 'lan tỏa', 'tỏa sáng', 'thắp sáng', 'giữ nhịp', 'giữ lửa', 'giữ chân',
  'nhịp cầu', 'ký ức', 'dư âm', 'thành công', 'mảnh ghép', 'rời rạc', 'bức tranh', 'trọn vẹn',
  'đáng nhớ', 'trở thành', 'tần số', 'lắng xuống', 'kết nối', 'điều phối', 'nhịp nhàng', 'khúc chiết',
  'cởi mở', 'tương tác', 'niềm tin', 'tuyệt đối', 'điềm đạm', 'kiến thức', 'nền tảng', 'làm chủ',
  'xử lý', 'tình huống', 'văn minh', 'tinh tế', 'bản lĩnh', 'micro', 'điều chỉnh', 'hòa quyện',
  'tinh thần', 'trang trọng', 'giọng đọc', 'trầm ấm', 'hào sảng', 'sức gợi', 'trau chuốt', 'sống động',
  'khơi dậy', 'niềm tự hào', 'tự hào', 'tâm lý', 'hào hứng', 'công bằng', 'kịch tính', 'gần gũi',
  'truyền cảm hứng', 'cảm hứng', 'tự tin', 'nghiêm nghị', 'năng lượng', 'trẻ trung', 'hiện đại',
  'hoạt náo', 'hài hước', 'chừng mực', 'khuấy động', 'không khí', 'tập thể', 'ồn ào', 'mồ hôi',
  'am hiểu', 'bền vững', 'nhẹ nhàng', 'thiêng liêng', 'tình thân', 'chúc phúc', 'chất thơ',
  'nhiệt huyết', 'nhân ái', 'tích cực', 'xã hội', 'tấm lòng', 'lịch lãm', 'năng động', 'xu hướng',
  'dí dỏm', 'gượng gạo', 'thuyết phục', 'thẩm mỹ', 'phong phú', 'phát âm', 'nhấn nhá', 'đối tượng',
  'xây dựng', 'mục tiêu', 'chủ động', 'phối hợp', 'hoàn thiện', 'mạch lạc', 'điểm nhấn', 'ứng biến',
  'bình tĩnh', 'rèn giũa', 'môi trường', 'thực tế', 'khéo léo', 'phát sinh', 'kiểm soát', 'tổng thể',
  'ăn ý', 'bộ phận', 'truyền tải', 'lắng nghe', 'phản ứng', 'kịp thời', 'tác phong', 'chuyên nghiệp',
  'trách nhiệm', 'có mặt', 'nghiên cứu', 'kỹ lưỡng', 'thông tin', 'hàng đầu', 'điểm tựa', 'tin cậy',
  'liên hệ', 'sớm nhất', 'trên đài', 'phô trương', 'yêu thương', 'an lành', 'miền ký ức',
  'ống kính', 'giới thiệu', 'lời ngỏ', 'triết lý', 'làm nghề', 'ngôn từ', 'hình ảnh', 'đặt lịch', 'liên hệ nhanh',
];

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Cụm dài trước để "dẫn chương trình" thắng "chương trình".
// Không dùng lookbehind (?<!…): Safari < 16.4 (iPhone đời cũ) không hỗ trợ và sẽ làm hỏng cả trang.
const buildPattern = (phrases: string[]) =>
  new RegExp(
    `(^|[^\\p{L}])(${[...new Set(phrases)]
      .filter((p) => p.includes(' '))
      .sort((a, b) => b.length - a.length)
      .map((p) => escape(p).replace(/ /g, '\\s+'))
      .join('|')})(?=[^\\p{L}]|$)`,
    'giu',
  );

const FULL = buildPattern([...NAMES, ...WORDS]);
const LIGHT = buildPattern(NAMES);

/** "&", "–" luôn dính với chữ đứng trước; số + năm/ngày đi liền nhau. */
const glue = (text: string, pattern: RegExp) =>
  text
    .replace(pattern, (_m, pre: string, word: string) => pre + word.replace(/\s+/g, NBSP))
    .replace(/ ([–&])/g, `${NBSP}$1`)
    .replace(/(năm|ngày|tháng|lớp) (\d)/giu, `$1${NBSP}$2`);

/** Giữ tên riêng và từ ghép trên cùng một dòng. */
export const vn = (text: string) => glue(text, FULL);

/** Chỉ giữ tên riêng / cụm số – dùng cho đoạn văn trong thẻ hẹp. */
export const vnLight = (text: string) => glue(text, LIGHT);

/** Các khoá không phải văn bản hiển thị (đường dẫn, mã, số liên hệ) – giữ nguyên. */
const SKIP_KEYS = new Set(['src', 'url', 'href', 'id', 'position', 'phone', 'zalo', 'email', 'bookingType', 'monogram', 'youtube', 'poster', 'orientation', 'duration']);

/** Đoạn mô tả nằm trong thẻ hẹp (trụ cột, không gian sự kiện, phong cách, giá trị). */
const LIGHT_KEYS = new Set(['description']);

/** Áp `vn()` (hoặc `vnLight()` cho mô tả trong thẻ) cho mọi chuỗi văn bản trong object nội dung. */
export function typeset<T>(value: T, key = ''): T {
  if (typeof value === 'string') {
    if (SKIP_KEYS.has(key)) return value;
    return (LIGHT_KEYS.has(key) ? vnLight(value) : vn(value)) as T;
  }
  if (Array.isArray(value)) return value.map((v) => typeset(v, key)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, typeset(v, k)])) as T;
  }
  return value;
}

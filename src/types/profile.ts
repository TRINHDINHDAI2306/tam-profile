import type { EventTypeId } from './booking';

/** Ảnh: để `src` rỗng ('') thì SmartImage hiển thị placeholder kèm `label`. */
export interface ImageAsset {
  src: string;
  alt: string;
  /** Mô tả ảnh cần chụp/bổ sung – hiển thị trên placeholder. */
  label?: string;
  /** Điểm lấy nét khi cắt ảnh (CSS object-position), ví dụ 'center 20%'. */
  position?: string;
}

export interface NavItem {
  id: string;
  label: string;
}

/** Trang 1 – Bìa */
export interface Hero {
  firstName: string;
  /** Phần tên in nghiêng, tô màu nhấn. */
  highlightName: string;
  roles: string[];
  /** Slogan chính. */
  tagline: string;
  portrait: ImageAsset;
  /** Nhãn nổi trên ảnh (tuỳ chọn). Chỉ điền khi có số liệu thật. */
  badge?: { value: string; label: string };
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

/** Trang 2 – Lời ngỏ */
export interface Story {
  heading: string;
  paragraphs: string[];
  photo: ImageAsset;
}

export interface Pillar {
  title: string;
  /** Vai trò ngắn gọn hiển thị dưới tiêu đề, ví dụ 'Biên tập viên'. */
  role?: string;
  description: string;
}

/** Trang 3 – Giới thiệu */
export interface About {
  heading: string;
  intro: string;
  photo: ImageAsset;
  fields: string[];
  pillars: Pillar[];
}

/** Trang 4 & 5 – Các không gian sự kiện */
export interface ExperienceArea {
  title: string;
  /** Chương trình tiêu biểu (nếu có). */
  highlight?: string;
  description: string;
  image: ImageAsset;
  /** Loại chương trình được chọn sẵn trong form khi bấm "Đặt lịch". */
  bookingType: EventTypeId;
}

/** Trang 6 – Phong cách dẫn */
export interface HostingStyle {
  title: string;
  description: string;
  /** Phù hợp với loại chương trình nào (nếu có). */
  suitableFor?: string;
}

/** Triết lý làm nghề */
export interface Philosophy {
  heading: string;
  paragraphs: string[];
}

export interface EventItem {
  caption: string;
  category: string;
  image: ImageAsset;
}

/**
 * Video – một trong hai nguồn:
 *  - `src`: file MP4 đã nén đặt trong public/videos (ví dụ '/videos/ten-video.mp4') – được ưu tiên.
 *  - `youtube`: link YouTube (youtube.com/watch?v=…, youtu.be/…, youtube.com/shorts/…).
 * Không có nguồn nào thì hiện khung chờ kèm `label` (chỉ khi chạy dev – bản build tự ẩn).
 */
export interface VideoItem {
  src?: string;
  youtube?: string;
  title: string;
  category: string;
  /** 'landscape' = ngang 16:9 (mặc định) · 'portrait' = dọc 9:16 (quay dọc, Shorts, TikTok/Reels). */
  orientation?: 'landscape' | 'portrait';
  /** Ảnh bìa (ví dụ '/images/videos/...webp'); bỏ trống thì dùng ảnh bìa YouTube (nếu có). */
  poster?: string;
  /** Điểm lấy nét khi cắt ảnh bìa (CSS object-position), ví dụ 'center 30%'. */
  position?: string;
  /** Thời lượng hiển thị, ví dụ '1:30'. */
  duration?: string;
  /** Ghi chú video cần bổ sung – hiển thị trên khung chờ. */
  label?: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface Contact {
  /** Số hiển thị, ví dụ '0901 234 567'. */
  phone: string;
  /** Số Zalo (chỉ chữ số) – dùng cho link https://zalo.me/<số>. */
  zalo: string;
  email: string;
  area: string;
  /** Giờ nhận liên hệ (tuỳ chọn). */
  hours?: string;
  /** Trang 8 – Lời hẹn với đối tác, hiển thị ở phần Đặt lịch. */
  invitation: {
    /** Nhãn nhỏ phía trên tiêu đề phần Đặt lịch. */
    label: string;
    /** Câu mở đầu – hiển thị dưới tiêu đề. */
    lead: string;
    /** Lời nhắn – hiển thị phía trên nút liên hệ nhanh. */
    message: string;
  };
}

export interface Profile {
  brand: { monogram: string; name: string; tagline: string };
  nav: NavItem[];
  hero: Hero;
  highlights: { label: string; items: string[] };
  story: Story;
  about: About;
  experience: { heading: string; subtitle: string; areas: ExperienceArea[] };
  styles: { heading: string; intro: string; items: HostingStyle[] };
  philosophy: Philosophy;
  events: EventItem[];
  /** Video: `featured` (nên là video ngang) phát ngay tại chỗ; `clips` là dãy video vuốt ngang. */
  videos: { heading: string; intro: string; featured: VideoItem; clips: VideoItem[] };
  contact: Contact;
  socials: SocialLink[];
}

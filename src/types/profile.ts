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
  quote: string;
  portrait: ImageAsset;
  /** Nhãn nổi trên ảnh (tuỳ chọn). Chỉ điền khi có số liệu thật. */
  badge?: { value: string; label: string };
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

/** Trang 2 – Lời ngỏ */
export interface Story {
  heading: string;
  question: string;
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

/** Trang 7 – Giá trị */
export interface Value {
  title: string;
  description: string;
}

/** Trang 8 & 9 – Triết lý & thơ */
export interface Philosophy {
  heading: string;
  paragraphs: string[];
  poemTitle: string;
  /** Mỗi khổ thơ là một mảng các câu. */
  poem: string[][];
}

export interface EventItem {
  caption: string;
  category: string;
  image: ImageAsset;
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
  /** Các điểm cam kết hiển thị cạnh form đặt lịch. */
  promises: string[];
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
  values: { heading: string; items: Value[] };
  philosophy: Philosophy;
  events: EventItem[];
  contact: Contact;
  socials: SocialLink[];
}

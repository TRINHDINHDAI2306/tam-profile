import { profile } from '@/data/profile';
import { EVENT_TYPES, type BookingData } from '@/types/booking';

/**
 * Đặt lịch qua Zalo – không cần máy chủ.
 * zalo.me không cho điền sẵn tin nhắn, nên web sao chép nội dung đặt lịch rồi mở khung chat Zalo với MC;
 * khách chỉ cần dán và bấm Gửi.
 */
export const zaloChatUrl = () => `https://zalo.me/${profile.contact.zalo}`;

const formatDate = (iso: string) => {
  const [y, m, d] = iso.split('-');
  return y && m && d ? `${d}/${m}/${y}` : iso;
};

/** Tin nhắn đặt lịch soạn sẵn để dán vào Zalo. */
export function buildZaloMessage(data: BookingData): string {
  const lines: [string, string][] = [
    ['📌 Chương trình', EVENT_TYPES.find((t) => t.id === data.eventType)?.label ?? ''],
    ['📅 Ngày', [formatDate(data.date), data.time].filter(Boolean).join(' – ')],
    ['📍 Địa điểm', data.location.trim()],
    ['👥 Số khách', data.guests],
    ['👤 Họ tên', data.name.trim()],
    ['📞 SĐT', data.phone.trim()],
    ['💬 Lời nhắn', data.message.trim()],
  ];
  return [
    `Chào ${profile.brand.name}, tôi muốn đặt lịch MC cho chương trình:`,
    ...lines.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`),
    '(Gửi từ website)',
  ]
    .join('\n')
    .replace(/ /g, ' '); // bỏ dấu cách không ngắt (từ typeset) để tin nhắn là chữ thuần
}

/** Sao chép chữ vào bộ nhớ tạm. Gọi ngay trong lượt bấm để trình duyệt (nhất là Safari) cho phép. */
export async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // thử cách dự phòng bên dưới
  }
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, text.length);
    const ok = document.execCommand('copy');
    ta.remove();
    return ok;
  } catch {
    return false;
  }
}

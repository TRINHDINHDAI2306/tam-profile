import { EVENT_TYPES, type BookingData } from '@/types/booking';
import { normalizePhone } from '@/lib/bookingValidation';

/**
 * Gửi yêu cầu đặt lịch – không cần backend riêng.
 * Cấu hình bằng biến môi trường VITE_BOOKING_ENDPOINT (xem .env.example, docs/06-BOOKING-FORM.md):
 *  - Formspree:  https://formspree.io/f/<id>              → POST JSON, đọc phản hồi.
 *  - Google Sheets (Apps Script Web App): https://script.google.com/macros/s/<id>/exec
 *                                                          → POST text/plain, chế độ no-cors.
 * Chưa cấu hình: chế độ dev giả lập gửi thành công; bản build báo lỗi để khách liên hệ trực tiếp.
 */
const ENDPOINT = (import.meta.env.VITE_BOOKING_ENDPOINT as string | undefined)?.trim() ?? '';

export class BookingError extends Error {}

export function buildPayload(data: BookingData) {
  return {
    loai_chuong_trinh: EVENT_TYPES.find((t) => t.id === data.eventType)?.label ?? data.eventType,
    ngay: data.date,
    buoi: data.time,
    dia_diem: data.location.trim(),
    so_khach: data.guests,
    ho_ten: data.name.trim(),
    so_dien_thoai: normalizePhone(data.phone),
    email: data.email.trim(),
    kenh_lien_he: data.channel,
    loi_nhan: data.message.trim(),
    gui_luc: new Date().toISOString(),
    _subject: `Đặt lịch MC – ${data.name.trim()} – ${data.date}`,
  };
}

export async function submitBooking(data: BookingData): Promise<void> {
  // Honeypot: bot điền trường ẩn → giả vờ thành công, không gửi.
  if (data.website) return;

  const payload = buildPayload(data);

  if (!ENDPOINT) {
    if (import.meta.env.DEV) {
      console.info('[booking] Chưa cấu hình VITE_BOOKING_ENDPOINT – giả lập gửi:', payload);
      await new Promise((r) => setTimeout(r, 900));
      return;
    }
    throw new BookingError('Form chưa được kết nối. Vui lòng liên hệ trực tiếp qua Zalo hoặc điện thoại.');
  }

  try {
    if (ENDPOINT.includes('script.google.com')) {
      await fetch(ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });
      return;
    }

    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new BookingError(`Máy chủ phản hồi lỗi (${res.status}).`);
  } catch (err) {
    if (err instanceof BookingError) throw err;
    throw new BookingError('Không gửi được do lỗi kết nối. Vui lòng thử lại hoặc nhắn Zalo.');
  }
}

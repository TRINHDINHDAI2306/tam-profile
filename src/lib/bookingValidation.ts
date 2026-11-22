import type { BookingData, BookingErrors } from '@/types/booking';

export const STEP_FIELDS: (keyof BookingData)[][] = [
  ['eventType', 'date', 'time', 'location', 'guests'],
  ['name', 'phone', 'message'],
];

/** Chuẩn hoá SĐT: bỏ khoảng trắng, dấu chấm, gạch; +84 → 0. */
export function normalizePhone(raw: string): string {
  const digits = raw.replace(/[\s.\-()]/g, '');
  if (digits.startsWith('+84')) return `0${digits.slice(3)}`;
  if (digits.startsWith('84') && digits.length === 11) return `0${digits.slice(2)}`;
  return digits;
}

const VN_MOBILE = /^0(3|5|7|8|9)\d{8}$/;

export function todayISO(): string {
  const d = new Date();
  const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

export function validateField(field: keyof BookingData, data: BookingData): string | undefined {
  const v = typeof data[field] === 'string' ? (data[field] as string).trim() : '';
  switch (field) {
    case 'eventType':
      return v ? undefined : 'Vui lòng chọn loại chương trình.';
    case 'date':
      if (!v) return 'Vui lòng chọn ngày diễn ra.';
      if (v < todayISO()) return 'Ngày diễn ra cần từ hôm nay trở đi.';
      return undefined;
    case 'name':
      return v.length >= 2 ? undefined : 'Vui lòng cho biết tên của bạn.';
    case 'phone':
      if (!v) return 'Vui lòng nhập số điện thoại.';
      return VN_MOBILE.test(normalizePhone(v)) ? undefined : 'Số điện thoại chưa đúng (ví dụ: 0901 234 567).';
    case 'message':
      return v.length <= 1000 ? undefined : 'Lời nhắn tối đa 1.000 ký tự.';
    default:
      return undefined;
  }
}

export function validateStep(step: number, data: BookingData): BookingErrors {
  const errors: BookingErrors = {};
  for (const f of STEP_FIELDS[step]) {
    const e = validateField(f, data);
    if (e) errors[f] = e;
  }
  return errors;
}

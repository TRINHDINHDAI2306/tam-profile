export type EventTypeId =
  | 'culture'
  | 'conference'
  | 'education'
  | 'gala'
  | 'livestream'
  | 'wedding'
  | 'community'
  | 'other';

export interface EventTypeOption {
  id: EventTypeId;
  label: string;
}

export const EVENT_TYPES: EventTypeOption[] = [
  { id: 'culture', label: 'Sự kiện Văn hóa – Lịch sử' },
  { id: 'conference', label: 'Hội nghị – Tọa đàm chuyên đề' },
  { id: 'education', label: 'Giáo dục & Sân chơi trí tuệ' },
  { id: 'gala', label: 'Gala Dinner & GEN Party' },
  { id: 'livestream', label: 'Livestream & Quảng bá thương mại' },
  { id: 'wedding', label: 'Cưới hỏi & Dấu mốc gia đình' },
  { id: 'community', label: 'Hoạt động cộng đồng' },
  { id: 'other', label: 'Khác' },
];

export interface BookingData {
  eventType: EventTypeId | '';
  date: string;
  time: string;
  location: string;
  guests: string;
  name: string;
  phone: string;
  message: string;
}

export type BookingErrors = Partial<Record<keyof BookingData, string>>;

/** Sự kiện toàn cục để các nút "Đặt lịch" chọn sẵn loại chương trình trong form. */
export const BOOKING_PREFILL_EVENT = 'booking:prefill';

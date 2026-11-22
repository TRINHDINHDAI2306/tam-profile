import { useEffect, useRef } from 'react';
import { profile } from '@/data/profile';
import { EVENT_TYPES, type BookingData } from '@/types/booking';
import styles from './Booking.module.css';

interface Props {
  data: BookingData;
  onReset: () => void;
}

const formatDate = (iso: string) => {
  const [y, m, d] = iso.split('-');
  return y && m && d ? `${d}/${m}/${y}` : iso;
};

export function BookingSuccess({ data, onReset }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { contact } = profile;

  useEffect(() => {
    ref.current?.focus({ preventScroll: true });
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const summary: [string, string][] = [
    ['Chương trình', EVENT_TYPES.find((t) => t.id === data.eventType)?.label ?? ''],
    ['Ngày', [formatDate(data.date), data.time].filter(Boolean).join(' · ')],
    ['Địa điểm', data.location],
    ['Quy mô', data.guests],
  ].filter(([, v]) => v) as [string, string][];

  return (
    <div ref={ref} tabIndex={-1} className={styles.success} role="status">
      <span className={styles.check} aria-hidden="true" />
      <p className={styles.successEyebrow}>Đã gửi thành công</p>
      <h3 className={styles.successTitle}>
        Cảm ơn <em>bạn</em>!
      </h3>
      <p>
        {profile.brand.name} đã nhận được yêu cầu của <strong className={styles.successName}>{data.name.trim()}</strong> và sẽ liên hệ
        qua{' '}
        {data.channel === 'zalo' ? 'Zalo' : data.channel === 'phone' ? 'điện thoại' : 'email'} sớm nhất có thể.
      </p>

      <dl className={styles.summary}>
        {summary.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>

      <div className={styles.successActions}>
        <a href={`https://zalo.me/${contact.zalo}`} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
          Nhắn Zalo ngay
        </a>
        <button type="button" className="btn btn--ghost" onClick={onReset}>
          Gửi yêu cầu khác
        </button>
      </div>
    </div>
  );
}

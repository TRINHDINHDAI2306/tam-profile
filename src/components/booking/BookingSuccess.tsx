import { useEffect, useRef } from 'react';
import { profile } from '@/data/profile';
import styles from './Booking.module.css';

interface Props {
  /** Tin nhắn đặt lịch soạn sẵn. */
  message: string;
  /** Kết quả sao chép: true = đã sao chép, false = không sao chép được, null = chưa thử. */
  copied: boolean | null;
  zaloUrl: string;
  onCopy: () => void;
  onEdit: () => void;
  onReset: () => void;
}

/** Bước cuối: khách dán tin nhắn đặt lịch (đã sao chép sẵn) vào khung chat Zalo với MC rồi bấm Gửi. */
export function BookingSuccess({ message, copied, zaloUrl, onCopy, onEdit, onReset }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.focus({ preventScroll: true });
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const state =
    copied === true
      ? '✓ Đã sao chép nội dung đặt lịch'
      : copied === false
        ? 'Chưa sao chép tự động được – bấm “Sao chép nội dung” bên dưới'
        : 'Bấm “Mở Zalo” – nội dung sẽ được sao chép sẵn';

  return (
    <div ref={ref} tabIndex={-1} className={styles.success} role="status">
      <span className={styles.zaloBadge} aria-hidden="true">
        <ZaloIcon size={30} />
      </span>
      <p className={styles.successEyebrow}>Bước cuối</p>
      <h3 className={styles.successTitle}>
        Dán &amp; gửi trên <em>Zalo</em>
      </h3>
      <p className={`${styles.copyState} ${copied === false ? styles.copyFail : ''}`} aria-live="polite">
        {state}
      </p>

      <ol className={styles.zaloSteps}>
        <li>
          <span>
            Zalo mở khung chat với <strong>{profile.brand.name}</strong>
          </span>
        </li>
        <li>
          <span>
            Nhấn giữ ô nhập tin nhắn → chọn <strong>Dán</strong> (máy tính: Ctrl/⌘ + V)
          </span>
        </li>
        <li>
          <span>
            Bấm <strong>Gửi</strong> – {profile.brand.name} sẽ phản hồi sớm nhất
          </span>
        </li>
      </ol>

      <p className={styles.messageLabel}>Nội dung tin nhắn</p>
      <pre className={styles.messageBox}>{message}</pre>

      <div className={styles.successActions}>
        <a href={zaloUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary" onClick={onCopy}>
          <ZaloIcon />
          Mở Zalo
        </a>
        <button type="button" className="btn btn--ghost" onClick={onCopy}>
          {copied ? 'Sao chép lại' : 'Sao chép nội dung'}
        </button>
      </div>

      <p className={styles.textLinks}>
        <button type="button" onClick={onEdit}>
          Sửa thông tin
        </button>
        <span aria-hidden="true">·</span>
        <button type="button" onClick={onReset}>
          Đặt lịch khác
        </button>
      </p>
    </div>
  );
}

export function ZaloIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path
        d="M12 3C6.5 3 2 6.9 2 11.7c0 2.6 1.3 4.9 3.4 6.5L4.6 21l3.6-1.8c1.2.4 2.5.6 3.8.6 5.5 0 10-3.9 10-8.7S17.5 3 12 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

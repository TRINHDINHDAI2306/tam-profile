import { useEffect, useState } from 'react';
import { profile } from '@/data/profile';
import styles from './MobileCtaBar.module.css';

/**
 * Thanh hành động nổi dưới đáy màn hình (chỉ mobile).
 * Hiện sau khi cuộn qua hero; tự ẩn khi form đặt lịch đang hiển thị để không che nút "Gửi".
 */
export function MobileCtaBar() {
  const [pastHero, setPastHero] = useState(false);
  const [atBooking, setAtBooking] = useState(false);
  const { contact } = profile;

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const booking = document.getElementById('contact');
    const observer = new IntersectionObserver(([entry]) => setAtBooking(entry.isIntersecting), {
      rootMargin: '0px 0px -30% 0px',
    });
    if (booking) observer.observe(booking);

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const visible = pastHero && !atBooking;

  return (
    <div className={`${styles.bar} ${visible ? styles.visible : ''}`} aria-hidden={!visible}>
      <a
        href={`tel:${contact.phone.replace(/\s/g, '')}`}
        className={styles.icon}
        tabIndex={visible ? 0 : -1}
        aria-label={`Gọi ${contact.phone}`}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a
        href={`https://zalo.me/${contact.zalo}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.icon} ${styles.zalo}`}
        tabIndex={visible ? 0 : -1}
        aria-label="Nhắn Zalo"
      >
        Zalo
      </a>
      <a href="#contact" className={`btn btn--primary ${styles.main}`} tabIndex={visible ? 0 : -1}>
        Đặt lịch ngay
      </a>
    </div>
  );
}

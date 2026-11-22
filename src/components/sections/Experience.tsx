import { profile } from '@/data/profile';
import { BOOKING_PREFILL_EVENT, type EventTypeId } from '@/types/booking';
import { vn } from '@/lib/typography';
import { Section } from '@/components/common/Section';
import { SmartImage } from '@/components/common/SmartImage';
import styles from './Experience.module.css';

const prefill = (type: EventTypeId) =>
  window.dispatchEvent(new CustomEvent<EventTypeId>(BOOKING_PREFILL_EVENT, { detail: type }));

/** Trang 4 & 5 – Hành trình và kinh nghiệm sân khấu. */
export function Experience() {
  const { heading, subtitle, areas } = profile.experience;

  return (
    <Section id="experience" eyebrow={subtitle} title={heading}>
      <div className={`snap-row ${styles.row}`}>
        {areas.map((a, i) => (
          <article key={a.title} className={styles.card}>
            <SmartImage image={a.image} ratio="4 / 3" />
            <div className={styles.body}>
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <h3>{a.title}</h3>
              {a.highlight && (
                <p className={styles.highlight}>
                  <span>Tiêu biểu</span>
                  {a.highlight}
                </p>
              )}
              <p className={styles.desc}>{a.description}</p>
              <a href="#contact" className={styles.book} onClick={() => prefill(a.bookingType)}>
                {vn('Đặt lịch chương trình này')} <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className={styles.hint} aria-hidden="true">
        Vuốt để xem thêm →
      </p>
    </Section>
  );
}

import { profile } from '@/data/profile';
import { vn } from '@/lib/typography';
import { Section } from '@/components/common/Section';
import { Reveal } from '@/components/common/Reveal';
import { BookingForm } from '@/components/booking/BookingForm';
import styles from './Booking.module.css';

export function Booking() {
  const { contact } = profile;
  const tel = `tel:${contact.phone.replace(/\s/g, '')}`;
  const zalo = `https://zalo.me/${contact.zalo}`;

  return (
    <Section
      id="contact"
      eyebrow={contact.invitation.label}
      title={
        <>
          {vn('Trao đổi về')} <em>{vn('chương trình')}</em> {vn('của bạn')}
        </>
      }
      subtitle={contact.invitation.lead}
    >
      <div className={styles.layout}>
        <div className={styles.quick}>
          <p className={styles.message}>{contact.invitation.message}</p>
          <p className={styles.quickLabel}>Liên hệ nhanh</p>
          <div className={styles.quickBtns}>
            <a href={tel} className={styles.quickBtn}>
              <PhoneIcon />
              Gọi ngay
            </a>
            <a href={zalo} target="_blank" rel="noopener noreferrer" className={styles.quickBtn}>
              <ChatIcon />
              Nhắn Zalo
            </a>
          </div>
          <p className={styles.or}>
            <span>hoặc để lại thông tin</span>
          </p>
        </div>

        <Reveal className={styles.formWrap}>
          <BookingForm />
        </Reveal>

        <aside className={styles.info} aria-label="Thông tin đặt lịch">
          <dl className={styles.details}>
            <div>
              <dt>Điện thoại</dt>
              <dd>
                <a href={tel}>{contact.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </dd>
            </div>
            {profile.socials.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.url.replace(/^https?:\/\/(www\.)?/, '')}
                  </a>
                </dd>
              </div>
            ))}
            <div>
              <dt>Khu vực</dt>
              <dd>{contact.area}</dd>
            </div>
            {contact.hours && (
              <div>
                <dt>Giờ làm việc</dt>
                <dd>{contact.hours}</dd>
              </div>
            )}
          </dl>
        </aside>
      </div>
    </Section>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M12 3C6.5 3 2 6.9 2 11.7c0 2.6 1.3 4.9 3.4 6.5L4.6 21l3.6-1.8c1.2.4 2.5.6 3.8.6 5.5 0 10-3.9 10-8.7S17.5 3 12 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

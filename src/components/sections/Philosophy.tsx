import { profile } from '@/data/profile';
import { vn } from '@/lib/typography';
import { Reveal } from '@/components/common/Reveal';
import styles from './Philosophy.module.css';

/** Trang 8 & 9 – Triết lý làm nghề và thơ về nghề MC. */
export function Philosophy() {
  const { philosophy, brand } = profile;

  return (
    <section id="philosophy" aria-labelledby="philosophy-title" className={styles.section}>
      <div className="container">
        <Reveal className={styles.card}>
          <p className={styles.eyebrow}>{vn('Triết lý làm nghề')}</p>
          <h2 id="philosophy-title" className={styles.title}>
            {philosophy.heading}
          </h2>
          <blockquote className={styles.quote}>
            {philosophy.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </blockquote>
          <p className={styles.sign}>— {brand.name}</p>
        </Reveal>

        <Reveal className={styles.poem} delay={120}>
          <p className={styles.poemEyebrow}>{vn('Thơ & dấu ấn ngôn từ về nghề MC')}</p>
          <h3 className={styles.poemTitle}>{philosophy.poemTitle}</h3>
          <div className={styles.stanzas}>
            {philosophy.poem.map((stanza, i) => (
              <p key={i} className={styles.stanza}>
                {stanza.map((line, j) => (
                  <span key={j}>{line}</span>
                ))}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

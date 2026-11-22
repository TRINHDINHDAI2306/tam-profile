import { profile } from '@/data/profile';
import { vn } from '@/lib/typography';
import { Reveal } from '@/components/common/Reveal';
import styles from './Philosophy.module.css';

/** Triết lý làm nghề. */
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
      </div>
    </section>
  );
}

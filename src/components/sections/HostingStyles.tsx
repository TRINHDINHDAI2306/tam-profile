import { profile } from '@/data/profile';
import { Section } from '@/components/common/Section';
import { Reveal } from '@/components/common/Reveal';
import styles from './HostingStyles.module.css';

/** Trang 6 – Phong cách dẫn chương trình. */
export function HostingStyles() {
  const { heading, intro, items } = profile.styles;

  return (
    <Section id="style" alt eyebrow="Phong cách dẫn chương trình" title={heading} subtitle={intro}>
      <ul className={styles.grid}>
        {items.map((s, i) => (
          <li key={s.title}>
            <Reveal className={styles.card} delay={(i % 3) * 80}>
              <span className={`${styles.swatch} ${styles[`tone${i + 1}`]}`} aria-hidden="true" />
              <h3>{s.title}</h3>
              <p className={styles.desc}>{s.description}</p>
              {s.suitableFor && (
                <p className={styles.fit}>
                  <span>Phù hợp</span>
                  {s.suitableFor}
                </p>
              )}
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

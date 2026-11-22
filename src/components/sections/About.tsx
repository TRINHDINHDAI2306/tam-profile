import { profile } from '@/data/profile';
import { Section } from '@/components/common/Section';
import { SmartImage } from '@/components/common/SmartImage';
import { Reveal } from '@/components/common/Reveal';
import styles from './About.module.css';

/** Trang 3 – Giới thiệu bản thân. */
export function About() {
  const { about } = profile;

  return (
    <Section id="about" alt eyebrow="Giới thiệu" title={about.heading}>
      <div className={styles.story}>
        <Reveal className={styles.photoWrap}>
          <SmartImage image={about.photo} ratio="4 / 5" className={styles.photo} />
        </Reveal>

        <Reveal className={styles.text} delay={120}>
          <p className={styles.lead}>{about.intro}</p>
          <h3 className={styles.subhead}>Vai trò</h3>
          <ul className={styles.tags}>
            {about.fields.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className={`snap-row ${styles.pillars}`}>
        {about.pillars.map((p, i) => (
          <article key={p.title} className={styles.pillar}>
            <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
            {p.role && <p className={styles.role}>{p.role}</p>}
            <h3>{p.title}</h3>
            <p className={styles.desc}>{p.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

import type { ReactNode } from 'react';
import { vn } from '@/lib/typography';
import { Reveal } from './Reveal';
import styles from './Section.module.css';

interface Props {
  id: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  alt?: boolean;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, subtitle, alt = false, children }: Props) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className={`${styles.section} ${alt ? styles.alt : ''}`}>
      <div className="container">
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>{vn(eyebrow)}</span>
          <h2 id={headingId} className={styles.title}>
            {typeof title === 'string' ? vn(title) : title}
          </h2>
          {subtitle && <p className={styles.subtitle}>{vn(subtitle)}</p>}
          <span className={styles.divider} aria-hidden="true" />
        </Reveal>
        {children}
      </div>
    </section>
  );
}

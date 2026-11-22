import { profile } from '@/data/profile';
import { Section } from '@/components/common/Section';
import { Reveal } from '@/components/common/Reveal';
import styles from './Values.module.css';

/** Trang 7 – Những giá trị tạo nên MC Anh Tâm. */
export function Values() {
  const { heading, items } = profile.values;

  return (
    <Section id="values" eyebrow={`Những giá trị tạo nên ${profile.brand.name}`} title={heading}>
      <ol className={styles.grid}>
        {items.map((v, i) => (
          <li key={v.title}>
            <Reveal className={styles.card} delay={(i % 3) * 80}>
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <h3>{v.title}</h3>
              <p>{v.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

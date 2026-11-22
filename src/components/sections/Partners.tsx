import { profile } from '@/data/profile';
import styles from './Partners.module.css';

/** Dải chữ chạy ngang: các chương trình / đơn vị tiêu biểu. */
export function Partners() {
  const { label, items } = profile.highlights;
  const loop = [...items, ...items];

  return (
    <section className={styles.partners} aria-label={label}>
      <p className={styles.label}>{label}</p>
      <div className={styles.viewport}>
        <ul className={styles.track}>
          {loop.map((name, i) => (
            <li key={`${name}-${i}`} aria-hidden={i >= items.length}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { profile } from '@/data/profile';
import Logo from '@/components/common/Logo';
import styles from './Footer.module.css';

export function Footer() {
  const { brand, socials, nav } = profile;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.mono}>
            <Logo tone="dark" />
          </span>
          <p className={styles.name}>{brand.name}</p>
          <p className={styles.tagline}>{brand.tagline}</p>
        </div>

        <nav aria-label="Liên kết nhanh" className={styles.links}>
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              {n.label}
            </a>
          ))}
        </nav>

        <ul className={styles.socials} aria-label="Mạng xã hội">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.bottom}>
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <a href="#hero" className={styles.top} aria-label="Lên đầu trang">
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

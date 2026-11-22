import { profile } from '@/data/profile';
import { SmartImage } from '@/components/common/SmartImage';
import styles from './Hero.module.css';

export function Hero() {
  const { hero } = profile;

  return (
    <section id="hero" className={styles.hero} aria-label="Giới thiệu nhanh">
      <span className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.media}>
          <div className={styles.arch}>
            <SmartImage image={hero.portrait} ratio="4 / 5" eager />
          </div>
          <span className={styles.ring} aria-hidden="true" />
          {hero.badge && (
            <span className={styles.badge}>
              <strong>{hero.badge.value}</strong>
              <br />
              {hero.badge.label}
            </span>
          )}
        </div>

        <div className={styles.content}>
          <ul className={styles.roles} aria-label="Chức danh">
            {hero.roles.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <h1 className={styles.name}>
            {hero.firstName} <em>{hero.highlightName}</em>
          </h1>
          <p className={styles.tagline}>{hero.tagline}</p>
          <blockquote className={styles.quote}>“{hero.quote}”</blockquote>
          <div className={styles.actions}>
            <a href={hero.primaryCta.href} className="btn btn--primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn btn--ghost">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

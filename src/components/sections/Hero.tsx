import { useState } from 'react';
import { profile } from '@/data/profile';
import { vn } from '@/lib/typography';
import { videoSource } from '@/lib/video';
import { SmartImage } from '@/components/common/SmartImage';
import { VideoModal } from '@/components/common/VideoModal';
import styles from './Hero.module.css';

export function Hero() {
  const { hero } = profile;
  const { featured } = profile.videos;
  const hasReel = videoSource(featured) !== null;
  const [reelOpen, setReelOpen] = useState(false);

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
          <div className={styles.actions}>
            <a href={hero.primaryCta.href} className="btn btn--primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn btn--ghost">
              {hero.secondaryCta.label}
            </a>
          </div>
          {hasReel && (
            <button type="button" className={styles.reel} onClick={() => setReelOpen(true)}>
              <span className={styles.reelIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.6-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" fill="currentColor" />
                </svg>
              </span>
              {vn('Xem video dẫn chương trình')}
            </button>
          )}
        </div>
      </div>
      <VideoModal videos={[featured]} index={reelOpen ? 0 : null} onClose={() => setReelOpen(false)} />
    </section>
  );
}

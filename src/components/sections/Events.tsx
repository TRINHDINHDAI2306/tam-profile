import { useMemo, useState } from 'react';
import { profile } from '@/data/profile';
import { vn } from '@/lib/typography';
import { Section } from '@/components/common/Section';
import { SmartImage } from '@/components/common/SmartImage';
import { Lightbox } from '@/components/common/Lightbox';
import styles from './Events.module.css';

type Filter = string;

/** Ảnh thứ 1, 6, 11… trải ngang; nếu ảnh cuối bị lẻ một mình trong hàng thì cũng cho trải ngang. */
function wideLayout(count: number): boolean[] {
  const wide = Array.from({ length: count }, (_, i) => i % 5 === 0);
  let trailing = 0;
  for (let i = count - 1; i >= 0 && !wide[i]; i--) trailing++;
  if (trailing % 2 === 1) wide[count - 1] = true;
  return wide;
}

export function Events() {
  const { events } = profile;
  const [filter, setFilter] = useState<Filter>('Tất cả');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filters = useMemo<Filter[]>(
    () => ['Tất cả', ...Array.from(new Set(events.map((e) => e.category)))],
    [events],
  );
  const shown = filter === 'Tất cả' ? events : events.filter((e) => e.category === filter);
  const images = shown.map((e) => ({ ...e.image, alt: e.caption }));
  const wide = wideLayout(shown.length);

  return (
    <Section
      id="events"
      alt
      eyebrow="Hình ảnh sự kiện"
      title={
        <>
          {vn('Khoảnh khắc trên')} <em>{vn('sân khấu')}</em>
        </>
      }
    >
      <div className={styles.chips} role="tablist" aria-label="Lọc theo loại sự kiện">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            className={`${styles.chip} ${filter === f ? styles.chipActive : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className={styles.grid}>
        {shown.map((e, i) => (
          <li key={e.caption} className={wide[i] ? styles.wide : undefined}>
            <button className={styles.item} onClick={() => setLightbox(i)} aria-label={`Xem ảnh: ${e.caption}`}>
              <SmartImage image={e.image} ratio={wide[i] ? '16 / 9' : '4 / 5'} />
              <span className={styles.caption}>
                <small>{e.category}</small>
                {e.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox images={images} index={lightbox} onClose={() => setLightbox(null)} onChange={setLightbox} />
    </Section>
  );
}

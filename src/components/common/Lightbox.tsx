import { useEffect, useRef, useState } from 'react';
import type { ImageAsset } from '@/types/profile';
import { useScrollLock } from '@/hooks/useScrollLock';
import { SmartImage } from './SmartImage';
import styles from './Lightbox.module.css';

interface Props {
  images: ImageAsset[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

export function Lightbox({ images, index, onClose, onChange }: Props) {
  const open = index !== null;
  const closeRef = useRef<HTMLButtonElement>(null);
  const [touchX, setTouchX] = useState<number | null>(null);
  useScrollLock(open);

  const go = (step: number) => {
    if (index === null) return;
    onChange((index + step + images.length) % images.length);
  };

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (index === null) return null;
  const image = images[index];

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        setTouchX(null);
      }}
    >
      <button ref={closeRef} className={styles.close} onClick={onClose} aria-label="Đóng">
        ×
      </button>
      <figure className={styles.figure} onClick={(e) => e.stopPropagation()}>
        <SmartImage image={image} ratio={image.src ? 'auto' : '4 / 5'} eager className={styles.image} />
        <figcaption className={styles.caption}>
          {image.alt} · {index + 1}/{images.length}
        </figcaption>
      </figure>
      {images.length > 1 && (
        <>
          <button
            className={`${styles.nav} ${styles.prev}`}
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Ảnh trước"
          >
            ‹
          </button>
          <button
            className={`${styles.nav} ${styles.next}`}
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Ảnh sau"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}

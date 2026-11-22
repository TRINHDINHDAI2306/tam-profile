import type { ImageAsset } from '@/types/profile';
import styles from './SmartImage.module.css';

interface Props {
  image: ImageAsset;
  /** Tỉ lệ khung, ví dụ '4 / 5'. */
  ratio?: string;
  eager?: boolean;
  className?: string;
}

/** Hiển thị ảnh thật nếu có `src`, ngược lại hiển thị khung placeholder hồng. */
export function SmartImage({ image, ratio = '4 / 3', eager = false, className = '' }: Props) {
  const style = { aspectRatio: ratio, objectPosition: image.position };

  if (!image.src) {
    return (
      <div className={`${styles.placeholder} ${className}`} style={style} role="img" aria-label={image.alt}>
        <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4 7h3l1.5-2h7L17 7h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
          />
          <circle cx="12" cy="13" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
        </svg>
        {image.label && <span className={styles.label}>{image.label}</span>}
      </div>
    );
  }

  return (
    <img
      className={`${styles.img} ${className}`}
      style={style}
      src={image.src}
      alt={image.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}

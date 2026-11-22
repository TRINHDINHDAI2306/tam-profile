import type { VideoItem } from '@/types/profile';
import { videoPoster, videoSource } from '@/lib/video';
import styles from './VideoPoster.module.css';

interface Props {
  video: VideoItem;
  onPlay: () => void;
  /** Tỉ lệ khung, ví dụ '16 / 9'. Mặc định theo hướng video (ngang 16:9, dọc 9:16). */
  ratio?: string;
  /** Hiện loại + tiêu đề đè lên ảnh bìa. */
  showCaption?: boolean;
  className?: string;
}

/**
 * Ảnh bìa video + nút ▶. Chỉ tải video / trình phát YouTube khi người xem bấm → trang vẫn nhẹ.
 * Chưa có nguồn video → hiện khung chờ hồng kèm `label`.
 */
export function VideoPoster({ video, onPlay, ratio, showCaption = false, className = '' }: Props) {
  const source = videoSource(video);
  const poster = videoPoster(video);
  const portrait = video.orientation === 'portrait';
  const cls = `${styles.poster} ${portrait && !ratio ? styles.portrait : ''} ${className}`;
  const style = { aspectRatio: ratio ?? (portrait ? '9 / 16' : '16 / 9') };

  const caption = showCaption && (
    <span className={styles.caption}>
      <small>{video.category}</small>
      <span className={styles.title}>{video.title}</span>
    </span>
  );

  if (!source) {
    return (
      <div
        className={`${cls} ${styles.placeholder} ${showCaption ? styles.withCaption : ''}`}
        style={style}
        role="img"
        aria-label={video.title}
      >
        <PlayIcon className={styles.placeholderIcon} />
        {video.label && <span className={styles.label}>{video.label}</span>}
        {caption}
      </div>
    );
  }

  return (
    <button type="button" className={`${cls} ${showCaption ? styles.captioned : ''}`} style={style} onClick={onPlay} aria-label={`Phát video: ${video.title}`}>
      {poster && (
        <img
          className={styles.img}
          src={poster}
          alt={`Ảnh bìa video ${video.title}`}
          style={{ objectPosition: video.position }}
          loading="lazy"
          decoding="async"
        />
      )}
      <span className={styles.play} aria-hidden="true">
        <PlayIcon />
      </span>
      {video.duration && <span className={styles.duration}>{video.duration}</span>}
      {caption}
    </button>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.6-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" fill="currentColor" />
    </svg>
  );
}

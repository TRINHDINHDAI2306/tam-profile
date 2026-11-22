import { useEffect, useRef } from 'react';
import type { VideoItem } from '@/types/profile';
import { videoSource } from '@/lib/video';
import { useScrollLock } from '@/hooks/useScrollLock';
import { VideoPlayer } from './VideoPlayer';
import styles from './VideoModal.module.css';

interface Props {
  /** Chỉ truyền video đã có nguồn phát (file MP4 hoặc link YouTube hợp lệ). */
  videos: VideoItem[];
  index: number | null;
  onClose: () => void;
  onChange?: (index: number) => void;
}

/** Xem video toàn màn hình (khung dọc 9:16 hoặc ngang 16:9 theo `orientation`). */
export function VideoModal({ videos, index, onClose, onChange }: Props) {
  const open = index !== null;
  const closeRef = useRef<HTMLButtonElement>(null);
  useScrollLock(open);

  const go = (step: number) => {
    if (index === null || !onChange) return;
    onChange((index + step + videos.length) % videos.length);
  };

  useEffect(() => {
    if (open) closeRef.current?.focus({ preventScroll: true });
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
  const video = videos[index];
  if (!video || !videoSource(video)) return null;
  const portrait = video.orientation === 'portrait';

  return (
    <div className={styles.backdrop} role="dialog" aria-modal="true" aria-label={video.title} onClick={onClose}>
      <button ref={closeRef} className={styles.close} onClick={onClose} aria-label="Đóng video">
        ×
      </button>
      <figure className={`${styles.figure} ${portrait ? styles.portrait : ''}`} onClick={(e) => e.stopPropagation()}>
        <VideoPlayer video={video} className={styles.frame} />
        <figcaption className={styles.caption}>
          {video.title}
          {videos.length > 1 && ` · ${index + 1}/${videos.length}`}
        </figcaption>
      </figure>
      {videos.length > 1 && onChange && (
        <>
          <button
            className={`${styles.nav} ${styles.prev}`}
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Video trước"
          >
            ‹
          </button>
          <button
            className={`${styles.nav} ${styles.next}`}
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Video sau"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}

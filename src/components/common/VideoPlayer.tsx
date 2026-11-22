import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { VideoItem } from '@/types/profile';
import { isOtherVideoPlaying, pauseOtherVideos, videoPoster, videoSource, youtubeEmbed } from '@/lib/video';
import styles from './VideoPlayer.module.css';

interface Props {
  video: VideoItem;
  className?: string;
  /**
   * true: tự chạy (tắt tiếng) khi cuộn tới, tạm dừng khi cuộn qua – dùng cho video chính.
   * false (mặc định): phát ngay khi được tạo – vì chỉ được tạo sau khi người xem bấm.
   */
  autoplayInView?: boolean;
}

/** Trình phát: thẻ <video> cho file MP4, iframe cho YouTube. Chỉ một video chạy tại một thời điểm. */
export function VideoPlayer({ video, className = '', autoplayInView = false }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const source = videoSource(video);
  const key = source ? (source.kind === 'file' ? source.src : source.id) : '';

  const [muted, setMuted] = useState(autoplayInView);
  /** Đang tạm dừng do cuộn ra khỏi màn hình (không phải người xem bấm dừng). */
  const pausingForScroll = useRef(false);
  /** Người xem đã dừng, hoặc video khác đã giành quyền phát → không tự chạy lại. */
  const stopped = useRef(false);

  // Mở bằng cú bấm: phát ngay trong lượt bấm để Safari trên iPhone cho phát kèm tiếng.
  useLayoutEffect(() => {
    if (autoplayInView) return;
    videoRef.current?.play().catch(() => {});
    if (frameRef.current) pauseOtherVideos(frameRef.current);
  }, [key, autoplayInView]);

  // Video chính: tự chạy tắt tiếng khi thấy ≥ 60% khung, dừng khi cuộn qua.
  useEffect(() => {
    const el = videoRef.current;
    if (!autoplayInView || !el) return;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (saveData || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    el.muted = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (el.paused && !stopped.current && !isOtherVideoPlaying(el)) el.play().catch(() => {});
        } else if (!el.paused) {
          pausingForScroll.current = true;
          el.pause();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [key, autoplayInView]);

  if (!source) return null;

  if (source.kind === 'youtube') {
    return (
      <iframe
        key={source.id}
        ref={frameRef}
        data-youtube=""
        className={`${styles.frame} ${className}`}
        src={youtubeEmbed(source.id)}
        title={video.title}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
      />
    );
  }

  const unmute = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = false;
    stopped.current = false;
    el.play().catch(() => {});
  };

  return (
    <div className={`${styles.wrap} ${className}`}>
      <video
        key={source.src}
        ref={videoRef}
        className={styles.video}
        src={source.src}
        poster={videoPoster(video) ?? undefined}
        controls
        playsInline
        preload={autoplayInView ? 'none' : 'auto'}
        aria-label={video.title}
        onPlay={(e) => {
          stopped.current = false;
          pauseOtherVideos(e.currentTarget);
        }}
        onPause={() => {
          if (pausingForScroll.current) pausingForScroll.current = false;
          else stopped.current = true;
        }}
        onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
      />
      {autoplayInView && muted && (
        <button type="button" className={styles.unmute} onClick={unmute}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 9h4l5-4v14l-5-4H4V9Z" fill="currentColor" />
            <path d="m16 9 5 6m0-6-5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          Bật tiếng
        </button>
      )}
    </div>
  );
}

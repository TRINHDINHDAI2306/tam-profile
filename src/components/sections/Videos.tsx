import { useState } from 'react';
import { profile } from '@/data/profile';
import { vn } from '@/lib/typography';
import { isVideoShown, videoSource } from '@/lib/video';
import { Section } from '@/components/common/Section';
import { Reveal } from '@/components/common/Reveal';
import { VideoPoster } from '@/components/common/VideoPoster';
import { VideoPlayer } from '@/components/common/VideoPlayer';
import { VideoModal } from '@/components/common/VideoModal';
import styles from './Videos.module.css';

/**
 * Video: video chính tự chạy (tắt tiếng) khi cuộn tới; các video bên dưới bấm mới chạy (xem toàn màn hình).
 * Mỗi lúc chỉ một video chạy – xem pauseOtherVideos() trong src/lib/video.ts.
 */
export function Videos() {
  const { heading, intro, featured, clips } = profile.videos;
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

  const main = isVideoShown(featured) ? featured : null;
  const mainSource = main && videoSource(main);
  const list = clips.filter(isVideoShown);
  const playable = list.filter((v) => videoSource(v) !== null);

  if (!main && list.length === 0) return null;

  return (
    <Section id="video" eyebrow="Video sự kiện" title={heading} subtitle={intro}>
      {main && (
        <Reveal className={styles.main}>
          <div className={styles.featured}>
            {mainSource?.kind === 'file' ? (
              // File MP4: tự chạy (tắt tiếng) khi cuộn tới
              <VideoPlayer video={main} autoplayInView />
            ) : playing ? (
              <VideoPlayer video={main} />
            ) : (
              <VideoPoster video={main} ratio="16 / 9" onPlay={() => setPlaying(true)} />
            )}
          </div>
          <div className={styles.meta}>
            <small>{main.category}</small>
            <h3>{main.title}</h3>
            {main.duration && <span className={styles.duration}>{main.duration}</span>}
          </div>
        </Reveal>
      )}

      {list.length > 0 && (
        <>
          <div className={styles.listHead}>
            <h3>{vn('Video khác')}</h3>
            {list.length > 1 && (
              <span className={styles.hint} aria-hidden="true">
                Vuốt để xem thêm →
              </span>
            )}
          </div>
          {/* Mọi thẻ cùng khung 16:9 cho đều hàng; video quay dọc vẫn mở đúng khung 9:16 khi xem */}
          <ul className={`snap-row ${styles.row}`}>
            {list.map((v) => (
              <li key={v.title}>
                <VideoPoster video={v} ratio="16 / 9" showCaption onPlay={() => setOpen(playable.indexOf(v))} />
              </li>
            ))}
          </ul>
        </>
      )}

      <VideoModal videos={playable} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
    </Section>
  );
}

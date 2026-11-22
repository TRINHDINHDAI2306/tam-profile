import type { VideoItem } from '@/types/profile';

const ID = /^[\w-]{11}$/;

/**
 * Lấy mã video (11 ký tự) từ mọi dạng link YouTube:
 * youtube.com/watch?v=… · youtu.be/… · youtube.com/shorts/… · /embed/… · /live/… · hoặc chính mã video.
 */
export function youtubeId(input: string): string | null {
  const s = input.trim();
  if (!s) return null;
  if (ID.test(s)) return s;
  try {
    const url = new URL(s);
    const host = url.hostname.replace(/^(www|m)\./, '');
    let id: string | null = null;
    if (host === 'youtu.be') {
      id = url.pathname.split('/')[1] ?? null;
    } else if (host.endsWith('youtube.com') || host.endsWith('youtube-nocookie.com')) {
      id = url.searchParams.get('v') ?? url.pathname.match(/^\/(?:shorts|embed|live|v)\/([\w-]{11})/)?.[1] ?? null;
    }
    return id && ID.test(id) ? id : null;
  } catch {
    return null;
  }
}

/** Ảnh bìa YouTube (luôn có sẵn, 480×360). */
export const youtubeThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

/** Trình phát chế độ "không cookie", tự phát khi mở (người xem đã bấm nên trình duyệt cho phép). */
export const youtubeEmbed = (id: string) =>
  `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1&enablejsapi=1`;

const YT_ORIGIN = 'https://www.youtube-nocookie.com';

/**
 * Chỉ một video chạy tại một thời điểm: khi `current` bắt đầu phát, dừng mọi video khác trên trang
 * (thẻ <video> và trình phát YouTube – cần `enablejsapi=1` để nhận lệnh dừng).
 */
export function pauseOtherVideos(current: Element) {
  document.querySelectorAll('video').forEach((v) => {
    if (v !== current && !v.paused) v.pause();
  });
  document.querySelectorAll<HTMLIFrameElement>('iframe[data-youtube]').forEach((f) => {
    if (f !== current) {
      f.contentWindow?.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }), YT_ORIGIN);
    }
  });
}

/** Có video nào khác đang phát không (để video tự chạy không giành quyền của video người xem đã bấm). */
export const isOtherVideoPlaying = (current: Element) =>
  Array.from(document.querySelectorAll('video')).some((v) => v !== current && !v.paused);

export type VideoSource = { kind: 'file'; src: string } | { kind: 'youtube'; id: string };

/** Nguồn phát của video: file MP4 (`src`) được ưu tiên, sau đó tới link YouTube. */
export function videoSource(v: VideoItem): VideoSource | null {
  const src = v.src?.trim();
  if (src) return { kind: 'file', src };
  const id = youtubeId(v.youtube ?? '');
  return id ? { kind: 'youtube', id } : null;
}

/** Ảnh bìa: ảnh tự chọn (`poster`) → ảnh bìa YouTube → không có. */
export function videoPoster(v: VideoItem): string | null {
  if (v.poster) return v.poster;
  const source = videoSource(v);
  return source?.kind === 'youtube' ? youtubeThumb(source.id) : null;
}

/** Bản build chỉ hiện video đã có nguồn; khi chạy dev vẫn hiện khung chờ để biết còn thiếu gì. */
export const isVideoShown = (v: VideoItem) => import.meta.env.DEV || videoSource(v) !== null;

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type MouseEvent } from 'react';
import { BOOKING_PREFILL_EVENT, EVENT_TYPES, type BookingData, type BookingErrors, type EventTypeId } from '@/types/booking';
import { STEP_FIELDS, todayISO, validateField, validateStep } from '@/lib/bookingValidation';
import { buildZaloMessage, copyText, zaloChatUrl } from '@/services/booking';
import { Field, describedBy } from './Field';
import { BookingSuccess, ZaloIcon } from './BookingSuccess';
import styles from './Booking.module.css';

const INITIAL: BookingData = {
  eventType: '',
  date: '',
  time: '',
  location: '',
  guests: '',
  name: '',
  phone: '',
  message: '',
};

const TIMES = ['Buổi sáng', 'Buổi chiều', 'Buổi tối', 'Cả ngày'];
const GUESTS = ['Dưới 100 khách', '100 – 300 khách', '300 – 500 khách', 'Trên 500 khách'];
const STEP_TITLES = ['Về chương trình', 'Thông tin của bạn'];

/** 'zalo' = đã chuyển sang bước dán & gửi trên Zalo. */
type Status = 'idle' | 'zalo';

export function BookingForm() {
  const [data, setData] = useState<BookingData>(INITIAL);
  const [errors, setErrors] = useState<BookingErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof BookingData, boolean>>>({});
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>('idle');
  /** Kết quả sao chép tin nhắn: null = chưa sao chép. */
  const [copied, setCopied] = useState<boolean | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const stepTitleRef = useRef<HTMLHeadingElement>(null);
  const prevStep = useRef(step);

  // Nút ở phần Dịch vụ → chọn sẵn loại chương trình
  useEffect(() => {
    const onPrefill = (e: Event) => {
      const type = (e as CustomEvent<EventTypeId>).detail;
      setData((d) => ({ ...d, eventType: type }));
      setErrors((er) => ({ ...er, eventType: undefined }));
      setStatus('idle');
      setStep(0);
    };
    window.addEventListener(BOOKING_PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(BOOKING_PREFILL_EVENT, onPrefill);
  }, []);

  // Chuyển bước: đưa focus + cuộn về đầu form (quan trọng trên điện thoại)
  useEffect(() => {
    if (prevStep.current === step) return;
    prevStep.current = step;
    stepTitleRef.current?.focus({ preventScroll: true });
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [step]);

  const set = <K extends keyof BookingData>(field: K, value: BookingData[K]) => {
    const next = { ...data, [field]: value };
    setData(next);
    // Ô đã từng báo lỗi thì kiểm tra lại ngay khi sửa, để lỗi biến mất kịp thời
    const recheck: BookingErrors = {};
    if (touched[field] || errors[field]) recheck[field] = validateField(field, next);
    if (Object.keys(recheck).length) setErrors((er) => ({ ...er, ...recheck }));
  };

  const onInput =
    (field: keyof BookingData) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      set(field, e.target.value as never);

  const onBlur = (field: keyof BookingData) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((er) => ({ ...er, [field]: validateField(field, data) }));
  };

  const focusFirstError = (errs: BookingErrors) => {
    const first = STEP_FIELDS[step].find((f) => errs[f]);
    if (first) document.getElementById(`bk-${first}`)?.focus();
  };

  const checkStep = () => {
    const errs = validateStep(step, data);
    setErrors((er) => ({ ...er, ...Object.fromEntries(STEP_FIELDS[step].map((f) => [f, errs[f]])) }));
    setTouched((t) => ({ ...t, ...Object.fromEntries(STEP_FIELDS[step].map((f) => [f, true])) }));
    if (Object.keys(errs).length) {
      focusFirstError(errs);
      return false;
    }
    return true;
  };

  const message = buildZaloMessage(data);

  /** Sao chép tin nhắn (gọi ngay trong lượt bấm) và ghi nhận kết quả. */
  const copyMessage = () => {
    copyText(message).then(setCopied);
  };

  // Nhấn Enter trong form: bước 1 → bước 2; bước 2 → màn hình gửi qua Zalo (khách tự bấm mở Zalo ở đó).
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!checkStep()) return;
    if (step === 0) {
      setStep(1);
      return;
    }
    setCopied(null);
    setStatus('zalo');
  };

  // Nút "Gửi qua Zalo" là thẻ <a> mở Zalo ở tab mới → không bị chặn popup, mở thẳng app Zalo trên điện thoại.
  const onZaloClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!checkStep()) {
      e.preventDefault();
      return;
    }
    copyMessage();
    // Đổi màn hình sau khi trình duyệt đã mở link (link bị gỡ khỏi trang ngay sẽ không mở được).
    setTimeout(() => setStatus('zalo'), 0);
  };

  const reset = () => {
    setData(INITIAL);
    setErrors({});
    setTouched({});
    setCopied(null);
    setStatus('idle');
    setStep(0);
  };

  if (status === 'zalo') {
    return (
      <BookingSuccess
        message={message}
        copied={copied}
        zaloUrl={zaloChatUrl()}
        onCopy={copyMessage}
        onEdit={() => {
          setStatus('idle');
          setStep(1);
        }}
        onReset={reset}
      />
    );
  }

  const err = (f: keyof BookingData) => errors[f];
  const msgLen = data.message.length;

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit} noValidate aria-labelledby="booking-step-title">
      {/* Tiến trình */}
      <div className={styles.progress}>
        <p className={styles.stepCount}>
          Bước {step + 1} / {STEP_TITLES.length}
        </p>
        <div className={styles.bars} aria-hidden="true">
          {STEP_TITLES.map((t, i) => (
            <span key={t} className={i <= step ? styles.barOn : undefined} />
          ))}
        </div>
      </div>
      <h3 id="booking-step-title" ref={stepTitleRef} tabIndex={-1} className={styles.stepTitle}>
        {STEP_TITLES[step]}
      </h3>
      <p className={styles.requiredNote}>
        Mục có dấu <span aria-hidden="true">*</span> là bắt buộc.
      </p>

      {step === 0 && (
        <div className={styles.fields}>
          <Field id="bk-eventType" label="Loại chương trình" required error={err('eventType')}>
            <select
              id="bk-eventType"
              className={`${styles.input} ${styles.select} ${data.eventType ? '' : styles.empty}`}
              value={data.eventType}
              onChange={onInput('eventType')}
              onBlur={onBlur('eventType')}
              aria-invalid={!!err('eventType')}
              aria-required="true"
              aria-describedby={describedBy('bk-eventType', undefined, err('eventType'))}
            >
              <option value="" disabled>
                Chọn loại chương trình
              </option>
              {EVENT_TYPES.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label}
                </option>
              ))}
            </select>
          </Field>

          <div className={styles.row}>
            <Field id="bk-date" label="Ngày diễn ra" required error={err('date')}>
              <input
                id="bk-date"
                type="date"
                className={`${styles.input} ${styles.date} ${data.date ? '' : styles.empty}`}
                min={todayISO()}
                value={data.date}
                onChange={onInput('date')}
                onBlur={onBlur('date')}
                aria-invalid={!!err('date')}
                aria-required="true"
                aria-describedby={describedBy('bk-date', undefined, err('date'))}
              />
            </Field>

            <Field id="bk-time" label="Thời gian">
              <select
                id="bk-time"
                className={`${styles.input} ${styles.select} ${data.time ? '' : styles.empty}`}
                value={data.time}
                onChange={onInput('time')}
              >
                <option value="">Chọn buổi</option>
                {TIMES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Field>
          </div>

          <div className={styles.row}>
            <Field id="bk-guests" label="Số khách dự kiến">
              <select
                id="bk-guests"
                className={`${styles.input} ${styles.select} ${data.guests ? '' : styles.empty}`}
                value={data.guests}
                onChange={onInput('guests')}
              >
                <option value="">Chọn quy mô</option>
                {GUESTS.map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </Field>

            <Field id="bk-location" label="Địa điểm">
              <input
                id="bk-location"
                className={styles.input}
                value={data.location}
                onChange={onInput('location')}
                placeholder="VD: Khách sạn Melia, Hà Nội"
              />
            </Field>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className={styles.fields}>
          <Field id="bk-name" label="Họ và tên" required error={err('name')}>
            <input
              id="bk-name"
              className={styles.input}
              autoComplete="name"
              value={data.name}
              onChange={onInput('name')}
              onBlur={onBlur('name')}
              aria-invalid={!!err('name')}
              aria-required="true"
              aria-describedby={describedBy('bk-name', undefined, err('name'))}
            />
          </Field>

          <Field id="bk-phone" label="Số điện thoại" required error={err('phone')}>
            <input
              id="bk-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              className={styles.input}
              placeholder="0901 234 567"
              value={data.phone}
              onChange={onInput('phone')}
              onBlur={onBlur('phone')}
              aria-invalid={!!err('phone')}
              aria-required="true"
              aria-describedby={describedBy('bk-phone', undefined, err('phone'))}
            />
          </Field>

          <Field
            id="bk-message"
            label="Lời nhắn"
            error={err('message')}
            aside={
              <span className={`${styles.counter} ${msgLen > 1000 ? styles.counterOver : ''}`} aria-live="polite">
                {msgLen}/1000
              </span>
            }
          >
            <textarea
              id="bk-message"
              rows={4}
              className={`${styles.input} ${styles.textarea}`}
              placeholder="Chủ đề chương trình, phong cách mong muốn, yêu cầu song ngữ…"
              value={data.message}
              onChange={onInput('message')}
              onBlur={onBlur('message')}
              aria-invalid={!!err('message')}
              aria-describedby={describedBy('bk-message', undefined, err('message'))}
            />
          </Field>
        </div>
      )}

      <div className={styles.actions}>
        {step > 0 && (
          <button type="button" className={`btn btn--ghost ${styles.back}`} onClick={() => setStep(step - 1)}>
            Quay lại
          </button>
        )}
        {step === 0 ? (
          <button type="submit" className={`btn btn--primary ${styles.next}`}>
            Tiếp tục →
          </button>
        ) : (
          <a
            href={zaloChatUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn--primary ${styles.next}`}
            onClick={onZaloClick}
          >
            <ZaloIcon />
            Gửi qua Zalo
          </a>
        )}
      </div>

      <p className={styles.privacy}>
        {step === 0
          ? 'Thông tin của bạn chỉ được dùng để trao đổi về chương trình.'
          : 'Bấm “Gửi qua Zalo”: nội dung đặt lịch được sao chép sẵn, bạn chỉ cần dán vào khung chat Zalo và gửi.'}
      </p>
    </form>
  );
}

import type { ReactNode } from 'react';
import styles from './Booking.module.css';

interface Props {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  /** Nội dung phụ bên phải nhãn (ví dụ bộ đếm ký tự). */
  aside?: ReactNode;
  children: ReactNode;
}

export const describedBy = (id: string, hint?: string, error?: string) =>
  [hint ? `${id}-hint` : '', error ? `${id}-error` : ''].filter(Boolean).join(' ') || undefined;

export function Field({ id, label, required, hint, error, aside, children }: Props) {
  return (
    <div className={`${styles.field} ${error ? styles.hasError : ''}`}>
      <div className={styles.labelRow}>
        <label htmlFor={id} className={styles.labelText}>
          {label}
          {required && (
            <>
              <span className={styles.req} aria-hidden="true">
                {' '}
                *
              </span>
              <span className="sr-only"> (bắt buộc)</span>
            </>
          )}
        </label>
        {aside}
      </div>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className={styles.hint}>
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
}

import { useEffect, useState } from 'react';
import { profile } from '@/data/profile';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollLock } from '@/hooks/useScrollLock';
import Logo from '@/components/common/Logo';
import styles from './Header.module.css';

export function Header() {
  const { brand, nav } = profile;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(nav.map((n) => n.id));
  useScrollLock(open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header className={`${styles.header} ${scrolled || open ? styles.solid : ''}`}>
        <div className={`container ${styles.bar}`}>
          <a href="#hero" className={styles.logo} onClick={() => setOpen(false)}>
            <span className={styles.mono}>
              <Logo />
            </span>
            <span className={styles.name}>{brand.name}</span>
          </a>

          <nav className={styles.desktopNav} aria-label="Điều hướng chính">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`${styles.link} ${active === item.id ? styles.active : ''} ${
                  item.id === 'contact' ? styles.cta : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Đóng menu' : 'Mở menu'}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Menu mobile đặt ngoài <header>: backdrop-filter của header sẽ làm position: fixed tính theo header thay vì màn hình */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ''}`}
        aria-label="Menu di động"
        aria-hidden={!open}
      >
        <ul>
          {nav.map((item, i) => (
            <li key={item.id} style={{ transitionDelay: open ? `${80 + i * 40}ms` : '0ms' }}>
              <a href={`#${item.id}`} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
                <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.menuTagline}>{brand.tagline}</p>
      </nav>
    </>
  );
}

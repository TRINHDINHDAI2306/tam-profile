import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileCtaBar } from '@/components/layout/MobileCtaBar';
import { Hero } from '@/components/sections/Hero';
import { Partners } from '@/components/sections/Partners';
import { Story } from '@/components/sections/Story';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { HostingStyles } from '@/components/sections/HostingStyles';
import { Values } from '@/components/sections/Values';
import { Philosophy } from '@/components/sections/Philosophy';
import { Events } from '@/components/sections/Events';
import { Booking } from '@/components/sections/Booking';

/** Thứ tự section bám theo 9 trang của hồ sơ năng lực (docs/source/PHẦN II.docx). */
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero /> {/* Trang 1 – Bìa */}
        <Partners />
        <Story /> {/* Trang 2 – Lời ngỏ */}
        <About /> {/* Trang 3 – Giới thiệu */}
        <Experience /> {/* Trang 4 & 5 – Kinh nghiệm */}
        <HostingStyles /> {/* Trang 6 – Phong cách */}
        <Values /> {/* Trang 7 – Giá trị */}
        <Philosophy /> {/* Trang 8 & 9 – Triết lý & thơ */}
        <Events />
        <Booking />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}

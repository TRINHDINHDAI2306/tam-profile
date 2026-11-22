import { profile } from '@/data/profile';
import { Section } from '@/components/common/Section';
import { SmartImage } from '@/components/common/SmartImage';
import { Reveal } from '@/components/common/Reveal';
import styles from './Story.module.css';

/** Trang 2 – Lời ngỏ: câu chuyện về nghề. */
export function Story() {
  const { story } = profile;

  return (
    <Section id="story" eyebrow="Lời ngỏ" title={story.heading}>
      <div className={styles.grid}>
        <Reveal className={styles.photoWrap}>
          <SmartImage image={story.photo} ratio="3 / 4" className={styles.photo} />
          <span className={styles.frame} aria-hidden="true" />
        </Reveal>

        <Reveal className={styles.text} delay={120}>
          <blockquote className={styles.question}>{story.question}</blockquote>
          {story.paragraphs.map((p, i) => (
            <p key={i} className={i === story.paragraphs.length - 1 ? styles.closing : undefined}>
              {p}
            </p>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}

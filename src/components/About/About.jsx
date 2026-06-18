import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@/hooks/useGSAP'
import styles from './About.module.css'
import { about } from '@/data/content'

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────
// About — Text-Mask-Reveal on scroll
//
// Each word is wrapped in a clip-mask span.
// Words scrub from invisible → visible as the
// section scrolls into view (pinned midpoint).
// ─────────────────────────────────────────────

function splitWords(text) {
  return text.split(' ').map((word, i) => (
    <span key={i} className={styles.wordOuter}>
      <span className={styles.wordInner}>{word}&nbsp;</span>
    </span>
  ))
}

export default function About() {
  const rootRef = useGSAP((ctx) => {
    const words = ctx.selector(`.${styles.wordInner}`)

    gsap.fromTo(
      words,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        stagger: 0.035,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 75%',
          end: 'bottom 40%',
          scrub: 0.8,
        },
      }
    )
  })

  return (
    <section ref={rootRef} className={styles.about}>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.label}>Über uns</p>

          <h2 className={styles.heading}>{splitWords(about.heading)}</h2>

          <div className={styles.body}>
            {about.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

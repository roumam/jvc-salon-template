import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@/hooks/useGSAP'
import styles from './Gallery.module.css'
import { gallery } from '@/data/content'

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────
// Gallery — Horizontal scroll strip
//
// The strip is wider than the viewport.
// GSAP ScrollTrigger translates it on the X-axis
// while the section is pinned, creating a
// horizontal scroll illusion via vertical scroll.
// ─────────────────────────────────────────────

export default function Gallery() {
  const rootRef = useGSAP((ctx) => {
    const strip = ctx.selector(`.${styles.strip}`)[0]
    if (!strip) return

    const totalWidth = strip.scrollWidth
    const distance   = totalWidth - window.innerWidth

    gsap.to(strip, {
      x: -distance,
      ease: 'none',
      scrollTrigger: {
        trigger: rootRef.current,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    })
  })

  return (
    <section ref={rootRef} className={styles.gallery}>
      <div className={styles.strip}>
        {gallery.map((image, i) => (
          <figure key={i} className={styles.figure}>
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className={styles.image}
            />
            <figcaption className={styles.caption}>{image.alt}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

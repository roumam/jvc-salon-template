import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@/hooks/useGSAP'
import styles from './HeroParallax.module.css'
import { salon, booking } from '@/data/content'
import HERO_IMG from '../../assets/Hero.jpg'

gsap.registerPlugin(ScrollTrigger)


export default function HeroParallax() {
  const rootRef = useGSAP((ctx) => {
    const imgWrapper = ctx.selector(`.${styles.imgWrapper}`)[0]
    const eyebrow    = ctx.selector(`.${styles.eyebrow}`)[0]
    const headline   = ctx.selector(`.${styles.headline}`)[0]
    const sub        = ctx.selector(`.${styles.sub}`)[0]
    const cta        = ctx.selector(`.${styles.cta}`)[0]
    const scrollHint = ctx.selector(`.${styles.scrollHint}`)[0]

    // ── 1. Load-in timeline ────────────────────────
    gsap
      .timeline({ defaults: { ease: 'power3.out' } })
      // Image: subtle Ken Burns entrance (scale down from 1.06 → 1)
      .fromTo(
        imgWrapper,
        { scale: 1.06 },
        { scale: 1, duration: 2.2, ease: 'power2.out' }
      )
      // Staggered text reveal
      .fromTo(eyebrow,
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.8 },
        '-=1.6'
      )
      .fromTo(headline,
        { autoAlpha: 0, y: 48 },
        { autoAlpha: 1, y: 0, duration: 1.1 },
        '-=0.65'
      )
      .fromTo(sub,
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.8 },
        '-=0.55'
      )
      .fromTo(cta,
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.7 },
        '-=0.45'
      )
      .fromTo(scrollHint,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.6 },
        '-=0.2'
      )

    // ── 2. Scroll parallax ────────────────────────
    // Image wrapper is 140vh; we move it up by 40vh over the section's
    // scroll distance so the bottom edge stays flush with the section bottom.
    gsap.to(imgWrapper, {
      y: () => -(window.innerHeight * 0.4),
      ease: 'none',
      invalidateOnRefresh: true,
      scrollTrigger: {
        trigger: rootRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  })

  return (
    <section ref={rootRef} className={styles.hero}>

      {/* ── Background image ───────────────────── */}
      <div className={styles.imgWrapper}>
        <img
          src={HERO_IMG}
          alt="Barbers Gents Salon — JVC Dubai"
          className={styles.img}
        />
        <div className={styles.vignette} />
      </div>

      {/* ── Content ────────────────────────────── */}
      <div className={styles.content}>
        <p className={styles.eyebrow}>{salon.eyebrow}</p>

        <h1 className={styles.headline}>
          {salon.name}
        </h1>

        <p className={styles.sub}>{salon.description}</p>

        <a href="#booking" className={styles.cta}>
          <span>{booking.cta}</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* ── Scroll hint ─────────────────────────── */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLabel}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>

    </section>
  )
}

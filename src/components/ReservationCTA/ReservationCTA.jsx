import { useGSAP } from '@/hooks/useGSAP'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './ReservationCTA.module.css'
import { reservation } from '@/data/content'

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────
// ReservationCTA — Full-viewport closing section
//
// Heading scales up from slightly small as
// the section enters the viewport (clip + scale).
// ─────────────────────────────────────────────

export default function ReservationCTA() {
  const rootRef = useGSAP((ctx) => {
    const heading = ctx.selector(`.${styles.heading}`)[0]
    const cta     = ctx.selector(`.${styles.actions}`)[0]

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rootRef.current,
        start: 'top 65%',
        toggleActions: 'play none none none',
      },
    })

    tl.fromTo(
      heading,
      { clipPath: 'inset(0 0 100% 0)', y: 20 },
      { clipPath: 'inset(0 0 0% 0)', y: 0, duration: 1.1, ease: 'power4.out' }
    ).fromTo(
      cta,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
  })

  return (
    <section ref={rootRef} className={styles.cta}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.heading}>{reservation.heading}</h2>
          <p className={styles.subheading}>{reservation.subheading}</p>

          <div className={styles.actions}>
            <a
              href={`mailto:${reservation.email}`}
              className={styles.buttonPrimary}
            >
              {reservation.cta}
            </a>

            <a
              href={`tel:${reservation.phone.replace(/\s/g, '')}`}
              className={styles.buttonSecondary}
            >
              {reservation.phone}
            </a>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>© 2025 Caprista — alle Rechte vorbehalten.</p>
      </footer>
    </section>
  )
}

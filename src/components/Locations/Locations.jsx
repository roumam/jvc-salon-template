import { useGSAP } from '@/hooks/useGSAP'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Locations.module.css'
import { locations } from '@/data/content'

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────
// Locations — Card grid with stagger reveal
// ─────────────────────────────────────────────

export default function Locations() {
  const rootRef = useGSAP((ctx) => {
    const cards = ctx.selector(`.${styles.card}`)

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 70%',
        },
      }
    )
  })

  return (
    <section ref={rootRef} className={styles.locations}>
      <div className="container">
        <header className={styles.header}>
          <p className={styles.label}>Locations</p>
          <h2 className={styles.heading}>Find us.</h2>
        </header>

        <ul className={styles.grid}>
          {locations.map((loc) => (
            <li key={loc.id} className={styles.card}>
              <p className={styles.cardName}>{loc.name}</p>
              <address className={styles.cardAddress}>
                <p>{loc.address}</p>
              </address>
              <dl className={styles.cardDetails}>
                <div>
                  <dt>Opening Hours</dt>
                  <dd>{loc.hours}</dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>
                    <a href={`tel:${loc.phone.replace(/\s/g, '')}`}>{loc.phone}</a>
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>

        <div className={styles.map}>
          <iframe
            title="Barbers Gents Salon — Location"
            src="https://maps.google.com/maps?q=25.0606068,55.2017154&t=&z=17&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

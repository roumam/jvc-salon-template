import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@/hooks/useGSAP'
import styles from './Menu.module.css'
import { services } from '@/data/content'

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────
// Menu — Pinned section, Apple feature-scroller
//
// The section is pinned to the viewport. As the
// user scrolls, the active category transitions
// via GSAP scrub — left panel fades label,
// right panel swaps dish list with clip-reveal.
// ─────────────────────────────────────────────

export default function Menu() {
  const rootRef = useGSAP((ctx) => {
    const panels   = ctx.selector(`.${styles.panel}`)
    const labels   = ctx.selector(`.${styles.categoryLabel}`)
    const TOTAL    = services.length

    const SPEED = 1.2

    if (window.innerWidth <= 768) {
      gsap.set(labels, { opacity: 1 })
      return
    }

    // Set initial states
    gsap.set(labels[0],       { opacity: 1 })
    gsap.set(labels.slice(1), { opacity: 0.2 })
    gsap.set(panels.slice(1), { yPercent: 100, opacity: 0 })

    // Single timeline — pin + scrub in one ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rootRef.current,
        start: 'top top',
        end: () => `+=${window.innerHeight * (TOTAL - 1) * SPEED}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    })

    // Each category: 0.3 units to slide in, then hold until next segment
    for (let i = 1; i < TOTAL; i++) {
      tl.to(panels[i], { yPercent: 0, opacity: 1, ease: 'power2.inOut', duration: 0.3 }, i - 1)
      tl.to(labels[i], { opacity: 1, ease: 'none', duration: 0.3 }, i - 1)
    }
  })

  return (
    <section ref={rootRef} className={styles.menu}>
      <div className={styles.grid}>
        {/* Left: category navigation */}
        <nav className={styles.nav} aria-label="Service Categories">
          <p className={styles.sectionLabel}>Services</p>
          <ul>
            {services.map((cat) => (
              <li key={cat.id}>
                <span className={styles.categoryLabel}>{cat.label}</span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: stacked panels */}
        <div className={styles.panels}>
          {services.map((cat, i) => (
            <div
              key={cat.id}
              className={styles.panel}
              style={{ zIndex: i + 1 }}
            >
              <p className={styles.mobileCategoryHeader}>{cat.label}</p>
              <ul className={styles.items}>
                {cat.items.map((item) => (
                  <li key={item.name} className={styles.item}>
                    <div className={styles.itemMeta}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemDesc}>{item.description}</span>
                    </div>
                    <span className={styles.itemPrice}>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

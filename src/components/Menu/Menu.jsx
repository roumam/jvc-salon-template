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

    const mm = gsap.matchMedia()

    mm.add('(min-width: 769px)', () => {
      const SPEED = 1.2 // scroll distance per category (in vh units)

      // Pin the wrapper for the full scroll distance
      ScrollTrigger.create({
        trigger: rootRef.current,
        start: 'top top',
        end: () => `+=${window.innerHeight * (TOTAL - 1) * SPEED}`,
        pin: true,
        pinSpacing: true,
      })

      // First label always visible
      gsap.set(labels[0], { opacity: 1 })

      // Scrub through each panel
      panels.forEach((panel, i) => {
        if (i === 0) return
        gsap.fromTo(
          panel,
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: rootRef.current,
              start: () => `top+=${window.innerHeight * (i - 0.5) * SPEED} top`,
              end:   () => `top+=${window.innerHeight * i * SPEED} top`,
              scrub: true,
            },
          }
        )
      })

      // Fade category labels
      labels.forEach((label, i) => {
        if (i === 0) return
        gsap.fromTo(
          label,
          { opacity: 0.2 },
          {
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: rootRef.current,
              start: () => `top+=${window.innerHeight * (i - 0.5) * SPEED} top`,
              end:   () => `top+=${window.innerHeight * i * SPEED} top`,
              scrub: true,
            },
          }
        )
      })
    })

    mm.add('(max-width: 768px)', () => {
      // On mobile: show all labels at full opacity, no pinning
      gsap.set(labels, { opacity: 1 })
    })
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

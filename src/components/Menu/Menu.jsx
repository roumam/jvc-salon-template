import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@/hooks/useGSAP'
import styles from './Menu.module.css'
import { menuCategories } from '@/data/content'

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
    const TOTAL    = menuCategories.length

    // Pin the wrapper for the full scroll distance
    ScrollTrigger.create({
      trigger: rootRef.current,
      start: 'top top',
      end: () => `+=${window.innerHeight * (TOTAL - 1)}`,
      pin: true,
      pinSpacing: true,
    })

    // Scrub through each panel
    panels.forEach((panel, i) => {
      if (i === 0) return // first panel starts visible

      gsap.fromTo(
        panel,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: () => `top+=${window.innerHeight * (i - 0.5)} top`,
            end:   () => `top+=${window.innerHeight * i} top`,
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
            start: () => `top+=${window.innerHeight * (i - 0.5)} top`,
            end:   () => `top+=${window.innerHeight * i} top`,
            scrub: true,
          },
        }
      )
    })
  })

  return (
    <section ref={rootRef} className={styles.menu}>
      <div className={styles.grid}>
        {/* Left: category navigation */}
        <nav className={styles.nav} aria-label="Speisekarte Kategorien">
          <p className={styles.sectionLabel}>Speisekarte</p>
          <ul>
            {menuCategories.map((cat) => (
              <li key={cat.id}>
                <span className={styles.categoryLabel}>{cat.label}</span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: stacked panels */}
        <div className={styles.panels}>
          {menuCategories.map((cat, i) => (
            <div
              key={cat.id}
              className={styles.panel}
              style={{ zIndex: i + 1 }}
            >
              <ul className={styles.items}>
                {cat.items.map((item) => (
                  <li key={item.name} className={styles.item}>
                    <div className={styles.itemMeta}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemDesc}>{item.description}</span>
                    </div>
                    <span className={styles.itemPrice}>{item.price} €</span>
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

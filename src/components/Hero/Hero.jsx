import { useRef, useEffect } from 'react'
import styles from './Hero.module.css'
import { restaurant } from '@/data/content'

// ─────────────────────────────────────────────
// Hero — Canvas frame-scrub (Apple-style)
//
// Expects JPEG frames at: /public/frames/frame_####.jpg
// Total frame count configured via FRAME_COUNT below.
//
// Scroll progress is read via getBoundingClientRect (no scroll listener),
// driven by a requestAnimationFrame loop integrated with Lenis.
// ─────────────────────────────────────────────

const FRAME_COUNT = 120
const FRAME_PATH = (n) => `/frames/frame_${String(n).padStart(4, '0')}.jpg`

export default function Hero() {
  const sectionRef = useRef(null)
  const canvasRef  = useRef(null)
  const rafRef     = useRef(null)
  const imagesRef  = useRef([])
  const currentFrameRef = useRef(0)

  useEffect(() => {
    const canvas  = canvasRef.current
    const ctx     = canvas.getContext('2d')

    // ── 1. Resize canvas to viewport ──────────────
    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      drawFrame(currentFrameRef.current)
    }
    window.addEventListener('resize', resize)
    resize()

    // ── 2. Preload all frames ──────────────────────
    const images = Array.from({ length: FRAME_COUNT }, (_, i) => {
      const img = new Image()
      img.src = FRAME_PATH(i)
      return img
    })
    imagesRef.current = images

    // Draw first frame as soon as it loads
    images[0].onload = () => drawFrame(0)

    // ── 3. Draw helper (cover-fit) ─────────────────
    function drawFrame(index) {
      const img = images[Math.max(0, Math.min(index, FRAME_COUNT - 1))]
      if (!img.complete || !img.naturalWidth) return

      const scale = Math.max(
        canvas.width  / img.naturalWidth,
        canvas.height / img.naturalHeight,
      )
      const w = img.naturalWidth  * scale
      const h = img.naturalHeight * scale
      const x = (canvas.width  - w) / 2
      const y = (canvas.height - h) / 2

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, x, y, w, h)
    }

    // ── 4. rAF loop — no scroll listener ──────────
    function tick() {
      const section = sectionRef.current
      if (section) {
        const rect     = section.getBoundingClientRect()
        const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)))
        const frame    = Math.round(progress * (FRAME_COUNT - 1))

        if (frame !== currentFrameRef.current) {
          currentFrameRef.current = frame
          drawFrame(frame)
        }
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section ref={sectionRef} className={styles.hero}>
      {/* Sticky canvas viewport */}
      <div className={styles.sticky}>
        <canvas ref={canvasRef} className={styles.canvas} />

        <div className={styles.overlay}>
          <p className={styles.eyebrow}>Berlin · seit 1987</p>
          <h1 className={styles.headline}>{restaurant.name}</h1>
          <p className={styles.tagline}>{restaurant.tagline}</p>
        </div>

        <div className={styles.scrollHint} aria-hidden="true">
          <span>Scroll</span>
          <div className={styles.line} />
        </div>
      </div>
    </section>
  )
}

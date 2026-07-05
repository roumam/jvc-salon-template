import { useState, useEffect } from 'react'
import { booking, salon } from '@/data/content'
import styles from './Nav.module.css'
import LOGO from '@/assets/logo.png'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>

        <a href="#" className={styles.logo} aria-label={salon.name}>
          <img src={LOGO} alt={salon.name} height="72" />
        </a>

        <a
          href={`https://wa.me/${booking.whatsapp}`}
          className={styles.cta}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Now
        </a>

      </div>
    </header>
  )
}

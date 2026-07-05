import { booking } from '@/data/content'
import styles from './FloatingContact.module.css'

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none"/>
  </svg>
)

const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.41A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 1.5a8.5 8.5 0 110 17 8.5 8.5 0 010-17zm-3.3 4.8c-.18 0-.47.07-.72.34-.24.27-.93.91-.93 2.22 0 1.3.95 2.56 1.08 2.74.13.17 1.84 2.94 4.55 4.01.64.27 1.13.44 1.52.56.64.2 1.22.17 1.68.1.51-.07 1.58-.65 1.8-1.27.22-.62.22-1.15.16-1.27-.07-.11-.25-.18-.52-.31-.27-.14-1.59-.78-1.84-.87-.24-.09-.42-.13-.6.13-.17.27-.67.87-.82 1.05-.15.17-.31.2-.57.07-.27-.14-1.13-.42-2.15-1.33-.79-.71-1.33-1.58-1.48-1.85-.16-.27-.02-.41.12-.55.12-.12.27-.31.4-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.13-.6-1.44-.82-1.97-.2-.5-.41-.43-.57-.44l-.48-.01z"/>
  </svg>
)

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.7 10.5 19.79 19.79 0 01.67 2 2 2 0 012.65.01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l.97-.97a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

export default function FloatingContact() {
  return (
    <div className={styles.bar}>
      {booking.instagram && (
        <a
          href={`https://instagram.com/${booking.instagram}`}
          className={styles.btn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <IconInstagram />
        </a>
      )}

      <a
        href={`https://wa.me/${booking.whatsapp}`}
        className={styles.btn}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <IconWhatsApp />
      </a>

      <a
        href={`tel:${booking.phone}`}
        className={styles.btn}
        aria-label="Anrufen"
      >
        <IconPhone />
      </a>
    </div>
  )
}

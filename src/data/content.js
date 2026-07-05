import img7804 from '../assets/IMG_7804.jpg'
import img7805 from '../assets/IMG_7805.jpg'
import img7806 from '../assets/IMG_7806.jpg'
import img7807 from '../assets/IMG_7807.jpg'
import img7808 from '../assets/IMG_7808.jpg'

// ─────────────────────────────────────────
// Barbers Gents Salon — JVC, Dubai
// ─────────────────────────────────────────

export const salon = {
  name:        'Barbers Gents Salon',
  tagline:     'Sharp Cuts. Clean Lines.',
  description: 'Precision cuts and expert grooming in the heart of JVC, Dubai.',
  eyebrow:     'Dubai · Jumeirah Village Circle',
}

export const about = {
  heading: 'Crafted for the modern gentleman.',
  body: [
    'At Barbers Gents Salon, every visit is a ritual. Nestled in the Summer Cluster of JVC, we combine old-school barbering tradition with a sharp, contemporary approach — delivering precision fades, clean shaves, and confident results.',
    'From quick machine cuts to full colour treatments, our team handles it all with the same attention to detail. No rush. No shortcuts. Just a cut worth coming back for.',
  ],
}

export const services = [
  {
    id: 'haircut',
    label: 'Haircut',
    items: [
      { name: 'Adult Haircut',  description: 'Full cut and style, scissor finish', price: 'AED 70' },
      { name: 'Kids Haircut',   description: 'For the young gents',                price: 'AED 50' },
      { name: 'Machine Cut',    description: 'Clean all-over machine finish',       price: 'AED 60' },
    ],
  },
  {
    id: 'beard',
    label: 'Beard',
    items: [
      { name: 'Beard Shave',    description: 'Hot towel shave, razor finish',   price: 'AED 50' },
      { name: 'Machine Shave',  description: 'Precise machine beard trim',      price: 'AED 40' },
    ],
  },
  {
    id: 'color-keratin',
    label: 'Color & Keratin',
    items: [
      { name: 'Hair Dye',          description: 'Full hair colour treatment',          price: 'AED 100' },
      { name: 'Highlights',        description: 'Partial or full highlights',           price: 'AED 150' },
      { name: 'Beard Dye',         description: 'Colour treatment for beard',           price: 'AED 40'  },
      { name: 'Keratin — Short',   description: 'Smoothing treatment, short hair',      price: 'AED 300' },
      { name: 'Keratin — Long',    description: 'Smoothing treatment, long hair',       price: 'AED 500' },
    ],
  },
  {
    id: 'extras',
    label: 'Extras',
    items: [
      { name: 'Waxing — Full Face',    description: 'Complete facial waxing',                price: 'AED 20' },
      { name: 'Threading — Full Face', description: 'Full face threading',                    price: 'AED 20' },
      { name: 'Blow Dry',              description: 'Finish with a professional blow dry',     price: 'AED 45' },
      { name: 'Oil Bath',              description: 'Nourishing scalp oil treatment',          price: 'AED 50' },
    ],
  },
]

export const gallery = [
  { src: img7804, alt: 'Fade Haircut with Beard Trim' },
  { src: img7805, alt: 'Man Bun with Undercut Fade' },
  { src: img7806, alt: 'Short Fade — Clean Finish' },
  { src: img7807, alt: 'High Fade with Sculpted Beard' },
  { src: img7808, alt: 'Man Bun with Full Beard' },
]

export const locations = [
  {
    id: 'jvc',
    name: 'Jumeirah Village Circle',
    address: 'Summer Cluster, JVC, Dubai',
    hours: 'Daily 10:00 – 23:00',
    phone: '+971 56 137 9841',
  },
]

export const booking = {
  heading:    'Your next cut, one message away.',
  subheading: 'No queue. No phone call needed.',
  cta:        'Book via WhatsApp',
  whatsapp:   '971561379841',
  phone:      '+971 56 137 9841',
  instagram:  'barbersgentssalon',
}

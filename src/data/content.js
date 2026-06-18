// ─────────────────────────────────────────────
// Caprista — Köln
// ─────────────────────────────────────────────

export const restaurant = {
  name:        'Caprista',
  tagline:     'Dolce Vita, serviert.',
  description: 'Gegründet mit dem Traum, ein Stück Capri nach Köln zu bringen. Bio-Eier, frische Zutaten, mediterrane Eleganz — jeden Tag, den ganzen Tag.',
  eyebrow:     'Köln · Ehrenfeld & Belgisches Viertel',
}

export const about = {
  heading: 'Ein Stück Capri',
  body: [
    'Gegründet mit dem Traum, ein Stück Capri nach Köln zu bringen — mit Zitronenbäumen, Meerluft und dem Gefühl, dass der Tag immer ein bisschen länger dauern darf.',
    'Bio-Eier, frische Zutaten, mediterrane Eleganz — jeden Tag, den ganzen Tag.',
  ],
}

export const menuCategories = [
  {
    id: 'vorspeisen',
    label: 'Vorspeisen',
    items: [
      { name: 'Eggs Benedict',    description: 'Hollandaise, Räucherlachs, Brioche',      price: 'ab 13,90' },
      { name: 'Smashed Burrata',  description: 'Kirschtomaten, Basilikumöl, Fleur de Sel', price: '13,50'   },
      { name: 'Avocado Amore',    description: 'Sojasauce, Sesam, Microgreens, Limette',   price: '12,50'   },
    ],
  },
  {
    id: 'hauptgaenge',
    label: 'Hauptgänge',
    items: [
      { name: 'Pancakes',     description: 'Ahornsirup, frische Beeren, Mascarpone',    price: 'ab 11,90' },
      { name: 'Veggie Max',   description: 'Gegrilltes Gemüse, Pesto, Ciabatta',        price: '11,50'    },
      { name: 'Strammer Max', description: 'Bauernbrot, Spiegelei, Serrano, Schnittlauch', price: 'ab 10,90' },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      { name: 'Cornetto Pistacchio', description: 'Sizilianische Pistaziencreme',        price: '4,50'  },
      { name: 'Zitronensorbet',      description: 'Amalfi-Zitrone, frische Minze',       price: '5,90'  },
      { name: 'Berry Matcha Bowl',   description: 'Matcha-Creme, Erdbeeren, Granola',    price: '10,50' },
    ],
  },
]

export const gallery = [
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800', alt: 'Café-Atmosphäre am Morgen'       },
  { src: 'https://images.unsplash.com/photo-1533920379810-6bedac961555?q=80&w=800', alt: 'Handgemachter Cappuccino'         },
  { src: 'https://images.unsplash.com/photo-1623428187969-5da0c1c5a0c4?q=80&w=800', alt: 'Pistazieneis Cornetto'            },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800', alt: 'Frühstücksklassiker'              },
  { src: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800', alt: 'Mediterrane Tischdekoration'      },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800', alt: 'Frische Zutaten vom Wochenmarkt'  },
]

export const locations = [
  {
    id: 'ehrenfeld',
    name: 'Ehrenfeld',
    address: 'Venloer Str. 380, 50825 Köln',
    hours: 'Täglich 9:00–18:00',
    phone: '+49 221 168 420 00',
  },
  {
    id: 'belgisches-viertel',
    name: 'Belgisches Viertel',
    address: 'Flandrische Str. 15, 50672 Köln',
    hours: 'Täglich 9:00–18:00',
    phone: '+49 221 168 420 01',
  },
]

export const reservation = {
  heading:    'Komm vorbei.',
  subheading: 'Kein Dresscode. Kein Stress. Nur gutes Essen.',
  cta:        'Tisch reservieren',
  phone:      '+49 221 168 420 00',
  email:      'ciao@caprista.de',
}

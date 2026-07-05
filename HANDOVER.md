# JVC Salon Template — Übergabe an Claude Code

## Projekt-Kontext
- Repo: `~/projects/jvc-salon-template` (GitHub: roumam)
- Stack: React + Vite + GSAP + ScrollTrigger + Lenis + Tailwind
- Ursprung: Kopie von Caprista-Café-Template (`~/projects/restaurant-template`), umgebaut auf Salon
- **Ship-Deadline: Dienstag, 7. Juli** — ✅ erledigt
- Sprache der Website: **Englisch**
- `package.json` heißt noch `restaurant-template@0.1.0` — kosmetisch, niedrige Priorität

## Status: LIVE ✅
- **Production URL:** https://barbers-gents-salon.netlify.app
- Netlify-Projekt: `barbers-gents-salon` (Team: contact-5qqyybw's team)
- Netlify CLI global installiert unter `/Users/rouhoulah/.npm-global/bin/netlify`
- Deploy-Befehl für Updates:
  ```bash
  cd ~/projects/jvc-salon-template
  npm run build
  /Users/rouhoulah/.npm-global/bin/netlify deploy --prod --no-build --dir=dist --auth=TOKEN
  ```

## Aktueller Salon: "Barbers Gents Salon"
- Standort: Summer Cluster, JVC, Dubai
- Reiner Männer-Barbershop
- Instagram: @barbersgentssalon
- Echte Service-Kategorien mit echten AED-Preisen (aus Facebook-Preisliste, Foto vom 9. Nov 2024):
  - **Haircut**: Adult 70, Kids 50, Machine 60
  - **Beard**: Shave 50, Machine Shave 40
  - **Color & Keratin**: Hair Dye 100, Highlights 150, Beard Dye 40, Keratin Short 300, Keratin Long 500
  - **Extras**: Waxing Full Face 20, Threading Full Face 20, Blow Dry 45, Oil Bath 50

## Farb-Presets (fertig)
Alle Themes werden per URL-Parameter aktiviert:
- `?theme=barber` — dunkel, warmes Gold (Default)
- `?theme=beauty` — hell, rosé/blush
- `?theme=luxe` — kaltblauschwarz, platin

Implementierung: `src/styles/tokens.css` (3 `[data-theme]`-Blöcke) + `src/App.jsx` (URL-param liest `?theme=` und setzt `data-theme` auf `<html>`)

## Fertig (alle Punkte abgeschlossen)
- ✅ Alle Komponenten auf Englisch & Salon-Vokabular umgestellt
- ✅ Echte Preise aus Facebook-Preisliste eingebaut
- ✅ Locations-Daten eingetragen
- ✅ Galerie-Bilder eingebunden
- ✅ CSS-Fix für Hero-Lesbarkeit (Vignette + Text-Shadow)
- ✅ 3 Farb-Presets gebaut
- ✅ Netlify Deploy live

## Offene Punkte (niedrige Priorität, kosmetisch)
- Hero-Bild: aktuell echtes Foto von @barbersgentssalon — Pole-Bild als Alternative wurde diskutiert aber nicht entschieden
- Handy-Test: `npm run dev -- --host`, dann über Network-IP testen
- `package.json` Namen ändern auf `jvc-salon-template`
- `Menu.jsx` → `Services.jsx` umbenennen
- `Hero.jsx` (unbenutzt, auskommentiert in App.jsx) löschen

## Business-Kontext
- Ziel: 3-4 Salon-Abschlüsse à ~€1.550 = €5.000 in 30 Tagen
- Alle anderen Projekte (Revalue-Redesign, KI-Recherche, Luxus-Template) sind für 30 Tage eingefroren

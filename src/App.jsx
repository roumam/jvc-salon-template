import { useLenis } from '@/hooks/useLenis'
// Swap hero variant per client:
// import Hero from '@/components/Hero/Hero'             // canvas frame-scrub
import HeroParallax from '@/components/HeroParallax/HeroParallax' // fullscreen parallax
import About from '@/components/About/About'
import Menu from '@/components/Menu/Menu'
import Gallery from '@/components/Gallery/Gallery'
import Locations from '@/components/Locations/Locations'
import ReservationCTA from '@/components/ReservationCTA/ReservationCTA'

export default function App() {
  useLenis()

  return (
    <main>
      <HeroParallax />
      <About />
      <Menu />
      <Gallery />
      <Locations />
      <ReservationCTA />
    </main>
  )
}

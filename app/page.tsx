import { Suspense } from 'react'
import HelloSection from '@/components/HelloSection'
import Hero from '@/components/Hero'
import Parents from '@/components/Parents'
import OurStory from '@/components/OurStory'
import Location from '@/components/Location'
import Gallery from '@/components/Gallery'
import RSVP from '@/components/RSVP'
import Footer from '@/components/Footer'
import MusicPlayer from '@/components/MusicPlayer'

export default function Home() {
  return (
    <main className="relative">
      <MusicPlayer />
      <Suspense fallback={<div className="min-h-screen" />}>
        <HelloSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen" />}>
        <Hero />
      </Suspense>
      <Parents />
      <OurStory />
      <Location />
      <RSVP />
      <Gallery />
      <Footer />
    </main>
  )
}
import { Suspense } from 'react'
import HelloSection from '@/components/HelloSection'
import Hero from '@/components/Hero'
import CloudAnimation from '@/components/CloudAnimation'
import OurStory from '@/components/OurStory'
import EventDetails from '@/components/EventDetails'
import Location from '@/components/Location'
import Gallery from '@/components/Gallery'
import RSVP from '@/components/RSVP'
import Footer from '@/components/Footer'
import MusicPlayer from '@/components/MusicPlayer'

export default function Home() {
  return (
    <main className="relative">
      <CloudAnimation />
      <MusicPlayer />
      <Suspense fallback={<div className="min-h-screen" />}>
        <HelloSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen" />}>
        <Hero />
      </Suspense>
      <OurStory />
      <EventDetails />
      <Location />
      <Gallery />
      <RSVP />
      <Footer />
    </main>
  )
}
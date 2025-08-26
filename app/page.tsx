'use client'

import { Suspense, useState, useRef } from 'react'
import HelloSection from '@/components/HelloSection'
import Hero from '@/components/Hero'
import Parents from '@/components/Parents'
import OurStory from '@/components/OurStory'
import Location from '@/components/Location'
import Gallery from '@/components/Gallery'
import RSVP from '@/components/RSVP'
import LiveStreaming from '@/components/LiveStreaming'
import Gift from '@/components/Gift'
import Footer from '@/components/Footer'
import MusicPlayer, { MusicPlayerRef } from '@/components/MusicPlayer'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import WelcomeScreen from '@/components/WelcomeScreen'

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true)
  const musicPlayerRef = useRef<MusicPlayerRef>(null)

  const handleOpenInvitation = () => {
    // Start music when invitation is opened
    if (musicPlayerRef.current) {
      musicPlayerRef.current.startMusic()
    }
    setShowWelcome(false)
  }

  return (
    <main className="relative">
      {showWelcome && <WelcomeScreen onOpen={handleOpenInvitation} />}
      <MusicPlayer ref={musicPlayerRef} />
      <LanguageSwitcher />
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
      <LiveStreaming />
      <Gallery />
      <Gift />
      <Footer />
    </main>
  )
}
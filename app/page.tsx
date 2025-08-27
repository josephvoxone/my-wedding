'use client'

import { Suspense, useState, useRef } from 'react'
import HelloSection from '@/components/HelloSection'
import Hero from '@/components/Hero'
import Parents from '@/components/Parents'
import OurStory from '@/components/OurStory'
import SpiritualJourney from '@/components/SpiritualJourney'
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
  const [showContent, setShowContent] = useState(false)
  const [messageOpened, setMessageOpened] = useState(false)
  const musicPlayerRef = useRef<MusicPlayerRef>(null)

  const handleOpenInvitation = () => {
    // Start music when invitation is opened
    if (musicPlayerRef.current) {
      musicPlayerRef.current.startMusic()
    }
    setShowWelcome(false)
    // Delay showing content to allow welcome screen to fully animate out
    setTimeout(() => {
      setShowContent(true)
    }, 800)
  }

  return (
    <main className="relative">
      {showWelcome && <WelcomeScreen onOpen={handleOpenInvitation} />}
      <MusicPlayer ref={musicPlayerRef} />
      <LanguageSwitcher />
      {showContent && (
        <>
          <Suspense fallback={<div className="min-h-screen" />}>
            <HelloSection 
              key="hello-section" 
              onMessageOpen={() => setMessageOpened(true)}
              scrollLocked={!messageOpened}
            />
          </Suspense>
          <Suspense fallback={<div className="min-h-screen" />}>
            <Hero />
          </Suspense>
          <Parents />
          <OurStory />
          <SpiritualJourney />
          <Location />
          <RSVP />
          <LiveStreaming />
          <Gallery />
          <Gift />
          <Footer />
        </>
      )}
    </main>
  )
}
'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { TextRevealGsap } from '@/components/magicui/text-reveal-gsap'
import type { MusicPlayerRef } from '@/components/MusicPlayer'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface SpiritualJourneyProps {
  musicPlayerRef?: React.RefObject<MusicPlayerRef>
}

export default function SpiritualJourney({ musicPlayerRef }: SpiritualJourneyProps) {
  const { t } = useLanguage()
  const [showTestimony, setShowTestimony] = useState(false)
  
  // Handle music change when opening testimony
  useEffect(() => {
    if (showTestimony && musicPlayerRef?.current) {
      // Change to spiritual music (will auto-play if music was already playing)
      setTimeout(() => {
        musicPlayerRef.current?.changeTrack('/music/I Sing Praises.mp3')
      }, 100)
    }
  }, [showTestimony, musicPlayerRef])
  
  // Handle close function with music change
  const handleClose = () => {
    // First set closing state to prevent re-triggering
    setShowTestimony(false)
    
    // Only change music back if we have a valid ref
    // Use requestAnimationFrame to ensure DOM has updated
    requestAnimationFrame(() => {
      if (musicPlayerRef?.current) {
        musicPlayerRef.current.changeTrack('/music/before-spring.mp3')
      }
    })
  }
  
  // Store scroll position
  const scrollPositionRef = useRef(0)
  
  // Handle scroll locking separately
  useEffect(() => {
    if (showTestimony) {
      // Save current scroll position BEFORE locking
      scrollPositionRef.current = window.scrollY
      
      // Lock scroll
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollPositionRef.current}px`
      document.body.style.width = '100%'
      
      // Refresh ScrollTrigger after DOM changes
      setTimeout(() => {
        if (typeof window !== 'undefined' && ScrollTrigger) {
          ScrollTrigger.refresh()
        }
      }, 100)
    } else if (scrollPositionRef.current > 0) {
      // Restore scroll position and unlock
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      
      // Restore to the saved position (stay at spiritual journey section)
      window.scrollTo(0, scrollPositionRef.current)
      
      // Refresh ScrollTrigger after restoring scroll
      setTimeout(() => {
        if (typeof window !== 'undefined' && ScrollTrigger) {
          ScrollTrigger.refresh()
        }
      }, 100)
    }
    
    return () => {
      // Cleanup on unmount
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [showTestimony])

  return (
    <section id="spiritual-journey" className="bg-gradient-to-b from-cream to-white">
      {/* Button Section - Always rendered */}
      <div className={`min-h-screen flex items-center justify-center px-8 ${showTestimony ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'} transition-opacity duration-500`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center max-w-2xl"
          >
            <motion.p 
              className="font-monsieur text-3xl md:text-4xl text-sage mb-2"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              Our
            </motion.p>
            <motion.h2 
              className="font-bodoni text-4xl md:text-5xl text-brown uppercase -mt-2 mb-6"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              Spiritual Journey
            </motion.h2>
            
            <p className="font-libre text-sm text-brown-soft mb-8">
              {t.spiritualJourney.subtitle}
            </p>
            
            <motion.button
              onClick={() => {
                setShowTestimony(true)
                // Don't start music here - let useEffect handle it
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-sage hover:bg-sage-dark text-white font-libre text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t.spiritualJourney.buttonText}
            </motion.button>
          </motion.div>
        </div>
      
      {/* Testimony overlay - shown on top when active */}
      {showTestimony && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-45 bg-gradient-to-b from-cream to-white"
        >
          {/* Scrollable content container */}
          <div className="h-full overflow-y-auto">
          {/* Close button - fixed at top right */}
          <motion.button
            onClick={handleClose}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="fixed top-8 right-8 z-50 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-libre text-brown font-medium">✕ Close</span>
          </motion.button>
          
          {/* Title Section when testimony is shown */}
          <div className="min-h-screen flex items-center justify-center px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-center"
            >
              <div className="mb-8">
                <p className="font-monsieur text-4xl md:text-5xl text-sage">
                  {t.spiritualJourney.testimonyTitle}
                </p>
                <h2 className="font-bodoni text-5xl md:text-6xl text-brown uppercase -mt-2">
                  {t.spiritualJourney.testimonySubtitle}
                </h2>
              </div>
              <p className="font-libre text-lg text-brown-soft max-w-2xl mx-auto">
                {t.spiritualJourney.testimonyIntro}
              </p>
              
              {/* Scroll indicator */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mt-20"
              >
                <p className="font-libre text-sm text-brown-soft mb-2">
                  {t.spiritualJourney.scrollIndicator}
                </p>
                <svg className="w-6 h-6 mx-auto text-brown-soft" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Testimony Chapters with Text Reveal */}
          {t.spiritualJourney.chapters.map((chapter, index) => {
            // Define media paths for specific chapters
            const chapterMedia: { [key: number]: { type: 'image' | 'video', src: string } } = {
              0: { type: 'image', src: '/assets/spiritual/tanda.jpeg' }, // tanda dari tuhan
              1: { type: 'image', src: '/assets/spiritual/wave.jpeg' }, // Hubungan Pasang Surut
              2: { type: 'image', src: '/assets/spiritual/penolakan.jpeg' }, // Penolakan (index 2)
              3: { type: 'video', src: '/assets/spiritual/lost.mp4' }, // tahun-tahun Penuh Beban (index 3)
              4: { type: 'image', src: '/assets/spiritual/job.jpg' }, // Pekerjaan Misterius (index 4)
              5: { type: 'video', src: '/assets/spiritual/dubai.mp4' }, // Perjalanan ke Dubai (index 5)
              6: { type: 'video', src: '/assets/spiritual/gunung.mp4' }, // tuhan gunung batuku (index 6)
              7: { type: 'video', src: '/assets/spiritual/sunset.mp4' }, // Akan cerah, sebab langit merah (index 7)
              8: { type: 'video', src: '/assets/spiritual/guidence.mp4' }, // Panggilan Hidup (index 8)
              9: { type: 'image', src: '/assets/spiritual/pertobatan.jpeg' }, // Pertobatan (index 9)
              10: { type: 'image', src: '/assets/spiritual/penyertaan.jpeg' }, // Penyertaan Dia (index 10)
              11: { type: 'image', src: '/assets/spiritual/kami satu.jpeg' }, // kami satu (index 11)
            }
            
            return (
            <div key={index} className="mb-20">
              {/* Text Reveal Section - GSAP version for smooth scroll */}
              <TextRevealGsap>
                {chapter.content}
              </TextRevealGsap>
              
              {/* Photo/Illustration - flows naturally after text */}
              <div className="flex justify-center px-8 mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    rotate: index % 2 === 0 ? -2 : 2
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 0,
                    transition: { duration: 0.3 }
                  }}
                  className="inline-block cursor-pointer"
                >
                  <div className="bg-white p-4 shadow-2xl transform hover:shadow-2xl transition-all duration-300">
                    <div className="relative w-72 h-[350px] md:w-[300px] md:h-[375px] overflow-hidden">
                      {chapterMedia[index] ? (
                        chapterMedia[index].type === 'video' ? (
                          <video
                            src={chapterMedia[index].src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Image
                            src={chapterMedia[index].src}
                            alt={chapter.title}
                            fill
                            className="object-cover"
                          />
                        )
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-sage/10 to-sage-dark/20 flex items-center justify-center">
                          <div className="text-center">
                            <p className="font-bodoni text-2xl text-brown mb-2">{chapter.title}</p>
                            <p className="font-libre text-sm text-brown-soft">Chapter {index + 1}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mt-4 text-center">
                      <p className={`font-homemade text-brown ${
                        index === 7 ? 'text-sm' : 'text-lg'
                      }`}>{chapter.title}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Additional video for Dubai journey */}
              {index === 5 && (
                <div className="flex justify-center px-8 mt-12 mb-20">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      rotate: -2
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      duration: 0.6,
                      delay: 0.4,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: 0,
                      transition: { duration: 0.3 }
                    }}
                    className="inline-block cursor-pointer"
                  >
                    <div className="bg-white p-4 shadow-2xl transform hover:shadow-2xl transition-all duration-300">
                      <div className="relative w-72 h-[350px] md:w-[300px] md:h-[375px] overflow-hidden">
                        <video
                          src="/assets/spiritual/journey.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <p className="font-homemade text-lg text-brown">journey to middle east</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
            )
          })}

          {/* Closing Message */}
          <div className="min-h-screen flex items-center justify-center px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center max-w-3xl"
            >
              <h3 className="font-monsieur text-4xl md:text-5xl text-brown mb-6">
                {t.spiritualJourney.closingTitle}
              </h3>
              <p className="font-libre text-lg text-brown-soft mb-8 whitespace-pre-line">
                {t.spiritualJourney.closingMessage}
              </p>
            </motion.div>
          </div>
          
          </div>
        </motion.div>
      )}
    </section>
  )
}
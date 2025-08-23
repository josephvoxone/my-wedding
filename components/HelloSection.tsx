'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { MorphingText } from '@/components/magicui/morphing-text'
import { TextAnimate } from '@/components/magicui/text-animate'

const greetings = [
  'Hai',           // Indonesia
  'Hello',         // English
  'Shalom',          // Indonesia (alternative)
  'ආයුබෝවන්',      // Sri Lanka (Sinhala)
  '你好',          // China
  'مرحبا',        // Arabic (UAE/Dubai)
  'Sawubona',     // South Africa (Zulu)
  'Kula Nuwun', // Jawa
]

export default function HelloSection() {
  const searchParams = useSearchParams()
  const [guestName, setGuestName] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  
  useEffect(() => {
    const name = searchParams.get('to') || searchParams.get('nama')
    if (name) {
      setGuestName(decodeURIComponent(name))
    }
  }, [searchParams])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-cream to-cream-dark relative">
      <AnimatePresence mode="wait">
        {!showMessage ? (
          <motion.div
            key="greeting"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center"
          >
            {/* Morphing Greeting Text */}
            <motion.div 
              className="mb-4 w-full flex flex-col items-center"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1,
                type: "spring",
                stiffness: 100
              }}
            >
              <MorphingText 
                texts={greetings}
                className="font-libre text-brown text-center"
              />
            </motion.div>

            {/* Guest Name */}
            {guestName && (
              <div className="space-y-4">
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  duration={1.5}
                  delay={1}
                  className="font-homemade text-2xl md:text-3xl lg:text-4xl text-sage-dark text-center"
                  as="p"
                >
                  Untuk yang terkasih,
                </TextAnimate>
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  duration={2}
                  delay={2.5}
                  className="font-homemade text-5xl md:text-7xl lg:text-8xl text-brown text-center text-shadow-soft"
                  as="h2"
                >
                  {guestName}
                </TextAnimate>
              </div>
            )}
            
          </motion.div>
        ) : (
          <motion.div
            key="message"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="w-full max-w-3xl mx-auto"
          >
            {/* Guest Name at top */}
            <motion.div 
              className="mb-12 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="font-homemade text-2xl md:text-3xl lg:text-4xl text-sage-dark mb-4">
                Untuk yang terkasih,
              </p>
              <h2 className="font-homemade text-5xl md:text-7xl lg:text-8xl text-brown text-shadow-soft">
                {guestName}
              </h2>
            </motion.div>
            
            {/* Thank You Message */}
            <div className="space-y-6">
              <TextAnimate
                animation="fadeIn"
                by="word"
                duration={3}
                delay={0.8}
                className="font-libre text-lg md:text-xl text-brown-soft text-justify leading-relaxed"
                as="p"
              >
                Senang sekali bisa berbagi kabar bahagia ini denganmu. Kehadiranmu dalam hidup kami sangat berarti, dan kami percaya, doa serta dukunganmu ikut membentuk perjalanan kami sampai di titik ini.
              </TextAnimate>
              <TextAnimate
                animation="fadeIn"
                by="word"
                duration={3}
                delay={2.5}
                className="font-libre text-lg md:text-xl text-brown-soft text-justify leading-relaxed"
                as="p"
              >
                Terima kasih telah menjadi keluarga, sahabat, dan semua yang dekat di hati, yang selalu menjadi bagian dari cerita kami.
              </TextAnimate>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Open Message Button Container - positioned at bottom */}
      {guestName && !showMessage && (
        <div className="absolute bottom-20 left-0 right-0 flex justify-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.5, duration: 1 }}
            onClick={() => setShowMessage(true)}
            className="px-8 py-3 bg-white-soft/80 backdrop-blur-sm border-2 border-sage/30 rounded-full font-libre text-sage-dark hover:bg-sage/10 hover:border-sage/50 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Buka Pesan
          </motion.button>
        </div>
      )}

      {/* Scroll Indicator - only show when message is opened or no guest name */}
      {(showMessage || !guestName) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: showMessage ? 3.5 : 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <p className="font-libre text-brown-soft mb-2 text-sm md:text-base">Geser ke bawah</p>
          <motion.svg 
            className="w-5 h-5 md:w-6 md:h-6 text-brown-soft" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </motion.div>
      )}
    </section>
  )
}
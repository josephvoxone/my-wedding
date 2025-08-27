'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { MorphingText } from '@/components/magicui/morphing-text'
import { TextAnimate } from '@/components/magicui/text-animate'
import { findGuest, getPersonalizedGreeting, getSpecialMessage, getGuestImage } from '@/lib/guests'
import { useLanguage } from '@/contexts/LanguageContext'

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

interface HelloSectionProps {
  onMessageOpen?: () => void
  scrollLocked?: boolean
}

export default function HelloSection({ onMessageOpen, scrollLocked = false }: HelloSectionProps) {
  const searchParams = useSearchParams()
  const [guestName, setGuestName] = useState('')
  const [guest, setGuest] = useState<ReturnType<typeof findGuest>>()
  const [showMessage, setShowMessage] = useState(false)
  const { language } = useLanguage()
  
  useEffect(() => {
    // Primary: use 'to' parameter which should contain the slug
    const toParam = searchParams.get('to')
    // Fallback: support 'nama' for backward compatibility
    const namaParam = searchParams.get('nama')
    
    const slugOrName = toParam || namaParam
    
    if (slugOrName) {
      // Try to find guest by slug (or name as fallback)
      const foundGuest = findGuest(decodeURIComponent(slugOrName))
      
      if (foundGuest) {
        setGuest(foundGuest)
        setGuestName(foundGuest.nickname || foundGuest.name || 'Tamu Undangan')
      } else {
        // If no guest found, use the parameter as display name
        setGuestName(decodeURIComponent(slugOrName))
      }
    }
  }, [searchParams])

  // Handle scroll lock when guest has a name but hasn't opened message
  useEffect(() => {
    const shouldLock = scrollLocked && guestName && !showMessage
    
    if (shouldLock) {
      // Store original body style
      const originalStyle = window.getComputedStyle(document.body).overflow
      
      // Prevent scrolling
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.top = `-${window.scrollY}px`
      
      return () => {
        // Restore scroll position when unlocking
        const scrollY = document.body.style.top
        document.body.style.overflow = originalStyle
        document.body.style.position = ''
        document.body.style.width = ''
        document.body.style.top = ''
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
    }
  }, [scrollLocked, guestName, showMessage])

  const handleOpenMessage = () => {
    setShowMessage(true)
    onMessageOpen?.()
  }

  return (
    <motion.section 
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-cream to-cream-dark relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
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
                delay: 0.5,
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
                  delay={1.5}
                  className="font-homemade text-2xl md:text-3xl lg:text-4xl text-sage-dark text-center"
                  as="p"
                >
                  {language === 'id' ? 'Untuk yang terkasih,' : 'Dear beloved,'}
                </TextAnimate>
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  duration={2}
                  delay={3}
                  className="font-homemade text-5xl md:text-7xl lg:text-8xl text-brown text-center text-shadow-soft"
                  as="h2"
                >
                  {guest?.nickname || guestName}
                </TextAnimate>
                {/* Show special message if available */}
                {getSpecialMessage(guest) && (
                  <TextAnimate
                    animation="fadeIn"
                    duration={1}
                    delay={4}
                    className="font-libre text-sm md:text-base text-brown-soft text-center mt-2"
                    as="p"
                  >
                    {getSpecialMessage(guest) || ''}
                  </TextAnimate>
                )}
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
                {language === 'id' ? 'Untuk yang terkasih,' : 'Dear beloved,'}
              </p>
              <h2 className="font-homemade text-5xl md:text-7xl lg:text-8xl text-brown text-shadow-soft">
                {guest?.nickname || guestName}
              </h2>
            </motion.div>
            
            {/* Custom Message or Default Thank You Message */}
            <div className="space-y-6">
              {guest?.specialMessage ? (
                // Show custom message if available
                <TextAnimate
                  animation="fadeIn"
                  by="word"
                  duration={3}
                  delay={0.8}
                  className="font-libre text-lg md:text-xl text-brown-soft text-justify leading-relaxed"
                  as="p"
                >
                  {guest.specialMessage}
                </TextAnimate>
              ) : (
                // Show default messages
                <>
                  <TextAnimate
                    animation="fadeIn"
                    by="word"
                    duration={3}
                    delay={0.8}
                    className="font-libre text-lg md:text-xl text-brown-soft text-justify leading-relaxed"
                    as="p"
                  >
                    {language === 'id' 
                      ? 'Senang sekali bisa berbagi kabar bahagia ini denganmu. Kehadiranmu dalam hidup kami sangat berarti, dan kami percaya, doa serta dukunganmu ikut membentuk perjalanan kami sampai di titik ini.'
                      : 'We are thrilled to share this joyful news with you. Your presence in our lives means so much, and we believe your prayers and support have helped shape our journey to this point.'}
                  </TextAnimate>
                  <TextAnimate
                    animation="fadeIn"
                    by="word"
                    duration={3}
                    delay={2.5}
                    className="font-libre text-lg md:text-xl text-brown-soft text-justify leading-relaxed"
                    as="p"
                  >
                    {language === 'id'
                      ? 'Terima kasih telah menjadi keluarga, sahabat, dan semua yang dekat di hati, yang selalu menjadi bagian dari cerita kami.'
                      : 'Thank you for being family, friends, and all those dear to our hearts, who have always been part of our story.'}
                  </TextAnimate>
                </>
              )}
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
            transition={{ delay: 5, duration: 1 }}
            onClick={handleOpenMessage}
            className="px-8 py-3 bg-white-soft/80 backdrop-blur-sm border-2 border-sage/30 rounded-full font-libre text-sage-dark hover:bg-sage/10 hover:border-sage/50 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <span>{language === 'id' ? 'Buka Pesan' : 'Open Message'}</span>
            
            {/* Notification Bell */}
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, -10, 10, -10, 10, 0],
              }}
              transition={{ 
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <svg 
                className="w-6 h-6 text-gold-elegant" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
                />
              </svg>
              
              {/* Badge Dot */}
              <div
                className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"
              />
            </motion.div>
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
          <p className="font-libre text-brown-soft mb-2 text-sm md:text-base">{language === 'id' ? 'Geser ke bawah' : 'Scroll down'}</p>
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
    </motion.section>
  )
}
'use client'

import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import gsap from 'gsap'
import { motion } from 'framer-motion'

const greetings = [
  { text: 'Hello', language: 'English' },
  { text: 'Halo', language: 'Indonesia' },
  { text: 'Sugeng Rawuh', language: 'Jawa' },
  { text: '你好', language: 'China' },
  { text: 'مرحبا', language: 'UAE Dubai' },
  { text: 'ආයුබෝවන්', language: 'Sri Lanka' },
  { text: 'Sawubona', language: 'Afrika' },
]

export default function HelloSection() {
  const searchParams = useSearchParams()
  const [guestName, setGuestName] = useState('')
  const textRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState(greetings[0].text)
  const [isAnimating, setIsAnimating] = useState(false)
  
  useEffect(() => {
    const name = searchParams.get('to') || searchParams.get('nama')
    if (name) {
      setGuestName(decodeURIComponent(name))
    }
  }, [searchParams])

  // Morphing text animation
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true)
        const nextIndex = (currentIndex + 1) % greetings.length
        const currentText = greetings[currentIndex].text
        const nextText = greetings[nextIndex].text
        
        // Animate text morphing
        if (textRef.current) {
          // Split text into spans for each character
          const chars = currentText.split('')
          const newChars = nextText.split('')
          const maxLength = Math.max(chars.length, newChars.length)
          
          // Create timeline for morphing effect
          const tl = gsap.timeline({
            onComplete: () => {
              setCurrentIndex(nextIndex)
              setDisplayText(nextText)
              setIsAnimating(false)
            }
          })
          
          // Scramble text effect
          tl.to(textRef.current, {
            duration: 0.3,
            opacity: 0.3,
            scale: 0.95,
            filter: 'blur(8px)',
            ease: 'power2.inOut',
          })
          .to(textRef.current, {
            duration: 0.01,
            onComplete: () => {
              setDisplayText(nextText)
            }
          })
          .to(textRef.current, {
            duration: 0.3,
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            ease: 'power2.out',
          })
        }
      }
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [currentIndex, isAnimating])

  // Initial animation
  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(textRef.current, 
        { 
          opacity: 0, 
          scale: 0.5,
          rotationY: -90,
        },
        { 
          opacity: 1, 
          scale: 1,
          rotationY: 0,
          duration: 1,
          ease: 'back.out(1.7)',
        }
      )
    }
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-sky-100 animate-gradient" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/30 via-transparent to-yellow-100/30 animate-gradient-slow" />
      </div>
      
      {/* Animated circles background */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-30"
            style={{
              background: `radial-gradient(circle, ${['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b'][i]} 0%, transparent 70%)`,
            }}
            initial={{ 
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
            }}
            animate={{
              x: [
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              ],
              y: [
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              ],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="z-10 text-center">
        {/* Morphing Greeting Text */}
        <div className="mb-8 perspective-1000">
          <div 
            ref={textRef}
            className="font-dancing text-7xl md:text-9xl text-gray-800 mb-2 transform-gpu"
            style={{ 
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              transformStyle: 'preserve-3d',
            }}
          >
            {displayText}
          </div>
          
          {/* Language indicator with animation */}
          <motion.p 
            key={currentIndex}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="font-homemade text-lg md:text-xl text-gray-600 opacity-70"
          >
            {greetings[currentIndex].language}
          </motion.p>
          
          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-4">
            {greetings.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gray-800 w-8' : 'bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>

        {/* Guest Name with elegant animation */}
        {guestName && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1, 
              delay: 0.5,
              type: "spring",
              stiffness: 100
            }}
            className="mt-12"
          >
            <motion.p 
              className="font-homemade text-2xl md:text-3xl text-gray-700 mb-2"
              animate={{ 
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Untuk yang terkasih,
            </motion.p>
            <h2 className="font-dancing text-5xl md:text-7xl text-gray-800 text-shadow-soft">
              {guestName}
            </h2>
          </motion.div>
        )}

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => {
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <p className="font-homemade text-gray-600 mb-2">Geser ke bawah</p>
            <motion.svg 
              className="w-6 h-6 text-gray-600" 
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
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: gradient 25s ease infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  )
}
'use client'

import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import gsap from 'gsap'
import { motion } from 'framer-motion'

const greetings = [
  { text: 'Hello', language: 'English' },
  { text: 'Halo', language: 'Indonesia' },
  { text: 'Sawubona', language: 'Zulu (Afrika)' },
  { text: 'مرحبا', language: 'Arabic (Dubai)' },
  { text: 'Bonjour', language: 'French' },
  { text: 'Hola', language: 'Spanish' },
  { text: '你好', language: 'Chinese' },
  { text: 'こんにちは', language: 'Japanese' },
]

export default function HelloSection() {
  const searchParams = useSearchParams()
  const [guestName, setGuestName] = useState('')
  const greetingRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const name = searchParams.get('to') || searchParams.get('nama')
    if (name) {
      setGuestName(decodeURIComponent(name))
    }
  }, [searchParams])

  useEffect(() => {
    if (!greetingRef.current) return

    const tl = gsap.timeline({ repeat: -1 })
    
    greetings.forEach((greeting, index) => {
      tl.to(greetingRef.current, {
        duration: 0.5,
        opacity: 0,
        y: -20,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentIndex(index)
        }
      })
      .to(greetingRef.current, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "power2.inOut"
      })
      .to({}, { duration: 2 }) // Pause to read the greeting
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-sky-100 animate-gradient" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800) 
            }}
            animate={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="z-10 text-center">
        {/* Animated Greeting */}
        <div className="mb-8">
          <div 
            ref={greetingRef}
            className="font-dancing text-7xl md:text-9xl text-gray-800 mb-2"
          >
            {greetings[currentIndex].text}
          </div>
          <p className="font-homemade text-lg md:text-xl text-gray-600 opacity-70">
            {greetings[currentIndex].language}
          </p>
        </div>

        {/* Guest Name */}
        {guestName && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12"
          >
            <p className="font-homemade text-2xl md:text-3xl text-gray-700 mb-2">
              Untuk yang terkasih,
            </p>
            <h2 className="font-dancing text-5xl md:text-7xl text-gray-800 text-shadow-soft">
              {guestName}
            </h2>
          </motion.div>
        )}

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <p className="font-homemade text-gray-600 mb-2">Scroll untuk melanjutkan</p>
            <svg 
              className="w-6 h-6 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
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
      `}</style>
    </section>
  )
}
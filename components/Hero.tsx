'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'

export default function Hero() {
  const searchParams = useSearchParams()
  const [guestName, setGuestName] = useState('')
  const [personalMessage, setPersonalMessage] = useState('')
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  
  useEffect(() => {
    const name = searchParams.get('to') || searchParams.get('nama')
    const message = searchParams.get('message') || searchParams.get('pesan')
    
    if (name) {
      setGuestName(decodeURIComponent(name))
    }
    if (message) {
      setPersonalMessage(decodeURIComponent(message))
    }
  }, [searchParams])
  
  return (
    <section ref={containerRef} className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
      {/* Personalized Greeting */}
      {guestName && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-20 text-center z-10"
        >
          <p className="font-tnanti text-2xl md:text-3xl text-gray-700 mb-2">
            Kepada Yth.
          </p>
          <h2 className="font-dancing text-3xl md:text-4xl text-gray-800 mb-2">
            {guestName}
          </h2>
          {personalMessage && (
            <p className="font-tnanti text-lg md:text-xl text-gray-600 italic max-w-md mx-auto">
              "{personalMessage}"
            </p>
          )}
        </motion.div>
      )}
      
      <motion.div
        style={{ y, opacity, scale }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <motion.p
          className="font-tnanti text-xl md:text-2xl text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          The Wedding of
        </motion.p>
        
        <motion.h1 
          className="font-dancing text-6xl md:text-8xl text-gray-800 mb-4 text-shadow-soft"
          initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ 
            duration: 1.5, 
            delay: 0.4,
            type: "spring",
            stiffness: 50
          }}
        >
          Joseph & Ayu
        </motion.h1>
        
        <motion.p 
          className="font-tnanti text-lg md:text-xl text-gray-600 mb-8 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          "Dua jiwa, satu cinta, satu janji selamanya"
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="glass-effect rounded-2xl p-6 md:p-8 inline-block"
        >
          <p className="font-tnanti text-xl md:text-2xl text-gray-700 mb-2 font-bold">
            Selasa, 9 September 2025
          </p>
          <p className="font-tnanti text-lg md:text-xl text-gray-600">
            Pukul 10.00 WITA
          </p>
          <p className="font-tnanti text-base md:text-lg text-gray-500 mt-2">
            Bali, Indonesia
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12"
        >
          <a
            href="#our-story"
            className="inline-block font-tnanti text-xl text-gray-700 hover:text-gray-900 transition-colors"
          >
            <span className="block">Gulir untuk membaca kisah kami</span>
            <svg 
              className="w-6 h-6 mx-auto mt-2 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
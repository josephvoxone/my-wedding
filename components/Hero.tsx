'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Hero() {
  const searchParams = useSearchParams()
  const [guestName, setGuestName] = useState('')
  const [personalMessage, setPersonalMessage] = useState('')
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const containerRef = useRef(null)
  const { language, t } = useLanguage()
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  
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

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Wedding date: September 9, 2025, 09:00 WITA (UTC+8)
      const weddingDate = new Date('2025-09-09T09:00:00+08:00')
      const now = new Date()
      const difference = weddingDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])
  
  return (
    <section id="hero" ref={containerRef} className="min-h-screen flex flex-col items-center justify-center relative px-8 overflow-hidden">
      
      <motion.div
        style={{ y }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <motion.p
          className="font-libre text-xl md:text-2xl text-sage mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {t.hero.weddingOf}
        </motion.p>
        
        <motion.h1 
          className="font-monsieur text-6xl md:text-8xl text-brown mb-12 text-shadow-soft"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.4,
            type: "spring",
            stiffness: 80,
            damping: 15
          }}
        >
          Joseph & Ayu
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-8 mt-14"
        >
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-4">
            <p className="font-libre text-lg md:text-xl text-gold-elegant font-bold">
              {language === 'id' ? 'Selasa, 09 Sept 2025' : 'Tuesday, Sept 09, 2025'}
            </p>
          </div>
          <div className="text-center">
            <p className="font-libre text-base md:text-lg text-sage-dark">
              SM Tower Hotel Convention Centre
            </p>
            <p className="font-libre text-base md:text-lg text-sage-dark">
              Berau, Kalimantan Timur
            </p>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8"
        >
          <p className="font-libre text-sm md:text-base text-sage-dark mb-4">{t.hero.countingDown}</p>
          <div className="flex gap-4 md:gap-6 justify-center">
            <motion.div 
              className="bg-white-soft/60 backdrop-blur-sm border border-sage/20 rounded-xl p-4 md:p-6 shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="font-monsieur text-3xl md:text-5xl text-brown font-bold">{timeLeft.days}</p>
              <p className="font-libre text-sm md:text-base text-brown-soft mt-1">{t.hero.days}</p>
            </motion.div>
            <motion.div 
              className="bg-white-soft/60 backdrop-blur-sm border border-sage/20 rounded-xl p-4 md:p-6 shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="font-monsieur text-3xl md:text-5xl text-brown font-bold">{timeLeft.hours}</p>
              <p className="font-libre text-sm md:text-base text-brown-soft mt-1">{t.hero.hours}</p>
            </motion.div>
            <motion.div 
              className="bg-white-soft/60 backdrop-blur-sm border border-sage/20 rounded-xl p-4 md:p-6 shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="font-monsieur text-3xl md:text-5xl text-brown font-bold">{timeLeft.minutes}</p>
              <p className="font-libre text-sm md:text-base text-brown-soft mt-1">{t.hero.minutes}</p>
            </motion.div>
            <motion.div 
              className="bg-white-soft/60 backdrop-blur-sm border border-sage/20 rounded-xl p-4 md:p-6 shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="font-monsieur text-3xl md:text-5xl text-brown font-bold">{timeLeft.seconds}</p>
              <p className="font-libre text-sm md:text-base text-brown-soft mt-1">{t.hero.seconds}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bible Verse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-14 max-w-2xl mx-auto text-center"
        >
          <p className="font-libre text-base md:text-lg text-brown-soft leading-relaxed">
            "So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate."
          </p>
        </motion.div>

      </motion.div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LiveStreaming() {
  const { language, t } = useLanguage()
  const [showReminder, setShowReminder] = useState(false)

  const handleSetReminder = () => {
    // Create calendar event
    const eventTitle = "Joseph & Ayu Wedding Live Stream"
    const eventDetails = "Watch the wedding ceremony live on YouTube"
    const eventLocation = "https://youtube.com/live/wedding-joseph-ayu"
    const startDate = "20250909T084500+0800" // September 9, 2025, 08:45 AM WITA
    const endDate = "20250909T140000+0800" // September 9, 2025, 02:00 PM WITA
    
    // Create Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(eventLocation)}`
    
    // Open in new tab
    window.open(googleCalendarUrl, '_blank')
    
    setShowReminder(true)
    setTimeout(() => setShowReminder(false), 3000)
  }

  return (
    <section id="livestream" className="min-h-screen flex items-center py-20 px-8 bg-gradient-to-b from-white to-cream">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <div className="mb-4">
            <p className="font-monsieur text-4xl md:text-5xl text-sage">
              Live
            </p>
            <h2 className="font-bodoni text-5xl md:text-6xl text-brown uppercase -mt-2">
              Streaming
            </h2>
          </div>
          <p className="font-libre text-base text-brown-soft max-w-3xl mx-auto">
            {t.liveStreaming.subtitle}
          </p>
        </motion.div>

        {/* YouTube Live Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white-soft/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <h3 className="font-bodoni text-2xl text-brown uppercase mb-2">{t.liveStreaming.youtubeLive}</h3>
              <p className="font-libre text-sm text-brown-soft mb-4">
                {t.liveStreaming.watchLive}
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-cream/50 rounded-xl p-4 text-center">
                <p className="font-libre text-brown-soft text-sm mb-2">
                  {t.liveStreaming.streamStarts}
                </p>
                <p className="font-bodoni text-xl text-brown">
                  08:45 AM WITA
                </p>
                <p className="font-libre text-xs text-brown-soft mt-1">
                  September 9, 2025
                </p>
              </div>
              
              <a
                href="https://youtube.com/live/wedding-joseph-ayu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-libre py-3 px-6 rounded-full transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                {t.liveStreaming.watchOnYoutube}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white-soft/60 backdrop-blur-sm rounded-2xl p-8 text-center"
        >
          <h3 className="font-bodoni text-2xl text-brown mb-4 uppercase">{t.liveStreaming.importantNotes}</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <span className="text-sage text-xl">📱</span>
              <div>
                <p className="font-libre text-sm text-brown font-bold mb-1">{t.liveStreaming.testConnection}</p>
                <p className="font-libre text-xs text-brown-soft">
                  {t.liveStreaming.testConnectionDesc}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-sage text-xl">🔇</span>
              <div>
                <p className="font-libre text-sm text-brown font-bold mb-1">{t.liveStreaming.muteMicrophone}</p>
                <p className="font-libre text-xs text-brown-soft">
                  {t.liveStreaming.muteMicrophoneDesc}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-sage text-xl">💬</span>
              <div>
                <p className="font-libre text-sm text-brown font-bold mb-1">{t.liveStreaming.shareWishes}</p>
                <p className="font-libre text-xs text-brown-soft">
                  {t.liveStreaming.shareWishesDesc}
                </p>
              </div>
            </div>
          </div>
          
          {showReminder && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 bg-green-500/10 text-green-700 px-8 py-2 rounded-lg inline-block"
            >
              <p className="font-libre text-sm">{t.liveStreaming.calendarAdded}</p>
            </motion.div>
          )}
          
          {!showReminder && (
            <button
              onClick={handleSetReminder}
              className="mt-6 bg-sage hover:bg-sage-dark text-white font-libre py-2 px-6 rounded-full transition-colors duration-300 flex items-center gap-2 mx-auto"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {t.liveStreaming.addToCalendar}
            </button>
          )}
        </motion.div>
      </div>
    </section>
  )
}
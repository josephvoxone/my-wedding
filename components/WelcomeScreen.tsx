'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface WelcomeScreenProps {
  onOpen: () => void
}

export default function WelcomeScreen({ onOpen }: WelcomeScreenProps) {
  const [isClosing, setIsClosing] = useState(false)

  const handleOpen = () => {
    setIsClosing(true)
    setTimeout(() => {
      onOpen()
    }, 800)
  }

  return (
    <AnimatePresence>
      {!isClosing ? (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-gradient-to-b from-cream to-cream-dark flex flex-col items-center justify-center"
        >
          {/* Content centered */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            {/* Names */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="font-libre text-sage text-lg mb-4">The Wedding of</p>
              <h1 className="font-monsieur text-6xl md:text-8xl text-brown mb-6 text-shadow-soft">
                Joseph & Ayu
              </h1>
            </motion.div>

            {/* Date */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="font-libre text-sage-dark text-lg">
                09 . 09 . 2025
              </p>
            </motion.div>
          </div>

          {/* Open Button at bottom */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pb-20"
          >
            <button
              onClick={handleOpen}
              className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-sage/30 rounded-full font-libre text-sage-dark hover:bg-sage/10 hover:border-sage/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Buka Undangan
            </button>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-gradient-to-b from-cream to-cream-dark"
        />
      )}
    </AnimatePresence>
  )
}
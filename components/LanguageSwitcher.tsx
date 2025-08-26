'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id')
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      onClick={toggleLanguage}
      className="fixed bottom-8 left-8 z-50 w-14 h-14 bg-white rounded-full shadow-lg hover:scale-110 transition-transform glass-effect p-3"
      aria-label="Switch language"
    >
      <div className="w-full h-full rounded-full overflow-hidden">
        {language === 'id' ? (
          // Indonesian flag - Red and White
          <div className="w-full h-full relative">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-red-600"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>
          </div>
        ) : (
          // American flag - simplified for English
          <div className="w-full h-full relative">
            {/* Red and white stripes */}
            <div className="absolute inset-0">
              <div className="h-[14.3%] bg-red-600"></div>
              <div className="h-[14.3%] bg-white"></div>
              <div className="h-[14.3%] bg-red-600"></div>
              <div className="h-[14.3%] bg-white"></div>
              <div className="h-[14.3%] bg-red-600"></div>
              <div className="h-[14.3%] bg-white"></div>
              <div className="h-[14.2%] bg-red-600"></div>
            </div>
            {/* Blue canton with star */}
            <div className="absolute top-0 left-0 w-[40%] h-[50%] bg-blue-700 flex items-center justify-center">
              <div className="text-white text-xs">★</div>
            </div>
          </div>
        )}
      </div>
    </motion.button>
  )
}
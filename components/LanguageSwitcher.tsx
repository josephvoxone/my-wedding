'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-8 left-8 z-50 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform glass-effect group"
      aria-label={`Switch to ${language === 'id' ? 'English' : 'Indonesian'}`}
      title={`Switch to ${language === 'id' ? 'English' : 'Indonesian'}`}
    >
      {/* Tooltip that shows on hover */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {language === 'id' ? 'English' : 'Indonesian'}
      </div>
      <div className="w-10 h-10 rounded-full overflow-hidden">
        {language === 'id' ? (
          // English flag - American flag simplified  
          <div className="w-full h-full relative">
            {/* Red and white stripes */}
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 bg-red-600"></div>
              <div className="flex-1 bg-white"></div>
              <div className="flex-1 bg-red-600"></div>
              <div className="flex-1 bg-white"></div>
              <div className="flex-1 bg-red-600"></div>
              <div className="flex-1 bg-white"></div>
              <div className="flex-1 bg-red-600"></div>
            </div>
            {/* Blue canton with star */}
            <div className="absolute top-0 left-0 w-[40%] h-[50%] bg-blue-700 flex items-center justify-center">
              <div className="text-white text-xs">★</div>
            </div>
          </div>
        ) : (
          // Indo flag - Red and White
          <div className="w-full h-full flex flex-col">
            <div className="flex-1 bg-red-600"></div>
            <div className="flex-1 bg-white"></div>
          </div>
        )}
      </div>
    </button>
  )
}
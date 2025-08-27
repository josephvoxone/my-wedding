'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations, Language, TranslationKey } from '@/lib/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationKey
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('id')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if we're in browser
    if (typeof window === 'undefined') {
      setIsLoading(false)
      return
    }
    
    // Check if language is already stored
    const storedLang = localStorage.getItem('preferredLanguage') as Language
    
    if (storedLang) {
      setLanguage(storedLang)
      setIsLoading(false)
    } else {
      // Auto-detect language based on location
      detectLanguage()
    }
  }, [])

  const detectLanguage = async () => {
    try {
      // Try to get location from IP
      const response = await fetch('https://ipapi.co/json/')
      const data = await response.json()
      
      // If user is in Indonesia, use Indo
      if (data.country_code === 'ID') {
        setLanguage('id')
        localStorage.setItem('preferredLanguage', 'id')
      } else {
        // Otherwise, use English
        setLanguage('en')
        localStorage.setItem('preferredLanguage', 'en')
      }
    } catch (error) {
      // Default to checking browser language
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.includes('id')) {
        setLanguage('id')
      } else {
        setLanguage('en')
      }
      localStorage.setItem('preferredLanguage', language)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('preferredLanguage', lang)
  }

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language],
  }

  if (isLoading) {
    return <div className="min-h-screen" /> // Simple loading state
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
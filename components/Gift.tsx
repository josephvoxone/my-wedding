'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Gift() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null)
  const [showGiftOptions, setShowGiftOptions] = useState(false)
  const { language } = useLanguage()

  const handleCopyAccount = (accountNumber: string, bank: string) => {
    navigator.clipboard.writeText(accountNumber)
    setCopiedAccount(bank)
    setTimeout(() => setCopiedAccount(null), 2000)
  }

  const handleCopyAddress = () => {
    const address = 'Jl. Murjani 3 Gg. Arrazak, Perum Winanda 11 Blok A12, Berau, Kalimantan Timur 77311, Indonesia'
    navigator.clipboard.writeText(address)
    setCopiedAccount('address')
    setTimeout(() => setCopiedAccount(null), 2000)
  }

  return (
    <section id="gift" className="min-h-screen flex items-center py-20 px-8 bg-gradient-to-b from-cream-dark to-cream">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <div className="mb-4">
            <p className="font-monsieur text-4xl md:text-5xl text-sage">
              Wedding
            </p>
            <h2 className="font-bodoni text-5xl md:text-6xl text-brown uppercase -mt-2">
              Gift
            </h2>
          </div>
          <p className="font-libre text-base text-brown-soft max-w-2xl mx-auto leading-relaxed">
            {language === 'id' 
              ? 'Kehadiran Anda di pernikahan kami adalah hadiah terindah yang kami harapkan. Namun jika Anda berkenan memberikan hadiah, kami akan menerimanya dengan penuh rasa syukur dan terima kasih.'
              : 'Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we would be deeply grateful for your kindness.'}
          </p>
        </motion.div>

        {/* Gift Button */}
        {!showGiftOptions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowGiftOptions(true)}
              className="px-8 py-3 bg-white-soft/80 backdrop-blur-sm border-2 border-sage/30 rounded-full font-libre text-sage-dark hover:bg-sage/10 hover:border-sage/50 transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              <span>
                {language === 'id' ? 'Berikan Hadiah' : 'Give a Gift'}
              </span>
            </motion.button>
          </motion.div>
        )}

        {/* Gift Options Cards */}
        <AnimatePresence>
          {showGiftOptions && (
            <motion.div 
              className="grid md:grid-cols-2 gap-8 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Bank Transfer Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white-soft/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
              >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-bodoni text-2xl text-brown uppercase mb-2">{language === 'id' ? 'Transfer Bank' : 'Bank Transfer'}</h3>
              <p className="font-libre text-sm text-sage">
                {language === 'id' 
                  ? 'Bagi Bapak/Ibu/Saudara/i yang ingin memberikan hadiah secara cashless'
                  : 'For those who prefer cashless gift giving'}
              </p>
            </div>

            <div className="space-y-4">
              {/* Groom's Account */}
              <div className="border border-sage/20 rounded-xl p-4 hover:bg-sage/5 transition-colors cursor-pointer" onClick={() => handleCopyAccount('1520517959', 'BCA-Joseph')}>
                <p className="font-libre text-sm text-sage mb-1">Bank BCA</p>
                <p className="font-bodoni text-lg text-brown">Joseph Shandy Harvian</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="font-mono text-brown-soft">1520517959</p>
                  <div className="text-sage">
                    {copiedAccount === 'BCA-Joseph' ? (
                      <span className="text-sm">{language === 'id' ? 'Tersalin!' : 'Copied!'}</span>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              {/* Bride's Account */}
              <div className="border border-sage/20 rounded-xl p-4 hover:bg-sage/5 transition-colors cursor-pointer" onClick={() => handleCopyAccount('8605308259', 'BCA-Ayu')}>
                <p className="font-libre text-sm text-sage mb-1">Bank BCA</p>
                <p className="font-bodoni text-lg text-brown">Ayu Lestari</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="font-mono text-brown-soft">8605308259</p>
                  <div className="text-sage">
                    {copiedAccount === 'BCA-Ayu' ? (
                      <span className="text-sm">{language === 'id' ? 'Tersalin!' : 'Copied!'}</span>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

              {/* Address Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white-soft/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
              >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gold-elegant/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold-elegant" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-bodoni text-2xl text-brown uppercase mb-2">{language === 'id' ? 'Kirim Hadiah' : 'Send Gift'}</h3>
              <p className="font-libre text-sm text-sage">
                {language === 'id'
                  ? 'Bagi yang ingin mengirimkan hadiah fisik'
                  : 'For those who prefer to send a physical gift'}
              </p>
            </div>

            <div className="space-y-4">
              <div className="border border-sage/20 rounded-xl p-4 hover:bg-sage/5 transition-colors cursor-pointer" onClick={handleCopyAddress}>
                <p className="font-bodoni text-lg text-brown mb-2">Joseph & Ayu</p>
                <div className="flex items-center justify-between">
                  <p className="font-libre text-brown-soft leading-relaxed">
                    Jl. Murjani 3 Gg. Arrazak<br/>
                    Perum Winanda 11 Blok A12<br/>
                    Berau, Kalimantan Timur 77311<br/>
                    Indonesia
                  </p>
                  <div className="text-sage ml-4">
                    {copiedAccount === 'address' ? (
                      <span className="text-sm">{language === 'id' ? 'Tersalin!' : 'Copied!'}</span>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t border-sage/20 pt-4">
                <p className="font-libre text-xs text-brown-soft text-center">
                  {language === 'id'
                    ? 'Mohon sertakan nama pengirim pada paket'
                    : 'Please include your name on the package'}
                </p>
              </div>
            </div>
          </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center bg-white-soft/60 backdrop-blur-sm rounded-2xl p-8 md:p-10"
        >
          <div className="mb-4">
            <svg className="w-12 h-12 text-rose-soft mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <h3 className="font-bodoni text-3xl text-brown mb-4">{language === 'id' ? 'Terima Kasih' : 'Thank You'}</h3>
          <p className="font-libre text-brown-soft max-w-2xl mx-auto leading-relaxed">
            {language === 'id'
              ? 'Atas segala ucapan, doa, dan perhatian yang Bapak/Ibu/Saudara/i berikan, kami ucapkan terima kasih yang sebesar-besarnya. Semoga Tuhan membalas segala kebaikan dengan berlipat ganda.'
              : 'We are deeply grateful for your love, prayers, and support as we begin this beautiful journey together. May God bless you abundantly for your kindness.'}
          </p>
          <p className="font-homemade text-lg text-brown mt-6">
            {language === 'id' ? 'Dengan cinta' : 'With love'}, Joseph & Ayu
          </p>
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Parents() {
  const [isInView, setIsInView] = useState(false)
  const { language, t } = useLanguage()
  return (
    <section className="min-h-screen flex items-center py-20 px-8 bg-gradient-to-b from-cream to-cream-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          onViewportEnter={() => setIsInView(true)}
          className="text-center"
        >
          <div className="mb-16 md:mb-20">
            <p className="font-monsieur text-5xl md:text-6xl text-sage">
              {t.parents.the}
            </p>
            <h2 className="font-bodoni text-4xl md:text-5xl text-brown uppercase -mt-2">
              {t.parents.brideAndGroom}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 md:gap-20">
            {/* Groom's Family */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="mb-4">
                <div className="mb-6 flex justify-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-sage/20">
                    <Image
                      src="/assets/couple/joseph.jpg"
                      alt="Joseph Shandy Harvian"
                      fill
                      className={`object-cover transition-all duration-[2000ms] ${isInView ? 'grayscale-0' : 'grayscale'}`}
                    />
                  </div>
                </div>
                <h3 className="font-monsieur text-4xl md:text-5xl text-brown mb-4">
                  Joseph Shandy Harvian
                </h3>
                <p className="font-libre text-lg text-sage-dark">
                  {t.parents.sonOf}
                </p>
              </div>
              
              <div className="space-y-1">
                <p className="font-libre text-sm md:text-base text-brown-soft">
                  {t.parents.mrJuli}
                </p>
              </div>
            </motion.div>

            {/* Bride's Family */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="mb-4">
                <div className="mb-6 flex justify-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-sage/20">
                    <Image
                      src="/assets/couple/ayu.jpg"
                      alt="Ayu Lestari"
                      fill
                      className={`object-cover transition-all duration-[2000ms] delay-500 ${isInView ? 'grayscale-0' : 'grayscale'}`}
                    />
                  </div>
                </div>
                <h3 className="font-monsieur text-4xl md:text-5xl text-brown mb-4">
                  Ayu Lestari
                </h3>
                <p className="font-libre text-lg text-sage-dark">
                  {t.parents.daughterOf}
                </p>
              </div>
              
              <div className="space-y-1">
                <p className="font-libre text-sm md:text-base text-brown-soft">
                  {t.parents.mrTeddy}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 md:mt-24"
          >
            <p className="font-libre text-lg md:text-xl text-sage">
              "{t.parents.quote}"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Location() {
  const { language, t } = useLanguage()
  return (
    <section id="location" className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-b from-cream-dark to-cream">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="font-libre text-xl md:text-2xl text-sage mb-4">
            {t.location.weddingVenue}
          </p>
          <h2 className="font-libre text-4xl md:text-5xl text-brown mb-6 font-bold text-shadow-soft">
            SM Tower Hotel Convention Centre
          </h2>
          <p className="font-libre text-lg md:text-xl text-brown-soft">
            Berau, Kalimantan Timur
          </p>
        </motion.div>

        {/* Single Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white-soft/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden">
            {/* Map Preview */}
            <div className="relative h-64 md:h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.025568507245!2d117.4953044749676!3d2.1438903978370383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x320df5b0abbf9a4d%3A0x119dd8045f8ce7ee!2sSM%20Tower%20Hotel%20%26%20Convention%20Center!5e0!3m2!1sen!2sid!4v1756224091063!5m2!1sen!2sid" 
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            {/* Venue Details */}
            <div className="p-8 md:p-10">
              <div className="space-y-6">
                {/* Ceremony */}
                <div>
                  <h3 className="font-bodoni text-3xl md:text-4xl text-brown mb-4">{t.location.holyMatrimony}</h3>
                  <div className="space-y-3 text-brown-soft">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 mt-0.5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="font-libre">{language === 'id' ? 'Selasa, 9 September 2025' : 'Tuesday, September 9th, 2025'}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 mt-0.5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="font-libre">09:00 AM WITA</p>
                    </div>
                  </div>
                </div>

                {/* Reception */}
                <div className="border-t border-sage/20 pt-6">
                  <h3 className="font-bodoni text-3xl md:text-4xl text-brown mb-4">{t.location.weddingReception}</h3>
                  <div className="space-y-3 text-brown-soft">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 mt-0.5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="font-libre">12:00 PM - 09:00 PM WITA</p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="border-t border-sage/20 pt-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-libre text-brown-soft">
                        Jl. Teuku Umar No.RT 09, Gayam<br/>
                        Kec. Tj. Redeb, Kabupaten Berau<br/>
                        Kalimantan Timur 77315
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a 
                    href="https://maps.app.goo.gl/8BVDSi76WxSTC4rk9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-sage/10 hover:bg-sage/20 text-sage-dark font-libre px-6 py-3 rounded-full transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Open in Google Maps
                  </a>
                  <a 
                    href="https://ul.waze.com/ul?place=ChIJTZq_q7D1DTIR7ueMXwTYnRE&ll=2.14389040%2C117.49787940&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gold-elegant/10 hover:bg-gold-elegant/20 text-brown font-libre px-6 py-3 rounded-full transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Navigate with Waze
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <div className="space-y-4">
            <p className="font-libre text-sage-dark">
              <span className="font-bold">Dress Code:</span> Formal Attire
            </p>
            <p className="font-libre text-sage-dark text-sm md:text-base">
              Parking available at venue • Wheelchair accessible
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
}

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}

export default function RSVP() {
  const { language, t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    relationship: 'groom',
    attendance: 'yes',
    guests: '1',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Set default message for attending guests
    const finalMessage = formData.attendance === 'yes' 
      ? 'Looking forward to celebrating with you! 🎉' 
      : formData.message
    
    // Format the message for WhatsApp based on attendance
    let message = ''
    if (formData.attendance === 'yes') {
      message = `Hi! I would like to confirm my attendance for your wedding 💍%0A%0A*Name:* ${formData.name}%0A*Will attend:* Yes, I'll be there! ✅%0A*Number of guests:* ${formData.guests}%0A*Message:* ${finalMessage}%0A%0AThank you for inviting me!`
    } else {
      message = `Hi! Thank you for inviting me to your wedding 💍%0A%0A*Name:* ${formData.name}%0A*Will attend:* Sorry, I can't make it 😔%0A*Message:* ${finalMessage}%0A%0AWishing you both all the happiness!`
    }
    
    // Choose WhatsApp number based on relationship
    const whatsappNumber = formData.relationship === 'groom' ? '6289615141859' : '6282255553779'
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
    
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (submitted) {
    return (
      <section id="rsvp" className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-b from-cream to-cream-dark">
        <div className="w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="glass-effect rounded-2xl p-12"
          >
            <motion.div 
              className="text-6xl mb-4"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              💌
            </motion.div>
            <h3 className="font-dancing text-4xl text-gray-800 mb-4">{t.rsvp.thankYou}</h3>
            <p className="font-libre text-xl text-gray-600">
              {t.rsvp.thankYouMessage}
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp" className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-b from-cream to-cream-dark">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="font-bodoni text-6xl md:text-7xl text-brown mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ 
              type: "spring",
              stiffness: 50,
              damping: 10
            }}
          >
            {t.rsvp.title}
          </motion.h2>
          <p className="font-libre text-base text-brown-soft">
            {t.rsvp.subtitle}
          </p>
        </motion.div>

        <motion.form
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          onSubmit={handleSubmit}
          className="bg-white-soft/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
        >
          <motion.div className="space-y-6">
            <motion.div variants={itemVariants}>
              <label className="block font-libre text-xl text-brown mb-2">
                {t.rsvp.yourName}
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-sage/30 focus:border-sage focus:outline-none transition-colors font-libre bg-white/50"
                placeholder={t.rsvp.yourName}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block font-libre text-xl text-brown mb-2">
                {t.rsvp.guestOf}
              </label>
              <select
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-sage/30 focus:border-sage focus:outline-none transition-colors font-libre bg-white/50"
              >
                <option value="groom">{t.rsvp.groomSide}</option>
                <option value="bride">{t.rsvp.brideSide}</option>
              </select>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block font-libre text-xl text-brown mb-2">
                {t.rsvp.willAttend}
              </label>
              <select
                name="attendance"
                value={formData.attendance}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-sage/30 focus:border-sage focus:outline-none transition-colors font-libre bg-white/50"
              >
                <option value="yes">{t.rsvp.yesAttend}</option>
                <option value="no">{t.rsvp.noAttend}</option>
              </select>
            </motion.div>

            <AnimatePresence mode="wait">
              {formData.attendance === 'yes' && (
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <label className="block font-libre text-xl text-brown mb-2">
                    {t.rsvp.numberOfGuests}
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sage/30 focus:border-sage focus:outline-none transition-colors font-libre bg-white/50"
                  >
                    <option value="1">1 {t.rsvp.person}</option>
                    <option value="2">2 {t.rsvp.people}</option>
                    <option value="3">3 {t.rsvp.people}</option>
                    <option value="4">4 {t.rsvp.people}</option>
                  </select>
                </motion.div>
              )}
              
              {formData.attendance === 'no' && (
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <label className="block font-libre text-xl text-brown mb-2">
                    {t.rsvp.messageForCouple}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-sage/30 focus:border-sage focus:outline-none transition-colors resize-none font-libre bg-white/50"
                    placeholder={t.rsvp.messagePlaceholder}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full bg-gradient-to-r from-sage to-sage-dark hover:from-sage-dark hover:to-sage text-white font-libre text-lg py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {t.rsvp.sendViaWhatsApp}
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  )
}
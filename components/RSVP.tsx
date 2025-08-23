'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: 'yes',
    guests: '1',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format the message for WhatsApp
    const message = `*RSVP Wedding Joseph & Ayu*%0A%0A*Name:* ${formData.name}%0A*WhatsApp:* ${formData.email}%0A*Attendance:* ${formData.attendance === 'yes' ? 'Yes, I\'ll be there!' : 'Sorry, can\'t make it'}%0A${formData.attendance === 'yes' ? `*Number of Guests:* ${formData.guests}%0A` : ''}*Message:* ${formData.message}`
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/6289615141859?text=${message}`, '_blank')
    
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
      <section id="rsvp" className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-b from-sky-50 to-white">
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
            <h3 className="font-dancing text-4xl text-gray-800 mb-4">Thank You!</h3>
            <p className="font-libre text-xl text-gray-600">
              Your presence is the best gift for us. See you on our special day!
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp" className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-b from-sky-50 to-white">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="font-dancing text-5xl md:text-6xl text-gray-800 mb-4 text-shadow-soft"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ 
              type: "spring",
              stiffness: 50,
              damping: 10
            }}
          >
            RSVP
          </motion.h2>
          <p className="font-libre text-lg md:text-xl text-gray-600">
            Please confirm your attendance by filling out the form below
          </p>
        </motion.div>

        <motion.form
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          onSubmit={handleSubmit}
          className="glass-effect rounded-2xl p-6"
        >
          <motion.div className="space-y-6">
            <motion.div variants={itemVariants}>
              <label className="block font-libre text-xl text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-300 focus:outline-none transition-colors font-libre"
                placeholder="Full name"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block font-libre text-xl text-gray-700 mb-2">
                WhatsApp Number
              </label>
              <div className="flex items-center">
                <div className="flex items-center px-3 py-3 bg-gray-100 border border-r-0 border-gray-200 rounded-l-lg">
                  <span className="text-xl mr-2">🇮🇩</span>
                  <span className="font-libre text-gray-700">+62</span>
                </div>
                <input
                  type="text"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 rounded-r-lg border border-gray-200 focus:border-blue-300 focus:outline-none transition-colors font-libre"
                  placeholder="812-3456-7890"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block font-libre text-xl text-gray-700 mb-2">
                Will you attend?
              </label>
              <select
                name="attendance"
                value={formData.attendance}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-300 focus:outline-none transition-colors font-libre"
              >
                <option value="yes">Yes, I'll be there!</option>
                <option value="no">Sorry, can't make it</option>
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
                  <label className="block font-libre text-xl text-gray-700 mb-2">
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-300 focus:outline-none transition-colors font-libre"
                  >
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                  </select>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div variants={itemVariants}>
              <label className="block font-libre text-xl text-gray-700 mb-2">
                Message for the Couple
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-300 focus:outline-none transition-colors resize-none font-libre"
                placeholder="Write your wishes and prayers..."
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 text-gray-800 font-libre text-xl py-4 rounded-lg transition-all duration-300"
            >
              Send RSVP
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  )
}
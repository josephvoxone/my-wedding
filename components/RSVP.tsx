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
    console.log('RSVP submitted:', formData)
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
      <section id="rsvp" className="py-20 px-4 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-2xl mx-auto text-center">
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
            <h3 className="font-dancing text-4xl text-gray-800 mb-4">Terima Kasih!</h3>
            <p className="font-homemade text-xl text-gray-600">
              Kehadiran kamu adalah hadiah terindah buat kami. Sampai jumpa di hari bahagia kami!
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp" className="py-20 px-4 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-2xl mx-auto">
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
            Konfirmasi Kehadiran
          </motion.h2>
          <p className="font-homemade text-2xl text-gray-600">
            Yuk, kasih tau kami kalau kamu bisa hadir!
          </p>
        </motion.div>

        <motion.form
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          onSubmit={handleSubmit}
          className="glass-effect rounded-2xl p-8"
        >
          <motion.div className="space-y-6">
            <motion.div variants={itemVariants}>
              <label className="block font-homemade text-xl text-gray-700 mb-2">
                Nama Kamu
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-300 focus:outline-none transition-colors font-homemade"
                placeholder="Nama lengkap"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block font-homemade text-xl text-gray-700 mb-2">
                Email atau No. WhatsApp
              </label>
              <input
                type="text"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-300 focus:outline-none transition-colors font-homemade"
                placeholder="email@gmail.com atau 0812xxx"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block font-homemade text-xl text-gray-700 mb-2">
                Kamu bisa hadir?
              </label>
              <select
                name="attendance"
                value={formData.attendance}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-300 focus:outline-none transition-colors font-homemade"
              >
                <option value="yes">Insya Allah hadir!</option>
                <option value="no">Maaf, belum bisa hadir</option>
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
                  <label className="block font-homemade text-xl text-gray-700 mb-2">
                    Jumlah Tamu
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-300 focus:outline-none transition-colors font-homemade"
                  >
                    <option value="1">1 orang</option>
                    <option value="2">2 orang</option>
                    <option value="3">3 orang</option>
                    <option value="4">4 orang</option>
                  </select>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div variants={itemVariants}>
              <label className="block font-homemade text-xl text-gray-700 mb-2">
                Ucapan & Doa untuk kami
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-300 focus:outline-none transition-colors resize-none font-homemade"
                placeholder="Tulis ucapan dan doa terbaik kamu..."
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 text-gray-800 font-homemade text-xl py-4 rounded-lg transition-all duration-300"
            >
              Kirim Konfirmasi
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  )
}
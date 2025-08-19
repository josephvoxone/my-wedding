'use client'

import { motion } from 'framer-motion'

export default function Location() {
  return (
    <section id="location" className="py-20 px-4 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-dancing text-5xl md:text-6xl text-gray-800 mb-4 text-shadow-soft">
            Lokasi Acara
          </h2>
          <p className="font-gaegu text-2xl text-gray-600">
            Jangan sampai salah tempat ya!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="font-dancing text-3xl text-gray-800 mb-4">Akad Nikah</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-gaegu text-lg text-gray-700 font-bold">Masjid Al-Hikmah</p>
                  <p className="font-gaegu text-gray-600">Jl. Raya Ubud No. 88, Gianyar, Bali</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🕰️</span>
                <p className="font-gaegu text-gray-700">Selasa, 9 September 2025 - 10:00 WITA</p>
              </div>
              <div className="mt-4">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 text-gray-800 font-gaegu px-6 py-3 rounded-lg transition-all duration-300"
                >
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="font-dancing text-3xl text-gray-800 mb-4">Resepsi</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-gaegu text-lg text-gray-700 font-bold">The Royal Pita Maha</p>
                  <p className="font-gaegu text-gray-600">Jl. Sanggingan, Kedewatan, Ubud, Bali</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🕰️</span>
                <p className="font-gaegu text-gray-700">Selasa, 9 September 2025 - 19:00 WITA</p>
              </div>
              <div className="mt-4">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 text-gray-800 font-gaegu px-6 py-3 rounded-lg transition-all duration-300"
                >
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="glass-effect rounded-2xl p-6 inline-block">
            <p className="font-gaegu text-lg text-gray-600 mb-2">Catatan Penting:</p>
            <p className="font-gaegu text-gray-700">
              Mohon hadir tepat waktu ya! Parkir tersedia di lokasi acara.
            </p>
            <p className="font-gaegu text-gray-700 mt-2">
              Untuk yang datang dari luar kota, ada beberapa hotel terdekat yang bisa dipilih.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-b from-white to-sky-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="glass-effect rounded-2xl p-8 mb-8">
          <h3 className="font-dancing text-3xl text-gray-800 mb-4">Terima Kasih</h3>
          <p className="font-gaegu text-xl text-gray-600 mb-6">
            Kehadiran dan doa restu kamu adalah kado terindah buat kami. <br/>
            Sampai jumpa di hari bahagia kami!
          </p>
          <div className="flex justify-center gap-2 text-2xl">
            <span>💕</span>
            <span>🌸</span>
            <span>✨</span>
            <span>🌸</span>
            <span>💕</span>
          </div>
        </div>

        <div className="text-center">
          <p className="font-dancing text-4xl text-gray-800 mb-2">Joseph & Ayu</p>
          <p className="font-gaegu text-lg text-gray-600">
            #JosephAyuWedding
          </p>
          <p className="font-gaegu text-sm text-gray-500 mt-4">
            © 2025 Dibuat dengan penuh cinta untuk hari spesial kami
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
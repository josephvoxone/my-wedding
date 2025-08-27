'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-16 px-8 bg-gradient-to-b from-cream to-cream-dark">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="mb-12">
          <p className="font-monsieur text-5xl text-brown mb-2">Joseph & Ayu</p>
          <p className="font-libre text-lg text-brown-soft mb-4">
            Tuesday, 9 September 2025
          </p>
          <p className="font-libre text-sage text-base">
            #<span className="font-bold">JOS</span>thew<span className="font-bold">AYU</span>are
          </p>
        </div>

        <div className="border-t border-sage/20 pt-8">
          <p className="font-libre text-sm text-brown-soft mb-2">
            Made with ❤️ by Joseph
          </p>
          <p className="font-libre text-xs text-brown-soft/60">
            © 2025 All rights reserved
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
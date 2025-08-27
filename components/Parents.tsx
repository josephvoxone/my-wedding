'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Parents() {
  return (
    <section className="min-h-screen flex items-center py-20 px-8 bg-gradient-to-b from-cream to-cream-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="mb-16 md:mb-20">
            <p className="font-monsieur text-5xl md:text-6xl text-sage">
              The
            </p>
            <h2 className="font-bodoni text-4xl md:text-5xl text-brown uppercase -mt-2">
              Bride & Groom
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
                      className="object-cover grayscale"
                    />
                  </div>
                </div>
                <h3 className="font-monsieur text-4xl md:text-5xl text-brown mb-4">
                  Joseph Shandy Harvian
                </h3>
                <p className="font-libre text-lg text-sage-dark">
                  Son of
                </p>
              </div>
              
              <div className="space-y-1">
                <p className="font-libre text-sm md:text-base text-brown-soft">
                  Mr. Juli Puguh Hariyanto & Mrs. Novi Yuanita
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
                      className="object-cover grayscale"
                    />
                  </div>
                </div>
                <h3 className="font-monsieur text-4xl md:text-5xl text-brown mb-4">
                  Ayu Lestari
                </h3>
                <p className="font-libre text-lg text-sage-dark">
                  Daughter of
                </p>
              </div>
              
              <div className="space-y-1">
                <p className="font-libre text-sm md:text-base text-brown-soft">
                  Mr. Teddy Gunawan (Late) & Mrs. Filanda Teddy
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
              "Two families become one"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
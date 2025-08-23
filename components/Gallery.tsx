'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'

const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552", caption: "Perjalanan pertama kita berdua" },
  { id: 2, src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486", caption: "Ngopi bareng jadi favorit" },
  { id: 3, src: "https://images.unsplash.com/photo-1529636798458-92182e662485", caption: "Sunset di pantai Bali" },
  { id: 4, src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23", caption: "Petualangan bareng" },
  { id: 5, src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2", caption: "Malam di kota" },
  { id: 6, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc", caption: "Momen spesial kita" },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof photos[0] | null>(null)
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  return (
    <section ref={containerRef} id="gallery" className="py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-dancing text-5xl md:text-6xl text-gray-800 mb-4 text-shadow-soft">
            Galeri Kenangan
          </h2>
          <p className="font-homemade text-2xl text-gray-600">
            Setiap foto punya cerita, setiap cerita penuh makna
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl transform-gpu"
              onClick={() => setSelectedImage(photo)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="font-homemade text-white text-xl">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl w-full"
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="w-full h-auto rounded-2xl"
            />
            <p className="font-homemade text-white text-2xl text-center mt-4">
              {selectedImage.caption}
            </p>
          </motion.div>
        </div>
      )}
    </section>
  )
}
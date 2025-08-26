'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const photos = [
  { 
    id: 1, 
    src: "/assets/wedding/alone.jpg", 
    caption: "A moment of serenity"
  },
  { 
    id: 2, 
    src: "/assets/wedding/dance.jpg", 
    caption: "Dancing through life together"
  },
  { 
    id: 3, 
    src: "/assets/wedding/mirror.jpg", 
    caption: "Reflections of love"
  },
  { 
    id: 4, 
    src: "/assets/wedding/stare.jpg", 
    caption: "Lost in each other"
  },
  { 
    id: 5, 
    src: "/assets/wedding/window.jpg", 
    caption: "Looking towards our future"
  },
  { 
    id: 6, 
    src: "/assets/wedding/with-us.jpg", 
    caption: "Together forever"
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof photos[0] | null>(null)

  return (
    <section id="gallery" className="min-h-screen flex items-center py-20 px-8 bg-gradient-to-b from-cream to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="mb-4">
            <p className="font-monsieur text-4xl md:text-5xl text-sage">
              Our
            </p>
            <h2 className="font-bodoni text-5xl md:text-6xl text-brown uppercase -mt-2">
              Gallery
            </h2>
          </div>
          <p className="font-libre text-base text-brown-soft">
            Every photo tells a story, every story is filled with meaning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                rotate: index % 2 === 0 ? -1 : 1
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: 0,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              {/* Polaroid Container */}
              <div className="bg-white p-4 shadow-2xl transform hover:shadow-2xl transition-all duration-300">
                {/* Photo */}
                <div className="relative w-full h-[350px] md:h-[375px] overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                {/* Caption */}
                <div className="mt-4 text-center">
                  <p className="font-homemade text-lg text-brown">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.8, rotate: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white p-4 shadow-2xl">
              <div className="relative w-full h-[60vh] md:h-[70vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-homemade text-2xl text-brown">
                  {selectedImage.caption}
                </p>
              </div>
            </div>
            
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
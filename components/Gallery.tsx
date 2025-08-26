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
    <section id="gallery" className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-b from-cream to-white">
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
            <div
              key={photo.id}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(photo)}
              style={{
                transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`,
              }}
            >
              {/* Polaroid Container */}
              <div className="bg-white p-3 pb-16 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                {/* Photo */}
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                {/* Caption */}
                <div className="pt-4 flex items-center justify-center h-12">
                  <p className="font-homemade text-brown text-base md:text-lg text-center">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl w-full"
          >
            <div className="bg-white p-4 pb-20 shadow-2xl">
              <div className="relative w-full aspect-video md:aspect-square">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  fill
                  className="object-contain filter grayscale"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
              <div className="pt-6 flex items-center justify-center">
                <p className="font-homemade text-brown text-2xl md:text-3xl text-center">
                  {selectedImage.caption}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
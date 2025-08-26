'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const events = [
  {
    title: "Akad Nikah",
    date: "Selasa, 9 September 2025",
    time: "10:00 WITA",
    venue: "Masjid Al-Hikmah",
    address: "Jl. Raya Ubud No. 88, Gianyar, Bali",
    icon: "🕌"
  },
  {
    title: "Resepsi Pernikahan",
    date: "Selasa, 9 September 2025",
    time: "19:00 WITA",
    venue: "The Royal Pita Maha",
    address: "Jl. Sanggingan, Kedewatan, Ubud, Bali",
    icon: "🎊"
  }
]

export default function EventDetails() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [-100, 100])
  
  return (
    <section ref={containerRef} id="event-details" className="py-20 px-8 bg-gradient-to-b from-white to-sky-50 overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-dancing text-5xl md:text-6xl text-gray-800 text-shadow-soft">
            Save The Date
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
              className="glass-effect rounded-2xl p-8 text-center transform-gpu"
            >
              <motion.div 
                className="text-6xl mb-4"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >
                {event.icon}
              </motion.div>
              <h3 className="font-dancing text-3xl text-gray-800 mb-4">{event.title}</h3>
              <div className="space-y-2 mb-6">
                <p className="font-libre text-xl text-gray-700">{event.date}</p>
                <p className="font-libre text-2xl text-gray-800 font-bold">{event.time}</p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-libre text-xl text-gray-700 mb-1 font-bold">{event.venue}</p>
                <p className="font-libre text-gray-600 text-sm">{event.address}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="glass-effect rounded-2xl p-6 inline-block">
            <p className="font-libre text-xl text-gray-700 mb-2">Dress Code</p>
            <p className="font-libre text-2xl text-gray-800 font-bold">Batik & Formal</p>
            <div className="flex gap-3 justify-center mt-4">
              <div className="w-8 h-8 rounded-full bg-rose-200" />
              <div className="w-8 h-8 rounded-full bg-blue-200" />
              <div className="w-8 h-8 rounded-full bg-green-200" />
              <div className="w-8 h-8 rounded-full bg-yellow-200" />
              <div className="w-8 h-8 rounded-full bg-purple-200" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
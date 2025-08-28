'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { TextReveal } from '@/components/magicui/text-reveal'
import { useRef } from 'react'

// Media configuration for story chapters - multiple media per chapter
const storyMedia = [
  // Chapter 1: First Cough (2021)
  [
    {
      type: 'image' as const,
      src: '/assets/story/first-cough.jpeg',
      alt: 'First Cough - Our COVID meeting',
      caption: 'First Cough'
    }
  ],
  // Chapter 2: Kalimantan - Surabaya (2022-2023)
  [
    {
      type: 'image' as const,
      src: '/assets/story/ngopi-sama-nenek.jpeg',
      alt: 'Tea Time with Grandma',
      caption: 'tea time',
      year: '2022'
    },
    {
      type: 'video' as const,
      src: '/assets/story/flight.mp4',
      alt: 'Flight from Surabaya to Kalimantan',
      caption: 'Our Flights',
      year: '2022'
    },
    {
      type: 'image' as const,
      src: '/assets/story/bromo.jpeg',
      alt: 'Mount Bromo Adventure',
      caption: 'Bromo Sunrise',
      year: '2023'
    },
    {
      type: 'video' as const,
      src: '/assets/story/bromo-timelapse.mp4',
      alt: 'Bromo Timelapse',
      caption: 'time flies',
      year: '2023'
    }
  ],
  // Chapter 3: Building Dreams (2023-2024)
  [
    {
      type: 'image' as const,
      src: '/assets/story/engagement.jpeg',
      alt: 'Building our future',
      caption: 'Dreams together'
    }
  ],
  // Chapter 4: Sacred Promise (2025)
  [
    {
      type: 'image' as const,
      src: '/assets/wedding/with-us.jpg',
      alt: 'Our engagement',
      caption: 'Forever Begins'
    }
  ]
]

function RingAnimation({ language }: { language: 'id' | 'en' }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  // Transform values for the rings
  const leftRingX = useTransform(scrollYProgress, [0, 0.5], ['-300px', '30px'])
  const rightRingX = useTransform(scrollYProgress, [0, 0.5], ['300px', '-30px'])
  const leftRingRotateY = useTransform(scrollYProgress, [0, 0.5], [-180, 0])
  const rightRingRotateY = useTransform(scrollYProgress, [0, 0.5], [180, 0])
  const leftRingRotateZ = useTransform(scrollYProgress, [0, 0.5], [-360, 0])
  const rightRingRotateZ = useTransform(scrollYProgress, [0, 0.5], [360, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 1, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1])
  
  // Transform for the heart that appears when rings merge
  const heartOpacity = useTransform(scrollYProgress, [0.45, 0.5, 0.55], [0, 0, 1])
  const heartScale = useTransform(scrollYProgress, [0.45, 0.55], [0, 1])
  
  return (
    <div ref={containerRef} className="min-h-screen flex flex-col items-center justify-center px-8 relative">
      {/* Ring Animation Container - positioned above text */}
      <div className="mb-16 md:mb-20 relative h-32 md:h-40 w-full max-w-lg">
        <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1000px' }}>
          {/* Left Ring */}
          <motion.div
            style={{ 
              x: leftRingX,
              rotateY: leftRingRotateY,
              rotateZ: leftRingRotateZ,
              opacity,
              scale,
              transformStyle: 'preserve-3d'
            }}
            className="absolute"
          >
            <svg width="100" height="100" viewBox="0 0 100 100" className="w-20 h-20 md:w-28 md:h-28">
              <defs>
                <linearGradient id="silver1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#E5E5E5', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#C0C0C0', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#E5E5E5', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="silver1-inner">
                  <stop offset="0%" style={{ stopColor: '#F5F5F5', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#C0C0C0', stopOpacity: 0.1 }} />
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="40" fill="url(#silver1-inner)" stroke="url(#silver1)" strokeWidth="6"/>
              <circle cx="50" cy="50" r="34" fill="none" stroke="url(#silver1)" strokeWidth="1" opacity="0.5"/>
              <circle cx="50" cy="50" r="46" fill="none" stroke="url(#silver1)" strokeWidth="1" opacity="0.3"/>
            </svg>
          </motion.div>
          
          {/* Right Ring */}
          <motion.div
            style={{ 
              x: rightRingX,
              rotateY: rightRingRotateY,
              rotateZ: rightRingRotateZ,
              opacity,
              scale,
              transformStyle: 'preserve-3d'
            }}
            className="absolute"
          >
            <svg width="100" height="100" viewBox="0 0 100 100" className="w-20 h-20 md:w-28 md:h-28">
              <defs>
                <linearGradient id="silver2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#E5E5E5', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#C0C0C0', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#E5E5E5', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="silver2-inner">
                  <stop offset="0%" style={{ stopColor: '#F5F5F5', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#C0C0C0', stopOpacity: 0.1 }} />
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="40" fill="url(#silver2-inner)" stroke="url(#silver2)" strokeWidth="6"/>
              <circle cx="50" cy="50" r="34" fill="none" stroke="url(#silver2)" strokeWidth="1" opacity="0.5"/>
              <circle cx="50" cy="50" r="46" fill="none" stroke="url(#silver2)" strokeWidth="1" opacity="0.3"/>
            </svg>
          </motion.div>
          
          {/* Heart that appears when rings merge */}
          <motion.div
            style={{ 
              opacity: heartOpacity,
              scale: heartScale
            }}
            className="absolute"
          >
            <svg width="60" height="60" viewBox="0 0 60 60" className="w-12 h-12 md:w-16 md:h-16">
              <defs>
                <linearGradient id="heart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#FF69B4', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#FF1493', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path 
                d="M30 45 C30 45, 10 30, 10 18 C10 12, 14 8, 20 8 C24 8, 27 10, 30 13 C33 10, 36 8, 40 8 C46 8, 50 12, 50 18 C50 30, 30 45, 30 45 Z" 
                fill="url(#heart-gradient)"
              />
            </svg>
          </motion.div>
        </div>
      </div>
      
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center"
      >
        <h3 className="font-monsieur text-4xl md:text-5xl text-brown mb-6">
          {language === 'id' ? 'Bersama Selamanya' : 'Together Forever'}
        </h3>
        <p className="font-libre text-lg text-brown-soft max-w-2xl mx-auto">
          {language === 'id' 
            ? 'Dan kini, dengan penuh sukacita, kami mengundang Anda untuk menjadi saksi saat kami mengikat janji suci di hadapan Tuhan.'
            : 'And now, with great joy, we invite you to witness as we make our sacred vows before God.'}
        </p>
      </motion.div>
    </div>
  )
}

function PolaroidMedia({ media, index }: { 
  media: typeof storyMedia[0][0]; 
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Grayscale effect based on scroll - color when in center, grayscale when away
  const grayscaleValue = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [100, 0, 0, 0, 100]
  )
  
  const filter = useTransform(grayscaleValue, (value) => `grayscale(${value}%)`)
  
  // Calculate vertical position - responsive stacking
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const cardHeight = isMobile ? 340 : 400 // Smaller on mobile
  const overlap = -50 // Only 50px overlap so text is visible
  const spacing = cardHeight - overlap // Spacing between cards
  
  // Slight rotation for visual interest - alternating pattern
  const rotations = [-3, 2, -1, 3, -2]
  const rotation = rotations[index % rotations.length]
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotate: rotation }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        rotate: rotation,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.2, // Sequential appearance
        type: "spring",
        stiffness: 100
      }}
      className="absolute"
      style={{
        left: 0,
        top: `${index * spacing}px`,
        zIndex: index + 1, // First photo at bottom, last on top
      }}
      whileHover={{ 
        scale: 1.05,
        rotate: 0,
        zIndex: 20,
        transition: { duration: 0.3 }
      }}
    >
      <div className="bg-white p-3 md:p-4 shadow-2xl transform hover:shadow-2xl transition-all duration-300">
        <motion.div 
          className="relative w-[240px] h-[300px] md:w-[280px] md:h-[350px] overflow-hidden bg-gray-100"
          style={{ filter }}
        >
          {media.type === 'video' ? (
            <video
              src={media.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={media.src}
              alt={media.alt}
              fill
              className="object-cover"
            />
          )}
        </motion.div>
        <div className="mt-3 text-center">
          <p className="font-homemade text-xl text-brown">{media.caption}</p>
          {'year' in media && media.year && (
            <p className="font-homemade text-base text-brown-soft">{media.year}</p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function StackedPolaroids({ mediaList }: {
  mediaList: typeof storyMedia[0];
}) {
  // Calculate height based on number of photos
  const cardHeight = 400
  const overlap = 50 // Only 50px overlap - match PolaroidMedia
  const spacing = cardHeight - overlap
  const totalHeight = mediaList.length > 0 ? spacing * (mediaList.length - 1) + cardHeight + 100 : 600
  
  return (
    <div className="relative w-full flex justify-center px-8 mb-32">
      <div className="relative w-[280px] md:w-[320px]" style={{ height: `${totalHeight}px` }}>
        {mediaList.map((media, idx) => (
          <PolaroidMedia 
            key={idx} 
            media={media} 
            index={idx}
          />
        ))}
      </div>
    </div>
  )
}

export default function OurStory() {
  const { language, t } = useLanguage()
  const chapters = t.ourStory.chapters
  
  return (
    <section id="our-story" className="bg-gradient-to-b from-cream to-white">
      {/* Title Section */}
      <div className="min-h-screen flex items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="mb-8">
            <p className="font-monsieur text-4xl md:text-5xl text-sage">
              {t.ourStory.our}
            </p>
            <h2 className="font-bodoni text-5xl md:text-6xl text-brown uppercase -mt-2">
              {t.ourStory.loveStory}
            </h2>
          </div>
          <p className="font-libre text-lg text-brown-soft max-w-2xl mx-auto">
            {t.ourStory.quote}
          </p>
          
          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-20"
          >
            <p className="font-libre text-sm text-brown-soft mb-2">
              {language === 'id' ? 'Gulir untuk membaca cerita kami' : 'Scroll to read our story'}
            </p>
            <svg className="w-6 h-6 mx-auto text-brown-soft" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Story Chapters with Text Reveal */}
      {chapters.map((chapter, index) => (
        <div key={index} className="relative">
          {/* Text Reveal Section */}
          <TextReveal className="mb-0">
            {chapter.content}
          </TextReveal>
          
          {/* Stacked Polaroid Media */}
            <StackedPolaroids 
              mediaList={storyMedia[index] || []}
            />
        </div>
      ))}

      {/* Closing Message with Ring Animation */}
      <RingAnimation language={language} />
    </section>
  )
}
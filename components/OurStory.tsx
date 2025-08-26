'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { TextReveal } from '@/components/magicui/text-reveal'

const storyData = {
  id: [
    {
      year: "2018",
      title: "Awal Pertemuan",
      content: "Takdir mempertemukan kami di sebuah acara kampus. Joseph dengan canggungnya mencoba memulai percakapan, sementara Ayu hanya tersenyum malu. Siapa sangka, pertemuan sederhana itu menjadi awal dari kisah yang akan kami kenang selamanya.",
      image: "/assets/wedding/mirror.jpg"
    },
    {
      year: "2019 - 2020",
      title: "Mengenal Lebih Dalam",
      content: "Dari sekadar teman menjadi sahabat, kami belajar memahami satu sama lain. Joseph yang penuh semangat dan Ayu yang lembut hati ternyata saling melengkapi dengan sempurna. Setiap percakapan panjang di malam hari menguatkan keyakinan bahwa kami ditakdirkan bersama.",
      image: "/assets/wedding/stare.jpg"
    },
    {
      year: "2021 - 2023",
      title: "Membangun Mimpi Bersama",
      content: "Kami mulai merajut mimpi bersama. Melalui suka dan duka, kami belajar arti sesungguhnya dari cinta - bukan hanya kebahagiaan, tapi juga kesabaran, pengertian, dan komitmen. Setiap tantangan yang kami hadapi bersama semakin memperkuat ikatan kami.",
      image: "/assets/wedding/window.jpg"
    },
    {
      year: "2024",
      title: "Janji Suci",
      content: "Di bawah langit Bali yang cerah, Joseph melamar Ayu dengan penuh keyakinan. Dengan air mata bahagia, Ayu menerima lamaran itu. Kini, kami siap melangkah ke babak baru kehidupan dengan restu orang tua dan doa dari sahabat.",
      image: "/assets/wedding/with-us.jpg"
    }
  ],
  en: [
    {
      year: "2018",
      title: "First Meeting",
      content: "Fate brought us together at a campus event. Joseph awkwardly tried to start a conversation, while Ayu just smiled shyly. Who would have thought that simple meeting would become the beginning of a story we would cherish forever.",
      image: "/assets/wedding/mirror.jpg"
    },
    {
      year: "2019 - 2020",
      title: "Getting to Know Each Other",
      content: "From just friends to close companions, we learned to understand each other. Joseph's enthusiasm and Ayu's gentle heart turned out to complement each other perfectly. Every long conversation at night strengthened our belief that we were destined to be together.",
      image: "/assets/wedding/stare.jpg"
    },
    {
      year: "2021 - 2023",
      title: "Building Dreams Together",
      content: "We began weaving dreams together. Through joy and sorrow, we learned the true meaning of love - not just happiness, but also patience, understanding, and commitment. Every challenge we faced together strengthened our bond.",
      image: "/assets/wedding/window.jpg"
    },
    {
      year: "2024",
      title: "Sacred Promise",
      content: "Under Bali's bright sky, Joseph proposed to Ayu with full confidence. With tears of joy, Ayu accepted the proposal. Now, we are ready to step into a new chapter of life with our parents' blessings and friends' prayers.",
      image: "/assets/wedding/with-us.jpg"
    }
  ]
}

function PolaroidPhoto({ image, title, year, index }: { image: string; title: string; year: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        rotate: index % 2 === 0 ? -1 : 1
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6,
        delay: 0.2,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        rotate: 0,
        transition: { duration: 0.3 }
      }}
      className="inline-block cursor-pointer"
    >
      <div className="bg-white p-4 shadow-2xl transform hover:shadow-2xl transition-all duration-300">
        <div className="relative w-72 h-[350px] md:w-[300px] md:h-[375px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="mt-4 text-center">
          <p className="font-homemade text-lg text-brown">{title}</p>
          <p className="font-libre text-sm text-brown-soft">{year}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function OurStory() {
  const { language, t } = useLanguage()
  const stories = storyData[language]
  
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
              {language === 'id' ? 'Kisah' : 'Our'}
            </p>
            <h2 className="font-bodoni text-5xl md:text-6xl text-brown uppercase -mt-2">
              {language === 'id' ? 'Cinta Kami' : 'Love Story'}
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
      {stories.map((story, index) => (
        <div key={index} className="relative">
          {/* Text Reveal Section */}
          <TextReveal className="mb-0">
            {story.content}
          </TextReveal>
          
          {/* Polaroid Photo */}
          <div className="flex justify-center -mt-64 px-8 mb-20">
            <PolaroidPhoto 
              image={story.image} 
              title={story.title}
              year={story.year}
              index={index}
            />
          </div>
        </div>
      ))}

      {/* Closing Message */}
      <div className="min-h-screen flex items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
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
    </section>
  )
}
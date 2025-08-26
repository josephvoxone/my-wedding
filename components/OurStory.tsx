'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const storyChaptersData = {
  id: [
    {
      title: "Awal Pertemuan",
      date: "2018",
      content: "Takdir mempertemukan kami di sebuah acara kampus. Joseph dengan canggungnya mencoba memulai percakapan, sementara Ayu hanya tersenyum malu. Siapa sangka, pertemuan sederhana itu menjadi awal dari kisah yang akan kami kenang selamanya. Kami mulai sering bertemu, berbagi cerita, dan tanpa sadar, hati kami mulai saling terikat.",
      image: "💝"
    },
    {
      title: "Mengenal Lebih Dalam",
      date: "2019 - 2020",
      content: "Dari sekadar teman menjadi sahabat, kami belajar memahami satu sama lain. Joseph yang penuh semangat dan Ayu yang lembut hati ternyata saling melengkapi dengan sempurna. Setiap percakapan panjang di malam hari, setiap tawa yang kami bagi, menguatkan keyakinan bahwa kami ditakdirkan bersama.",
      image: "🌙"
    },
    {
      title: "Membangun Mimpi Bersama",
      date: "2021 - 2023",
      content: "Kami mulai merajut mimpi bersama. Melalui suka dan duka, kami belajar arti sesungguhnya dari cinta - bukan hanya kebahagiaan, tapi juga kesabaran, pengertian, dan komitmen. Setiap tantangan yang kami hadapi bersama semakin memperkuat ikatan kami. Keluarga kami pun mulai saling mengenal dan memberikan restu.",
      image: "🏡"
    },
    {
      title: "Janji Suci",
      date: "2024",
      content: "Di bawah langit Bali yang cerah, Joseph melamar Ayu dengan penuh keyakinan. Dengan air mata bahagia, Ayu menerima lamaran itu. Kini, kami siap melangkah ke babak baru kehidupan. Dengan restu orang tua dan doa dari sahabat, kami akan mengikat janji suci di hadapan Tuhan untuk saling mencintai dan setia selamanya.",
      image: "💍"
    }
  ],
  en: [
    {
      title: "First Meeting",
      date: "2018",
      content: "Fate brought us together at a campus event. Joseph awkwardly tried to start a conversation, while Ayu just smiled shyly. Who would have thought that simple meeting would become the beginning of a story we would cherish forever. We started meeting often, sharing stories, and unknowingly, our hearts began to connect.",
      image: "💝"
    },
    {
      title: "Getting to Know Each Other",
      date: "2019 - 2020",
      content: "From just friends to close companions, we learned to understand each other. Joseph's enthusiasm and Ayu's gentle heart turned out to complement each other perfectly. Every long conversation at night, every laugh we shared, strengthened our belief that we were destined to be together.",
      image: "🌙"
    },
    {
      title: "Building Dreams Together",
      date: "2021 - 2023",
      content: "We began weaving dreams together. Through joy and sorrow, we learned the true meaning of love - not just happiness, but also patience, understanding, and commitment. Every challenge we faced together strengthened our bond. Our families also got to know each other and gave their blessings.",
      image: "🏡"
    },
    {
      title: "Sacred Promise",
      date: "2024",
      content: "Under Bali's bright sky, Joseph proposed to Ayu with full confidence. With tears of joy, Ayu accepted the proposal. Now, we are ready to step into a new chapter of life. With our parents' blessings and friends' prayers, we will make a sacred promise before God to love and be faithful to each other forever.",
      image: "💍"
    }
  ]
}

function StoryChapter({ chapter, index }: { chapter: typeof storyChaptersData.id[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })
  
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -200 : 200, 0]
  )
  
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index % 2 === 0 ? -15 : 15, 0, 0]
  )
  
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1.05, 1]
  )

  return (
    <motion.div
      ref={ref}
      style={{ x, rotate, scale }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`flex flex-col md:flex-row items-center gap-8 mb-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="flex-1">
        <motion.div 
          className="glass-effect rounded-2xl p-8"
          whileHover={{ scale: 1.02, rotateY: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div 
            className="text-6xl mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            {chapter.image}
          </motion.div>
          <h3 className="font-dancing text-3xl text-gray-800 mb-2">{chapter.title}</h3>
          <p className="font-libre text-xl text-gray-600 mb-4">{chapter.date}</p>
          <p className="font-libre text-gray-700 leading-relaxed">{chapter.content}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function OurStory() {
  const { language, t } = useLanguage()
  const storyChapters = storyChaptersData[language]
  
  return (
    <section id="our-story" className="min-h-screen flex items-center py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="mb-4">
            <p className="font-monsieur text-4xl md:text-5xl text-sage">
              {language === 'id' ? 'Kisah' : 'Our'}
            </p>
            <h2 className="font-bodoni text-5xl md:text-6xl text-brown uppercase -mt-2">
              {language === 'id' ? 'Cinta Kami' : 'Love Story'}
            </h2>
          </div>
          <p className="font-libre text-base text-brown-soft">
            {t.ourStory.quote}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden md:block" />
          
          {storyChapters.map((chapter, index) => (
            <StoryChapter key={index} chapter={chapter} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Marquee } from '@/components/magicui/marquee'
import { cn } from '@/lib/utils'

interface Wish {
  id: number
  guest_slug: string | null
  guest_name: string
  message: string
  attendance_status: string | null
  created_at: string
}

interface WishesResponse {
  wishes: Wish[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Dummy wishes for when there are less than 10
const dummyWishes: Wish[] = [
  {
    id: -1,
    guest_slug: null,
    guest_name: "Edy Wahono",
    message: "Selamat menempuh hidup baru untuk Joseph dan Ayu. Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Doa terbaik kami sertai langkah kalian berdua.",
    attendance_status: "hadir",
    created_at: new Date(Date.now() - 86400000).toISOString()
  },
  {
    id: -2,
    guest_slug: null,
    guest_name: "Reza",
    message: "Congrats bro! Akhirnya sampeyan nikah juga hahaha. Semoga langgeng sampai maut memisahkan. Jangan lupa traktir kita-kita ya!",
    attendance_status: "hadir",
    created_at: new Date(Date.now() - 172800000).toISOString()
  },
  {
    id: -3,
    guest_slug: null,
    guest_name: "Bima & Keluarga",
    message: "Turut berbahagia atas pernikahan Joseph dan Ayu. Semoga Allah SWT memberkahi pernikahan ini dengan kebahagiaan dan rezeki yang melimpah.",
    attendance_status: "streaming",
    created_at: new Date(Date.now() - 259200000).toISOString()
  },
  {
    id: -4,
    guest_slug: null,
    guest_name: "Hwat",
    message: "Happy wedding bro! Semoga jadi keluarga yang harmonis dan diberkati selalu. Cepet punya momongan ya!",
    attendance_status: "hadir",
    created_at: new Date(Date.now() - 345600000).toISOString()
  },
  {
    id: -5,
    guest_slug: null,
    guest_name: "Sum",
    message: "Bahagia rasanya melihat kalian bersatu. Semoga cinta kalian abadi selamanya. God bless your marriage!",
    attendance_status: "tidak_hadir",
    created_at: new Date(Date.now() - 432000000).toISOString()
  },
  {
    id: -6,
    guest_slug: null,
    guest_name: "Thing & Family",
    message: "Selamat menempuh kehidupan yang baru. Semoga menjadi pasangan yang saling melengkapi dan mendukung dalam suka maupun duka.",
    attendance_status: "hadir",
    created_at: new Date(Date.now() - 518400000).toISOString()
  },
  {
    id: -7,
    guest_slug: null,
    guest_name: "Wong",
    message: "Mantap kali bah! Akhirnya jadi juga kalian nikah. Semoga rukun selalu, kompak terus sampai kakek nenek!",
    attendance_status: "streaming",
    created_at: new Date(Date.now() - 604800000).toISOString()
  },
  {
    id: -8,
    guest_slug: null,
    guest_name: "Seno",
    message: "Selamat ya Joseph & Ayu! Semoga pernikahan kalian dipenuhi dengan cinta, tawa, dan kebahagiaan yang tak terhingga.",
    attendance_status: "hadir",
    created_at: new Date(Date.now() - 691200000).toISOString()
  },
  {
    id: -9,
    guest_slug: null,
    guest_name: "Meli",
    message: "MasyaAllah tabarakallah! Selamat menempuh bahtera rumah tangga. Semoga menjadi keluarga yang dirahmati Allah SWT.",
    attendance_status: "hadir",
    created_at: new Date(Date.now() - 777600000).toISOString()
  },
  {
    id: -10,
    guest_slug: null,
    guest_name: "Windy & Keluarga",
    message: "Dengan penuh sukacita kami mengucapkan selamat atas pernikahan kalian. Semoga menjadi pasangan yang langgeng dan berbahagia selamanya.",
    attendance_status: "streaming",
    created_at: new Date(Date.now() - 864000000).toISOString()
  }
]

const WishCard = ({ wish, language }: { wish: Wish; language: string }) => {
  const formatDate = (dateString: string) => {
    // Handle both UTC and local time formats from database
    let date = new Date(dateString)
    
    // If the date string doesn't have timezone info, assume it's UTC
    if (!dateString.includes('Z') && !dateString.includes('+') && !dateString.includes('-')) {
      // Add Z to indicate UTC
      date = new Date(dateString + 'Z')
    }
    
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
    
    // Handle negative differences (future dates) or very recent
    if (diffInSeconds < 0 || diffInSeconds < 60) {
      return language === 'id' ? 'Baru saja' : 'Just now'
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60)
      return language === 'id' 
        ? `${minutes} menit yang lalu` 
        : `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600)
      return language === 'id' 
        ? `${hours} jam yang lalu` 
        : `${hours} hour${hours > 1 ? 's' : ''} ago`
    } else if (diffInSeconds < 604800) { // Less than a week
      const days = Math.floor(diffInSeconds / 86400)
      return language === 'id' 
        ? `${days} hari yang lalu` 
        : `${days} day${days > 1 ? 's' : ''} ago`
    } else {
      // For older dates, show the actual date
      return date.toLocaleDateString(language === 'id' ? 'id-ID' : 'en-US', {
        day: 'numeric',
        month: 'short',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
      })
    }
  }


  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6",
        "border-sage/20 bg-white/80 hover:bg-white/90",
        "transition-all duration-300 hover:shadow-lg"
      )}
    >
      <div className="mb-3">
        <figcaption className="font-caveat text-xl text-brown">
          {wish.guest_name}
        </figcaption>
        <p className="text-xs font-libre text-gray-500">
          {formatDate(wish.created_at)}
        </p>
      </div>
      <blockquote className="text-sm font-libre text-gray-700 leading-relaxed">
        {wish.message}
      </blockquote>
    </figure>
  )
}

export default function WishesSection() {
  const { language } = useLanguage()
  const [wishes, setWishes] = useState<Wish[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Form state
  const [formData, setFormData] = useState({
    guest_name: '',
    message: '',
    attendance_status: ''
  })
  const [showForm, setShowForm] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Load guest name from URL if available
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const guestSlug = urlParams.get('to')
    
    if (guestSlug) {
      // Try to fetch guest info
      fetchGuestInfo(guestSlug)
    }
    
    // Load wishes
    fetchWishes()
  }, [])

  const fetchGuestInfo = async (slug: string) => {
    try {
      const response = await fetch(`/api/guests/${slug}`)
      if (response.ok) {
        const data = await response.json()
        if (data.guest) {
          setFormData(prev => ({
            ...prev,
            guest_name: data.guest.nickname || data.guest.name
          }))
        }
      }
    } catch (error) {
      console.error('Error fetching guest info:', error)
    }
  }

  const fetchWishes = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/wishes?page=1&limit=100`)
      if (response.ok) {
        const data: WishesResponse = await response.json()
        let allWishes = data.wishes
        
        // Always ensure at least 10 wishes are shown
        if (allWishes.length === 0) {
          // If no wishes at all, show all dummy wishes
          allWishes = dummyWishes
        } else if (allWishes.length < 10) {
          // If less than 10 wishes, add dummy wishes to make it 10
          const dummyCount = 10 - allWishes.length
          const dummyToAdd = dummyWishes.slice(0, dummyCount)
          allWishes = [...allWishes, ...dummyToAdd]
        }
        
        setWishes(allWishes)
      } else {
        // On error or empty response, use all dummy wishes
        setWishes(dummyWishes)
      }
    } catch (error) {
      console.error('Error fetching wishes:', error)
      // Use all dummy wishes on error
      setWishes(dummyWishes)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.guest_name || !formData.message) return
    
    setIsSubmitting(true)
    try {
      const urlParams = new URLSearchParams(window.location.search)
      const guestSlug = urlParams.get('to')
      
      const response = await fetch('/api/wishes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          guest_slug: guestSlug
        })
      })
      
      if (response.ok) {
        setSubmitSuccess(true)
        setShowForm(false)
        setFormData({
          guest_name: formData.guest_name, // Keep name
          message: '',
          attendance_status: ''
        })
        
        // Reload wishes to show the new one
        setTimeout(() => {
          fetchWishes()
        }, 1000)
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 3000)
      }
    } catch (error) {
      console.error('Error submitting wish:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Split wishes for two rows
  const halfLength = Math.ceil(wishes.length / 2)
  const firstRow = wishes.slice(0, halfLength)
  const secondRow = wishes.slice(halfLength)

  return (
    <section id="wishes" className="min-h-screen bg-gradient-to-b from-white to-cream-light py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-bodoni text-6xl md:text-7xl text-brown mb-4">
            {language === 'id' ? 'Ucapan & Doa' : 'Wishes & Prayers'}
          </h2>
          <p className="font-libre text-base text-brown-soft">
            {language === 'id' 
              ? 'Berikan ucapan dan doa terbaik untuk kami' 
              : 'Share your best wishes and prayers for us'}
          </p>
        </motion.div>

        {/* Success Message */}
        <AnimatePresence>
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 text-center"
            >
              {language === 'id' 
                ? '✨ Ucapan Anda berhasil dikirim! Terima kasih!' 
                : '✨ Your wish has been sent! Thank you!'}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add Wish Button / Form */}
        <div className="max-w-2xl mx-auto mb-12">
          {!showForm ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowForm(true)}
                className="px-8 py-3 bg-white-soft/80 backdrop-blur-sm border-2 border-sage/30 rounded-full font-libre text-sage-dark hover:bg-sage/10 hover:border-sage/50 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  {language === 'id' ? 'Tulis Ucapan' : 'Write a Wish'}
                </span>
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white-soft/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block font-libre text-xl text-brown mb-2">
                    {language === 'id' ? 'Nama' : 'Name'} *
                  </label>
                  <input
                    type="text"
                    value={formData.guest_name}
                    onChange={(e) => setFormData(prev => ({ ...prev, guest_name: e.target.value }))}
                    className="w-full px-4 py-3 bg-white rounded-xl font-libre border-2 border-sage/20 focus:border-sage/50 focus:outline-none transition-colors"
                    placeholder={language === 'id' ? 'Nama Anda' : 'Your Name'}
                    required
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block font-libre text-xl text-brown mb-2">
                    {language === 'id' ? 'Ucapan & Doa' : 'Wishes & Prayers'} *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 bg-white rounded-xl font-libre border-2 border-sage/20 focus:border-sage/50 focus:outline-none transition-colors resize-none"
                    rows={4}
                    placeholder={language === 'id' 
                      ? 'Tuliskan ucapan dan doa terbaik Anda...' 
                      : 'Write your best wishes and prayers...'}
                    required
                  />
                </div>

                {/* Attendance Status */}
                <div>
                  <label className="block font-libre text-xl text-brown mb-2">
                    {language === 'id' ? 'Kehadiran' : 'Attendance'}
                  </label>
                  <select
                    value={formData.attendance_status}
                    onChange={(e) => setFormData(prev => ({ ...prev, attendance_status: e.target.value }))}
                    className="w-full px-4 py-3 bg-white rounded-xl font-libre border-2 border-sage/20 focus:border-sage/50 focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="">{language === 'id' ? 'Pilih kehadiran...' : 'Select attendance...'}</option>
                    <option value="hadir">{language === 'id' ? 'Akan Hadir' : 'Will Attend'}</option>
                    <option value="tidak_hadir">{language === 'id' ? 'Tidak Bisa Hadir' : 'Cannot Attend'}</option>
                    <option value="streaming">{language === 'id' ? 'Nonton Streaming' : 'Watch Streaming'}</option>
                  </select>
                </div>

                {/* Submit Buttons */}
                <div className="flex gap-3 justify-end">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 bg-white border-2 border-sage/20 rounded-xl font-libre text-brown hover:bg-sage/10 hover:border-sage/30 transition-all"
                  >
                    {language === 'id' ? 'Batal' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-sage text-white rounded-xl font-libre hover:bg-sage-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting 
                      ? (language === 'id' ? 'Mengirim...' : 'Sending...') 
                      : (language === 'id' ? 'Kirim Ucapan' : 'Send Wish')}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </div>

        {/* Wishes Display with Marquee */}
        {!isLoading && wishes.length > 0 && (
          <div className="relative w-full overflow-hidden">
            <Marquee pauseOnHover className="[--duration:40s]">
              {firstRow.map((wish) => (
                <WishCard key={wish.id} wish={wish} language={language} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:40s]">
              {secondRow.map((wish) => (
                <WishCard key={wish.id} wish={wish} language={language} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-cream-light"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-cream-light"></div>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-lg font-libre text-gray-500">
              {language === 'id' ? 'Memuat ucapan...' : 'Loading wishes...'}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
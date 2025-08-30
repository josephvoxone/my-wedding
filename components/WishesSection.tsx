'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

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

export default function WishesSection() {
  const { language } = useLanguage()
  const [wishes, setWishes] = useState<Wish[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
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
    fetchWishes(1)
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

  const fetchWishes = async (pageNum: number) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/wishes?page=${pageNum}&limit=10`)
      if (response.ok) {
        const data: WishesResponse = await response.json()
        if (pageNum === 1) {
          setWishes(data.wishes)
        } else {
          setWishes(prev => [...prev, ...data.wishes])
        }
        setPage(pageNum)
        setTotalPages(data.pagination.totalPages)
      }
    } catch (error) {
      console.error('Error fetching wishes:', error)
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
          fetchWishes(1)
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
    
    if (diffInSeconds < 60) {
      return language === 'id' ? 'Baru saja' : 'Just now'
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60)
      return language === 'id' 
        ? `${minutes} menit yang lalu` 
        : `${minutes} minutes ago`
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600)
      return language === 'id' 
        ? `${hours} jam yang lalu` 
        : `${hours} hours ago`
    } else {
      const days = Math.floor(diffInSeconds / 86400)
      return language === 'id' 
        ? `${days} hari yang lalu` 
        : `${days} days ago`
    }
  }

  const getAttendanceIcon = (status: string | null) => {
    switch(status) {
      case 'hadir':
        return '✓'
      case 'tidak_hadir':
        return '✗'
      case 'streaming':
        return '📺'
      default:
        return ''
    }
  }

  const getAttendanceText = (status: string | null) => {
    if (!status) return ''
    
    const texts = {
      hadir: language === 'id' ? 'Akan Hadir' : 'Will Attend',
      tidak_hadir: language === 'id' ? 'Tidak Bisa Hadir' : 'Cannot Attend',
      streaming: language === 'id' ? 'Nonton Streaming' : 'Watch Streaming'
    }
    
    return texts[status as keyof typeof texts] || ''
  }

  return (
    <section id="wishes" className="min-h-screen bg-gradient-to-b from-white to-cream-light py-20">
      <div className="container mx-auto px-4 max-w-6xl">
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
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 text-center"
            >
              {language === 'id' 
                ? '✨ Ucapan Anda berhasil dikirim! Terima kasih!' 
                : '✨ Your wish has been sent! Thank you!'}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add Wish Button / Form */}
        {!showForm ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8"
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
            className="bg-white-soft/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl mb-8"
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

        {/* Wishes Display */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {wishes.map((wish, index) => (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-caveat text-xl text-brown">
                      {wish.guest_name}
                    </h3>
                    <p className="text-xs text-gray-500 font-libre">
                      {formatDate(wish.created_at)}
                    </p>
                  </div>
                  {wish.attendance_status && (
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sage/10 text-sage-dark font-bold" title={getAttendanceText(wish.attendance_status)}>
                      {getAttendanceIcon(wish.attendance_status)}
                    </span>
                  )}
                </div>

                {/* Message */}
                <p className="text-sm font-libre text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {wish.message}
                </p>

                {/* Attendance Badge */}
                {wish.attendance_status && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <span className="text-xs font-libre text-gray-500">
                      {getAttendanceText(wish.attendance_status)}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {page < totalPages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <button
              onClick={() => fetchWishes(page + 1)}
              disabled={isLoading}
              className="px-8 py-3 bg-white-soft/80 backdrop-blur-sm border-2 border-sage/30 rounded-full font-libre text-sage-dark hover:bg-sage/10 hover:border-sage/50 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50"
            >
              {isLoading 
                ? (language === 'id' ? 'Memuat...' : 'Loading...') 
                : (language === 'id' ? 'Muat Lebih Banyak' : 'Load More')}
            </button>
          </motion.div>
        )}

        {/* Empty State */}
        {wishes.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-lg font-libre text-gray-500">
              {language === 'id' 
                ? 'Belum ada ucapan. Jadilah yang pertama!' 
                : 'No wishes yet. Be the first one!'}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
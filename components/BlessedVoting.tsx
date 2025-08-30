'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

interface VoteStats {
  total: number
  blessed: number
  notBlessed: number
  blessedPercentage: number
  notBlessedPercentage: number
}

export default function BlessedVoting() {
  const { language } = useLanguage()
  const [hasVoted, setHasVoted] = useState(false)
  const [userVote, setUserVote] = useState<boolean | null>(null)
  const [stats, setStats] = useState<VoteStats>({
    total: 0,
    blessed: 0,
    notBlessed: 0,
    blessedPercentage: 0,
    notBlessedPercentage: 0
  })
  const [isLoading, setIsLoading] = useState(false)

  // Check if user has voted (stored in localStorage)
  useEffect(() => {
    const storedVote = localStorage.getItem('spiritual_vote')
    if (storedVote !== null) {
      setHasVoted(true)
      setUserVote(storedVote === 'true')
    }
    fetchStats()
  }, [])

  // Poll for updates every 10 seconds
  useEffect(() => {
    const interval = setInterval(fetchStats, 10000)
    return () => clearInterval(interval)
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/spiritual-vote')
      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (error) {
      console.error('Error fetching stats:', error)
    }
  }

  const handleVote = async (isBlessed: boolean) => {
    if (hasVoted || isLoading) return
    
    setIsLoading(true)
    try {
      // Get guest slug from URL if available
      const urlParams = new URLSearchParams(window.location.search)
      const guestSlug = urlParams.get('to')
      
      const response = await fetch('/api/spiritual-vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          guest_slug: guestSlug,
          is_blessed: isBlessed
        })
      })
      
      if (response.ok) {
        const data = await response.json()
        setHasVoted(true)
        setUserVote(isBlessed)
        localStorage.setItem('spiritual_vote', isBlessed.toString())
        
        // Update stats from response
        if (data.stats) {
          setStats({
            total: data.stats.total,
            blessed: data.stats.blessed,
            notBlessed: data.stats.total - data.stats.blessed,
            blessedPercentage: data.stats.percentage,
            notBlessedPercentage: 100 - data.stats.percentage
          })
        }
      }
    } catch (error) {
      console.error('Error voting:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8"
      >
        {/* Question */}
        <h3 className="text-2xl md:text-3xl font-caveat text-brown text-center mb-8">
          {language === 'id' 
            ? 'Apakah kamu merasa terberkati setelah membaca kisah ini?' 
            : 'Do you feel blessed after reading this story?'}
        </h3>

        {/* Voting Buttons */}
        {!hasVoted ? (
          <div className="flex justify-center gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleVote(true)}
              disabled={isLoading}
              className="px-8 py-4 bg-gradient-to-r from-gold-soft to-gold rounded-full text-white font-libre text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
            >
              {language === 'id' ? 'Ya, Terberkati ✨' : 'Yes, Blessed ✨'}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleVote(false)}
              disabled={isLoading}
              className="px-8 py-4 bg-gray-200 rounded-full text-gray-700 font-libre text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
            >
              {language === 'id' ? 'Tidak' : 'No'}
            </motion.button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-8"
          >
            <p className="text-lg font-libre text-brown mb-2">
              {language === 'id' 
                ? 'Terima kasih atas feedback Anda!' 
                : 'Thank you for your feedback!'}
            </p>
            <p className="text-sm text-brown-soft">
              {language === 'id' 
                ? `Anda memilih: ${userVote ? 'Terberkati ✨' : 'Tidak'}` 
                : `You voted: ${userVote ? 'Blessed ✨' : 'No'}`}
            </p>
          </motion.div>
        )}

        {/* Results Bar */}
        <AnimatePresence mode="wait">
          {stats.total > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Percentage Bar */}
              <div className="relative h-12 bg-gray-100 rounded-full overflow-hidden mb-4">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-gold-soft to-gold flex items-center justify-start"
                  initial={{ width: 0 }}
                  animate={{ width: `${stats.blessedPercentage}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  {stats.blessedPercentage > 10 && (
                    <span className="text-white font-libre text-sm md:text-base ml-4">
                      {stats.blessedPercentage}% {language === 'id' ? 'Terberkati' : 'Blessed'} ✨
                    </span>
                  )}
                </motion.div>
                
                {stats.notBlessedPercentage > 10 && (
                  <div className="absolute right-0 top-0 h-full flex items-center justify-end">
                    <span className="text-gray-600 font-libre text-sm md:text-base mr-4">
                      {stats.notBlessedPercentage}%
                    </span>
                  </div>
                )}
              </div>

              {/* Vote Count */}
              <p className="text-center text-sm text-brown-soft font-libre">
                {language === 'id' 
                  ? `dari ${stats.total} pembaca` 
                  : `from ${stats.total} readers`}
              </p>

              {/* Detailed Stats */}
              <div className="flex justify-center gap-8 mt-4 text-xs text-brown-soft">
                <span>✨ {stats.blessed}</span>
                <span>• {stats.notBlessed}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* No votes yet message */}
        {stats.total === 0 && hasVoted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-brown-soft font-libre"
          >
            {language === 'id' 
              ? 'Anda adalah pembaca pertama yang memberikan feedback!' 
              : 'You are the first reader to give feedback!'}
          </motion.p>
        )}
      </motion.div>
    </div>
  )
}
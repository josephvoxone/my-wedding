'use client'

import { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { Howl } from 'howler'

export interface MusicPlayerRef {
  startMusic: () => void
}

const MusicPlayer = forwardRef<MusicPlayerRef>((props, ref) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const soundRef = useRef<Howl | null>(null)
  const isInitialized = useRef(false)

  useEffect(() => {
    // Prevent double initialization in React StrictMode
    if (isInitialized.current) return
    isInitialized.current = true

    // Initialize audio
    soundRef.current = new Howl({
      src: ['/music/before-spring.mp3'],
      loop: true, // Ensure looping is enabled
      volume: 0.3,
      autoplay: false,
      html5: true,
      preload: true,
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onstop: () => setIsPlaying(false)
    })

    return () => {
      // Clean up audio
      if (soundRef.current) {
        soundRef.current.unload()
        soundRef.current = null
      }
      isInitialized.current = false
    }
  }, [])

  // Expose startMusic method to parent
  useImperativeHandle(ref, () => ({
    startMusic: () => {
      if (soundRef.current && !soundRef.current.playing()) {
        soundRef.current.play()
      }
    }
  }))

  const toggleMusic = () => {
    if (soundRef.current) {
      if (isPlaying) {
        soundRef.current.pause()
      } else {
        soundRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform glass-effect"
      aria-label="Toggle music"
    >
      {isPlaying ? (
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
        </svg>
      ) : (
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )}
    </button>
  )
})

MusicPlayer.displayName = 'MusicPlayer'

export default MusicPlayer
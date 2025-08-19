'use client'

import { useEffect, useState, useRef } from 'react'
import { Howl } from 'howler'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const soundRef = useRef<Howl | null>(null)

  useEffect(() => {
    soundRef.current = new Howl({
      src: ['/music/wedding-song.mp3'],
      loop: true,
      volume: 0.3,
      autoplay: false,
    })

    return () => {
      if (soundRef.current) {
        soundRef.current.unload()
      }
    }
  }, [])

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
}
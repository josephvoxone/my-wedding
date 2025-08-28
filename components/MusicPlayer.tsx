'use client'

import { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { Howl } from 'howler'

export interface MusicPlayerRef {
  startMusic: () => void
  changeTrack: (src: string) => void
  fadeOut: () => Promise<void>
  fadeIn: () => Promise<void>
}

const MusicPlayer = forwardRef<MusicPlayerRef>((props, ref) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState('/music/before-spring.mp3')
  const soundRef = useRef<Howl | null>(null)
  const isInitialized = useRef(false)
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isChangingTrack = useRef(false)

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
      // Clean up audio and timeouts
      if (soundRef.current) {
        soundRef.current.unload()
        soundRef.current = null
      }
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current)
      }
      isInitialized.current = false
    }
  }, [])

  // Expose methods to parent
  useImperativeHandle(ref, () => ({
    startMusic: () => {
      if (soundRef.current && !soundRef.current.playing()) {
        soundRef.current.play()
        setIsPlaying(true)
      }
    },
    changeTrack: (src: string) => {
      // Prevent multiple simultaneous track changes
      if (isChangingTrack.current) {
        return
      }
      
      // Check if already playing this track
      if (currentTrack === src) {
        // Just ensure it's playing
        if (!soundRef.current?.playing()) {
          soundRef.current?.play()
          setIsPlaying(true)
        }
        return
      }
      
      if (soundRef.current) {
        isChangingTrack.current = true
        const wasPlaying = soundRef.current.playing() || isPlaying // Check both actual playing state and React state
        
        // Store old sound for cleanup
        const oldSound = soundRef.current
        
        // Immediately unload old sound to prevent any issues
        oldSound.stop()
        oldSound.unload()
        
        // Create new track
        const newSound = new Howl({
          src: [src],
          loop: true,
          volume: 0.3,
          autoplay: wasPlaying, // Auto-play if previous was playing
          html5: true,
          preload: true,
          onplay: () => setIsPlaying(true),
          onpause: () => setIsPlaying(false),
          onstop: () => setIsPlaying(false),
          onload: () => {
            // Track has loaded, allow new changes
            isChangingTrack.current = false
          },
          onloaderror: () => {
            // On error, also reset the flag
            isChangingTrack.current = false
          }
        })
        
        // Set new sound as current
        soundRef.current = newSound
        setCurrentTrack(src)
        
        // If was playing, ensure the new track starts
        if (wasPlaying && !newSound.playing()) {
          setTimeout(() => {
            soundRef.current?.play()
          }, 50)
        }
      }
    },
    fadeOut: () => {
      return new Promise<void>((resolve) => {
        if (soundRef.current && soundRef.current.playing()) {
          const currentVolume = soundRef.current.volume()
          soundRef.current.fade(currentVolume, 0.05, 800)  // Fade to very low, not zero
          fadeTimeoutRef.current = setTimeout(() => {
            resolve()
          }, 800)
        } else {
          resolve()
        }
      })
    },
    fadeIn: () => {
      return new Promise<void>((resolve) => {
        if (soundRef.current) {
          if (!soundRef.current.playing()) {
            soundRef.current.volume(0.05)
            soundRef.current.play()
          }
          soundRef.current.fade(soundRef.current.volume(), 0.3, 800)
          fadeTimeoutRef.current = setTimeout(() => {
            resolve()
          }, 800)
        } else {
          resolve()
        }
      })
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
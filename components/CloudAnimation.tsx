'use client'

import { useEffect, useState } from 'react'

export default function CloudAnimation() {
  const [clouds, setClouds] = useState<Array<{ id: number; x: number; y: number; scale: number; duration: number; delay: number }>>([])  
  
  useEffect(() => {
    const cloudData = [
      { id: 1, x: -100, y: 10, scale: 1, duration: 60, delay: 0 },
      { id: 2, x: -150, y: 25, scale: 0.8, duration: 75, delay: 5 },
      { id: 3, x: -120, y: 45, scale: 1.2, duration: 90, delay: 10 },
      { id: 4, x: -180, y: 65, scale: 0.9, duration: 80, delay: 15 },
      { id: 5, x: -140, y: 80, scale: 1.1, duration: 70, delay: 20 },
      { id: 6, x: -110, y: 5, scale: 0.7, duration: 85, delay: 25 },
      { id: 7, x: -160, y: 35, scale: 1.3, duration: 65, delay: 30 },
      { id: 8, x: -130, y: 55, scale: 0.85, duration: 95, delay: 35 },
    ]
    setClouds(cloudData)
  }, [])
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className={`cloud ${cloud.id % 2 === 0 ? 'cloud-2' : 'cloud-1'}`}
          style={{
            position: 'absolute',
            top: `${cloud.y}%`,
            transform: `scale(${cloud.scale})`,
            animation: `float-across ${cloud.duration}s linear ${cloud.delay}s infinite`,
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes float-across {
          from {
            left: -200px;
            transform: translateY(0px) scale(var(--scale, 1));
          }
          25% {
            transform: translateY(-10px) scale(var(--scale, 1));
          }
          50% {
            transform: translateY(5px) scale(var(--scale, 1));
          }
          75% {
            transform: translateY(-5px) scale(var(--scale, 1));
          }
          to {
            left: 110%;
            transform: translateY(0px) scale(var(--scale, 1));
          }
        }
      `}</style>
    </div>
  )
}
'use client'

import { useState } from 'react'

export default function GeneratePage() {
  const [guestName, setGuestName] = useState('')
  
  const generateMessage = (name: string) => {
    const encodedName = encodeURIComponent(name)
    return `Selamat siang,

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami :

Joseph Shandy Harvian & Ayu Lestari (Poing)

Berikut link undangan kami untuk info lengkap dari acara bisa kunjungi :

https://www.josephayu.com/?to=${encodedName}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

Mohon maaf perihal undangan hanya di bagikan melalui pesan ini. Terima kasih banyak atas perhatiannya.

Terima Kasih.`
  }
  
  const handleWhatsAppShare = () => {
    if (!guestName.trim()) {
      alert('Silakan masukkan nama tamu')
      return
    }
    
    const message = generateMessage(guestName)
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-light to-cloud flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-['Dancing_Script'] text-center mb-8 text-gray-800">
          Generate Undangan WhatsApp
        </h1>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="guestName" className="block text-lg font-medium text-gray-700 mb-2">
              Nama Tamu
            </label>
            <input
              type="text"
              id="guestName"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Masukkan nama tamu..."
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-gold-soft focus:outline-none transition-colors text-lg"
            />
          </div>
          
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-semibold text-gray-700 mb-2">Preview Pesan:</h3>
            <pre className="whitespace-pre-wrap text-sm text-gray-600 font-sans">
              {generateMessage(guestName || '[Nama Tamu]')}
            </pre>
          </div>
          
          <button
            onClick={handleWhatsAppShare}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-3 text-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 1.172c-5.957 0-10.79 4.833-10.79 10.79 0 1.892.488 3.672 1.343 5.217l-1.413 5.149 5.275-1.383c1.497.816 3.204 1.282 5.016 1.282h.005c5.953 0 10.787-4.834 10.787-10.79s-4.834-10.79-10.79-10.79zm5.441 15.438c-.229.644-1.346 1.25-1.875 1.322-.5.069-1.141.098-1.839-.116-.437-.134-1-.279-1.717-.549-3.019-1.137-4.992-4.344-5.142-4.543-.146-.199-1.207-1.606-1.207-3.063 0-1.457.765-2.173 1.037-2.469.272-.296.594-.37.792-.37.199 0 .397.002.571.009.183.007.428-.069.669.51.241.58.819 2.001.892 2.147.073.146.122.317.024.51-.098.194-.146.316-.293.487-.146.17-.309.38-.44.51-.146.146-.298.304-.128.597.17.292.757 1.249 1.625 2.023 1.116.995 2.058 1.304 2.35 1.451.293.146.465.122.635-.073.171-.195.73-.852.925-1.145.195-.293.391-.244.658-.146.268.098 1.699.802 1.991.948.293.146.487.219.56.341.073.122.073.707-.156 1.35z"/>
            </svg>
            Kirim via WhatsApp
          </button>
        </div>
      </div>
    </div>
  )
}
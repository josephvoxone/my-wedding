import type { Metadata } from 'next'
import { Homemade_Apple } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/components/LenisProvider'

const homemadeApple = Homemade_Apple({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-homemade-apple',
})

export const metadata: Metadata = {
  title: 'Joseph & Ayu - Our Wedding',
  description: 'Kami mengundang kamu untuk merayakan hari bahagia kami, 9 September 2025',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${homemadeApple.variable} font-homemade`}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
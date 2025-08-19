import type { Metadata } from 'next'
import { Gaegu } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/components/LenisProvider'

const gaegu = Gaegu({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
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
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Dancing+Script:wght@400;700&family=Gaegu:wght@300;400;700&family=Pacifico&family=Satisfy&display=swap" rel="stylesheet" />
      </head>
      <body className={gaegu.className}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
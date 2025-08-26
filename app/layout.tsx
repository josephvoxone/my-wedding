import type { Metadata } from 'next'
import { Homemade_Apple, Libre_Baskerville, Monsieur_La_Doulaise, Bodoni_Moda } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/components/LenisProvider'
import { LanguageProvider } from '@/contexts/LanguageContext'

const homemadeApple = Homemade_Apple({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-homemade-apple',
})

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre',
})

const monsieurLaDoulaise = Monsieur_La_Doulaise({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-monsieur',
})

const bodoniModa = Bodoni_Moda({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bodoni',
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
      <body className={`${homemadeApple.variable} ${libreBaskerville.variable} ${monsieurLaDoulaise.variable} ${bodoniModa.variable} font-libre`}>
        <LanguageProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
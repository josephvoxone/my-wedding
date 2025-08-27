import type { Metadata } from 'next'
import { Homemade_Apple, Libre_Baskerville, Monsieur_La_Doulaise, Bodoni_Moda, Reenie_Beanie } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/components/LenisProvider'
import { LanguageProvider } from '@/contexts/LanguageContext'
import StructuredData from '@/components/StructuredData'

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

const reenieBeanie = Reenie_Beanie({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-reenie',
})

export const metadata: Metadata = {
  title: 'Joseph & Ayu - Wedding Invitation | 09.09.2025',
  description: 'Dengan penuh sukacita, kami mengundang Anda untuk merayakan pernikahan kami pada tanggal 9 September 2025 di SM Tower Hotel Convention Centre, Berau, Kalimantan Timur. Kehadiran Anda akan melengkapi kebahagiaan kami.',
  keywords: 'Joseph Shandy Harvian, Ayu Lestari, Wedding, Pernikahan, Undangan, 9 September 2025, Berau, Kalimantan Timur, SM Tower Hotel',
  authors: [{ name: 'Joseph Shandy Harvian' }, { name: 'Ayu Lestari' }],
  creator: 'Joseph Shandy Harvian',
  publisher: 'Joseph & Ayu',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.josephayu.com'),
  alternates: {
    canonical: 'https://www.josephayu.com',
  },
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Joseph & Ayu - The Wedding',
    description: 'Dengan penuh sukacita, kami mengundang Anda untuk merayakan pernikahan kami pada tanggal 9 September 2025 di SM Tower Hotel Convention Centre, Berau.',
    type: 'website',
    locale: 'id_ID',
    alternateLocale: 'en_US',
    url: 'https://www.josephayu.com',
    siteName: 'Joseph & Ayu Wedding',
    images: [
      {
        url: '/assets/wedding/with-us.jpg',
        width: 1200,
        height: 630,
        alt: 'Joseph & Ayu Wedding Invitation',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joseph & Ayu - Wedding Invitation | 09.09.2025',
    description: 'Kami mengundang Anda untuk merayakan pernikahan kami pada tanggal 9 September 2025 di SM Tower Hotel, Berau.',
    images: ['/assets/wedding/with-us.jpg'],
    creator: '@josephshandy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#8B7355" />
        <link rel="canonical" href="https://wedding-joseph-ayu.com" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <StructuredData />
      </head>
      <body className={`${homemadeApple.variable} ${libreBaskerville.variable} ${monsieurLaDoulaise.variable} ${bodoniModa.variable} ${reenieBeanie.variable} font-libre`}>
        <LanguageProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
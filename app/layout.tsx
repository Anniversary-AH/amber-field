import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Amber Field',
  description: 'A personal launchpad for design, dev and creative experiments. Built by a solo dev on the East Coast of Australia.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Amber Field',
    description: 'A personal launchpad for design, dev and creative experiments.',
    url: 'https://www.amber-field.com',
    siteName: 'Amber Field',
    images: [
      {
        url: 'https://www.amber-field.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Amber Field - Personal launchpad for design, dev and creative experiments',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amber Field',
    description: 'A personal launchpad for design, dev and creative experiments.',
    images: ['https://www.amber-field.com/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Amber Field</title>
        <meta name="description" content="A personal launchpad for design, dev and creative experiments. Built by a solo dev on the East Coast of Australia." />
        <link rel="canonical" href="https://www.amber-field.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Amber Field" />
        <meta property="og:description" content="A personal launchpad for design, dev and creative experiments." />
        <meta property="og:image" content="https://www.amber-field.com/og-image.png" />
        <meta property="og:url" content="https://www.amber-field.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amber Field" />
        <meta name="twitter:description" content="A personal launchpad for design, dev and creative experiments." />
        <meta name="twitter:image" content="https://www.amber-field.com/og-image.png" />
      </head>
      <body className="bg-white text-black antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

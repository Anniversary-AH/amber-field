import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Amber Field',
  description: 'A personal launchpad for design, dev and creative experiments. Built by a solo dev on the East Coast of Australia.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.ico',
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
    <html lang="en" style={{ colorScheme: 'light' }}>
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="msapplication-navbutton-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
      </head>
      <body className="bg-white text-black antialiased" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amber-Field | Designing Impactful Projects',
  description: 'Amber-Field creates impactful projects with precision and creativity. Explore our portfolio of innovative design solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        {children}
      </body>
    </html>
  )
}

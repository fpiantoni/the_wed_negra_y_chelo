import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Wed N&C',
  description: 'Negra & Chelo Wedding - Celebrá nuestro amor con nosotros',
  icons: {
    icon: [
      { url: '/red_logo.svg', sizes: 'any', type: 'image/svg+xml' },
      { url: '/red_logo_favicon.jpeg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/red_logo_favicon.jpeg', sizes: '16x16', type: 'image/jpeg' }
    ],
    shortcut: '/red_logo.svg',
    apple: '/red_logo_favicon.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/red_logo.svg?v=2" />
        <link rel="icon" type="image/jpeg" sizes="32x32" href="/red_logo_favicon.jpeg?v=2" />
        <link rel="icon" type="image/jpeg" sizes="16x16" href="/red_logo_favicon.jpeg?v=2" />
        <link rel="shortcut icon" href="/red_logo.svg?v=2" />
        <link rel="apple-touch-icon" href="/red_logo_favicon.jpeg?v=2" />
      </head>
      <body className="font-poppins">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

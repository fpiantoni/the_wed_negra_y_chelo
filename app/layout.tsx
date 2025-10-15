import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Wed N&C',
  description: 'Negra & Chelo Wedding - Celebrá nuestro amor con nosotros',
  icons: {
    icon: '/red_logo_png.png',
    shortcut: '/red_logo_png.png',
    apple: '/red_logo_png.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-poppins">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

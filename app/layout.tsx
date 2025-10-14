import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Wed N&C',
  description: 'Negra & Chelo Wedding - Celebrá nuestro amor con nosotros',
  icons: {
    icon: '/white_logo.png',
    shortcut: '/white_logo.png',
    apple: '/white_logo.png',
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
      </body>
    </html>
  )
}

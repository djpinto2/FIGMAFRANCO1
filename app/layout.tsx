import type { Metadata, Viewport } from 'next'
import './globals.css'
import { RegisterProvider } from '@/contexts/RegisterContext'
import RegisterModalWrapper from '@/components/RegisterModalWrapper'

export const metadata: Metadata = {
  title: 'Nexcent - Community Management Platform',
  description: 'Manage your entire community in a single system',
  keywords: ['community', 'management', 'membership', 'organizations'],
  authors: [{ name: 'Nexcent Team' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4CAF4F',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <RegisterProvider>
          {children}
          <RegisterModalWrapper />
        </RegisterProvider>
      </body>
    </html>
  )
}

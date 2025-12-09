import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nexcent - Community Management Platform',
  description: 'Manage your entire community in a single system',
  keywords: ['community', 'management', 'membership', 'organizations'],
  authors: [{ name: 'Nexcent Team' }],
  viewport: 'width=device-width, initial-scale=1',
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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
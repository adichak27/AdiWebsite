import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adi Chakravarthy - Portfolio',
  description: 'Personal portfolio website showcasing Adi Chakravarthy\'s work and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
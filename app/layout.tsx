import React from "react"
import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'Gautham Jewellers | Exquisite Indian Heritage Jewelry',
  description: 'Experience luxury craftsmanship with Gautham Jewellers. Discover our timeless collection of handcrafted 916KDM & 22CT gold ornaments, bridal sets, and contemporary designs.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

import { FloatingContact } from "@/components/ui/floating-contact"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <FloatingContact />
        <Analytics />
      </body>
    </html>
  )
}

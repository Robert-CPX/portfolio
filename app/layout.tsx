import type { Metadata } from 'next'
import React from 'react'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import ThemeProvider from '@/context/ThemeProvider'
import ActiveSectionProvider from '@/context/ActiveSectionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Robert-CPX portfolio",
  description: 'A Fullstack Software Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} dark:bg-gray-900`}>
        <ThemeProvider>
          <ActiveSectionProvider>
            {children}
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

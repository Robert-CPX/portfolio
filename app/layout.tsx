import type { Metadata } from 'next'
import React from 'react'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import ThemeProvider from '@/context/ThemeProvider'
import ActiveSectionProvider from '@/context/ActiveSectionProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  )
}

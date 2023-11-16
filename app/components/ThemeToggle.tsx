'use client'
import { useTheme } from '@/context/ThemeProvider'
import Image from 'next/image'
import React from 'react'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button className='theme_toggle' onClick={() => {
      const newTheme = theme === "light" ? 'dark' : 'light'
      localStorage.theme = newTheme
      setTheme(newTheme)
    }}>
      <Image
        src={`/${theme === 'light' ? 'sun' : 'moon'}.svg`}
        alt='theme toggle'
        className='bg-transparent'
        width={40}
        height={40}
      />
    </button>
  )
}

export default ThemeToggle

'use client'
import React, { useContext, createContext, useState, useEffect } from 'react'

type ThemeProviderProps = {
  theme: string;
  setTheme: (theme: string) => void;
}
const defaultTheme: ThemeProviderProps = {
  theme: 'light',
  setTheme: () => { }
}

const ThemeContext = createContext<ThemeProviderProps>(defaultTheme)

const ThemeProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState(defaultTheme.theme)

  const handleThemeChange = () => {
    if (localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    handleThemeChange()
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const themeContext = useContext(ThemeContext)
  return themeContext
}

export default ThemeProvider

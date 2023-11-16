'use client'

import React, { createContext, useContext, useState } from 'react'
import { SectionName } from '@/lib/types';

type ActiveSectionProviderProps = {
  activeSection: SectionName,
  setActiveSection: (section: SectionName) => void;
}

const ActiveSectionContext = createContext<ActiveSectionProviderProps | null>(null)

const ActiveSectionProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export const useActiveSection = () => {
  const activeSectionContext = useContext(ActiveSectionContext)
  if (!activeSectionContext) throw new Error('useActiveSection must be used within ActiveSectionProvider')
  return activeSectionContext
}

export default ActiveSectionProvider

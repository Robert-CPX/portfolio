'use client'

import React, { createContext, useContext, useState } from 'react'
import { SectionName } from '@/lib/types';

type ActiveSectionProviderProps = {
  activeSection: SectionName,
  setActiveSection: (section: SectionName) => void;
  timeOfLastClick: number;
  setTimeOfLastClick: (time: number) => void;
}

const ActiveSectionContext = createContext<ActiveSectionProviderProps | null>(null)

const ActiveSectionProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0)
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export const useActiveSectionContext = () => {
  const activeSectionContext = useContext(ActiveSectionContext)
  if (!activeSectionContext) throw new Error('useActiveSection must be used within ActiveSectionProvider')
  return activeSectionContext
}

export default ActiveSectionProvider

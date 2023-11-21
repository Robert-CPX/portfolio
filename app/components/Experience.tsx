'use client'

import React from 'react'
import { experiences } from '@/lib/constant'
import SectionHeader from './SectionHeader'
import { Chrono } from 'react-chrono'
import { useSectionInView } from '@/lib/hooks';

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);
  return (
    <section id='experience' ref={ref} className='mb-28 scroll-mt-28 sm:mb-40'>
      <SectionHeader>My experience</SectionHeader>
      <Chrono
        items={experiences}
        mode='VERTICAL_ALTERNATING'
        hideControls
        borderLessCards
        classNames={{
          card: 'my_timeline_card',
          cardSubTitle: 'my_timeline_cardSubTitle',
          cardText: 'my_timeline_cardText',
          cardTitle: 'my_timeline_cardTitle',
          title: 'my_timeline_title',
        }}
        fontSizes={{
          cardSubtitle: '1rem',
          cardText: '0.95rem',
          cardTitle: '1.2rem',
          title: '1.3rem'
        }}
        theme={{
          primary: '#9ca3af',
          titleColor: '#9ca3af',
          secondary: '',
          cardBgColor: '',
          titleColorActive: '',
        }} />
    </section >
  )
}

export default Experience
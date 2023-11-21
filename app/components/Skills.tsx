'use client'
import React from 'react'
import { skills } from '@/lib/constant'
import Skill from './cards/Skill'
import SectionHeader from './SectionHeader'
import { useSectionInView } from '@/lib/hooks'

const Skills = () => {
  const { ref } = useSectionInView("Skills", 1)
  return (
    <section id='skills' ref={ref} className='flex w-full scroll-mt-28 flex-col items-center gap-12'>
      <SectionHeader>My Skills</SectionHeader>
      <div className='flex flex-wrap justify-center gap-3'>
        {skills.map((skill, index) => (
          <Skill key={index} name={skill} />
        ))}
      </div>
    </section>
  )
}

export default Skills

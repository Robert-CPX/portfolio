import React from 'react'
import { experiences } from '@/lib/constant'
import ExperienceCard from './cards/ExperienceCard'

const Experience = () => {
  return (
    <div className='flex w-full flex-col items-center gap-12'>
      <h2 className='h2-medium text_dark200_light900'>My Experience</h2>
      <div className='relative max-w-6xl'>
        <div className='absolute inset-y-0 -z-10 w-1 bg-slate-200 lg:left-[50%] lg:ml-[-2px]'></div>
        {experiences.map((experience, index) => (
          <ExperienceCard index={index} key={index} {...experience} />
        ))}
      </div>
    </div>
  )
}

export default Experience

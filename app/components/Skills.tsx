import React from 'react'
import { skills } from '@/lib/constant'
import Skill from './cards/Skill'

const Skills = () => {
  return (
    <section className='flex w-full flex-col items-center gap-12'>
      <h2 className='h2-medium text_dark200_light900'>My Skills</h2>
      <div className='flex flex-wrap justify-center gap-3'>
        {skills.map((skill, index) => (
          <Skill key={index} name={skill} />
        ))}
      </div>
    </section>
  )
}

export default Skills

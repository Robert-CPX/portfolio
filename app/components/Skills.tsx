import React from 'react'
import { skills } from '@/lib/constant'
import Skill from './Skill'

const Skills = () => {
  return (
    <section className='flex flex-col items-center gap-12'>
      <h2 className='h2-medium text_dark200_light900'>My Skills</h2>
      <div className='flex flex-wrap gap-3'>
        {skills.map((skill, index) => (
          <Skill key={index} name={skill} />
        ))}
      </div>
    </section>
  )
}

export default Skills

import React from 'react'
import { projects } from '@/lib/constant'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className='mt-28 flex flex-col items-center gap-12'>
      <h2 className='h2-medium text_dark200_light900'>My Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          image={project.image}
          tags={project.tags}
          isEven={index % 2 === 0}
        />
      ))}
    </section>
  )
}

export default Projects

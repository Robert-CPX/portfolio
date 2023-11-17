'use client'

import React from 'react'
import { projects } from '@/lib/constant'
import ProjectCard from './cards/ProjectCard'
import SectionHeader from './SectionHeader'
import { useSectionInView } from '@/lib/hooks'

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.2)
  return (
    <section id="projects" ref={ref} className='flex scroll-mt-28 flex-col items-center gap-12'>
      <SectionHeader>My Projects</SectionHeader>
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

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  isEven: boolean;
}

const ProjectCard = ({
  title, description, image, tags, isEven
}: ProjectCardProps) => {
  return (
    <motion.section
      className={`flex h-[20rem] w-full items-start rounded-lg border bg-slate-200 hover:bg-slate-300 dark:border-none dark:bg-slate-800 dark:hover:bg-slate-700 ${isEven ? 'sm:flex-row-reverse' : 'sm:flex-row'} transition`}
    >
      <div className='my-8 ml-8 flex flex-col items-start gap-3 sm:w-1/2'>
        <p className='text_dark200_light900 h3-medium'>{title}</p>
        <p className='text_dark200_light900 text-project_description'>{description}</p>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p className='rounded-full bg-slate-700 px-3 py-1 text-center text-sm text-slate-200 dark:bg-slate-900' key={tag}>{tag}</p>
          ))}
        </div>
      </div>
      <Image
        src={image}
        alt="Project I worked on"
        width={100}
        height={100}
        className='hidden h-full w-1/2 overflow-hidden object-cover pt-8 sm:flex'
      />
    </motion.section>
  )
}

export default ProjectCard

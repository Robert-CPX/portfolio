import React from 'react'
import Image from 'next/image'

type ExperienceCardProps = {
  index: number;
  type: string;
  title: string;
  location: string;
  description: string;
  date: string;
}

const ExperienceCard = ({
  index, type, title, location, description, date
}: ExperienceCardProps) => {
  return (
    <div className={`relative h-[18rem] w-[50%] ${index % 2 === 0 ? 'left-0' : 'left-[50%]'}`}>
      <div className={`absolute z-10 flex h-[3rem] w-[3rem] items-center justify-center rounded-[3rem] border-4 bg-slate-100 dark:bg-slate-800 ${index % 2 === 0 ? 'right-[-1.5rem]' : 'left-[-1.5rem]'} top-4`}>
        <Image className='dark:invert' src={`${type}.svg`} alt={type} width={20} height={20} />
      </div>
      <div className={`absolute top-[2rem] z-10 ${index % 2 === 0 ? 'arrow-right right-8 pl-[6px]' : 'arrow-left left-8 pr-[6px]'}`}></div>
      <div className={`background-dark800_light200 h-[15rem] w-full rounded-sm border p-6 ${index % 2 === 0 ? '-ml-12' : 'ml-12'}`}>
        <p>{title}</p>
        <p>{location}</p>
        <p>{description}</p>
        <p>{date}</p>
      </div>
    </div>
  )
}

export default ExperienceCard

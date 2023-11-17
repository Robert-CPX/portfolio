'use client'

import React from 'react'
import { experiences } from '@/lib/constant'
import SectionHeader from './SectionHeader'
import Image from 'next/image'

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from '@/context/ThemeProvider'
import { useSectionInView } from '@/lib/hooks';

const Experience = () => {
  const { theme } = useTheme()
  const { ref } = useSectionInView("Experience")
  return (
    <section id='experience' ref={ref} className='mb-28 scroll-mt-28 sm:mb-40'>
      <SectionHeader>My experience</SectionHeader>
      <VerticalTimeline lineColor=''>
        {experiences.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={< Image src={`/${item.type}.svg`} alt={item.title} width={40} height={40} />}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-0 font-normal">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section >
  )
}

export default Experience

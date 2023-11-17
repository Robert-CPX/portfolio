'use client'
import React from 'react'
import { motion } from "framer-motion";
import { aboutme } from '@/lib/constant';
import SectionHeader from './SectionHeader';
import { useSectionInView } from '@/lib/hooks';

const About = () => {
  const { ref } = useSectionInView("About")
  return (
    <motion.section
      id='about'
      ref={ref}
      className='flex scroll-mt-28 flex-col items-center'
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeader>About me</SectionHeader>
      <p className='text-aboutme text_dark200_light900 mt-8 text-center'>{aboutme}</p>
    </motion.section>
  )
}

export default About

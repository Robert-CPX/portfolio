'use client'
import React from 'react'
import { motion } from "framer-motion";
import { aboutme } from '@/lib/constant';

const About = () => {
  return (
    <motion.section
      className='flex flex-col items-center'
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.175 }}
    >
      <h2 className='h2-medium text_dark200_light900'>About me</h2>
      <p className='text-normal text_dark200_light900 mt-8 text-center'>{aboutme}</p>
    </motion.section>
  )
}

export default About

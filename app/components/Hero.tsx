'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className='-mt-16 flex flex-col items-center'>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}>
        <Image
          src='/robert-cpx.jpeg'
          alt='Picture of the author'
          className='rounded-full border-4 border-white'
          width={100}
          height={100}
        />
      </motion.div>
      <motion.h1
        className='text-hero text_dark200_light900 my-5'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I&apos;m Robert.</span> A <span className='font-bold'>full-stack developer</span> with proven experience in mobile development. I enjoy coding. My focus is Frontend
      </motion.h1>
      <motion.div
        className='mt-3 flex flex-col items-center gap-5 sm:flex-row'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link href="#contact" className='text-hero-action btn-transition flex h-[3.5rem] w-[16rem] items-center gap-2 rounded-[3rem] bg-black px-10 py-2 text-slate-200'>
          Contact me here
          <Image className='invert' src='/arrow-right.svg' alt='arrow' width={20} height={20} />
        </Link>
        <Link href="/" className='text-hero-action text_dark200_light900 btn-transition flex h-[3.5rem] w-[13rem] items-center gap-2 rounded-[3rem] border bg-white px-7 py-2 dark:border-none dark:bg-slate-500'>
          Download CV
          <Image className='dark:invert' src='/download.svg' alt='download' width={20} height={20} />
        </Link>
        <Link target='_blank' href="https://www.linkedin.com/in/robert-c-78aa40253" className='text_dark200_light900 btn-transition flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full border bg-white dark:border-none dark:bg-slate-500'>
          <Image className='dark:invert-[0.8]' src='/linkedin.svg' alt='linkedin' width={24} height={24} />
        </Link>
        <Link target='_blank' href="https://www.github.com/Robert-CPX" className='text_dark200_light900 btn-transition flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full border bg-white dark:border-none dark:bg-slate-500'>
          <Image className='dark:invert-[0.8]' src='/github.svg' alt='github' width={24} height={24} />
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero

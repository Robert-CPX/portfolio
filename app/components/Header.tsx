'use client'

import { motion } from "framer-motion"
import { sections } from '@/lib/constant'
import Link from 'next/link'
import { useActiveSection } from '@/context/ActiveSectionProvider'

const Header = () => {

  const { activeSection, setActiveSection } = useActiveSection()

  return (
    <header className='relative z-[900]'>
      <motion.div
        className='fixed left-1/2 top-0 h-[3.5rem] w-full -translate-x-1/2 bg-white shadow-lg dark:bg-slate-900 sm:top-6 sm:w-[36rem] sm:rounded-full'
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className='fixed left-1/2 top-1 flex h-[3rem] -translate-x-1/2 sm:top-6 sm:h-[3.5rem] sm:w-[36rem] sm:rounded-full'>
        <ul className='flex h-full w-full items-center justify-between sm:px-3'>
          {sections.map((section, index) => (
            <motion.li
              key={index}
              className='relative flex h-3/5 items-center justify-center'
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 * index }}
            >
              <Link
                href={section.hash}
                className={`text-navbar w-full p-4 ${activeSection === section.name ? "text_dark400_light900" : "text_dark500_light600 hover:text-slate-900 hover:dark:text-slate-400"}`}
                onClick={() => {
                  setActiveSection(section.name)
                }}
              >
                {section.name}
                {activeSection === section.name && (
                  <motion.span
                    className='absolute inset-0 -z-10 rounded-full bg-slate-100 dark:bg-slate-700'
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
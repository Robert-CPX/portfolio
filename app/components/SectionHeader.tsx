import React from 'react'

const SectionHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className='text_dark200_light900 mb-8 text-center text-3xl font-medium capitalize'>
      {children}
    </h2>
  )
}

export default SectionHeader

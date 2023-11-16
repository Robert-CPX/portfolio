import React from 'react'

const Skill = ({ name }: { name: string }) => {
  return (
    <div className='text_dark200_light900 flex rounded-lg border bg-white p-4 dark:border-none dark:bg-slate-800'>
      {name}
    </div>
  )
}

export default Skill

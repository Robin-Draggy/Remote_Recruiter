import React from 'react'

export const SectionBtn = ({ title }) => {
  return (
    <button aria-label='Section button' className='rounded-full bg-[#C2EEFF] primary-text letter text-xs px-4 py-2 cursor-pointer'>
        {title}
    </button>
  )
}

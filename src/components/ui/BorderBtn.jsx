import React from 'react'

export const BorderBtn = ({ title }) => {
  return (
    <button aria-label='border button' className='px-4 py-2 rounded-xl bg-btn'>
        {title}
    </button>
  )
}

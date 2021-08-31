import React from 'react'
import { IconLink } from './IconLink'

export const Footer = () => {
  return (
    <footer className='absolute bottom-0 text-center w-full mb-4 space-y-2'>
      <div className='space-x-6'>
        <IconLink to='#' iconName='fab fa-instagram' />
        <IconLink to='#' iconName='fab fa-github' />
        <IconLink to='#' iconName='fas fa-envelope' />
      </div>

      <div>
        <small className='font-semibold text-gray-800'>Developed by Alfred with ❤️ and lots of ☕</small>
      </div>
    </footer>
  )
}

import React from 'react'

export const Spinner = () => {
  return (
    <div className='m-auto space-y-5'>
      <div className='m-auto border-8 border-yellow-300 w-12 h-12 border-r-0 border-t-0 rounded-full animate-spin' />
      <div className='text-center font-bold text-3xl text-white'>Loading</div>
    </div>
  )
}

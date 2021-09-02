import React from 'react'

export const QuestionWrapper = ({ question }) => {
  return (
    <div className='p-6 bg-yellow-300 shadow-lg w-screen border-t-8 border-b-8 border-white sm:rounded-xl'>
      <p className='text-center text-lg font-semibold sm:text-2xl '>{ question }</p>
    </div>
  )
}

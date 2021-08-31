import React from 'react'

export const Button = ({ text, handler }) => {
  return (
    <button 
      className='bg-yellow-300 w-9/12 py-3 rounded-lg shadow-lg font-bold text-lg text-gray-800 hover:bg-yellow-500 md:w-7/12'
      onClick={ handler }
    >
      { text }
    </button>
  )
}

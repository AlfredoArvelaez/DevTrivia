import React from 'react'

export const Select = ({ category, register, children }) => {
  return (
    <select {...register(category)} className='bg-yellow-300 px-3 py-3 rounded-lg appearance-none cursor-pointer text-lg shadow-lg focus:outline-none focus-within:ring-1 text-gray-800 font-bold hover:bg-yellow-400'>
      { children }
    </select>
  )
}

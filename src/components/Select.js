import React from 'react'

export const Select = ({ category, register, defaultValue, children }) => {
  return (
    <select {...register(category)} 
      defaultValue={ defaultValue } 
      className='bg-yellow-300 px-3 py-3 rounded-lg appearance-none cursor-pointer text-lg shadow-lg focus:outline-none text-gray-800 font-bold hover:bg-yellow-500'>
      { children }
    </select>
  )
}

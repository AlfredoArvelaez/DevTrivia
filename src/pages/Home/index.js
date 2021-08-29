import React from 'react'
import { NavButtons } from './NavButtons'

export const Home = () => {
  return (
    <div className='flex h-screen bg-gradient-to-br from-blue-600 to-blue-300'>
      <nav className='flex flex-col space-y-6 m-auto'>
        <div>
          <h1 className='text-7xl font-nunito font-extrabold text-white md:text-9xl'><span className='text-yellow-300'>Dev</span>Trivia</h1>
        </div>

        <NavButtons />
      </nav>
    </div>
  )
}

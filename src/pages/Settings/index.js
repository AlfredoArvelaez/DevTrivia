import React from 'react'
import { useForm } from 'react-hook-form'

export const Settings = () => {

  const { register, handleSubmit } = useForm()
  const showData = (data) => {
    console.log(data)
  }

  return (
    <div className='flex h-screen bg-gradient-to-br from-blue-600 to-blue-300'>
      <div className='m-auto space-y-6'>
        <header>
          <h1 className='text-7xl font-nunito font-extrabold text-white md:text-9xl'>Settings</h1>
        </header>

        <form
          className='flex flex-col'
          onSubmit={ handleSubmit(showData) }
        >

          <label>
            Username
            <input {...register('username')} />
          </label>
          <select {...register('category')}>
            <option value='9'>General Knowledge</option>
            <option value='22'>Geography</option>
            <option value='28'>Vehicles</option>
            <option value='17'>Science & Nature</option>
          </select>

          <select {...register('difficulty')}> 
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option>
          </select>

          <button>Show data</button>
        </form>
      </div>
    </div>
  )
}

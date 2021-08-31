import React, { useContext } from 'react'
import { AppSettings } from '../../context/AppSettings'
import { useSettings } from '../../context/useSettings'
import { useForm } from 'react-hook-form'
import { category, difficulty } from './selectOptions'
import { ErrorMessage } from '@hookform/error-message'
import { Select, Button, LabelText } from '../../components'

export const Settings = () => {

  const { state } = useContext(AppSettings)
  const { register, formState: { errors }, handleSubmit } = useForm()
  const { setSettigns } = useSettings()
  const handleData = (data) => { 
    setSettigns(data)
    localStorage.setItem('settings', JSON.stringify(data))
  }

    return (
      <div className='flex h-screen bg-gradient-to-br from-blue-600 to-blue-300'>
        <div className='flex flex-col items-center m-auto space-y-6'>
          <header>
            <h1 className='text-7xl font-nunito font-extrabold text-center text-yellow-300'>Settings</h1>
          </header>

          <form
            className='relative flex flex-col space-y-4 md:space-y-6 w-9/12'
            onSubmit={ handleSubmit(handleData) }
          >

            <input 
              {...register('username', { required: true, maxLength: 15 })} 
              defaultValue={ state.username }
              autoComplete='off'
              placeholder='Username'
              className='bg-transparent outline-none text-center text-2xl sm:text-3xl border-b-4 border-yellow-300 text-gray-800 placeholder-gray-300 font-bold focus:border-yellow-500'
            />
            
            <label className='flex flex-col space-y-1'>
              <LabelText text='Category' />

              <Select category='category' defaultValue={ state.category } register={ register }>
                { category.map ( cat => <option key={cat[1]} value={cat[1]}>{cat[0]}</option>)}
              </Select>
            </label>

            <label className='flex flex-col space-y-1'>
              <LabelText text='Difficulty' />

              <Select category='difficulty' defaultValue={ state.difficulty } register={ register }>
                { difficulty.map( dif => <option key={dif[1]} value={dif[1]}>{dif[0]}</option> )}
              </Select>
            </label>

            <div className='flex justify-center'>
              <Button text='Save' />
            </div>

          </form>

          <ErrorMessage 
            name='username'
            errors={ errors }
            render={ () => <span className='mt-4 font-bold text-lg text-red-500'>Invalid Username</span> }
          />
        </div>
      </div>
  )
}

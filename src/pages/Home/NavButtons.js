import React from 'react'
import { useHistory } from 'react-router'
import { Button } from '../../components/Button'

export const NavButtons = () => {

  const history = useHistory()
  const goToPlay = () => history.push('/play')
  const goToSettings = () => history.push('/settings')
  const goToLeaderboard = () => history.push('/leaderboard')

  return (
    <div className='flex flex-col items-center justify-center space-y-3'>
      <Button text='Play' handler={ () => goToPlay() } />
      <Button text='Settings' handler={ () =>  goToSettings() } />
      <Button text='Leaderboard' handler={ () =>  goToLeaderboard() } />
    </div>
  )
}

import React, { useReducer } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AppSettings } from './context/AppSettings'
import { settingsReducer } from './context/settingsReducer'
import { Home, Play, Settings, Leaderboard, NotFound } from './pages'
import { Footer } from './components/Footer'

const initData = () => {
  const storedData = JSON.parse(localStorage.getItem('settings')) || { username: null, category: null, difficulty: null}

  return storedData
}

export const App = () => {

const [state, dispatch] = useReducer(settingsReducer, {}, initData)

  return (
    <BrowserRouter>
      <AppSettings.Provider value={{state, dispatch}}>
        <div>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/play' component={ Play } />
            <Route exact path='/settings' component={ Settings } />
            <Route exact path='/leaderboard' component={ Leaderboard } />
            <Route path='/' component={ NotFound } />
          </Switch>

          <Footer />
        </div>
      </AppSettings.Provider>
    </BrowserRouter>
  )
}

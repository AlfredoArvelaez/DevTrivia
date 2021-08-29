import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, Play, Settings, Leaderboard, NotFound } from './pages'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

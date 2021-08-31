import { settings } from './types'

export const settingsReducer = (state, action) => {
  switch (action.type) {
    case settings.set:
      return action.payload
  
    case settings.reset:
      return state
      
    default:
      return state
  }

}
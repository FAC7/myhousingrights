import { combineReducers } from 'redux'
import { homeless, locationData, vulnerability, intention } from './reducer_changeAnswers.js'

const rootReducer = combineReducers({
  homeless,
  locationData,
  vulnerability,
  intention
})

export default rootReducer

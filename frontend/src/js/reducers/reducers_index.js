import { combineReducers } from 'redux'
import { homeless, locationData, vulnerability } from './reducer_changeAnswers.js'

const rootReducer = combineReducers({
  homeless,
  locationData,
  vulnerability,
})

export default rootReducer

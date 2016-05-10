import { combineReducers } from 'redux'
import files from './reducer_addFile.js'
import homeless from './reducer_homeless.js'

const rootReducer = combineReducers({
  files,
  homeless
})

export default rootReducer

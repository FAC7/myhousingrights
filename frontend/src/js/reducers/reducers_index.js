import { combineReducers } from 'redux'
import files from './reducer_addFile.js'

const rootReducer = combineReducers({
  files
})

export default rootReducer

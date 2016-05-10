import { ADD_FILE } from '../actions/actionTypes.js'

export default (state = '', action) => {
  // const newFile = {}
  // newFile[action.name] = action.file
  switch (action.type) {
  case ADD_FILE:
    return {
      name: action.fileName,
      data: action.file[0]
    }
  default:
    return state
  }
}

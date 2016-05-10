import { ADD_HOMELESS } from '../actions/actionTypes.js'

export default (state = {}, action) => {
  // const homeless = state.homeless || [
  //   {"answer": 0, "notes": "", "evidence": ""},
  //   {"answer": 1, "notes": "blah", "evidence": ""},
  //   {"answer": 0, "notes": "", "evidence": ""},
  //   {"answer": 1, "notes": "blah", "evidence": ""}
  // ]
  // console.log(action)
  // homeless[action.index][action.changed] = action.data
  switch (action.type) {
  case ADD_HOMELESS:
    return action.data
  default:
    return state
  }
}

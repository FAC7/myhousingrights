import * as types from '../actions/actionTypes.js'

const defaultState = {
  q1: {
    answer: '',
    evidence: '',
    notes: '',
  },
  q2: {
    answer: '',
    evidence: '',
    notes: ''
  },
  q3: {
    answer: '',
    evidence: '',
    notes: '',
  },
  q4: {
    answer: '',
    evidence: '',
    notes: ''
  }
}

export const homeless = (state = defaultState, action) => {
  switch (action.type) {
  case types.CHANGE_HOMELESS:
    return {
      ...state,
      [action.question]: {
        ...state[action.question],
        [action.toChange]: action.data
      }
    }
  default:
    return state
  }
}

export const locationData = (state = defaultState, action) => {
  switch (action.type) {
  case types.CHANGE_LOCATION:
    return {
      ...state,
      [action.question]: {
        ...state[action.question],
        [action.toChange]: action.data
      }
    }
  default:
    return state
  }
}

export const vulnerability = (state = defaultState, action) => {
  switch (action.type) {
  case types.CHANGE_VULNERABILITY:
    return {
      ...state,
      [action.question]: {
        ...state[action.question],
        [action.toChange]: action.data
      }
    }
  default:
    return state
  }
}
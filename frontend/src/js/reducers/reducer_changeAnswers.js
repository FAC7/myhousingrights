import * as types from '../actions/actionTypes.js'

const defaultState = {
  'Question 1': {
    answer: 'yes',
    evidence: 'http://indy100.independent.co.uk/image/20912-m9o0ky.png',
    notes: 'I slept rough on the street for several weeks finding alcoves or other sheltered areas.',
  },
  'Question 2': {
    answer: '',
    evidence: '',
    notes: ''
  },
  'Question 3': {
    answer: '',
    evidence: '',
    notes: '',
  },
  'Question 4': {
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

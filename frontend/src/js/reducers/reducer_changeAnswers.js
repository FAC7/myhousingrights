import * as types from '../actions/actionTypes.js'

const defaultHomelessState = {
  'Question 1': {
    answer: 'no',
    evidence: '',
    notes: 'I slept rough on the street for several weeks finding alcoves or other sheltered areas.',
  },
  'Question 2': {
    answer: 'yes',
    evidence: '',
    notes: ''
  },
  'Question 3': {
    answer: 'no',
    evidence: 'http://indy100.independent.co.uk/image/20912-m9o0ky.png',
    notes: 'I can\'t see any prospects of finding anything within this time period.',
  },
  'Question 4': {
    answer: 'yes',
    evidence: '',
    notes: 'I can bring it with me.'
  }
}

export const homeless = (state = defaultHomelessState, action) => {
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

const defaultLocationState = {
  'Question 1': {
    answer: 'yes',
    evidence: 'http://indy100.independent.co.uk/image/20912-m9o0ky.png',
    notes: 'I can bring my proof of address with me.',
  }
}

export const locationData = (state = defaultLocationState, action) => {
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

const defaultPriorityState = {
  'Question 1': {
    answer: 'yes',
    evidence: '',
    notes: ''
  },
  'Question 2': {
    answer: 'yes',
    evidence: '',
    notes: ''
  },
  'Question 3': {
    answer: 'yes',
    evidence: '',
    notes: ''
  },
  'Question 4': {
    answer: 'yes',
    evidence: 'http://www.phillyseaport.org/web_exhibits/mini_exhibits/tipton_family_papers/images/letter_1865-03-14-largest.jpg',
    notes: 'I have severe anxiety and depression.'
  }
}

export const vulnerability = (state = defaultPriorityState, action) => {
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

const defaultIntentionState = {
  'Question 1': {
    answer: 'yes',
    evidence: '',
    notes: ''
  },
  'Question 2': {
    answer: 'yes',
    evidence: '',
    notes: ''
  },
  'Question 3': {
    answer: 'yes',
    notes: '',
    evidence: 'http://indy100.independent.co.uk/image/20912-m9o0ky.png'
  }
}

export const intention = (state = defaultIntentionState, action) => {
  switch (action.type) {
  case types.CHANGE_INTENTION:
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

import * as types from './actionTypes'

export const changeHomeless = (toChange, question, data) => ({
  type: types.ADD_FILE,
  toChange,
  question,
  data,
})


const state = {
  homeless: {
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
  },
  location: {
    first: {
      answer: '',
      evidence: '',
      notes: '',
    },
    second: {
      answer: '',
      evidence: '',
      notes: ''
    },
    third: {
      answer: '',
      evidence: '',
      notes: '',
    },
    fourth: {
      answer: '',
      evidence: '',
      notes: ''
    }
  }
}

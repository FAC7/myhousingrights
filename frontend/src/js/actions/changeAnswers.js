import * as types from './actionTypes'

export const changeHomeless = (question, toChange, data) => ({
  type: types.CHANGE_HOMELESS,
  question,
  toChange,
  data,
})

export const changeLocation = (question, toChange, data) => ({
  type: types.CHANGE_LOCATION,
  question,
  toChange,
  data,
})

export const changeVulnerability = (question, toChange, data) => ({
  type: types.CHANGE_VULNERABILITY,
  question,
  toChange,
  data,
})



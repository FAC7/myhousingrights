import * as types from './actionTypes'

export const addHomeless = (data, changed, index) => ({
  changed,
  index,
  data,
  type: types.ADD_HOMELESS
})

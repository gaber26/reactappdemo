import { inputValueChangeA, addBtnA, delBtnA, getListA } from './actions'
import * as Types from './actionTypes'
const defaultState = {
  inputValue: '请输入',
  rows: []
}
export default (state = defaultState, action) => {
  // reducer只能接受state，不能改变state
  if(action.type === Types.INPUT_VALUE_CHANGE) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === Types.ADD_BTN) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.rows.push({
      title: newState.inputValue
    })
    newState.inputValue = ''
    return newState
  }

  if(action.type === Types.DEL_BTN) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.rows.splice(action.value, 1)
    return newState
  }

  if(action.type === Types.GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.rows = action.rows
    return newState
  }

  return state
}
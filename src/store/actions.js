import * as Types from './actionTypes'

export const inputValueChangeA = (params) => {
  return {
    type: Types.INPUT_VALUE_CHANGE,
    ...params
  }
};

export const addBtnA = (params) => {
  return {
    type: Types.ADD_BTN,
    ...params
  }
};

export const delBtnA = (params) => {
  return {
    type: Types.DEL_BTN,
    ...params
  }
};

export const getListA = (params) => {
  return {
    type: Types.GET_LIST,
    ...params
  }
};
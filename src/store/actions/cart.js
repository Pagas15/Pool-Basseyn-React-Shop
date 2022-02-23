import * as actionName from '../actionTypes'

export const setAddToCart = (obj) => ({
  type: actionName.SET_ADD_TO_CART,
  payload: obj
})

export const setAddOneCart = (id) => ({
  type: actionName.SET_ADD_ONE_CART,
  payload: id
})

export const setRemoveOneCart = (id) => ({
  type: actionName.SET_REMOVE_ONE_CART,
  payload: id
})

export const setRemoveFromCart = (id) => ({
  type: actionName.SET_REMOVE_FROM_CART,
  payload: id
})
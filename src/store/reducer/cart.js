import * as actionName from '../actionTypes'

const initialState = {
  cart: []
}

const Cart = (state = initialState, action) => {
  switch (action.type) {
    case actionName.SET_CART:
      return {
        ...state,
        cart: action.payload
      }
    case actionName.SET_ADD_CART:
      return {
        ...state,
        cart: cart.includes(action.payload) ? cart : [...cart, action.payload]
      }
    case actionName.SET_REMOVE_CART:
      return {
        ...state,
        cart: [...cart].filters(item => item === action.payload)
      }
      
    default:
      return state
  }
}

export default Cart
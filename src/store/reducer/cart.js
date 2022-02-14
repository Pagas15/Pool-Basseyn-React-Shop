import * as actionName from '../actionTypes'

const initialState = {
  cart: {}
}

const Cart = (state = initialState, action) => {
  switch (action.type) {
    case actionName.SET_CART:
      return {
        ...state,
        cart: action.payload
      }
    case actionName.SET_ADD_TO_CART:
      return {
        ...state,
        cart: state.cart[action.payload.id] ? state.cart : {
          ...state.cart,
          [action.payload.id]: action.payload
        }
      }
    case actionName.SET_REMOVE_TO_CART:
      return {
        ...state,
        cart: [...state.cart].filters(item => item !== action.payload)
      }
      
    default:
      return state
  }
}

export default Cart
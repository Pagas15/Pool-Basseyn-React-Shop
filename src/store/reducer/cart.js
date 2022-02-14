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
    case actionName.SET_ADD_ONE_CART:
      return {
        ...state,
        cart: {
          ...state.cart, 
          [action.payload] : {
            ...state.cart[action.payload],
            count: state.cart[action.payload].count + 1
          }
        }
      }
    case actionName.SET_REMOVE_ONE_CART:
      const clearItem = (id) => {
        return Object.keys(state.cart).reduce((object, key) => {
          if (key != id) {
            object[key] = state.cart[key]
          }
          return object
          }, {})
      }
      const cartItem = () => {
        return {
          ...state.cart, 
          [action.payload] : {
            ...state.cart[action.payload],
            count: state.cart[action.payload].count - 1
          } 
        }
      }
      console.log(cartItem());
      console.log(clearItem(action.payload));
      return {
        ...state,
        cart: !(state.cart[action.payload].count === 1) ? cartItem() : clearItem(action.payload)
      }
    case actionName.SET_REMOVE_TO_CART: 
      return state
    default:
      return state
  }
}

export default Cart
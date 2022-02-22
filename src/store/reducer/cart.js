import { getArrSum, getTotalSum } from '../../customScripts';
import * as actionName from '../actionTypes';

const initialState = {
  cart: {},
  totalCount: 0,
  totalPrice: 0,
};

const getTotalPrice = (arr) => getTotalSum(Object.values(arr).map(item => item['price'] * item['count']));

const Cart = (state = initialState, action) => {
  switch (action.type) {
    case actionName.SET_CART: {
      const cartArr = action.payload;
      return {
        ...state,
        cart: cartArr,
        totalCount: getArrSum(cartArr, 'count'),
        totalPrice: getTotalPrice(cartArr, 'price')
      };
    }
    case actionName.SET_ADD_TO_CART: {
      const cartArr = state.cart[action.payload.id]
      ? state.cart : {
          ...state.cart,
          [action.payload.id]: action.payload,
        }
      return {
        ...state,
        cart: cartArr,
        totalCount: getArrSum(cartArr, 'count'),
        totalPrice: getTotalPrice(cartArr, 'price')
      };
    }
    case actionName.SET_REMOVE_TO_CART: {
      const cartArr = [...state.cart].filters((item) => item !== action.payload);
      return {
        ...state,
        cart: cartArr,
        totalCount: getArrSum(cartArr, 'count'),
        totalPrice: getTotalPrice(cartArr, 'price')
      };
    }
    case actionName.SET_ADD_ONE_CART: {
      const cartArr = {
        ...state.cart,
        [action.payload]: {
          ...state.cart[action.payload],
          count: state.cart[action.payload].count + 1,
        },
      }
      return {
        ...state,
        cart: cartArr,
        totalCount: getArrSum(cartArr, 'count'),
        totalPrice: getTotalPrice(cartArr, 'price')
      };
    }
    case actionName.SET_REMOVE_ONE_CART: {
      const clearItem = (id) => {
        return Object.keys(state.cart).reduce((object, key) => {
          if (key != id) {
            object[key] = state.cart[key];
          }
          return object;
        }, {});
      };
      const cartItem = () => {
        return {
          ...state.cart,
          [action.payload]: {
            ...state.cart[action.payload],
            count: state.cart[action.payload].count - 1,
          },
        };
      };
      const cartArr = () => !(state.cart[action.payload].count === 1) ? cartItem() : clearItem(action.payload);
      return {
        ...state,
        cart: cartArr,
        totalCount: getArrSum(cartArr, 'count'),
        totalPrice: getTotalPrice(cartArr, 'price')
      };
    }
    case actionName.SET_REMOVE_TO_CART:
      return state;
    default:
      return state;
  }
};

export default Cart;

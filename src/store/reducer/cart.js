import { getArrSum, getTotalSum } from '../../customScripts';
import * as actionName from '../actionTypes';

// const initialState = {
//   cart: {},
//   totalCount: 0,
//   totalPrice: 0,
// };
const initialState = {
  cart: {
    '1': {
      id: 1,
      img: './assets/img/content/card/3.jpg',
      title: 'Электроподогреватель для воды в бассейне до 4000л, 0.99 кВт, 150х53см',
      price: 10050,
      count: 1
    },
    '3': {
      id: 3,
      img: './assets/img/content/card/1.jpg',
      title: 'Песочный фильтр-насос 3028л/ч, резервуар для песка 8.5кг, фракция 0.45-0.85мм',
      price: 10050,
      count: 1
    }
  },
  totalCount: 2,
  totalPrice: 20100
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
      const cartArr = (!(state.cart[action.payload].count === 1) ? cartItem() : clearItem(action.payload));
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

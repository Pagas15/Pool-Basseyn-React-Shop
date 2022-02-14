import { combineReducers } from 'redux';

import cart from './cart';
import store from './store';
import filters from './filters';
import favorites from './favorites';

const rootReducer = combineReducers({
  store,
  filters,
  favorites,
  cart
})

export default rootReducer;
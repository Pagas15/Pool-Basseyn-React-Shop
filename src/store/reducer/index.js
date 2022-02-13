import { combineReducers } from 'redux';

import store from './store';
import filters from './filters';
import favorites from './favorites';

const rootReducer = combineReducers({
  store,
  filters,
  favorites
})

export default rootReducer;
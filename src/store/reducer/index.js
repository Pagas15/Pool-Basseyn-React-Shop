import { combineReducers } from 'redux';

import store from './store';
import filters from './filters';

const rootReducer = combineReducers({
  store,
  filters
})

export default rootReducer;
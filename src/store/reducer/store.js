import * as actionName from "../actionTypes";

const initialState = {
  items: [],
  isLoaded: false,
}

export default function store(state = initialState, action) {
  switch (action.type) {
    case actionName.SET_STORE: 
      return {
        ...state,
        items: action.payload
      }
    case actionName.SET_LOADED: 
      return {
        ...state,
        isLoaded: action.payload
      }
    default:
      return state;
  }
}
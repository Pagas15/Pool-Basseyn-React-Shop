import * as actionName from '../actionTypes'

const initialState = {
  favorites: [],
  isLoaded: false
}

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case actionName.SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload
      }
    case actionName.SET_ADD_FAVORITES:
      return {
        ...state,
        favorites: favorites.includes(action.payload) ? favorites : [...favorites, action.payload]
      }
    case actionName.SET_REMOVE_FAVORITES:
      return {
        ...state,
        favorites: [...favorites].filters(item => item === action.payload)
      }
      
    default:
      return state
  }
}

export default favorites
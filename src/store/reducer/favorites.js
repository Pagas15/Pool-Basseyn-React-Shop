import * as actionName from '../actionTypes'

const initialState = {
  favorites: [],
  totalCount: 0,
  isLoaded: false
}

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case actionName.SET_FAVORITES: {
      const favArr = action.payload;
      return {
        ...state,
        favorites: favArr,
        totalCount: favArr.length
      }
    }
    case actionName.SET_ADD_FAVORITES: {
      const favArr = state.favorites.includes(action.payload) ? state.favorites : [...state.favorites, action.payload];
      return {
        ...state,
        favorites: favArr,
        totalCount: favArr.length
      }
    }
    case actionName.SET_REMOVE_FAVORITES: {
      const favArr = [...state.favorites].filter(item => item !== action.payload)
      return {
        ...state,
        favorites: favArr,
        totalCount: favArr.length
      }
    }
    default:
      return state
  }
}

export default favorites
import * as actionName from '../actionTypes'


export const setFavorites = (favoriteList) => ({
  type: actionName.SET_FAVORITES,
  payload: favoriteList
})


export const fetchFavorites = () => (dispatch) => {
  fetch("http://localhost:3000/favorites").then(list => list.json()).then(list => dispatch(setFavorites(list)))
}


export const setAddFavorites = (favorite) => ({
  type: actionName.SET_ADD_FAVORITES,
  payload: favorite
})

export const setRemoveFavorites = (favorite) => ({
  type: actionName.SET_REMOVE_FAVORITES,
  payload: favorite
})
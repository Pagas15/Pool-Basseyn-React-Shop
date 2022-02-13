import * as actionName from "../actionTypes";

export const setLoaded = payload => ({
  type: actionName.SET_LOADED,
  payload,
})

export const ferchStore = (actCat) => (dispatch) => {
  dispatch({
    type: actionName.SET_LOADED,
    payload: false,
  })

  fetch(`http://localhost:3000/listItems?${actCat && ('promotion_like=' + actCat)}`)
    .then(item => item.json())
    .then(item => dispatch(setStore(item)))
} 

export const setStore = (items) => ({
  type: actionName.SET_STORE,
  payload: items
})
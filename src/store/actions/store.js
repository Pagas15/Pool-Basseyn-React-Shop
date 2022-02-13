import * as actionName from "../actionTypes";

export const setLoaded = payload => ({
  type: actionName.SET_LOADED,
  payload,
})

export const ferchStore = () => (dispatch) => {
  dispatch({
    type: actionName.SET_LOADED,
    payload: false,
  })

  fetch("http://localhost:3000/listItems")
    .then(item => item.json())
    .then(item => dispatch(setStore(item)))
} 

export const setStore = (items) => ({
  type: actionName.SET_STORE,
  payload: items
})
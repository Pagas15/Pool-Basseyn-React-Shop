import * as actionName from "../actionTypes";

export const setCategory = (category) => ({
  type: actionName.SET_CATEGORY,
  payload: category,
})
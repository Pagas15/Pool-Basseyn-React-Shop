import * as actionName from "../actionTypes";

const initialState = {
  category: null,
  categotyObject: [
    ["hit","Хит"],
    ["promotion","Акция"],
    ["novelty","Новинка"],
    ["2021","Модель 2021 года"]
  ]
}

const filters = (state = initialState, action) => {
  switch (action.type) {
    case actionName.SET_CATEGORY:
      return {
        ...state,
        category: action.payload
      }
    case actionName.SET_CATEGORY_LIST:
      return {
        category: action.payload[0][0],
        categotyObject: action.payload
      }
    default:
      return state
  }
}

export default filters
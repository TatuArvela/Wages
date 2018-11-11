import { SET_WAGE_DATA } from "../actions/types";

const initialState = {
  date: null,
  rows: []
}

const wageData = (state = initialState, action) => {
  switch (action.type) {
    case SET_WAGE_DATA:
      return {
        date: action.payload.date,
        rows: action.payload.rows ? action.payload.rows : []
      }
    default:
      return state
  }
}

export default wageData

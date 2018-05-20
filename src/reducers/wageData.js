import { FETCH_WAGE_DATA } from "../actions/types";

const wageData = (state = [], action) => {
  switch (action.type) {
    case FETCH_WAGE_DATA:
      return action.payload
    default:
      return state
  }
}

export default wageData

import { CHANGE_MONTH, CHANGE_YEAR } from "../actions/types";

const initialState = new Date();

const date = (state = initialState, action) => {
  let newDate = new Date(state);
  switch (action.type) {
    case CHANGE_MONTH:
      newDate.setMonth(action.payload)
      return newDate
    case CHANGE_YEAR:
      newDate.setYear(action.payload)
      return newDate
    default:
      return state
  }
}

export default date

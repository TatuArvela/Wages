import { FETCH_TIME_DATA } from "../actions/types";

const timeData = (state = [], action) => {
  switch (action.type) {
    case FETCH_TIME_DATA:
      return action.payload
    default:
      return state
  }
}

export default timeData

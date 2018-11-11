import { TOGGLE_ACTIVE_TAB } from "../actions/types";

const initialState = {
  activeTab: '1'
}

const tabs = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload
      }
    default:
      return state
  }
}

export default tabs
